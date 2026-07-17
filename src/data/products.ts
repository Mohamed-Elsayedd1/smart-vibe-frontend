export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  badge?: string;
  image: string;
  images?: string[];
  description: string;
  stock: number;
  colors?: { name: string; value: string }[];
  sizes?: string[];
  features?: string[];
  specs?: { key: string; value: string }[];
}

export interface DemoCategory {
  id: string;
  name: string;
  slug: string;
  icon: string;
  count: number;
}

// منتجات حقيقية بتيجي من الـ API عادةً.
// المصفوفة دي بتفضل فاضية، والـ fallback بيحصل في مكان الاستخدام (FeaturedProducts, Hero, Shop...)
export const products: Product[] = [];
export const categories: DemoCategory[] = [];

export const megaCategories = [
  { name: "إضاءة ذكية", icon: "💡", links: ["لمبات LED", "شرائط إضاءة", "إضاءة خارجية"] },
  { name: "أمن وحماية", icon: "🛡️", links: ["كاميرات مراقبة", "أقفال ذكية", "حساسات حركة"] },
  { name: "مطبخ ذكي", icon: "🍳", links: ["ماكينات قهوة", "أفران ذكية", "ثلاجات"] },
  { name: "ترفيه ذكي", icon: "🎬", links: ["شاشات ذكية", "أجهزة صوت", "ألعاب VR"] },
];

/**
 * ============================================================
 *  DEMO DATA — بيانات عرض تجريبية
 * ============================================================
 * بتتستخدم كـ fallback في حالتين بس:
 *  1) الـ API فشل يرد (السيرفر نايم / وقع / مفيش إنترنت).
 *  2) الـ API رد لكن رجّع قائمة فاضية (لسه محدش ضاف منتجات حقيقية).
 *
 * الهدف: الموقع يفضل شايف ومقنع بصريًا حتى لو الباك إند مش شغال
 * (زي لو اشتراك Railway خلص)، بدل ما يظهر فاضي أو Placeholder.
 * أول ما تضيف منتجات حقيقية من لوحة التحكم، الموقع هيعرضها هي
 * تلقائيًا بدل الـ demo data.
 * ============================================================
 */
export const demoProducts: Product[] = [
  {
    id: "demo-1",
    name: "لمبة LED ذكية متعددة الألوان",
    category: "إضاءة ذكية",
    price: 171,
    originalPrice: 220,
    rating: 4.6,
    reviews: 128,
    badge: "عرض",
    image: "https://m.media-amazon.com/images/I/71Qfjiyb9+L._AC_SL1500_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/71Qfjiyb9+L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61lk-wJa52L._AC_SL1000_.jpg",
      "https://m.media-amazon.com/images/I/41ndkKsN43L._AC_.jpg",
      "https://m.media-amazon.com/images/I/518q-7yzV7L._AC_SL1024_.jpg",
    ],
    description: "لمبة إضاءة ذكية تتحكم فيها من موبايلك، تدعم أكثر من 16 مليون لون وتتوافق مع تطبيقات المنزل الذكي.",
    stock: 42,
    features: ["تحكم عبر التطبيق", "16 مليون لون", "توافق مع الأوامر الصوتية"],
  },
  {
    id: "demo-2",
    name: "كاميرا مراقبة ذكية داخلية",
    category: "أمن وحماية",
    price: 899,
    originalPrice: 1050,
    rating: 4.4,
    reviews: 76,
    badge: "الأكثر مبيعاً",
    image: "https://m.media-amazon.com/images/I/51w0Gsm-XbL._AC_SL1000_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/51w0Gsm-XbL._AC_SL1000_.jpg",
      "https://m.media-amazon.com/images/I/71QpbOVaP5L._AC_SL1200_.jpg",
      "https://m.media-amazon.com/images/I/61qEhA5weLL._AC_SL1200_.jpg",
      "https://m.media-amazon.com/images/I/61Ox4w-3gHL._AC_SL1200_.jpg",
    ],
    description: "كاميرا مراقبة داخلية بدقة Full HD، رؤية ليلية، وتنبيهات فورية على الموبايل عند اكتشاف حركة.",
    stock: 25,
    features: ["دقة Full HD", "رؤية ليلية", "تنبيهات فورية"],
  },
  {
    id: "demo-3",
    name: "قفل باب ذكي ببصمة الإصبع",
    category: "أمن وحماية",
    price: 5853,
    rating: 4.7,
    reviews: 54,
    badge: "جديد",
    image: "https://m.media-amazon.com/images/I/61HR9a0L0aL._AC_SL1500_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/61HR9a0L0aL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61GrVIMCjkL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71MRtvdrBbL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71PaD6wa+dL._AC_SL1500_.jpg",
    ],
    description: "قفل ذكي يفتح بالبصمة أو الكود أو التطبيق، مناسب للشقق والفلل، بطارية تدوم حتى 6 شهور.",
    stock: 15,
    features: ["فتح بالبصمة", "بطارية تدوم 6 شهور", "تحكم عن بعد"],
  },
  {
    id: "demo-4",
    name: "ماكينة قهوة ذكية بالتحكم عن بعد",
    category: "مطبخ ذكي",
    price: 100114,
    originalPrice: 115000,
    rating: 4.3,
    reviews: 39,
    badge: "عرض",
    image: "https://cdn.shopify.com/s/files/1/1032/4987/1193/files/meraki-espresso-machine-3668289.jpg?v=1782860778",
    images: [
      "https://cdn.shopify.com/s/files/1/1032/4987/1193/files/meraki-espresso-machine-3668289.jpg?v=1782860778",
      "https://cdn.shopify.com/s/files/1/1032/4987/1193/files/2gen2_640e2bd7-3d6f-4e15-a086-ac290a961686.jpg?v=1782860778",
      "https://cdn.shopify.com/s/files/1/1032/4987/1193/files/6_d64dda39-6e99-4bdf-83e3-0e9cba633b4f.png?v=1782860779",
      "https://cdn.shopify.com/s/files/1/1032/4987/1193/files/22_2d924caa-0a18-4167-8046-df817d74692a.png?v=1782860779",
    ],
    description: "جهزّ قهوتك من موبايلك قبل ما تصحى، تتحكم في الجرعة ودرجة الحرارة عن بعد.",
    stock: 18,
    features: ["تحكم عن بعد", "ضبط درجة الحرارة", "جدولة تلقائية"],
  },
  {
    id: "demo-5",
    name: "شاشة تلفزيون ذكية 55 بوصة",
    category: "ترفيه ذكي",
    price: 26999,
    originalPrice: 31999,
    rating: 4.8,
    reviews: 203,
    badge: "الأكثر مبيعاً",
    image: "https://m.media-amazon.com/images/I/916CAVCYdxL._AC_SL1500_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/916CAVCYdxL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/91BDwkv3haL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61d2BmdKUsL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81it02JdRSL._AC_SL1500_.jpg",
    ],
    description: "شاشة ذكية دقة 4K، تدعم كل تطبيقات المشاهدة، وتتحكم فيها بالصوت.",
    stock: 9,
    features: ["دقة 4K", "تحكم صوتي", "دعم كل التطبيقات"],
  },
  {
    id: "demo-6",
    name: "مكنسة روبوت ذكية",
    category: "أجهزة منزلية",
    price: 6889.15,
    originalPrice: 7999,
    rating: 4.5,
    reviews: 91,
    badge: "جديد",
    image: "https://m.media-amazon.com/images/I/619L+4ky64L._AC_SL1500_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/619L+4ky64L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61vcSjph50L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71BW8YKm6eL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61sNUa0cEzL._AC_SL1153_.jpg",
    ],
    description: "مكنسة كهربائية ذكية بتنظف البيت لوحدها وتتحكم فيها بالتطبيق أو الصوت.",
    stock: 12,
    features: ["تنظيف تلقائي", "تحكم بالتطبيق", "شحن ذاتي"],
  },
];

export const demoCategories: DemoCategory[] = [
  { id: "cat-1", name: "إضاءة ذكية", slug: "smart-lighting", icon: "💡", count: 1 },
  { id: "cat-2", name: "أمن وحماية", slug: "security", icon: "🛡️", count: 2 },
  { id: "cat-3", name: "مطبخ ذكي", slug: "smart-kitchen", icon: "🍳", count: 1 },
  { id: "cat-4", name: "ترفيه ذكي", slug: "entertainment", icon: "🎬", count: 1 },
  { id: "cat-5", name: "أجهزة منزلية", slug: "home-appliances", icon: "🏠", count: 1 },
];
