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
    price: 350,
    originalPrice: 450,
    rating: 4.6,
    reviews: 128,
    badge: "الأكثر مبيعاً",
    image: "https://placehold.co/600x600/f5b301/1a1a2e?text=Smart+LED+Bulb",
    description: "لمبة إضاءة ذكية تتحكم فيها من موبايلك، تدعم أكثر من 16 مليون لون وتتوافق مع تطبيقات المنزل الذكي.",
    stock: 42,
    features: ["تحكم عبر التطبيق", "16 مليون لون", "توافق مع الأوامر الصوتية"],
  },
  {
    id: "demo-2",
    name: "كاميرا مراقبة ذكية داخلية",
    category: "أمن وحماية",
    price: 890,
    originalPrice: 1100,
    rating: 4.4,
    reviews: 76,
    badge: "جديد",
    image: "https://placehold.co/600x600/1e3a5f/ffffff?text=Security+Camera",
    description: "كاميرا مراقبة داخلية بدقة Full HD، رؤية ليلية، وتنبيهات فورية على الموبايل عند اكتشاف حركة.",
    stock: 25,
    features: ["دقة Full HD", "رؤية ليلية", "تنبيهات فورية"],
  },
  {
    id: "demo-3",
    name: "قفل باب ذكي ببصمة الإصبع",
    category: "أمن وحماية",
    price: 2200,
    rating: 4.7,
    reviews: 54,
    image: "https://placehold.co/600x600/2c2c2c/ffffff?text=Smart+Door+Lock",
    description: "قفل ذكي يفتح بالبصمة أو الكود أو التطبيق، مناسب للشقق والفلل، بطارية تدوم حتى 6 شهور.",
    stock: 15,
    features: ["فتح بالبصمة", "بطارية تدوم 6 شهور", "تحكم عن بعد"],
  },
  {
    id: "demo-4",
    name: "ماكينة قهوة ذكية بالتحكم عن بعد",
    category: "مطبخ ذكي",
    price: 1750,
    originalPrice: 2000,
    rating: 4.3,
    reviews: 39,
    badge: "عرض",
    image: "https://placehold.co/600x600/8b4513/ffffff?text=Coffee+Machine",
    description: "جهزّ قهوتك من موبايلك قبل ما تصحى، تتحكم في الجرعة ودرجة الحرارة عن بعد.",
    stock: 18,
    features: ["تحكم عن بعد", "ضبط درجة الحرارة", "جدولة تلقائية"],
  },
  {
    id: "demo-5",
    name: "شاشة تلفزيون ذكية 55 بوصة",
    category: "ترفيه ذكي",
    price: 15800,
    originalPrice: 17500,
    rating: 4.8,
    reviews: 203,
    badge: "الأكثر مبيعاً",
    image: "https://placehold.co/600x600/1a1a2e/ffffff?text=Smart+TV",
    description: "شاشة ذكية دقة 4K، تدعم كل تطبيقات المشاهدة، وتتحكم فيها بالصوت.",
    stock: 9,
    features: ["دقة 4K", "تحكم صوتي", "دعم كل التطبيقات"],
  },
  {
    id: "demo-6",
    name: "مكنسة روبوت ذكية",
    category: "أجهزة منزلية",
    price: 4200,
    originalPrice: 4900,
    rating: 4.5,
    reviews: 91,
    badge: "جديد",
    image: "https://placehold.co/600x600/2d5f4c/ffffff?text=Robot+Vacuum",
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
