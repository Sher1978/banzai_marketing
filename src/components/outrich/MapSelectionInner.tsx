"use client";

import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useTranslation } from 'react-i18next';
import { X, Check } from 'lucide-react';

// Fix for default Leaflet marker icons in React
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface MapSelectionInnerProps {
    onClose: () => void;
    onSelect: (name: string, address: string) => void;
    initialLat?: number;
    initialLon?: number;
}

const LocationMarker = ({ position, setPosition }: { position: L.LatLng | null, setPosition: (p: L.LatLng) => void }) => {
    useMapEvents({
        click(e) {
            setPosition(e.latlng);
        },
    });

    return position === null ? null : (
        <Marker position={position}></Marker>
    );
};

export default function MapSelectionInner({ onClose, onSelect, initialLat, initialLon }: MapSelectionInnerProps) {
    const { i18n } = useTranslation();
    const isRu = i18n.language === 'ru';
    
    // Default to initial coords if provided, otherwise Dubai coords
    const defaultCenter = { lat: initialLat || 25.2048, lng: initialLon || 55.2708 }; 
    const [position, setPosition] = useState<L.LatLng | null>(null);
    const [isConfirming, setIsConfirming] = useState(false);
    const [mapRef, setMapRef] = useState<L.Map | null>(null);

    // Request precise location only when map opens
    useEffect(() => {
        if ("geolocation" in navigator && mapRef) {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    const newCenter = { lat: pos.coords.latitude, lng: pos.coords.longitude };
                    mapRef.flyTo(newCenter, 15);
                },
                (err) => console.log("Geolocation denied or error", err)
            );
        }
    }, [mapRef]);

    const handleConfirm = async () => {
        if (!position) return;
        setIsConfirming(true);
        
        try {
            const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.lat}&lon=${position.lng}&zoom=18&addressdetails=1`);
            const data = await res.json();
            
            const address = data.display_name || (isRu ? "Выбранная локация" : "Selected location");
            const name = data.name || (data.address && (data.address.amenity || data.address.shop || data.address.building || data.address.road)) || (isRu ? "Локация на карте" : "Map location");
            
            onSelect(name, address);
        } catch (error) {
            console.error("Reverse geocoding error:", error);
            onSelect(isRu ? "Локация на карте" : "Map location", isRu ? "Неизвестный адрес" : "Unknown address");
        } finally {
            setIsConfirming(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm">
            <div className="bg-[#12121a] border border-[#ffe600]/30 rounded-2xl md:rounded-3xl w-full max-w-3xl overflow-hidden shadow-[0_0_50px_rgba(255,230,0,0.15)] flex flex-col h-[75vh] max-h-[700px] animate-in fade-in zoom-in-95 duration-300">
                {/* Header */}
                <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/10 bg-[#0c0c10]">
                    <div>
                        <h3 className="text-white font-bold text-base sm:text-lg uppercase">
                            {isRu ? 'Укажите заведение на карте' : 'Select business on map'}
                        </h3>
                        <p className="text-white/50 text-[10px] sm:text-xs">
                            {isRu ? 'Кликните в любую точку, чтобы поставить маркер' : 'Click anywhere to place a marker'}
                        </p>
                    </div>
                    <button onClick={onClose} className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-colors">
                        <X size={20} />
                    </button>
                </div>
                
                {/* Map Area */}
                <div className="flex-1 relative bg-white/5">
                    <MapContainer 
                        center={defaultCenter} 
                        zoom={13} 
                        style={{ height: '100%', width: '100%', zIndex: 0 }}
                        ref={setMapRef}
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <LocationMarker position={position} setPosition={setPosition} />
                    </MapContainer>
                </div>

                {/* Footer Controls */}
                <div className="p-4 sm:p-5 border-t border-white/10 bg-[#0c0c10] flex flex-col sm:flex-row gap-3 items-center justify-between">
                    <div className="text-xs text-white/70 font-mono w-full sm:w-auto text-center sm:text-left">
                        {position ? (
                            <span className="text-[#ffe600]">
                                {position.lat.toFixed(4)}, {position.lng.toFixed(4)}
                            </span>
                        ) : (
                            isRu ? 'Маркер не установлен' : 'No marker placed'
                        )}
                    </div>
                    <button
                        onClick={handleConfirm}
                        disabled={!position || isConfirming}
                        className="w-full sm:w-auto bg-[#ffe600] hover:bg-[#ffff00] disabled:bg-white/10 disabled:text-white/30 text-black font-bold text-sm px-8 py-3.5 rounded-xl uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                    >
                        <span>{isConfirming ? (isRu ? 'Определение...' : 'Resolving...') : (isRu ? 'Выбрать эту точку' : 'Select this point')}</span>
                        {!isConfirming && <Check size={16} className="stroke-[3]" />}
                    </button>
                </div>
            </div>
        </div>
    );
}
