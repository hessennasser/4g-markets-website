import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const savedLanguage = localStorage.getItem('language');

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    pagesLinks: [
                        { id: 1, name: "Home", href: "/" },
                        { id: 2, name: "Services", href: "/services" },
                        { id: 3, name: "Plans", href: "/plans" },
                        { id: 4, name: "Road Map", href: "/road-map" },
                        { id: 5, name: "System Idea", href: "/system-idea" },
                        { id: 6, name: "Contact US", href: "/contact-us" },
                    ],
                    advantages: [
                        {
                            id: 1,
                            title: "Enhanced Supplies",
                            description: "Increased product availability and variety in stores.",
                        },
                        {
                            id: 2,
                            title: "Easy Communication",
                            description: "Simplified interaction between suppliers and store owners.",
                        },
                        {
                            id: 3,
                            title: "Cost Reduction",
                            description: "Lowered intermediary costs and improved pricing.",
                        },
                        {
                            id: 4,
                            title: "Inventory Improvement",
                            description: "Better inventory management, reducing resource wastage.",
                        },
                        {
                            id: 5,
                            title: "Order Tracking",
                            description: "Monitoring order progress, facilitating smoother deliveries.",
                        },
                        {
                            id: 6,
                            title: "Time Saving",
                            description: "Minimized effort in supplier search and coordination.",
                        },
                    ],
                    services: [
                        {
                            id: 1,
                            title: "Order and Inventory Management",
                            description: "Facilitate purchasing processes and track orders along with available product quantities in inventory",
                        },
                        {
                            id: 2,
                            title: "Product Comparison and Rating",
                            description: "Provide the ability to compare different products and see product ratings given by users.",
                        },
                        {
                            id: 3,
                            title: "Delivery and Shipping Services",
                            description: "Offer delivery services for products to stores while keeping track of shipment statuses.",
                        },
                        {
                            id: 4,
                            title: "Analytical Reports",
                            description: "Present analytical insights and detailed statistics about product sales.",
                        },
                        {
                            id: 5,
                            title: "Information Sharing and Advice",
                            description: "Enable the exchange of information and advice between traders and suppliers.",
                        },
                        {
                            id: 6,
                            title: "Promotions and Discounts",
                            description: "Display special offers and price reductions for specific products.",
                        },
                        {
                            id: 7,
                            title: "Secure Payment Services",
                            description: "Provide secure and user-friendly payment methods for completing purchases.",
                        },
                        {
                            id: 8,
                            title: "Customer Support",
                            description: "Offer customer support service to address issues and inquiries.",
                        },
                        {
                            id: 9,
                            title: "Workshops and Training",
                            description: "Organize training sessions and workshops to enhance the skills of traders and suppliers.",
                        },
                        {
                            id: 10,
                            title: "Profile Management",
                            description: "Empower users to handle their personal profiles and update their information.",
                        },
                    ],
                },
            },
            ar: {
                translation: {
                    pagesLinks: [
                        { id: 1, name: "الصفحة الرئيسية", href: "/" },
                        { id: 2, name: "الخدمات", href: "/services" },
                        { id: 3, name: "الخطط", href: "/plans" },
                        { id: 4, name: "المسار", href: "/road-map" },
                        { id: 5, name: "فكرة النظام ", href: "/system-idea" },
                        { id: 6, name: "تواصل معنا", href: "/contact-us" },
                    ],
                    advantages: [
                        {
                            id: 1,
                            title: "تحسين الإمدادات",
                            description: "زيادة توافر المنتجات وتنوعها في المتاجر.",
                        },
                        {
                            id: 2,
                            title: "تواصل سهل",
                            description: "تبسيط التفاعل بين الموردين وأصحاب المتاجر.",
                        },
                        {
                            id: 3,
                            title: "تقليل التكلفة",
                            description: "تخفيض تكاليف الوسيط وتحسين التسعير.",
                        },
                        {
                            id: 4,
                            title: "تحسين المخزون",
                            description: "إدارة المخزون الأفضل، مما يقلل من هدر الموارد.",
                        },
                        {
                            id: 5,
                            title: "تتبع الطلبات",
                            description: "مراقبة تقدم الطلبات، مما ييسر عمليات التسليم.",
                        },
                        {
                            id: 6,
                            title: "توفير الوقت",
                            description: "تقليل الجهد في البحث عن الموردين والتنسيق.",
                        },
                    ],
                    services: [
                        {
                            id: 1,
                            title: "إدارة الطلبات والمخزون",
                            description: "تيسير عمليات الشراء وتتبع الطلبات مع كميات المنتجات المتاحة في المخزون",
                        },
                        {
                            id: 2,
                            title: "مقارنة المنتجات والتقييم",
                            description: "توفير القدرة على مقارنة منتجات مختلفة ورؤية تصنيفات المنتجات الممنوحة من قبل المستخدمين.",
                        },
                        {
                            id: 3,
                            title: "خدمات التوصيل والشحن",
                            description: "تقديم خدمات التوصيل للمنتجات إلى المتاجر مع تتبع حالات الشحن.",
                        },
                        {
                            id: 4,
                            title: "تقارير تحليلية",
                            description: "عرض تحليلات وإحصائيات مفصلة حول مبيعات المنتجات.",
                        },
                        {
                            id: 5,
                            title: "مشاركة المعلومات والنصائح",
                            description: "تمكين تبادل المعلومات والنصائح بين التجار والموردين.",
                        },
                        {
                            id: 6,
                            title: "العروض والتخفيضات",
                            description: "عرض عروض خاصة وتخفيضات الأسعار لمنتجات محددة.",
                        },
                        {
                            id: 7,
                            title: "خدمات الدفع الآمنة",
                            description: "توفير وسائل دفع آمنة وسهلة الاستخدام لإتمام عمليات الشراء.",
                        },
                        {
                            id: 8,
                            title: "دعم العملاء",
                            description: "تقديم خدمة دعم العملاء للتعامل مع المشكلات والاستفسارات.",
                        },
                        {
                            id: 9,
                            title: "ورش العمل والتدريب",
                            description: "تنظيم جلسات تدريب وورش عمل لتعزيز مهارات التجار والموردين.",
                        },
                        {
                            id: 10,
                            title: "إدارة الملف الشخصي",
                            description: "تمكين المستخدمين من إدارة ملفاتهم الشخصية وتحديث معلوماتهم.",
                        },
                    ],
                },
            },
        },
        lng: savedLanguage || 'en',
        fallbackLng: 'en',
        debug: true,
        returnObjects: true,
        interpolation: {
            escapeValue: false,
        }
    });
