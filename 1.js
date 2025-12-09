/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//whatsapp
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// WhatsApp Widget Script - مكون الواتساب للويب
(function() {
    'use strict';
    
    // إعدادات المكون - يمكن تعديلها حسب الحاجة
    const wg_settings = {
        phoneNumber: "201234567890", // رقم الهاتف الافتراضي
        predefinedMessage: "مرحباً، أنا مهتم بالخدمات التي تقدمونها. أرجو التواصل معي للاستفسار عن التفاصيل والأسعار.", // الرسالة الافتراضية
        tooltipText: "تواصل معنا عبر واتساب", // نص التلميح
        position: "right", // يمكن أن تكون "right" أو "left"
        bottomOffset: 30, // المسافة من الأسفل
        sideOffset: 30, // المسافة من الجانب
        showOnLoad: true, // إظهار الزر عند تحميل الصفحة
        pulseEffect: true, // تأثير النبض
        autoHide: false // إخفاء تلقائي عند التمرير
    };
    
    // إنشاء عناصر DOM
    function wg_createElements() {
        // إنشاء زر الواتساب الرئيسي
        const wg_whatsappBtn = document.createElement('div');
        wg_whatsappBtn.className = 'wg_whatsapp-btn';
        wg_whatsappBtn.id = 'wg_whatsappBtn';
        
        // إنشاء زر الإغلاق
        const wg_closeBtn = document.createElement('div');
        wg_closeBtn.className = 'wg_close-btn';
        wg_closeBtn.id = 'wg_closeBtn';
        wg_closeBtn.innerHTML = '×';
        
        // إنشاء التلميح
        const wg_tooltip = document.createElement('div');
        wg_tooltip.className = 'wg_whatsapp-tooltip';
        wg_tooltip.textContent = wg_settings.tooltipText;
        
        // إنشاء الأيقونة
        const wg_icon = document.createElement('i');
        wg_icon.className = 'fab fa-whatsapp';
        
        // تجميع عناصر زر الواتساب
        wg_whatsappBtn.appendChild(wg_closeBtn);
        wg_whatsappBtn.appendChild(wg_tooltip);
        wg_whatsappBtn.appendChild(wg_icon);
        
        // إنشاء زر إعادة الإظهار
        const wg_showBtn = document.createElement('div');
        wg_showBtn.className = 'wg_show-whatsapp-btn';
        wg_showBtn.id = 'wg_showWhatsappBtn';
        
        const wg_showIcon = document.createElement('i');
        wg_showIcon.className = 'fab fa-whatsapp';
        wg_showBtn.appendChild(wg_showIcon);
        
        // إضافة العناصر إلى body
        document.body.appendChild(wg_whatsappBtn);
        document.body.appendChild(wg_showBtn);
        
        // تطبيق الإعدادات على الموضع
        if (wg_settings.position === 'left') {
            wg_whatsappBtn.style.left = wg_settings.sideOffset + 'px';
            wg_whatsappBtn.style.right = 'auto';
            wg_showBtn.style.left = wg_settings.sideOffset + 'px';
            wg_showBtn.style.right = 'auto';
            // تعديل موقع التلميح للجانب الأيمن
            wg_tooltip.style.left = '85px';
            wg_tooltip.style.right = 'auto';
            wg_tooltip.style.transform = 'translateX(-100%)';
            wg_tooltip.style.borderColor = 'transparent #075E54 transparent transparent';
        }
        
        // إخفاء الزر إذا لم يكن مفعلاً
        if (!wg_settings.showOnLoad) {
            wg_whatsappBtn.classList.add('wg_hidden');
        }
    }
    
    // إضافة الأنماط إلى الصفحة
    function wg_addStyles() {
        const style = document.createElement('style');
        style.textContent = `
            /* زر الواتساب الأساسي */
            .wg_whatsapp-btn {
                position: fixed;
                bottom: ${wg_settings.bottomOffset}px;
                ${wg_settings.position}: ${wg_settings.sideOffset}px;
                background-color: #25D366;
                color: white;
                width: 70px;
                height: 70px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 36px;
                box-shadow: 0 4px 12px rgba(37, 211, 102, 0.5);
                cursor: pointer;
                transition: all 0.3s ease;
                z-index: 1000;
                ${wg_settings.pulseEffect ? 'animation: wg_pulse 2s infinite;' : ''}
            }
            
            .wg_whatsapp-btn:hover {
                background-color: #128C7E;
                transform: scale(1.1);
                box-shadow: 0 6px 18px rgba(37, 211, 102, 0.7);
            }
            
            .wg_whatsapp-btn:active {
                transform: scale(0.95);
            }
            
            /* تأثير النبض */
            @keyframes wg_pulse {
                0% {
                    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
                }
                70% {
                    box-shadow: 0 0 0 15px rgba(37, 211, 102, 0);
                }
                100% {
                    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
                }
            }
            
            /* تلميح عند التأشير */
            .wg_whatsapp-tooltip {
                position: absolute;
                right: 85px;
                background-color: #075E54;
                color: white;
                padding: 8px 15px;
                border-radius: 5px;
                font-size: 14px;
                white-space: nowrap;
                opacity: 0;
                transition: opacity 0.3s ease;
                pointer-events: none;
                box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
                z-index: 1002;
            }
            
            .wg_whatsapp-tooltip::after {
                content: '';
                position: absolute;
                top: 50%;
                left: 100%;
                margin-top: -5px;
                border-width: 5px;
                border-style: solid;
                border-color: transparent transparent transparent #075E54;
            }
            
            .wg_whatsapp-btn:hover .wg_whatsapp-tooltip {
                opacity: 1;
            }
            
            /* زر الإخفاء */
            .wg_close-btn {
                position: absolute;
                top: -8px;
                left: -8px;
                background-color: white;
                color: #25D366;
                width: 24px;
                height: 24px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 16px;
                font-weight: bold;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
                cursor: pointer;
                transition: all 0.2s ease;
                z-index: 1001;
            }
            
            .wg_close-btn:hover {
                background-color: #f0f0f0;
                transform: scale(1.1);
            }
            
            /* حالة الإخفاء */
            .wg_whatsapp-btn.wg_hidden {
                transform: translateX(150px);
                opacity: 0;
                pointer-events: none;
            }
            
            /* زر إعادة الإظهار */
            .wg_show-whatsapp-btn {
                position: fixed;
                bottom: ${wg_settings.bottomOffset}px;
                ${wg_settings.position}: ${wg_settings.sideOffset}px;
                background-color: #075E54;
                color: white;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 24px;
                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
                cursor: pointer;
                transition: all 0.3s ease;
                z-index: 999;
                opacity: 0;
                pointer-events: none;
            }
            
            .wg_show-whatsapp-btn.wg_active {
                opacity: 1;
                pointer-events: all;
            }
            
            .wg_show-whatsapp-btn:hover {
                background-color: #128C7E;
                transform: scale(1.1);
            }
            
            @media (max-width: 768px) {
                .wg_whatsapp-btn {
                    width: 60px;
                    height: 60px;
                    font-size: 30px;
                    bottom: 20px;
                    ${wg_settings.position}: 20px;
                }
                
                .wg_show-whatsapp-btn {
                    bottom: 20px;
                    ${wg_settings.position}: 20px;
                }
                
                .wg_whatsapp-tooltip {
                    font-size: 12px;
                    padding: 6px 10px;
                }
            }
            
            @media (max-width: 480px) {
                .wg_whatsapp-btn {
                    width: 55px;
                    height: 55px;
                    font-size: 28px;
                }
                
                .wg_close-btn {
                    width: 22px;
                    height: 22px;
                    font-size: 14px;
                    top: -6px;
                    left: -6px;
                }
            }
        `;
        
        document.head.appendChild(style);
    }
    
    // تهيئة المكون
    function wg_init() {
        // التحقق من وجود Font Awesome
        if (!document.querySelector('link[href*="font-awesome"]') && !document.querySelector('link[href*="fontawesome"]')) {
            const fontAwesome = document.createElement('link');
            fontAwesome.rel = 'stylesheet';
            fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
            document.head.appendChild(fontAwesome);
        }
        
        // إنشاء الأنماط والعناصر
        wg_addStyles();
        wg_createElements();
        
        // تعريف العناصر بعد إنشائها
        const wg_whatsappBtn = document.getElementById('wg_whatsappBtn');
        const wg_closeBtn = document.getElementById('wg_closeBtn');
        const wg_showWhatsappBtn = document.getElementById('wg_showWhatsappBtn');
        
        // تشفير الرسالة للرابط
        const encodedMessage = encodeURIComponent(wg_settings.predefinedMessage);
        
        // رابط واتساب مع الرسالة المحددة
        const whatsappLink = `https://wa.me/${wg_settings.phoneNumber}?text=${encodedMessage}`;
        
        // إضافة حدث النقر على زر الواتساب
        wg_whatsappBtn.addEventListener('click', function() {
            window.open(whatsappLink, '_blank');
        });
        
        // إضافة حدث النقر على زر الإغلاق
        wg_closeBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            wg_whatsappBtn.classList.add('wg_hidden');
            wg_showWhatsappBtn.classList.add('wg_active');
            
            // حفظ حالة الإخفاء في localStorage
            localStorage.setItem('wg_whatsapp_hidden', 'true');
        });
        
        // إضافة حدث النقر على زر إعادة الإظهار
        wg_showWhatsappBtn.addEventListener('click', function() {
            wg_whatsappBtn.classList.remove('wg_hidden');
            wg_showWhatsappBtn.classList.remove('wg_active');
            
            // إزالة حالة الإخفاء من localStorage
            localStorage.removeItem('wg_whatsapp_hidden');
        });
        
        // التحقق من حالة الإخفاء السابقة
        if (localStorage.getItem('wg_whatsapp_hidden') === 'true') {
            wg_whatsappBtn.classList.add('wg_hidden');
            wg_showWhatsappBtn.classList.add('wg_active');
        }
        
        // إظهار/إخفاء زر إعادة الإظهار حسب التمرير
        if (wg_settings.autoHide) {
            let lastScrollPosition = 0;
            window.addEventListener('scroll', function() {
                const currentScrollPosition = window.pageYOffset;
                
                if (wg_whatsappBtn.classList.contains('wg_hidden')) {
                    if (currentScrollPosition < lastScrollPosition) {
                        wg_showWhatsappBtn.classList.add('wg_active');
                    } else {
                        if (currentScrollPosition > 100) {
                            wg_showWhatsappBtn.classList.remove('wg_active');
                        }
                    }
                }
                
                lastScrollPosition = currentScrollPosition;
            });
        }
        
        // إضافة تأثير عند تحميل الصفحة
        window.addEventListener('load', function() {
            if (!wg_whatsappBtn.classList.contains('wg_hidden')) {
                setTimeout(() => {
                    wg_whatsappBtn.style.transform = 'scale(1.2)';
                    setTimeout(() => {
                        wg_whatsappBtn.style.transform = 'scale(1)';
                    }, 300);
                }, 1000);
            }
        });
        
        // إضافة وظائف عامة للتحكم من الخارج
        window.wgWhatsApp = {
            show: function() {
                wg_whatsappBtn.classList.remove('wg_hidden');
                wg_showWhatsappBtn.classList.remove('wg_active');
                localStorage.removeItem('wg_whatsapp_hidden');
            },
            hide: function() {
                wg_whatsappBtn.classList.add('wg_hidden');
                wg_showWhatsappBtn.classList.add('wg_active');
                localStorage.setItem('wg_whatsapp_hidden', 'true');
            },
            updatePhone: function(newPhone) {
                wg_settings.phoneNumber = newPhone;
                console.log('تم تحديث رقم الهاتف إلى:', newPhone);
            },
            updateMessage: function(newMessage) {
                wg_settings.predefinedMessage = newMessage;
                console.log('تم تحديث الرسالة إلى:', newMessage);
            },
            getSettings: function() {
                return {...wg_settings};
            }
        };
        
        console.log('✅ مكون الواتساب جاهز للاستخدام!');
    }
    
    // تهيئة المكون عند تحميل الصفحة
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', wg_init);
    } else {
        wg_init();
    }
    
})();
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//haeder
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// مكون YG Header - يعمل تلقائياً عند فتح body
(function() {
    'use strict';
    
    // إعدادات المكون
    const YG_SETTINGS = {
        logoUrl: "https://ygbrandmaker.site/logo.gif",
        phoneNumber: "01030459067",
        socialLinks: [
            { icon: "fab fa-facebook", text: "فيسبوك", url: "https://www.fb.com/YGBrandMaker", emoji: "📘" },
            { icon: "fab fa-twitter", text: "تويتر", url: "https://twitter.com/YGBrandMaker", emoji: "🐦" },
            { icon: "fab fa-linkedin", text: "لينكدإن", url: "https://www.linkedin.com/company/ygbrandmaker/", emoji: "💼" },
            { icon: "fab fa-instagram", text: "إنستغرام", url: "https://www.instagram.com/ygbrandmaker/", emoji: "📸" },
            { icon: "fab fa-telegram", text: "تليجرام", url: "https://t.me/YGBrandMaker", emoji: "📨" },
            { icon: "fab fa-tiktok", text: "تيك توك", url: "https://www.tiktok.com/@ygbrandmaker", emoji: "🎵" },
            { icon: "fab fa-snapchat", text: "سناب شات", url: "#", emoji: "👻" },
            { icon: "fab fa-quora", text: "كوورا", url: "https://ar.quora.com/profile/YG-Brand-Maker", emoji: "❓" },
            { icon: "fab fa-youtube", text: "يوتيوب", url: "https://www.youtube.com/@YGBrandMaker", emoji: "📺" },
            { icon: "fab fa-pinterest", text: "بنتريست", url: "https://www.pinterest.com/ybrandmaker/", emoji: "📌" },
            { icon: "fab fa-behance", text: "بيهانس", url: "https://www.behance.net/ygbrandmaker", emoji: "🎨" },
            { icon: "fab fa-whatsapp", text: "واتساب", url: "https://wa.me/201030459067", emoji: "💚" },
            { icon: "fab fa-vimeo", text: "فيمو", url: "https://vimeo.com/ygbrandmaker", emoji: "🎥" }
        ],
        languages: [
            { code: "ar", flag: "🇸🇦", name: "العربية", url: "https://ygbrandmaker.site/" },
            { code: "en", flag: "🇺🇸", name: "English", url: "https://ygbrandmaker.site/en" },
            { code: "fr", flag: "🇫🇷", name: "Français", url: "https://ygbrandmaker.site/fr" },
            { code: "de", flag: "🇩🇪", name: "Deutsch", url: "https://ygbrandmaker.site/de" },
            { code: "es", flag: "🇪🇸", name: "Español", url: "https://ygbrandmaker.site/es" },
            { code: "ru", flag: "🇷🇺", name: "Русский", url: "https://ygbrandmaker.site/ru" },
            { code: "cn", flag: "🇨🇳", name: "中文", url: "https://ygbrandmaker.site/cn" },
            { code: "jp", flag: "🇯🇵", name: "日本語", url: "https://ygbrandmaker.site/jp" }
        ],
        menuItems: [
            {
                text: "🏠 الرئيسية",
                url: "https://ygbrandmaker.site",
                items: []
            },
            {
                text: "📢 ركن التسويق",
                items: [
                    { text: "🚀 خدمات التسويق الالكتروني", url: "https://ygbrandmaker.site/marketing/E-marketing-services" },
                    { text: "🛒 حلول التجارة الإلكترونية", url: "https://ygbrandmaker.site/marketing/e-commerce-solutions" },
                    { text: "📱 حملات السوشيال ميديا", url: "https://ygbrandmaker.site/marketing/social-media-campaign" },
                    { text: "🔍 التسويق عبر محركات البحث SEO", url: "https://ygbrandmaker.site/marketing/seo" },
                    { text: "✍️ كتابة المحتوي", url: "https://ygbrandmaker.site/marketing/content-creation" },
                    {
                        text: "📲 تسويق السوشيل ميديا",
                        items: [
                            { text: "📘 التسويق عبر الفيسبوك", url: "https://ygbrandmaker.site/marketing/facebook-marketing" },
                            { text: "💼 التسويق عبر لينكد ان", url: "https://ygbrandmaker.site/marketing/linkedin-marketing" },
                            { text: "📨 التسويق عبر تلجرام", url: "https://ygbrandmaker.site/marketing/Telegram-marketing" },
                            { text: "📸 التسويق عبر انستجرام", url: "https://ygbrandmaker.site/marketing/instagram-marketing" },
                            { text: "🐦 التسويق عبر تويتر", url: "https://ygbrandmaker.site/marketing/Twitter-Marketing" },
                            { text: "👻 التسويق عبر سناب شات", url: "https://ygbrandmaker.site/marketing/Snapchat-Marketing" },
                            { text: "🎵 التسويق عبر تيك توك", url: "https://ygbrandmaker.site/marketing/TikTok-Marketing" },
                            { text: "🔍 التسويق عبر جوجل", url: "https://ygbrandmaker.site/marketing/Google-Adwords" }
                        ]
                    }
                ]
            },
            {
                text: "💻 ركن البرمجة",
                items: [
                    {
                        text: "🌐 ركن برمجة المواقع",
                        items: [
                            { text: "🎓 تصميم المواقع الالكترونية", url: "https://ygbrandmaker.site/web/design-educational-website" },
                            { text: "🏢 تصميم موقع شركة", url: "https://ygbrandmaker.site/web/design-company-website" },
                            { text: "📰 تصميم موقع اخباري", url: "https://ygbrandmaker.site/web/design-news-website" },
                            { text: "🍽️ تصميم موقع مطعم", url: "https://ygbrandmaker.site/web/design-restaurant-website" },
                            { text: "📚 تصميم موقع تعليمي", url: "https://ygbrandmaker.site/web/design-educational-website" },
                            { text: "🗺️ تصميم موقع سياحي", url: "https://ygbrandmaker.site/web/design-tourist-website" },
                            { text: "🏠 تصميم موقع عقاري", url: "https://ygbrandmaker.site/web/design-real-estate-website" },
                            { text: "🏥 تصميم موقع طبي", url: "https://ygbrandmaker.site/web/design-clinic-website" },
                            { text: "⚽ تصميم موقع رياضي", url: "https://ygbrandmaker.site/web/design-sports-website" },
                            { text: "⚖️ تصميم موقع محاماة", url: "https://ygbrandmaker.site/web/design-law-firm-website" },
                            { text: "🚗 تصميم موقع معرض سيارات", url: "https://ygbrandmaker.site/web/design-car-website" },
                            { text: "🛒 تصميم متاجر الكترونية", url: "https://ygbrandmaker.site/web/design-online-store" },
                            { text: "🔧 تصميم متجر ووردبريس", url: "" },
                            { text: "⚙️ تصميم متجر ماجنتو", url: "" }
                        ]
                    },
                    {
                        text: "📱 ركن برمجة التطبيقات",
                        items: [
                            { text: "💊 تصميم تطبيق وتوصيل أدوية للصيدلية", url: "" },
                            { text: "🏫 تصميم تطبيق مدرسة", url: "" },
                            { text: "🚕 تطبيق مثل اوبر وكريم وتوصيل ركاب", url: "" },
                            { text: "📦 تصميم تطبيق توصيل طلبات", url: "" },
                            { text: "🏘️ تصميم تطبيق عقاري مثل عقار ماب", url: "" },
                            { text: "🏪 تصميم تطبيق إعلانات بيع وشراء مثل حراج", url: "" },
                            { text: "✈️ تصميم تطبيق سياحى مثل Tripadvisor", url: "" },
                            { text: "👕 تصميم متجر بيع ملابس أونلاين", url: "" },
                            { text: "📦 تصميم تطبيق توصيل طرود لشركة شحن وتوصيل", url: "" },
                            { text: "📚 تصميم تطبيق مكتبة إلكترونية", url: "" },
                            { text: "🚗 تصميم تطبيق تأجير سيارات مثل درايف", url: "" },
                            { text: "📖 تصميم تطبيق مصحف قرءان كريم", url: "" },
                            { text: "👥 تصميم متجر الكتروني متعدد التجار", url: "" }
                        ]
                    }
                ]
            },
            {
                text: "🎨 ركن التصميمات",
                items: [
                    {
                        text: "🎭 ركن تصميمات الهوية البصرية",
                        items: [
                            { text: "📁 تصميم بورتفوليو", url: "https://ygbrandmaker.site/Graphic/portfolio-design-contracting" },
                            { text: "🖋️ تصميم ختم", url: "" },
                            { text: "📝 تصميم ملصق اعلاني ارشادي", url: "https://ygbrandmaker.site/Graphic/design-company-stamp" },
                            { text: "🎫 تصميم كوبون هدية", url: "https://ygbrandmaker.site/Graphic/design-gift-coupon" },
                            { text: "📊 مقاسات وابعاد ملف تعريفي للشركة جاهز بوربوينت", url: "#" },
                            { text: "🏢 تصميم يافطة شركة من الداخل والخارج", url: "https://ygbrandmaker.site/Graphic/design-company-sign" },
                            { text: "📓 تصميم نوت بوك جذابة باسم الشركة", url: "https://ygbrandmaker.site/Graphic/design-company-notebook" },
                            { text: "📅 تصميم نتيجة العام الجديد 2024", url: "https://ygbrandmaker.site/Graphic/design-new-year-calendar" },
                            { text: "📧 تصميم توقيع البريد الالكتروني", url: "https://ygbrandmaker.site/Graphic/design-email-signature" },
                            { text: "✏️ تصميم اقلام شركة للدعاية", url: "https://ygbrandmaker.site/Graphic/design-advertising-pens" },
                            { text: "📜 تصميم رول اب", url: "https://ygbrandmaker.site/Graphic/design-company-rollup" },
                            { text: "👔 تصميم زي عمل للموظفين والشركات", url: "https://ygbrandmaker.site/Graphic/design-uniforms-for-employees-and-companies" },
                            { text: "📄 تصميم فلاير اعلاني flyer", url: "https://ygbrandmaker.site/Graphic/design-advertising-flyer" }
                        ]
                    },
                    {
                        text: "📄 تصميمات المطبوعات الورقية",
                        items: [
                            { text: "🧾 تصميم ايصال دفع", url: "https://ygbrandmaker.site/Graphic/design-payment-receipts" },
                            { text: "🧾 تصميم ايصال قبض", url: "https://ygbrandmaker.site/Graphic/design-receipt" },
                            { text: "📊 تصميم تقرير للعمل لقياس الاداء", url: "https://ygbrandmaker.site/Graphic/design-measure-performance" },
                            { text: "📁 تصميم حافظة اوراق فولدر", url: "https://ygbrandmaker.site/Graphic/design-folder" },
                            { text: "💌 تصميم دعوة فرح وحضور مؤتمرات", url: "https://ygbrandmaker.site/Graphic/design-wedding-invitation-and-attending-conferences" },
                            { text: "📑 تصميم دفتر فواتير شركة", url: "https://ygbrandmaker.site/Graphic/design-company-invoice" },
                            { text: "📜 تصميم رول اب شركة rollup", url: "https://ygbrandmaker.site/Graphic/design-company-rollup" },
                            { text: "✉️ تصميم ظرف مراسلات للشركات", url: "https://ygbrandmaker.site/Graphic/design-corporate-envelopes" },
                            { text: "📚 تصميم غلاف كتاب او مجلة", url: "https://ygbrandmaker.site/Graphic/design-book-or-magazine-cover" },
                            { text: "🍽️ تصميم منيو مطعم قائمة اسعار كافية احترافية menu", url: "https://ygbrandmaker.site/Graphic/design-restaurant-menus" },
                            { text: "📄 تصميم ورقة شركة A4", url: "https://ygbrandmaker.site/Graphic/design-letterhead-a4" }
                        ]
                    }
                ]
            },
            {
                text: "📌 أشياء تهمك",
                items: [
                    { text: "👥 من نحن", url: "https://ygbrandmaker.site/web/about-us" },
                    { text: "🏷️ العلامة التجارية", url: "https://ygbrandmaker.site/brand" },
                    { text: "💳 طرق الدفع", url: "https://ygbrandmaker.site/web/payment" },
                    { text: "📜 اتفاقية وشروط الاستخدام", url: "https://ygbrandmaker.site/web/terms" }
                ]
            },
            {
                text: "📂 أعمالنا",
                items: [
                    { text: "🎨 الهوية البصرية", url: "https://ygbrandmaker.site/portfolio" },
                    { text: "🌐 مواقع - ومتاجر", url: "https://ygbrandmaker.site/portfolio/portfolio/web" }
                ]
            }
        ]
    };
    
    // إضافة الأنماط إلى الصفحة
    function YG_addStyles() {
        const style = document.createElement('style');
        style.textContent = `
            /* Reset وتنسيقات عامة */
            .YG-* {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: 'Cairo', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            }
            
            .YG-body {
                direction: rtl;
                overflow-x: hidden;
                font-family: 'Cairo', sans-serif;
            }
            
            /* الشريط العلوي */
            .YG-topbar-wrap-area {
                background: linear-gradient(90deg, #1a237e, #621982);
                padding: 10px 0;
                box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
                border-bottom: 2px solid rgba(255, 255, 255, 0.1);
                animation: fadeInDown 0.5s ease-out;
            }
            
            .YG-container-fluid {
                width: 100%;
                padding: 0 15px;
                margin: 0 auto;
                max-width: 1400px;
            }
            
            .YG-row {
                display: flex;
                flex-wrap: wrap;
            }
            
            .YG-align-items-center {
                align-items: center;
            }
            
            .YG-justify-content-center {
                justify-content: center;
            }
            
            .YG-col-lg-8, .YG-col-md-8, .YG-col-lg-4, .YG-col-md-4 {
                position: relative;
                width: 100%;
                padding: 0 15px;
            }
            
            /* روابط السوشيال ميديا */
            .YG-topbar-social-links {
                display: flex;
                flex-wrap: wrap;
                list-style: none;
                margin: 0;
                padding: 0;
                justify-content: center;
                gap: 5px;
            }
            
            .YG-topbar-social-links li {
                position: relative;
            }
            
            .YG-topbar-social-links a {
                color: #fff;
                text-decoration: none;
                display: flex;
                align-items: center;
                padding: 8px 12px;
                border-radius: 25px;
                transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                font-size: 14px;
                background: rgba(255, 255, 255, 0.08);
                border: 1px solid rgba(255, 255, 255, 0.1);
            }
            
            .YG-topbar-social-links a:hover {
                background: rgba(255, 255, 255, 0.2);
                transform: translateY(-3px);
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
            }
            
            .YG-topbar-social-links i {
                margin-left: 8px;
                font-size: 16px;
            }
            
            /* الهاتف */
            .YG-topbar-action-list {
                list-style: none;
                display: flex;
                margin: 0;
                padding: 0;
                justify-content: center;
            }
            
            .YG-topbar-action-list li {
                margin: 0;
                display: flex;
                align-items: center;
                gap: 10px;
            }
            
            .YG-topbar-action-list a {
                background: linear-gradient(45deg, #25D366, #1da851);
                color: white;
                text-decoration: none;
                padding: 10px 20px;
                border-radius: 25px;
                display: flex;
                align-items: center;
                transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                font-weight: 600;
                font-size: 15px;
                box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
            }
            
            .YG-topbar-action-list a:hover {
                transform: translateY(-3px);
                box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
            }
            
            .YG-topbar-action-list i {
                margin-left: 8px;
                font-size: 18px;
            }
            
            .YG-topbar-action-list span {
                color: #fff;
                font-size: 14px;
            }
            
            /* شريط التنقل الرئيسي */
            .YG-navbar-area {
                background-color: #fff;
                box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
                position: sticky;
                top: 0;
                z-index: 1000;
                transition: all 0.4s ease;
                animation: fadeInDown 0.5s ease-out;
            }
            
            .YG-navbar-area-with-position-relative {
                position: relative;
            }
            
            .YG-responsive-nav {
                display: none;
            }
            
            .YG-container {
                width: 100%;
                padding: 0 15px;
                margin: 0 auto;
                max-width: 1400px;
            }
            
            /* ========== اللوجو ========== */
            .YG-navbar {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: space-between;
                padding: 10px 0;
                position: relative;
            }
            
            .YG-logo {
                flex-shrink: 0;
            }
            
            .YG-logo img {
                height: 120px !important;
                width: auto;
                transition: all 0.3s ease;
                display: block;
                max-width: 100%;
                object-fit: contain;
            }
            
            .YG-aronix-nav .YG-logo {
                display: block;
            }
            
            .YG-responsive-nav .YG-logo {
                display: none;
            }
            
            /* ========== القائمة الرئيسية ========== */
            .YG-navbar-nav {
                display: flex;
                flex-direction: row;
                list-style: none;
                margin: 0;
                padding: 0;
                flex-grow: 1;
                justify-content: center;
            }
            
            .YG-nav-item {
                position: relative;
            }
            
            .YG-nav-link {
                color: #333;
                text-decoration: none;
                padding: 15px 18px;
                display: flex;
                align-items: center;
                transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                font-weight: 600;
                border-radius: 8px;
                margin: 0 3px;
                position: relative;
                font-size: 16px;
                font-family: 'Cairo', sans-serif;
            }
            
            .YG-nav-link:hover, .YG-nav-link.YG-active {
                color: #1a237e;
                background-color: rgba(26, 35, 126, 0.08);
                transform: translateY(-2px) scale(1.05);
                box-shadow: 0 5px 15px rgba(26, 35, 126, 0.1);
            }
            
            .YG-nav-link::after {
                content: '';
                position: absolute;
                bottom: 8px;
                right: 18px;
                width: 0;
                height: 2px;
                background: linear-gradient(90deg, #1a237e, #621982);
                transition: width 0.3s ease;
                border-radius: 2px;
            }
            
            .YG-nav-link:hover::after, .YG-nav-link.YG-active::after {
                width: calc(100% - 36px);
            }
            
            /* ========== القوائم المنسدلة ========== */
            .YG-dropdown-menu {
                position: absolute;
                top: 100%;
                right: 0;
                min-width: 280px;
                background-color: #fff;
                box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
                border-radius: 15px;
                list-style: none;
                padding: 20px 0;
                opacity: 0;
                visibility: hidden;
                transform: translateY(20px) scale(0.95);
                transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                z-index: 1001;
                border: 1px solid rgba(0, 0, 0, 0.05);
                overflow: hidden;
            }
            
            .YG-nav-item:hover > .YG-dropdown-menu {
                opacity: 1;
                visibility: visible;
                transform: translateY(10px) scale(1);
            }
            
            .YG-dropdown-menu::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 3px;
                background: linear-gradient(90deg, #1a237e, #621982);
                transform: scaleX(0);
                transform-origin: right;
                transition: transform 0.4s ease;
            }
            
            .YG-nav-item:hover > .YG-dropdown-menu::before {
                transform: scaleX(1);
            }
            
            .YG-dropdown-menu .YG-dropdown-menu {
                top: -20px;
                right: 100%;
                margin-right: 10px;
                transform: translateY(20px) scale(0.95);
            }
            
            .YG-dropdown-menu .YG-dropdown-menu::before {
                background: linear-gradient(90deg, #621982, #3949ab);
            }
            
            .YG-dropdown-menu li {
                width: 100%;
            }
            
            .YG-dropdown-menu .YG-nav-link {
                padding: 14px 25px;
                color: #555;
                justify-content: space-between;
                border-radius: 0;
                margin: 0;
                font-size: 15px;
                border-bottom: 1px solid rgba(0, 0, 0, 0.05);
                font-family: 'Cairo', sans-serif;
                transition: all 0.3s ease;
            }
            
            .YG-dropdown-menu .YG-nav-link:hover {
                background-color: rgba(26, 35, 126, 0.1);
                color: #1a237e;
                padding-right: 30px;
                transform: translateX(-10px);
                box-shadow: inset 5px 0 0 rgba(26, 35, 126, 0.3);
            }
            
            .YG-dropdown-menu .YG-nav-link:last-child {
                border-bottom: none;
            }
            
            /* ========== زر اللغات ========== */
            .YG-language-switcher {
                position: relative;
                margin-right: 20px;
            }
            
            .YG-language-btn {
                background: linear-gradient(90deg, #1a237e, #621982);
                color: white;
                border: none;
                padding: 10px 20px;
                border-radius: 25px;
                display: flex;
                align-items: center;
                gap: 8px;
                cursor: pointer;
                font-weight: 600;
                font-size: 14px;
                transition: all 0.3s ease;
                font-family: 'Cairo', sans-serif;
            }
            
            .YG-language-btn:hover {
                transform: translateY(-2px);
                box-shadow: 0 5px 15px rgba(26, 35, 126, 0.3);
            }
            
            .YG-language-btn i {
                font-size: 16px;
            }
            
            .YG-language-dropdown {
                position: absolute;
                top: 100%;
                left: 0;
                background: white;
                border-radius: 15px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
                padding: 10px 0;
                min-width: 150px;
                opacity: 0;
                visibility: hidden;
                transform: translateY(10px);
                transition: all 0.3s ease;
                z-index: 1002;
            }
            
            .YG-language-switcher:hover .YG-language-dropdown {
                opacity: 1;
                visibility: visible;
                transform: translateY(5px);
            }
            
            .YG-language-item {
                padding: 12px 20px;
                display: flex;
                align-items: center;
                gap: 10px;
                cursor: pointer;
                transition: all 0.3s ease;
                text-decoration: none;
                color: #333;
                font-family: 'Cairo', sans-serif;
            }
            
            .YG-language-item:hover {
                background: rgba(26, 35, 126, 0.1);
                color: #1a237e;
                padding-right: 25px;
            }
            
            .YG-language-item.active {
                background: rgba(26, 35, 126, 0.2);
                color: #1a237e;
                font-weight: 600;
            }
            
            .YG-language-flag {
                font-size: 20px;
            }
            
            /* ========== زر القائمة الجانبية ========== */
            .YG-others-options {
                display: flex;
                align-items: center;
                gap: 20px;
            }
            
            .YG-burger-menu {
                width: 35px;
                height: 30px;
                position: relative;
                cursor: pointer;
                display: none;
                flex-direction: column;
                justify-content: space-between;
                z-index: 1003;
            }
            
            .YG-burger-menu span {
                display: block;
                height: 4px;
                width: 100%;
                background: linear-gradient(90deg, #1a237e, #621982);
                border-radius: 4px;
                transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                transform-origin: right;
            }
            
            .YG-burger-menu.YG-active span:nth-child(1) {
                transform: rotate(45deg) translate(8px, 8px);
                background: #1a237e;
            }
            
            .YG-burger-menu.YG-active span:nth-child(2) {
                opacity: 0;
                transform: scale(0);
            }
            
            .YG-burger-menu.YG-active span:nth-child(3) {
                transform: rotate(-45deg) translate(8px, -8px);
                background: #1a237e;
            }
            
            /* ========== القائمة الجانبية ========== */
            .YG-sidebar-modal {
                position: fixed;
                top: 0;
                right: -100%;
                width: 350px;
                height: 100%;
                background: linear-gradient(135deg, #1a237e 0%, #621982 100%);
                z-index: 1002;
                transition: right 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                overflow-y: auto;
                padding: 0;
                box-shadow: -10px 0 40px rgba(0, 0, 0, 0.3);
            }
            
            .YG-sidebar-modal.YG-active {
                right: 0;
            }
            
            .YG-sidebar-content {
                padding: 20px;
                height: 100%;
            }
            
            .YG-sidebar-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding-bottom: 20px;
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                margin-bottom: 20px;
            }
            
            .YG-sidebar-header .YG-logo img {
                height: 80px;
                filter: brightness(0) invert(1);
            }
            
            .YG-close-sidebar {
                background: rgba(255, 255, 255, 0.1);
                border: none;
                width: 45px;
                height: 45px;
                border-radius: 50%;
                font-size: 22px;
                cursor: pointer;
                transition: all 0.3s ease;
                color: white;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .YG-close-sidebar:hover {
                background: white;
                color: #1a237e;
                transform: rotate(90deg);
            }
            
            /* ========== القائمة الجانبية للجوال ========== */
            .YG-sidebar-modal .YG-navbar-nav {
                display: flex !important;
                flex-direction: column;
                gap: 10px;
            }
            
            .YG-sidebar-modal .YG-nav-link {
                color: white !important;
                padding: 15px 20px;
                border-radius: 10px;
                background: rgba(255, 255, 255, 0.1);
                border: none;
                font-size: 16px;
                font-weight: 500;
                font-family: 'Cairo', sans-serif;
                transition: all 0.3s ease;
            }
            
            .YG-sidebar-modal .YG-nav-link:hover {
                background: rgba(255, 255, 255, 0.2);
                transform: translateX(-10px);
                color: white !important;
            }
            
            .YG-sidebar-modal .YG-dropdown-menu {
                position: static !important;
                opacity: 1 !important;
                visibility: visible !important;
                transform: none !important;
                box-shadow: none !important;
                padding-right: 15px !important;
                max-height: 0 !important;
                overflow: hidden !important;
                transition: max-height 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
                border: none !important;
                border-radius: 0 !important;
                margin-top: 10px !important;
                background: rgba(255, 255, 255, 0.05) !important;
            }
            
            .YG-sidebar-modal .YG-dropdown-menu.YG-show {
                max-height: 1000px !important;
            }
            
            .YG-sidebar-modal .YG-nav-link.has-dropdown {
                position: relative !important;
                padding-right: 50px !important;
            }
            
            .YG-sidebar-modal .YG-nav-link.has-dropdown::after {
                content: '\\f078' !important;
                font-family: 'Font Awesome 6 Free' !important;
                font-weight: 900 !important;
                position: absolute !important;
                left: 20px !important;
                top: 50% !important;
                transform: translateY(-50%) !important;
                transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
                font-size: 14px !important;
                color: white;
            }
            
            .YG-sidebar-modal .YG-nav-link.has-dropdown.YG-rotated::after {
                transform: translateY(-50%) rotate(180deg) !important;
            }
            
            .YG-sidebar-modal .YG-dropdown-menu .YG-nav-link {
                padding: 12px 20px 12px 35px !important;
                font-size: 15px !important;
                background: rgba(255, 255, 255, 0.05) !important;
            }
            
            .YG-sidebar-modal .YG-dropdown-menu .YG-dropdown-menu .YG-nav-link {
                padding-right: 50px !important;
                font-size: 14.5px !important;
                background: rgba(255, 255, 255, 0.03) !important;
            }
            
            /* ========== اللغات في القائمة الجانبية ========== */
            .YG-sidebar-languages {
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid rgba(255, 255, 255, 0.1);
            }
            
            .YG-sidebar-languages h4 {
                color: white;
                margin-bottom: 15px;
                font-size: 18px;
                font-family: 'Cairo', sans-serif;
            }
            
            .YG-language-buttons {
                display: flex;
                gap: 10px;
                flex-wrap: wrap;
            }
            
            .YG-language-btn-mobile {
                background: rgba(255, 255, 255, 0.1);
                color: white;
                border: none;
                padding: 10px 15px;
                border-radius: 8px;
                display: flex;
                align-items: center;
                gap: 8px;
                cursor: pointer;
                font-size: 14px;
                transition: all 0.3s ease;
                font-family: 'Cairo', sans-serif;
                flex: 1;
                min-width: 120px;
                justify-content: center;
            }
            
            .YG-language-btn-mobile:hover,
            .YG-language-btn-mobile.active {
                background: white;
                color: #1a237e;
                transform: translateY(-3px);
            }
            
            /* الظل عند الفتح */
            .YG-sidebar-overlay {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.5);
                z-index: 1001;
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s ease;
            }
            
            .YG-sidebar-overlay.YG-active {
                opacity: 1;
                visibility: visible;
            }
            
            /* تأثيرات الحركة */
            @keyframes fadeInDown {
                from {
                    opacity: 0;
                    transform: translateY(-20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            @keyframes pulse {
                0% {
                    transform: scale(1);
                }
                50% {
                    transform: scale(1.05);
                }
                100% {
                    transform: scale(1);
                }
            }
            
            @keyframes slideIn {
                from {
                    opacity: 0;
                    transform: translateX(20px);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
            
            /* تأثير التمرير على الهيدر */
            .YG-navbar-area.YG-scrolled {
                padding: 0;
                box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
            }
            
            .YG-navbar-area.YG-scrolled .YG-logo img {
                height: 80px !important;
            }
            
            .YG-navbar-area.YG-scrolled .YG-nav-link {
                padding: 12px 15px;
            }
            
            /* تنسيقات للشاشات المتوسطة */
            @media (max-width: 1200px) {
                .YG-nav-link {
                    padding: 12px 15px;
                    font-size: 15px;
                }
                
                .YG-logo img {
                    height: 100px !important;
                }
            }
            
            @media (max-width: 992px) {
                .YG-col-lg-8 {
                    flex: 0 0 100%;
                    max-width: 100%;
                }
                
                .YG-col-lg-4 {
                    flex: 0 0 100%;
                    max-width: 100%;
                    margin-top: 15px;
                }
                
                .YG-navbar-nav {
                    display: none !important;
                }
                
                .YG-responsive-nav {
                    display: block;
                    padding: 15px 0;
                }
                
                .YG-responsive-menu {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0;
                }
                
                .YG-burger-menu {
                    display: flex;
                    order: 1;
                }
                
                .YG-responsive-nav .YG-logo {
                    order: 2;
                    text-align: center;
                }
                
                .YG-language-switcher {
                    order: 3;
                    margin-right: 15px;
                }
                
                .YG-sidebar-modal .YG-navbar-nav {
                    display: flex !important;
                    flex-direction: column;
                    gap: 5px;
                }
                
                .YG-sidebar-modal {
                    width: 320px;
                }
                
                .YG-aronix-nav {
                    display: none;
                }
                
                .YG-responsive-nav .YG-logo {
                    display: block;
                }
                
                .YG-responsive-nav .YG-logo img {
                    height: 100px !important;
                }
            }
            
            /* تنسيقات للشاشات الصغيرة */
            @media (max-width: 768px) {
                .YG-topbar-social-links {
                    gap: 3px;
                }
                
                .YG-topbar-social-links a {
                    font-size: 0;
                    padding: 10px;
                    border-radius: 50%;
                    width: 40px;
                    height: 40px;
                    justify-content: center;
                }
                
                .YG-topbar-social-links i {
                    margin: 0;
                    font-size: 18px;
                }
                
                .YG-topbar-action-list {
                    flex-direction: column;
                    align-items: center;
                    gap: 10px;
                }
                
                .YG-topbar-action-list li {
                    flex-direction: column;
                    text-align: center;
                }
                
                .YG-topbar-action-list a {
                    padding: 10px 15px;
                    font-size: 14px;
                }
                
                .YG-responsive-nav .YG-logo img {
                    height: 90px !important;
                }
                
                .YG-sidebar-modal {
                    width: 100%;
                }
                
                .YG-sidebar-content {
                    padding: 15px;
                }
                
                .YG-language-buttons {
                    flex-direction: column;
                }
                
                .YG-language-btn-mobile {
                    min-width: 100%;
                }
            }
            
            /* تنسيقات للشاشات الدقيقة */
            @media (max-width: 576px) {
                .YG-topbar-wrap-area {
                    padding: 8px 0;
                }
                
                .YG-topbar-social-links a {
                    width: 36px;
                    height: 36px;
                    padding: 8px;
                }
                
                .YG-topbar-social-links i {
                    font-size: 16px;
                }
                
                .YG-topbar-action-list a {
                    font-size: 13px;
                    padding: 8px 12px;
                }
                
                .YG-topbar-action-list i {
                    font-size: 16px;
                }
                
                .YG-responsive-nav .YG-logo img {
                    height: 80px !important;
                }
                
                .YG-language-switcher {
                    margin-right: 10px;
                }
                
                .YG-language-btn {
                    padding: 8px 15px;
                    font-size: 13px;
                }
            }
            
            /* تحسينات للأجهزة التي تدعم اللمس */
            @media (hover: none) {
                .YG-nav-item:hover > .YG-dropdown-menu {
                    opacity: 0;
                    visibility: hidden;
                }
                
                .YG-nav-link:hover, .YG-topbar-social-links a:hover {
                    transform: none;
                }
            }
        `;
        
        document.head.appendChild(style);
    }
    
    // إنشاء الشريط العلوي
    function YG_createTopbar() {
        const topbar = document.createElement('div');
        topbar.className = 'YG-topbar-wrap-area';
        topbar.innerHTML = `
            <div class="YG-container-fluid">
                <div class="YG-row YG-align-items-center YG-justify-content-center">
                    <div class="YG-col-lg-8 YG-col-md-8">
                        <ul class="YG-topbar-social-links">
                            ${YG_SETTINGS.socialLinks.map(link => `
                                <li><a href="${link.url}" target="_blank" title="${link.text}">${link.emoji}<i class="${link.icon}"></i> ${link.text}</a></li>
                            `).join('')}
                        </ul>
                    </div>
                    <div class="YG-col-lg-4 YG-col-md-4">
                        <ul class="YG-topbar-action-list">
                            <li> <i class="bi bi-telephone-fill"></i> <span>الهاتف</span> <a href="tel:${YG_SETTINGS.phoneNumber}">📞 ${YG_SETTINGS.phoneNumber}</a> </li>
                        </ul>
                    </div>
                </div>
            </div>
        `;
        
        return topbar;
    }
    
    // إنشاء عنصر قائمة
    function YG_createMenuItem(item, depth = 0) {
        const li = document.createElement('li');
        li.className = 'YG-nav-item';
        
        const link = document.createElement('a');
        link.className = 'YG-nav-link';
        link.href = item.url || '#';
        link.innerHTML = `${item.text} ${item.items && item.items.length > 0 ? '<i class="fas fa-chevron-down"></i>' : ''}`;
        
        li.appendChild(link);
        
        if (item.items && item.items.length > 0) {
            const dropdown = document.createElement('ul');
            dropdown.className = 'YG-dropdown-menu';
            
            item.items.forEach(subItem => {
                dropdown.appendChild(YG_createMenuItem(subItem, depth + 1));
            });
            
            li.appendChild(dropdown);
        }
        
        return li;
    }
    
    // إنشاء قائمة التنقل الرئيسية
    function YG_createNavbar() {
        const navbar = document.createElement('div');
        navbar.className = 'YG-navbar-area YG-navbar-area-with-position-relative';
        navbar.id = 'YG-navbarArea';
        
        navbar.innerHTML = `
            <!-- نسخة الجوال -->
            <div class="YG-responsive-nav">
                <div class="YG-container">
                    <div class="YG-responsive-menu">
                        <div class="YG-burger-menu" id="YG-burgerMenu">
                            <span></span><span></span><span></span>
                        </div>
                        <div class="YG-logo">
                            <a href="https://ygbrandmaker.site">
                                <img src="${YG_SETTINGS.logoUrl}" alt="YG Brand Maker">
                            </a>
                        </div>
                        <!-- زر اللغات في الجوال -->
                        <div class="YG-language-switcher">
                            <button class="YG-language-btn">
                                <span>🇸🇦 العربية</span>
                                <i class="fas fa-chevron-down"></i>
                            </button>
                            <div class="YG-language-dropdown">
                                ${YG_SETTINGS.languages.map(lang => `
                                    <a href="${lang.url}" class="YG-language-item ${lang.code === 'ar' ? 'active' : ''}">
                                        <span class="YG-language-flag">${lang.flag}</span>
                                        <span>${lang.name}</span>
                                    </a>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- نسخة الكمبيوتر -->
            <div class="YG-aronix-nav">
                <div class="YG-container">
                    <nav class="YG-navbar YG-navbar-expand-md YG-navbar-light">
                        <!-- اللوجو على اليمين -->
                        <div class="YG-logo">
                            <a href="https://ygbrandmaker.site">
                                <img src="${YG_SETTINGS.logoUrl}" alt="YG Brand Maker">
                            </a>
                        </div>
                        
                        <!-- القائمة الرئيسية -->
                        <div class="YG-collapse YG-navbar-collapse YG-mean-menu" id="YG-navbarSupportedContent">
                            <ul class="YG-navbar-nav" id="YG-mainNav">
                                <!-- سيتم إضافة القوائم ديناميكياً -->
                            </ul>
                            
                            <div class="YG-others-options">
                                <!-- زر اللغات في الكمبيوتر -->
                                <div class="YG-language-switcher">
                                    <button class="YG-language-btn">
                                        <span>🇸🇦 العربية</span>
                                        <i class="fas fa-chevron-down"></i>
                                    </button>
                                    <div class="YG-language-dropdown">
                                        ${YG_SETTINGS.languages.map(lang => `
                                            <a href="${lang.url}" class="YG-language-item ${lang.code === 'ar' ? 'active' : ''}">
                                                <span class="YG-language-flag">${lang.flag}</span>
                                                <span>${lang.name}</span>
                                            </a>
                                        `).join('')}
                                    </div>
                                </div>
                                
                                <div class="YG-cart-items"></div>
                                <div class="YG-burger-menu" id="YG-desktopBurgerMenu">
                                    <span></span><span></span><span></span>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        `;
        
        return navbar;
    }
    
    // إنشاء القائمة الجانبية
    function YG_createSidebar() {
        const sidebar = document.createElement('div');
        sidebar.className = 'YG-sidebar-modal';
        sidebar.id = 'YG-sidebarModal';
        
        sidebar.innerHTML = `
            <div class="YG-sidebar-content">
                <div class="YG-sidebar-header">
                    <div class="YG-logo">
                        <a href="https://ygbrandmaker.site">
                            <img src="${YG_SETTINGS.logoUrl}" alt="YG Brand Maker">
                        </a>
                    </div>
                    <button class="YG-close-sidebar" id="YG-closeSidebar">✕</button>
                </div>
                
                <!-- القائمة الجانبية -->
                <ul class="YG-navbar-nav" id="YG-sidebarNav">
                    <!-- سيتم إضافة القوائم ديناميكياً -->
                </ul>
                
                <!-- قسم اللغات في القائمة الجانبية -->
                <div class="YG-sidebar-languages">
                    <h4>🌍 اختر اللغة</h4>
                    <div class="YG-language-buttons">
                        ${YG_SETTINGS.languages.slice(0, 5).map((lang, index) => `
                            <button class="YG-language-btn-mobile ${index === 0 ? 'active' : ''}">
                                <span>${lang.flag} ${lang.name}</span>
                            </button>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
        
        return sidebar;
    }
    
    // تعبئة القوائم
    function YG_populateMenus() {
        const mainNav = document.getElementById('YG-mainNav');
        const sidebarNav = document.getElementById('YG-sidebarNav');
        
        if (mainNav) {
            YG_SETTINGS.menuItems.forEach(item => {
                mainNav.appendChild(YG_createMenuItem(item));
            });
        }
        
        if (sidebarNav) {
            const clonedItems = YG_SETTINGS.menuItems.map(item => ({...item}));
            clonedItems.forEach(item => {
                sidebarNav.appendChild(YG_createMenuItem(item));
            });
        }
    }
    
    // تهيئة المكون
    function YG_init() {
        // التحقق من وجود Font Awesome
        if (!document.querySelector('link[href*="font-awesome"]') && !document.querySelector('link[href*="fontawesome"]')) {
            const fontAwesome = document.createElement('link');
            fontAwesome.rel = 'stylesheet';
            fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
            document.head.appendChild(fontAwesome);
        }
        
        // التحقق من وجود Bootstrap Icons
        if (!document.querySelector('link[href*="bootstrap-icons"]')) {
            const bootstrapIcons = document.createElement('link');
            bootstrapIcons.rel = 'stylesheet';
            bootstrapIcons.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css';
            document.head.appendChild(bootstrapIcons);
        }
        
        // التحقق من وجود خط Cairo
        if (!document.querySelector('link[href*="fonts.googleapis.com/css2?family=Cairo"]')) {
            const cairoFont = document.createElement('link');
            cairoFont.rel = 'stylesheet';
            cairoFont.href = 'https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800;900&display=swap';
            document.head.appendChild(cairoFont);
        }
        
        // إضافة الأنماط
        YG_addStyles();
        
        // إنشاء وإضافة العناصر إلى body
        document.body.insertBefore(YG_createTopbar(), document.body.firstChild);
        document.body.insertBefore(YG_createNavbar(), document.body.firstChild.nextSibling);
        document.body.appendChild(YG_createSidebar());
        
        // تعبئة القوائم
        YG_populateMenus();
        
        // تهيئة JavaScript
        YG_initJavaScript();
    }
    
    // تهيئة JavaScript للتفاعلات
    function YG_initJavaScript() {
        // العناصر الرئيسية
        const burgerMenu = document.getElementById('YG-burgerMenu');
        const desktopBurgerMenu = document.getElementById('YG-desktopBurgerMenu');
        const sidebarModal = document.getElementById('YG-sidebarModal');
        const closeSidebar = document.getElementById('YG-closeSidebar');
        const navbarArea = document.getElementById('YG-navbarArea');
        const sidebarNav = document.getElementById('YG-sidebarNav');
        const mainNav = document.getElementById('YG-mainNav');
        
        // إنشاء القوائم الجانبية ديناميكياً
        function createMobileMenu() {
            if (!mainNav) return;
            
            const clonedNav = mainNav.cloneNode(true);
            
            function processDropdowns(element) {
                element.querySelectorAll('.YG-nav-link').forEach(link => {
                    const hasDropdown = link.nextElementSibling && 
                                      link.nextElementSibling.classList.contains('YG-dropdown-menu');
                    
                    if (hasDropdown) {
                        link.classList.add('has-dropdown');
                        
                        const icon = link.querySelector('.fa-chevron-down');
                        if (icon) icon.style.display = 'none';
                        
                        const dropdown = link.nextElementSibling;
                        if (dropdown) {
                            processDropdowns(dropdown);
                        }
                    }
                });
            }
            
            processDropdowns(clonedNav);
            
            sidebarNav.innerHTML = '';
            sidebarNav.appendChild(clonedNav);
            
            setupAllMobileDropdowns();
        }
        
        // إعداد جميع القوائم المنسدلة
        function setupAllMobileDropdowns() {
            const allDropdownLinks = sidebarNav.querySelectorAll('.YG-nav-link.has-dropdown');
            
            allDropdownLinks.forEach(link => {
                link.removeEventListener('click', handleMobileDropdownClick);
                link.addEventListener('click', handleMobileDropdownClick);
            });
        }
        
        // معالجة النقر على القوائم المنسدلة على الجوال
        function handleMobileDropdownClick(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const link = this;
            const dropdown = link.nextElementSibling;
            
            if (dropdown && dropdown.classList.contains('YG-dropdown-menu')) {
                const isTopLevel = !link.closest('.YG-dropdown-menu');
                
                if (isTopLevel) {
                    document.querySelectorAll('.YG-sidebar-modal > .YG-navbar-nav > .YG-nav-item > .YG-nav-link.has-dropdown').forEach(otherLink => {
                        if (otherLink !== link) {
                            const otherDropdown = otherLink.nextElementSibling;
                            if (otherDropdown) {
                                otherDropdown.classList.remove('YG-show');
                                otherLink.classList.remove('YG-rotated');
                                
                                otherDropdown.querySelectorAll('.YG-dropdown-menu.YG-show').forEach(innerDropdown => {
                                    innerDropdown.classList.remove('YG-show');
                                    const innerLink = innerDropdown.previousElementSibling;
                                    if (innerLink) innerLink.classList.remove('YG-rotated');
                                });
                            }
                        }
                    });
                }
                
                const isOpen = dropdown.classList.contains('YG-show');
                dropdown.classList.toggle('YG-show');
                link.classList.toggle('YG-rotated');
                
                if (isOpen && isTopLevel) {
                    dropdown.querySelectorAll('.YG-dropdown-menu.YG-show').forEach(innerDropdown => {
                        innerDropdown.classList.remove('YG-show');
                        const innerLink = innerDropdown.previousElementSibling;
                        if (innerLink) innerLink.classList.remove('YG-rotated');
                    });
                }
            }
        }
        
        // إغلاق جميع القوائم المنسدلة
        function closeAllDropdowns() {
            document.querySelectorAll('.YG-dropdown-menu.YG-show').forEach(menu => {
                menu.classList.remove('YG-show');
            });
            
            document.querySelectorAll('.YG-nav-link.has-dropdown.YG-rotated').forEach(link => {
                link.classList.remove('YG-rotated');
            });
        }
        
        // فتح/إغلاق القائمة الجانبية
        function openSidebar() {
            sidebarModal.classList.add('YG-active');
            burgerMenu.classList.add('YG-active');
            desktopBurgerMenu.classList.add('YG-active');
            document.body.style.overflow = 'hidden';
            
            createMobileMenu();
            
            const overlay = document.createElement('div');
            overlay.className = 'YG-sidebar-overlay';
            overlay.id = 'YG-sidebarOverlay';
            document.body.appendChild(overlay);
            
            setTimeout(() => {
                overlay.classList.add('YG-active');
            }, 10);
            
            overlay.addEventListener('click', closeSidebarFunc);
        }
        
        function closeSidebarFunc() {
            sidebarModal.classList.remove('YG-active');
            burgerMenu.classList.remove('YG-active');
            desktopBurgerMenu.classList.remove('YG-active');
            document.body.style.overflow = '';
            
            closeAllDropdowns();
            
            const overlay = document.getElementById('YG-sidebarOverlay');
            if (overlay) {
                overlay.remove();
            }
        }
        
        // إضافة أحداث النقر
        burgerMenu.addEventListener('click', openSidebar);
        desktopBurgerMenu.addEventListener('click', openSidebar);
        closeSidebar.addEventListener('click', closeSidebarFunc);
        
        // إغلاق القائمة عند الضغط على زر Esc
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closeSidebarFunc();
            }
        });
        
        // تأثير التمرير على الهيدر
        let lastScrollTop = 0;
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > 50) {
                navbarArea.classList.add('YG-scrolled');
            } else {
                navbarArea.classList.remove('YG-scrolled');
            }
            
            if (window.innerWidth <= 992) {
                if (scrollTop > lastScrollTop && scrollTop > 100) {
                    navbarArea.style.transform = 'translateY(-100%)';
                    navbarArea.style.transition = 'transform 0.3s ease';
                } else {
                    navbarArea.style.transform = 'translateY(0)';
                }
            }
            
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        });
        
        // تأثير hover على روابط السوشيال ميديا
        const socialLinks = document.querySelectorAll('.YG-topbar-social-links a');
        socialLinks.forEach(link => {
            link.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-4px) scale(1.05)';
            });
            
            link.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
        
        // التعامل مع القوائم المنسدلة على الشاشات الكبيرة
        function handleDesktopDropdowns() {
            const navItems = document.querySelectorAll('.YG-nav-item');
            
            if (window.innerWidth > 992) {
                navItems.forEach(item => {
                    item.addEventListener('mouseenter', function() {
                        const dropdown = this.querySelector('.YG-dropdown-menu');
                        if (dropdown) {
                            dropdown.style.opacity = '1';
                            dropdown.style.visibility = 'visible';
                            dropdown.style.transform = 'translateY(10px) scale(1)';
                        }
                    });
                    
                    item.addEventListener('mouseleave', function() {
                        const dropdown = this.querySelector('.YG-dropdown-menu');
                        if (dropdown) {
                            dropdown.style.opacity = '0';
                            dropdown.style.visibility = 'hidden';
                            dropdown.style.transform = 'translateY(20px) scale(0.95)';
                        }
                    });
                });
            }
        }
        
        // إغلاق القائمة الجانبية عند النقر على رابط
        sidebarNav.addEventListener('click', function(e) {
            const link = e.target.closest('a');
            if (link && !link.classList.contains('has-dropdown')) {
                closeSidebarFunc();
            }
        });
        
        // تبديل اللغات في القائمة الجانبية
        const mobileLangButtons = document.querySelectorAll('.YG-language-btn-mobile');
        mobileLangButtons.forEach(button => {
            button.addEventListener('click', function() {
                mobileLangButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                const langText = this.querySelector('span').textContent;
                const langBtns = document.querySelectorAll('.YG-language-btn span');
                langBtns.forEach(btn => {
                    if (btn.textContent.includes('🇸🇦') || btn.textContent.includes('🇺🇸') || 
                        btn.textContent.includes('🇫🇷') || btn.textContent.includes('🇩🇪')) {
                        btn.textContent = langText;
                    }
                });
                
                closeSidebarFunc();
            });
        });
        
        // تبديل اللغات في نسخة الكمبيوتر
        const desktopLangItems = document.querySelectorAll('.YG-language-item');
        desktopLangItems.forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                desktopLangItems.forEach(el => el.classList.remove('active'));
                this.classList.add('active');
                
                const langText = this.querySelector('span:nth-child(2)').textContent;
                const flag = this.querySelector('.YG-language-flag').textContent;
                const langBtns = document.querySelectorAll('.YG-language-btn span');
                langBtns.forEach(btn => {
                    btn.textContent = `${flag} ${langText}`;
                });
            });
        });
        
        // تأثير زوم عند الدخول للقوائم
        const dropdownLinks = document.querySelectorAll('.YG-dropdown-menu .YG-nav-link');
        dropdownLinks.forEach(link => {
            link.addEventListener('mouseenter', function() {
                this.style.transform = 'translateX(-10px) scale(1.02)';
            });
            
            link.addEventListener('mouseleave', function() {
                this.style.transform = 'translateX(0) scale(1)';
            });
        });
        
        // إعداد القوائم المنسدلة للشاشات الكبيرة
        handleDesktopDropdowns();
        
        // عند تغيير حجم الشاشة
        window.addEventListener('resize', function() {
            handleDesktopDropdowns();
            
            if (window.innerWidth <= 992) {
                createMobileMenu();
            }
        });
        
        // إضافة تأثير fadeIn عند تحميل الصفحة
        const headerElements = document.querySelectorAll('.YG-topbar-wrap-area, .YG-navbar-area');
        headerElements.forEach(el => {
            el.style.animation = 'fadeInDown 0.6s ease-out';
        });
        
        console.log('✅ مكون YG Header جاهز للاستخدام!');
    }
    
    // بدء التشغيل عند فتح body
    function YG_start() {
        // إضافة علامة لمعرفة أن المكون تم تحميله
        if (window.YG_HEADER_LOADED) return;
        window.YG_HEADER_LOADED = true;
        
        // تشغيل التهيئة
        YG_init();
    }
    
    // بدء التشغيل فوراً
    if (document.body) {
        YG_start();
    } else {
        document.addEventListener('DOMContentLoaded', YG_start);
    }
    
    // إضافة دالة للتحكم من الخارج
    window.YG_Header = {
        reload: function() {
            YG_start();
        },
        getSettings: function() {
            return {...YG_SETTINGS};
        },
        updateLogo: function(newLogoUrl) {
            YG_SETTINGS.logoUrl = newLogoUrl;
            const logos = document.querySelectorAll('.YG-logo img');
            logos.forEach(logo => {
                logo.src = newLogoUrl;
            });
        }
    };
})();


