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
                    roadMap: [
                        {
                            "id": 1,
                            "title": "Planning and Analysis",
                            "date": "01/12/2023",
                            "steps": [
                                "Define the website's goal and offered services.",
                                "Study user needs and market demands.",
                                "Identify key features the website will include."
                            ],
                            "icon": "FaClipboard"
                        },
                        {
                            "id": 2,
                            "title": "Design and User Interface",
                            "date": "01/03/2024",
                            "steps": [
                                "Design a user-friendly and simple interface.",
                                "Determine the optimal user experience for interacting with the site."
                            ],
                            "icon": "BsFillPencilFill"
                        },
                        {
                            "id": 3,
                            "title": "Development and Building",
                            "date": "01/07/2024",
                            "steps": [
                                "Build the website using appropriate technologies.",
                                "Develop order management, inventory, and reporting systems."
                            ],
                            "icon": "FaCode"
                        },
                        {
                            "id": 4,
                            "title": "Testing and Improvement",
                            "date": "01/04/2025",
                            "steps": [
                                "Thoroughly test the site to ensure proper functionality.",
                                "Address any errors and make improvements based on testing feedback."
                            ],
                            "icon": "AiOutlineCheck"
                        },
                        {
                            "id": 5,
                            "title": "Launch and Marketing",
                            "date": "01/08/2025",
                            "steps": [
                                "Deploy the website online.",
                                "Market the website to attract goods suppliers and grocery store owners."
                            ],
                            "icon": "FaPaperPlane"
                        }
                    ],
                    features: [
                        {
                            id: '1.',
                            title: 'User Registration and Profiles:',
                            description: [
                                'Suppliers and grocery traders can create accounts with detailed profiles.',
                                'Profile information includes business details, product offerings, and contact information.',
                            ],
                        },
                        {
                            id: '2.',
                            title: 'Product Listings and Catalogs:',
                            description: [
                                'Suppliers can showcase their products with images, descriptions, and pricing.',
                                'Grocery traders can browse and search for products they\'re interested in.',
                            ],
                        },
                        {
                            id: '3.',
                            title: 'Order Management:',
                            description: [
                                'Traders can place bulk orders for products directly from suppliers\' listings.',
                                'Suppliers receive order notifications and process them accordingly.',
                            ],
                        },
                        {
                            id: '4.',
                            title: 'Inventory Tracking:',
                            description: [
                                'Suppliers can manage their available stock and update quantities as needed.',
                                'Traders can view product availability and make informed purchasing decisions.',
                            ],
                        },
                        {
                            id: '5.',
                            title: 'Rating and Reviews:',
                            description: [
                                'Traders can leave reviews and ratings for suppliers based on their experiences.',
                                'Positive feedback helps build trust and credibility for suppliers.',
                            ],
                        },
                        {
                            id: '6.',
                            title: 'Deals and Promotions:',
                            description: [
                                'Suppliers can offer special deals and discounts on selected products.',
                                'Traders can take advantage of cost-effective purchasing opportunities.',
                            ],
                        },
                        {
                            id: '7.',
                            title: 'Secure Payment Processing:',
                            description: [
                                'Integration with secure payment gateways for smooth and safe transactions.',
                                'Support for various payment methods, such as credit cards or digital wallets.',
                            ],
                        },
                        {
                            id: '8.',
                            title: 'Real-time Communication:',
                            description: [
                                'Messaging system for direct communication between traders and suppliers.',
                                'Address inquiries, negotiate terms, and resolve any issues promptly.',
                            ],
                        },
                        {
                            id: '9.',
                            title: 'Analytics and Insights:',
                            description: [
                                'Generate reports for suppliers to track sales, popular products, and customer preferences.',
                                'Traders can monitor their purchasing history and expenditure.',
                            ],
                        },
                    ],
                    implementation: [
                        {
                            id: '1.',
                            title: 'Platform Development:',
                            description: [
                                'Design and develop the user interface for both suppliers and traders.',
                                'Build a robust backend system to manage listings, orders, and communication.',
                            ],
                        },
                        {
                            id: '2.',
                            title: 'Supplier Onboarding:',
                            description: [
                                'Reach out to suppliers, explain the platform\'s benefits, and assist them in setting up their profiles.',
                            ],
                        },
                        {
                            id: '3.',
                            title: 'Trader Outreach:',
                            description: [
                                'Market the platform to grocery store owners, highlighting its convenience and time-saving features.',
                            ],
                        },
                        {
                            id: '4.',
                            title: 'Testing and Refinement:',
                            description: [
                                'Thoroughly test the platform for usability, functionality, and security.',
                                'Gather user feedback and make necessary improvements.',
                            ],
                        },
                        {
                            id: '5.',
                            title: 'Launch and Growth:',
                            description: [
                                'Deploy the platform online and officially launch it for public use.',
                                'Continuously enhance features based on user feedback and market trends.',
                            ],
                        },
                    ]
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
                    roadMap: [
                        {
                            "id": 1,
                            "title": "التخطيط والتحليل",
                            "date": "01/12/2023",
                            "steps": [
                                "تحديد هدف الموقع الإلكتروني والخدمات المقدمة.",
                                "دراسة احتياجات المستخدمين ومتطلبات السوق.",
                                "تحديد الميزات الرئيسية التي سيتضمنها الموقع."
                            ],
                            "icon": "FaClipboard"
                        },
                        {
                            "id": 2,
                            "title": "التصميم وواجهة المستخدم",
                            "date": "01/03/2024",
                            "steps": [
                                "تصميم واجهة مستخدم سهلة الاستخدام وبسيطة.",
                                "تحديد التجربة الأمثل للمستخدم في التفاعل مع الموقع."
                            ],
                            "icon": "BsFillPencilFill"
                        },
                        {
                            "id": 3,
                            "title": "التطوير والبناء",
                            "date": "01/07/2024",
                            "steps": [
                                "بناء الموقع باستخدام التقنيات المناسبة.",
                                "تطوير أنظمة إدارة الطلبات والمخزون والتقارير."
                            ],
                            "icon": "FaCode"
                        },
                        {
                            "id": 4,
                            "title": "الاختبار والتحسين",
                            "date": "01/04/2025",
                            "steps": [
                                "اختبار الموقع بعناية لضمان الوظائف الصحيحة.",
                                "معالجة أي أخطاء وإجراء تحسينات استنادًا إلى ملاحظات الاختبار."
                            ],
                            "icon": "AiOutlineCheck"
                        },
                        {
                            "id": 5,
                            "title": "الإطلاق والتسويق",
                            "date": "01/08/2025",
                            "steps": [
                                "نشر الموقع على الإنترنت.",
                                "تسويق الموقع لجذب موردي السلع وأصحاب محلات البقالة."
                            ],
                            "icon": "FaPaperPlane"
                        }
                    ],
                    features: [
                        {
                            id: '1.',
                            title: 'تسجيل المستخدمين والملفات الشخصية:',
                            description: [
                                'يمكن للموردين وتجار البقالة إنشاء حسابات بملفات شخصية مفصلة.',
                                'تتضمن معلومات الملف الشخصي تفاصيل العمل وعروض المنتجات ومعلومات الاتصال.',
                            ],
                        },
                        {
                            id: '2.',
                            title: 'عروض المنتجات والكتالوجات:',
                            description: [
                                'يمكن للموردين عرض منتجاتهم مع الصور والوصف والأسعار.',
                                'يمكن لتجار البقالة تصفح والبحث عن المنتجات التي يهتمون بها.',
                            ],
                        },
                        {
                            id: '3.',
                            title: 'إدارة الطلبات:',
                            description: [
                                'يمكن لتجار الجملة تقديم طلبات بكميات كبيرة من المنتجات مباشرة من قوائم الموردين.',
                                'يتلقى الموردين إشعارات بالطلبات ومعالجتها وفقًا لذلك.',
                            ],
                        },
                        {
                            id: '4.',
                            title: 'تتبع المخزون:',
                            description: [
                                'يمكن للموردين إدارة المخزون المتاح وتحديث الكميات حسب الحاجة.',
                                'يمكن لتجار البقالة عرض توافر المنتجات واتخاذ قرارات شراء مستنيرة.',
                            ],
                        },
                        {
                            id: '5.',
                            title: 'التقييم والمراجعات:',
                            description: [
                                'يمكن لتجار البقالة ترك مراجعات وتقييمات للموردين استنادًا إلى تجاربهم.',
                                'تساعد التعليقات الإيجابية في بناء الثقة والمصداقية للموردين.',
                            ],
                        },
                        {
                            id: '6.',
                            title: 'الصفقات والعروض:',
                            description: [
                                'يمكن للموردين تقديم صفقات وخصومات خاصة على منتجات محددة.',
                                'يمكن لتجار البقالة الاستفادة من فرص الشراء الفعالة من حيث التكلفة.',
                            ],
                        },
                        {
                            id: '7.',
                            title: 'معالجة الدفع الآمنة:',
                            description: [
                                'تكامل مع بوابات الدفع الآمنة لإجراء معاملات سلسة وآمنة.',
                                'دعم لمختلف وسائل الدفع مثل بطاقات الائتمان أو المحافظ الرقمية.',
                            ],
                        },
                        {
                            id: '8.',
                            title: 'التواصل في الوقت الحقيقي:',
                            description: [
                                'نظام رسائل للتواصل المباشر بين تجار البقالة والموردين.',
                                'معالجة الاستفسارات، والتفاوض على الشروط، وحل أي مشكلات بسرعة.',
                            ],
                        },
                        {
                            id: '9.',
                            title: 'التحليلات والرؤى:',
                            description: [
                                'إنشاء تقارير للموردين لتتبع المبيعات والمنتجات الشائعة وتفضيلات العملاء.',
                                'يمكن لتجار البقالة مراقبة تاريخ مشترياتهم والمصروفات.',
                            ],
                        },
                    ],
                    implementation: [
                        {
                            id: '1.',
                            title: 'تطوير المنصة:',
                            description: [
                                'تصميم وتطوير واجهة المستخدم للموردين وتجار البقالة.',
                                'بناء نظام خلفي قوي لإدارة القوائم والطلبات والاتصالات.',
                            ],
                        },
                        {
                            id: '2.',
                            title: 'استقطاب الموردين:',
                            description: [
                                'التواصل مع الموردين، وشرح فوائد المنصة، ومساعدتهم في إعداد ملفاتهم الشخصية.',
                            ],
                        },
                        {
                            id: '3.',
                            title: 'توجيه تجار البقالة:',
                            description: [
                                'تسويق المنصة لأصحاب محلات البقالة، مسلطًا الضوء على مزاياها من حيث الراحة وتوفير الوقت.',
                            ],
                        },
                        {
                            id: '4.',
                            title: 'الاختبار والتحسين:',
                            description: [
                                'اختبار المنصة بدقة لضمان الاستخدام والوظائف والأمان.',
                                'جمع ملاحظات المستخدمين وإجراء التحسينات اللازمة.',
                            ],
                        },
                        {
                            id: '5.',
                            title: 'الإطلاق والنمو:',
                            description: [
                                'نشر المنصة على الإنترنت وإطلاقها رسميًا للاستخدام العام.',
                                'تحسين المزايا باستمرار استنادًا إلى ملاحظات المستخدمين واتجاهات السوق.',
                            ],
                        },
                    ]
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
