"use client";

import dynamic from 'next/dynamic';
import React from 'react';

// Dynamically import the map component with SSR disabled
const MapSelectionInner = dynamic(
  () => import('./MapSelectionInner'),
  { ssr: false }
);

interface MapSelectionModalProps {
    onClose: () => void;
    onSelect: (name: string, address: string) => void;
    initialLat?: number;
    initialLon?: number;
}

export default function MapSelectionModal(props: MapSelectionModalProps) {
    return <MapSelectionInner {...props} />;
}
