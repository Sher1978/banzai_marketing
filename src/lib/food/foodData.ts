import { db } from "@/components/firebase";
import { 
  collection, 
  doc, 
  getDoc, 
  getDocs, 
  setDoc, 
  addDoc, 
  query, 
  where, 
  orderBy, 
  serverTimestamp 
} from "firebase/firestore";

export interface VenueBranding {
  logoUrl: string;
  coverUrl: string;
  primaryColor: string; // e.g. '#00FF66' or '#FF385C'
  backgroundColor: string; // e.g. '#121212' or '#0F172A'
  fontFamily: 'Inter' | 'Montserrat' | 'Outfit' | 'Playfair Display' | 'Roboto';
  title: string;
  description: string;
  address: string;
  phone: string;
  minOrderAmount: number;
  deliveryFee: number;
  telegramChatId?: string;
  notifyEmail?: string;
  websiteUrl?: string;
}

export interface RevoSettings {
  isEnabled: boolean;
  maxDiscountPercent: number; // Tier 1 (e.g. 20%)
  maxDiscountHours: number; // Tier 1 Duration (e.g. 48 hours)
  mediumDiscountPercent: number; // Tier 2 (e.g. 10%)
  mediumDiscountHours: number; // Tier 2 Duration (e.g. 24 hours)
  minDiscountPercent: number; // Tier 3 Baseline (e.g. 5% - no countdown)
}

export interface VenueData {
  id: string;
  slug: string;
  branding: VenueBranding;
  revoSettings: RevoSettings;
  categories: MenuCategory[];
  items: MenuItem[];
}


export interface MenuItemOption {
  name: string;
  extraPrice: number;
}

export interface MenuItemModifierGroup {
  id: string;
  title: string;
  required: boolean;
  options: MenuItemOption[];
}

export interface MenuItem {
  id: string;
  venueId: string;
  categoryId: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  isBundle?: boolean;
  isHit?: boolean;
  modifiers?: MenuItemModifierGroup[];
}

export interface MenuCategory {
  id: string;
  venueId: string;
  name: string;
  sortOrder: number;
}

export interface CartItemOption {
  groupTitle: string;
  optionName: string;
  extraPrice: number;
}

export interface CartItem {
  id: string; // unique cart item id (combines itemId + chosen options)
  menuItemId: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
  selectedOptions: CartItemOption[];
  unitPriceWithOptions: number;
  totalPrice: number;
}

export interface Order {
  id?: string;
  venueId: string;
  customerName: string;
  customerPhone: string;
  deliveryAddress: string;
  comment?: string;
  items: CartItem[];
  subtotal: number;
  revoDiscountPercent: number;
  revoDiscountAmount: number;
  deliveryFee: number;
  finalTotal: number;
  status: 'new' | 'accepted' | 'delivering' | 'completed' | 'cancelled';
  createdAt?: any;
}

// 🍔 DEFAULT DEMO VENUE DATA
export const DEFAULT_DEMO_VENUE: VenueData = {
  id: "demo-burger",
  slug: "demo-burger",
  branding: {
    logoUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&auto=format&fit=crop&q=80",
    coverUrl: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=1200&auto=format&fit=crop&q=80",
    primaryColor: "#00FF66",
    backgroundColor: "#121212",
    fontFamily: "Outfit",
    title: "Banzai Revo Burgers & Grill",
    description: "Сочные авторские бургеры, стейки на углях и крафтовые сеты. Доставка от 30 минут!",
    address: "ул. Центральная, 42",
    phone: "+7 (999) 000-11-22",
    minOrderAmount: 800,
    deliveryFee: 190,
    telegramChatId: "",
    notifyEmail: "orders@banzai.com"
  },
  revoSettings: {
    isEnabled: true,
    maxDiscountPercent: 20,
    maxDiscountHours: 48,
    mediumDiscountPercent: 10,
    mediumDiscountHours: 24,
    minDiscountPercent: 5
  },
  categories: [
    { id: "cat-1", venueId: "demo-burger", name: "🔥 Промо Бандлы Revo", sortOrder: 1 },
    { id: "cat-2", venueId: "demo-burger", name: "🍔 Сочные Бургеры", sortOrder: 2 },
    { id: "cat-3", venueId: "demo-burger", name: "🍟 Закуски & Сеты", sortOrder: 3 },
    { id: "cat-4", venueId: "demo-burger", name: "🥤 Напитки", sortOrder: 4 }
  ],
  items: [
    {
      id: "dish-1",
      venueId: "demo-burger",
      categoryId: "cat-1",
      name: "⚡ REVO COMBO: Двойной Чиз + Фри + Cola",
      description: "Легендарный комбо-сет с фирменным двойным чизбургером, порцией хрустящего картофеля фри и напитком.",
      price: 990,
      imageUrl: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f6?w=600&auto=format&fit=crop&q=80",
      isBundle: true,
      isHit: true,
      modifiers: [
        {
          id: "mod-sauce",
          title: "Выберите соус для фри",
          required: false,
          options: [
            { name: "Сырный", extraPrice: 50 },
            { name: "Барбекю", extraPrice: 50 },
            { name: "Чесночный", extraPrice: 50 }
          ]
        }
      ]
    },
    {
      id: "dish-2",
      venueId: "demo-burger",
      categoryId: "cat-2",
      name: "Бургер 'Трюфельный Блэк'",
      description: "Сочная котлета из мраморной говядины Black Angus, трюфельный соус, сыр чеддер и карамелизованный лук.",
      price: 750,
      imageUrl: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=600&auto=format&fit=crop&q=80",
      isHit: true,
      modifiers: [
        {
          id: "mod-meat",
          title: "Прожарка котлеты",
          required: true,
          options: [
            { name: "Medium (Сочный)", extraPrice: 0 },
            { name: "Well Done (Полная)", extraPrice: 0 }
          ]
        },
        {
          id: "mod-bacon",
          title: "Дополнительно",
          required: false,
          options: [
            { name: "Хрустящий бекон", extraPrice: 90 },
            { name: "Двойной сыр", extraPrice: 70 }
          ]
        }
      ]
    },
    {
      id: "dish-3",
      venueId: "demo-burger",
      categoryId: "cat-2",
      name: "Острый Чипотле Бургер",
      description: "Говяжья котлета, острые перчики халапеньо, соус Чипотле, салат Айсберг и спелые томаты.",
      price: 680,
      imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "dish-4",
      venueId: "demo-burger",
      categoryId: "cat-3",
      name: "Картофель Фри с Пармезаном",
      description: "Золотистый картофель фри с посыпкой из натурального Пармезана и зелени.",
      price: 320,
      imageUrl: "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "dish-5",
      venueId: "demo-burger",
      categoryId: "cat-3",
      name: "Сырные палочки Моцарелла (6 шт)",
      description: "Тянущийся сыр Моцарелла в хрустящей панировке с брусничным соусом.",
      price: 410,
      imageUrl: "https://images.unsplash.com/photo-1531749668029-2db88e4276c7?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "dish-6",
      venueId: "demo-burger",
      categoryId: "cat-4",
      name: "Домашний Лимонад Цитрус 0.5l",
      description: "Освежающий авторский лимонад из апельсинов, лимонов и мяты.",
      price: 250,
      imageUrl: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=600&auto=format&fit=crop&q=80"
    }
  ]
};

// Firestore Data Helpers
export async function getVenueBySlug(slug: string): Promise<VenueData> {
  try {
    const docRef = doc(db, "venues", slug);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data() as VenueData;
    }
  } catch (err) {
    console.warn("Firestore fetch error for venue, loading demo fallback:", err);
  }

  return DEFAULT_DEMO_VENUE;
}

export async function saveVenueData(venue: VenueData): Promise<void> {
  try {
    const docRef = doc(db, "venues", venue.slug);
    await setDoc(docRef, {
      ...venue,
      updatedAt: serverTimestamp()
    }, { merge: true });
  } catch (err) {
    console.error("Failed to save venue to Firestore:", err);
    throw err;
  }
}

export async function createOrder(order: Order): Promise<string> {
  try {
    const ordersRef = collection(db, "orders");
    const docRef = await addDoc(ordersRef, {
      ...order,
      createdAt: serverTimestamp()
    });
    return docRef.id;
  } catch (err) {
    console.error("Failed to create order in Firestore:", err);
    throw err;
  }
}

export async function getVenueOrders(venueId: string): Promise<Order[]> {
  try {
    const q = query(
      collection(db, "orders"), 
      where("venueId", "==", venueId)
    );
    const querySnapshot = await getDocs(q);
    const orders: Order[] = [];
    querySnapshot.forEach((doc) => {
      orders.push({ id: doc.id, ...doc.data() } as Order);
    });
    return orders.sort((a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0));
  } catch (err) {
    console.warn("Failed to fetch venue orders:", err);
    return [];
  }
}
