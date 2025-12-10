// YG Brand Maker Navigation System - JavaScript Dynamic Injection
(function() {
    'use strict';
    
    // إنشاء الشريط العلوي
    function YG_createTopBar() {
        return `
        <div class="YG-topbar-wrap-area">
            <div class="YG-container-fluid">
                <div class="YG-row YG-align-items-center YG-justify-content-center">
                    <div class="YG-col-lg-8 YG-col-md-8">
                        <ul class="YG-topbar-social-links">
                            <li><a href="https://www.fb.com/YGBrandMaker" target="_blank" title="فيسبوك"><i class="fab fa-facebook"></i> فيسبوك</a></li>
                            <li><a href="https://twitter.com/YGBrandMaker" target="_blank" title="تويتر"><i class="fab fa-twitter"></i> تويتر</a></li>
                            <li><a href="https://www.linkedin.com/company/ygbrandmaker/" target="_blank" title="لينكدإن"><i class="fab fa-linkedin"></i> لينكدإن</a></li>
                            <li><a href="https://www.instagram.com/ygbrandmaker/" target="_blank" title="إنستغرام"><i class="fab fa-instagram"></i> إنستغرام</a></li>
                            <li><a href="https://t.me/YGBrandMaker" target="_blank" title="تليجرام"><i class="fab fa-telegram"></i> تليجرام</a></li>
                            <li><a href="https://www.tiktok.com/@ygbrandmaker" target="_blank" title="تيك توك"><i class="fab fa-tiktok"></i> تيك توك</a></li>
                            <li><a href="#" target="_blank" title="سناب شات"><i class="fab fa-snapchat"></i> سناب شات</a></li>
                            <li><a href="https://wa.me/201030459067" target="_blank" title="واتساب"><i class="fab fa-whatsapp"></i> واتساب</a></li>
                        </ul>
                    </div>
                    <div class="YG-col-lg-4 YG-col-md-4">
                        <ul class="YG-topbar-action-list">
                            <li> <a href="tel:01030459067"><i class="bi bi-telephone-fill"></i> 01030459067</a> </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>`;
    }

    // إنشاء شريط التنقل الرئيسي
    function YG_createNavbar() {
        return `
        <div class="YG-navbar-area YG-navbar-area-with-position-relative" id="YG_navbarArea">
            <div class="YG-responsive-nav">
                <div class="YG-container">
                    <div class="YG-responsive-menu">
                        <div class="YG-logo">
                            <a href="https://ygbrandmaker.site">
                                <img src="https://ygbrandmaker.site/logo.gif" alt="YG Brand Maker" 
                                     onerror="this.onerror=null; this.src='https://ygbrandmaker.site/logo.gif'">
                            </a>
                        </div>
                        <div class="YG-burger-menu" id="YG_burgerMenu">
                            <span></span><span></span><span></span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="YG-aronix-nav">
                <div class="YG-container-fluid">
                    <nav class="YG-navbar YG-navbar-expand-md YG-navbar-light">
                        <div class="YG-logo">
                            <a href="https://ygbrandmaker.site">
                                <img src="https://ygbrandmaker.site/logo.gif" alt="YG Brand Maker" 
                                     onerror="this.onerror=null; this.src='https://ygbrandmaker.site/logo.gif'">
                            </a>
                        </div>
                        <div class="YG-collapse YG-navbar-collapse YG-mean-menu" id="YG_navbarSupportedContent">
                            <ul class="YG-navbar-nav">
                                <li class="YG-nav-item"> 
                                    <a href="https://ygbrandmaker.site" class="YG-nav-link">🏠 الرئيسية</a> 
                                </li>
                                
                                <!-- ركن التسويق -->
                                <li class="YG-nav-item"> 
                                    <a href="#" class="YG-nav-link YG-active"> 📢 ركن التسويق <i class="fas fa-chevron-down"></i> </a>
                                    <ul class="YG-dropdown-menu">
                                        <li class="YG-nav-item"> 
                                            <a href="https://ygbrandmaker.site/marketing/E-marketing-services" class="YG-nav-link"> 🚀 خدمات التسويق الالكتروني </a> 
                                        </li>
                                        <li class="YG-nav-item">
                                            <a href="https://ygbrandmaker.site/marketing/e-commerce-solutions" class="YG-nav-link">🛒 حلول التجارة الإلكترونية</a>
                                        </li>
                                        <li class="YG-nav-item">
                                            <a href="https://ygbrandmaker.site/marketing/social-media-campaign" class="YG-nav-link YG-active"> 📱 حملات السوشيال ميديا</a> 
                                        </li>
                                        <li class="YG-nav-item">
                                            <a href="https://ygbrandmaker.site/marketing/seo" class="YG-nav-link">🔍 التسويق عبر محركات البحث SEO</a>
                                        </li>
                                        <li class="YG-nav-item">
                                            <a href="https://ygbrandmaker.site/marketing/content-creation" class="YG-nav-link">✍️ كتابة المحتوي</a>
                                        </li>
                                        
                                        <li class="YG-nav-item"> 
                                            <a href="#" class="YG-nav-link YG-active"> 📲 تسويق السوشيل ميديا<i class="fas fa-chevron-down"></i> </a>
                                            <ul class="YG-dropdown-menu">
                                                <li class="YG-nav-item">
                                                    <a href="https://ygbrandmaker.site/marketing/facebook-marketing" class="YG-nav-link">📘 التسويق عبر الفيسبوك</a>
                                                </li>
                                                <li class="YG-nav-item">
                                                    <a href="https://ygbrandmaker.site/marketing/linkedin-marketing" class="YG-nav-link">💼 التسويق عبر لينكد ان</a>
                                                </li>
                                                <li class="YG-nav-item">
                                                    <a href="https://ygbrandmaker.site/marketing/Telegram-marketing" class="YG-nav-link">📨 التسويق عبر تلجرام</a> 
                                                </li>
                                                <li class="YG-nav-item">
                                                    <a href="https://ygbrandmaker.site/marketing/instagram-marketing" class="YG-nav-link">📸 التسويق عبر انستجرام</a> 
                                                </li>
                                                <li class="YG-nav-item">
                                                    <a href="https://ygbrandmaker.site/marketing/Twitter-Marketing" class="YG-nav-link">🐦 التسويق عبر تويتر</a>
                                                </li>
                                                <li class="YG-nav-item">
                                                    <a href="https://ygbrandmaker.site/marketing/Snapchat-Marketing" class="YG-nav-link">👻 التسويق عبر سناب شات</a>
                                                </li>
                                                <li class="YG-nav-item">
                                                    <a href="https://ygbrandmaker.site/marketing/TikTok-Marketing" class="YG-nav-link">🎵 التسويق عبر تيك توك</a>
                                                </li>
                                                <li class="YG-nav-item">
                                                    <a href="https://ygbrandmaker.site/marketing/Google-Adwords" class="YG-nav-link">🔍 التسويق عبر جوجل</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                
                                <!-- ركن البرمجة -->
                                <li class="YG-nav-item"> 
                                    <a href="#" class="YG-nav-link"> 💻 ركن البرمجة <i class="fas fa-chevron-down"></i> </a>
                                    <ul class="YG-dropdown-menu">
                                        <li class="YG-nav-item"> 
                                            <a href="#" class="YG-nav-link"> 🌐 ركن برمجة المواقع <i class="fas fa-chevron-down"></i> </a>
                                            <ul class="YG-dropdown-menu">
                                                <li class="YG-nav-item"> 
                                                    <a href="https://ygbrandmaker.site/web/design-educational-website" class="YG-nav-link"> 🎓 تصميم المواقع الالكترونية</a>
                                                </li>
                                                <li class="YG-nav-item"> 
                                                    <a href="https://ygbrandmaker.site/web/design-company-website" class="YG-nav-link"> 🏢 تصميم موقع شركة</a>
                                                </li>
                                                <li class="YG-nav-item"> 
                                                    <a href="https://ygbrandmaker.site/web/design-news-website" class="YG-nav-link"> 📰 تصميم موقع اخباري</a>
                                                </li>
                                                <li class="YG-nav-item"> 
                                                    <a href="https://ygbrandmaker.site/web/design-restaurant-website" class="YG-nav-link"> 🍽️ تصميم موقع مطعم</a>
                                                </li>
                                                <li class="YG-nav-item"> 
                                                    <a href="https://ygbrandmaker.site/web/design-educational-website" class="YG-nav-link"> 📚 تصميم موقع تعليمي</a>
                                                </li>
                                                <li class="YG-nav-item"> 
                                                    <a href="https://ygbrandmaker.site/web/design-tourist-website" class="YG-nav-link"> 🗺️ تصميم موقع سياحي</a>
                                                </li>
                                                <li class="YG-nav-item"> 
                                                    <a href="https://ygbrandmaker.site/web/design-real-estate-website" class="YG-nav-link"> 🏠 تصميم موقع عقاري</a>
                                                </li>
                                                <li class="YG-nav-item"> 
                                                    <a href="https://ygbrandmaker.site/web/design-clinic-website" class="YG-nav-link"> 🏥 تصميم موقع طبي</a>
                                                </li>
                                                <li class="YG-nav-item"> 
                                                    <a href="https://ygbrandmaker.site/web/design-sports-website" class="YG-nav-link"> ⚽ تصميم موقع رياضي</a>
                                                </li>
                                                <li class="YG-nav-item"> 
                                                    <a href="https://ygbrandmaker.site/web/design-law-firm-website" class="YG-nav-link"> ⚖️ تصميم موقع محاماة</a>
                                                </li>
                                                <li class="YG-nav-item"> 
                                                    <a href="https://ygbrandmaker.site/web/design-car-website" class="YG-nav-link"> 🚗 تصميم موقع معرض سيارات</a>
                                                </li>
                                                <li class="YG-nav-item"> 
                                                    <a href="https://ygbrandmaker.site/web/design-online-store" class="YG-nav-link"> 🛒 تصميم متاجر الكترونية </a>
                                                </li>
                                                <li class="YG-nav-item"> 
                                                    <a href="" class="YG-nav-link"> 🔧 تصميم متجر ووردبريس </a>
                                                </li>
                                                <li class="YG-nav-item"> 
                                                    <a href="" class="YG-nav-link"> ⚙️ تصميم متجر ماجنتو </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="YG-nav-item"> 
                                            <a href="#" class="YG-nav-link"> 📱 ركن برمجة التطبيقات<i class="fas fa-chevron-down"></i> </a>
                                            <ul class="YG-dropdown-menu">
                                                <li class="YG-nav-item"> <a href="" class="YG-nav-link">💊 تصميم تطبيق وتوصيل أدوية للصيدلية </a></li>
                                                <li class="YG-nav-item"> <a href="" class="YG-nav-link">🏫 تصميم تطبيق مدرسة </a></li>
                                                <li class="YG-nav-item"> <a href="" class="YG-nav-link"> 🚕 تطبيق مثل اوبر وكريم وتوصيل ركاب </a></li>
                                                <li class="YG-nav-item"> <a href="" class="YG-nav-link">📦 تصميم تطبيق توصيل طلبات </a></li>
                                                <li class="YG-nav-item"> <a href="" class="YG-nav-link"> 🏘️ تصميم تطبيق عقاري مثل عقار ماب </a></li>
                                                <li class="YG-nav-item"> <a href="" class="YG-nav-link"> 🏪 تصميم تطبيق إعلانات بيع وشراء مثل حراج </a></li>
                                                <li class="YG-nav-item"> <a href="" class="YG-nav-link">✈️ تصميم تطبيق سياحى مثل Tripadvisor </a></li>
                                                <li class="YG-nav-item"> <a href="" class="YG-nav-link">👕 تصميم متجر بيع ملابس أونلاين </a></li>
                                                <li class="YG-nav-item"> <a href="" class="YG-nav-link"> 📦 تصميم تطبيق توصيل طرود لشركة شحن وتوصيل </a></li>
                                                <li class="YG-nav-item"> <a href="" class="YG-nav-link"> 📚 تصميم تطبيق مكتبة إلكترونية </a></li>
                                                <li class="YG-nav-item"> <a href="" class="YG-nav-link">🚗 تصميم تطبيق تأجير سيارات مثل درايف </a></li>
                                                <li class="YG-nav-item"> <a href="" class="YG-nav-link"> 📖 تصميم تطبيق مصحف قرءان كريم </a></li>
                                                <li class="YG-nav-item"> <a href="" class="YG-nav-link"> 👥 تصميم متجر الكتروني متعدد التجار </a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                
                                <!-- ركن التصميمات -->
                                <li class="YG-nav-item">
                                    <a href="#" class="YG-nav-link"> 🎨 ركن التصميمات <i class="fas fa-chevron-down"></i></a>
                                    <ul class="YG-dropdown-menu">
                                        <!-- تصميمات الهوية البصرية -->
                                        <li class="YG-nav-item"> 
                                            <a href="#" class="YG-nav-link">🎭 ركن تصميمات الهوية البصرية<i class="fas fa-chevron-down"></i></a>
                                            <ul class="YG-dropdown-menu">
                                                <li class="YG-nav-item"> 
                                                    <a href="https://ygbrandmaker.site/Graphic/portfolio-design-contracting" class="YG-nav-link"> 📁 تصميم بورتفوليو</a>
                                                </li>
                                                <li class="YG-nav-item"> <a href="" class="YG-nav-link">🖋️ تصميم ختم </a></li>
                                                <li class="YG-nav-item"> 
                                                    <a href="https://ygbrandmaker.site/Graphic/design-company-stamp" class="YG-nav-link"> 📝 تصميم ملصق اعلاني ارشادي </a> 
                                                </li>
                                                <li class="YG-nav-item"> 
                                                    <a href="https://ygbrandmaker.site/Graphic/design-gift-coupon" class="YG-nav-link">🎫 تصميم كوبون هدية </a>
                                                </li>
                                                <li class="YG-nav-item"> <a href="#" class="YG-nav-link"> 📊 مقاسات وابعاد ملف تعريفي للشركة جاهز بوربوينت</a></li>
                                                <li class="YG-nav-item"> 
                                                    <a href="https://ygbrandmaker.site/Graphic/design-company-sign" class="YG-nav-link">🏢 تصميم يافطة شركة من الداخل والخارج</a>
                                                </li>
                                                <li class="YG-nav-item"> 
                                                    <a href="https://ygbrandmaker.site/Graphic/design-company-notebook" class="YG-nav-link">📓 تصميم نوت بوك جذابة باسم الشركة </a>
                                                </li>
                                                <li class="YG-nav-item"> 
                                                    <a href="https://ygbrandmaker.site/Graphic/design-new-year-calendar" class="YG-nav-link"> 📅 تصميم نتيجة العام الجديد 2024</a>
                                                </li>
                                                <li class="YG-nav-item"> 
                                                    <a href="https://ygbrandmaker.site/Graphic/design-email-signature" class="YG-nav-link">📧 تصميم توقيع البريد الالكتروني</a>
                                                </li>
                                                <li class="YG-nav-item"> 
                                                    <a href="https://ygbrandmaker.site/Graphic/design-advertising-pens" class="YG-nav-link"> ✏️ تصميم اقلام شركة للدعاية </a>
                                                </li>
                                                <li class="YG-nav-item"> 
                                                    <a href="https://ygbrandmaker.site/Graphic/design-company-rollup" class="YG-nav-link">📜 تصميم رول اب </a> 
                                                </li>
                                                <li class="YG-nav-item"> 
                                                    <a href="https://ygbrandmaker.site/Graphic/design-uniforms-for-employees-and-companies" class="YG-nav-link"> 👔 تصميم زي عمل للموظفين والشركات </a>
                                                </li>
                                                <li class="YG-nav-item"> 
                                                    <a href="https://ygbrandmaker.site/Graphic/design-advertising-flyer" class="YG-nav-link">📄 تصميم فلاير اعلاني flyer </a>
                                                </li>
                                            </ul>
                                        </li>
                                        
                                        <!-- تصميمات المطبوعات الورقية -->
                                        <li class="YG-nav-item"> 
                                            <a href="#" class="YG-nav-link">📄 تصميمات المطبوعات الورقية<i class="fas fa-chevron-down"></i></a>
                                            <ul class="YG-dropdown-menu">
                                                <li class="YG-nav-item"> 
                                                    <a href="https://ygbrandmaker.site/Graphic/design-payment-receipts" class="YG-nav-link">🧾 تصميم ايصال دفع </a>
                                                </li>
                                                <li class="YG-nav-item"> 
                                                    <a href="https://ygbrandmaker.site/Graphic/design-receipt" class="YG-nav-link"> 🧾 تصميم ايصال قبض </a>
                                                </li>
                                                <li class="YG-nav-item"> 
                                                    <a href="https://ygbrandmaker.site/Graphic/design-measure-performance" class="YG-nav-link"> 📊 تصميم تقرير للعمل لقياس الاداء </a>
                                                </li>
                                                <li class="YG-nav-item"> 
                                                    <a href="https://ygbrandmaker.site/Graphic/design-folder" class="YG-nav-link"> 📁 تصميم حافظة اوراق فولدر </a>
                                                </li>
                                                <li class="YG-nav-item"> 
                                                    <a href="https://ygbrandmaker.site/Graphic/design-wedding-invitation-and-attending-conferences" class="YG-nav-link"> 💌 تصميم دعوة فرح وحضور مؤتمرات</a>
                                                </li>
                                                <li class="YG-nav-item"> 
                                                    <a href="https://ygbrandmaker.site/Graphic/design-company-invoice" class="YG-nav-link"> 📑 تصميم دفتر فواتير شركة </a>
                                                </li>
                                                <li class="YG-nav-item"> 
                                                    <a href="https://ygbrandmaker.site/Graphic/design-company-rollup" class="YG-nav-link">📜 تصميم رول اب شركة rollup </a>
                                                </li>
                                                <li class="YG-nav-item"> 
                                                    <a href="https://ygbrandmaker.site/Graphic/design-corporate-envelopes" class="YG-nav-link"> ✉️ تصميم ظرف مراسلات للشركات </a>
                                                </li>
                                                <li class="YG-nav-item"> 
                                                    <a href="https://ygbrandmaker.site/Graphic/design-book-or-magazine-cover" class="YG-nav-link"> 📚 تصميم غلاف كتاب او مجلة </a>
                                                </li>
                                                <li class="YG-nav-item"> 
                                                    <a href="https://ygbrandmaker.site/Graphic/design-restaurant-menus" class="YG-nav-link">🍽️ تصميم منيو مطعم قائمة اسعار كافية احترافية menu </a>
                                                </li>
                                                <li class="YG-nav-item"> 
                                                    <a href="https://ygbrandmaker.site/Graphic/design-letterhead-a4" class="YG-nav-link">📄 تصميم ورقة شركة A4</a>
                                                </li>
                                            </ul>
                                        </li>
                                        
                                        <!-- تصميمات السوشيل ميديا -->
                                        <li class="YG-nav-item"> 
                                            <a href="#" class="YG-nav-link">📱 ركن تصميمات السوشيل ميديا<i class="fas fa-chevron-down"></i> </a>
                                            <ul class="YG-dropdown-menu">
                                                <li class="YG-nav-item"> 
                                                    <a href="https://ygbrandmaker.site/Graphic/twitter-cover-and-photo-design" class="YG-nav-link"> 🐦 تصميم غلاف وصورة تويتر </a>
                                                </li>
                                                <li class="YG-nav-item"> 
                                                    <a href="https://ygbrandmaker.site/Graphic/youtube-cover-channel-design" class="YG-nav-link"> 📺 تصميم غلاف قناة يوتيوباحترافي </a>
                                                </li>
                                                <li class="YG-nav-item"> 
                                                    <a href="https://ygbrandmaker.site/Graphic/design-animated-for-facebook-and-instagram" class="YG-nav-link"> 🎬 تصميم صور متحركة للفيس وانستقرام </a>
                                                </li>
                                                <li class="YG-nav-item"> 
                                                    <a href="https://ygbrandmaker.site/Graphic/instagram-ads-design-pictures" class="YG-nav-link">📸 تصميم صور اعلانات وبوستات انستقرام</a>
                                                </li>
                                                <li class="YG-nav-item"> 
                                                    <a href="https://ygbrandmaker.site/Graphic/design-logo-facebook-instagram-youtube" class="YG-nav-link">🔷 تصميم لوجو فيسبوك احترافي</a>
                                                </li>
                                                <li class="YG-nav-item"> 
                                                    <a href="https://ygbrandmaker.site/Graphic/instagram-story-design" class="YG-nav-link"> 📖 تصميم قصة انستقرام </a>
                                                </li>
                                                <li class="YG-nav-item"> 
                                                    <a href="https://ygbrandmaker.site/Graphic/instagram-post-design" class="YG-nav-link"> 📱 تصميم منشور انستا </a>
                                                </li>
                                                <li class="YG-nav-item"> 
                                                    <a href="https://ygbrandmaker.site/Graphic/youtube-video-design-pictures" class="YG-nav-link"> 🎥 تصميم صور فيديوهات قناة اليوتيوب</a>
                                                </li>
                                                <li class="YG-nav-item"> 
                                                    <a href="https://ygbrandmaker.site/Graphic/facebook-post-design" class="YG-nav-link"> 📘 تصميم بوستات فيس بوك</a>
                                                </li>
                                                <li class="YG-nav-item"> 
                                                    <a href="https://ygbrandmaker.site/Graphic/facebook-cover-design" class="YG-nav-link"> 🏢 تصميم غلاف فيس بوك</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                
                                <!-- أشياء تهمك -->
                                <li class="YG-nav-item"> 
                                    <a href="#" class="YG-nav-link"> 📌 أشياء تهمك <i class="fas fa-chevron-down"></i> </a>
                                    <ul class="YG-dropdown-menu">
                                        <li class="YG-nav-item"> 
                                            <a href="https://ygbrandmaker.site/web/about-us" class="YG-nav-link"> 👥 من نحن </a>
                                        </li>
                                        <li class="YG-nav-item"> 
                                            <a href="https://ygbrandmaker.site/brand" class="YG-nav-link">🏷️ العلامة التجارية </a>
                                        </li>
                                        <li class="YG-nav-item"> 
                                            <a href="https://ygbrandmaker.site/web/payment" class="YG-nav-link"> 💳 طرق الدفع </a>
                                        </li>
                                        <li class="YG-nav-item"> 
                                            <a href="https://ygbrandmaker.site/web/terms" class="YG-nav-link"> 📜 اتفاقية وشروط الاستخدام </a>
                                        </li>
                                    </ul>
                                </li>
                                
                                <!-- أعمالنا -->
                                <li class="YG-nav-item"> 
                                    <a href="#" class="YG-nav-link"> 📂 أعمالنا <i class="fas fa-chevron-down"></i> </a>
                                    <ul class="YG-dropdown-menu">
                                        <li class="YG-nav-item"> 
                                            <a href="https://ygbrandmaker.site/portfolio" class="YG-nav-link"> 🎨 الهوية البصرية </a>
                                        </li>
                                        <li class="YG-nav-item"> 
                                            <a href="https://ygbrandmaker.site/portfolio/portfolio/web" class="YG-nav-link"> 🌐 مواقع - ومتاجر </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            
                            <div class="YG-others-options">
                                <div class="YG-cart-items"></div>
                                <div class="YG-burger-menu" id="YG_desktopBurgerMenu">
                                    <span></span><span></span><span></span>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>`;
    }

    // إنشاء القائمة الجانبية
    function YG_createSidebar() {
        return `
        <div class="YG-sidebar-modal" id="YG_sidebarModal">
            <div class="YG-sidebar-header">
               
                <button class="YG-close-sidebar" id="YG_closeSidebar">✕</button>
            </div>
            <div class="YG-sidebar-scroll-container" id="YG_sidebarScroll">
                <ul class="YG-navbar-nav" id="YG_sidebarNav">
                    <!-- سيتم إضافة القوائم ديناميكياً -->
                </ul>
            </div>
        </div>`;
    }

    // إنشاء زر واتساب
    function YG_createWhatsappButton() {
        return `
        <a href="https://wa.me/201030459067?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D9%86%D8%A7%20%D9%85%D9%87%D8%AA%D9%85%20%D8%A8%D8%A7%D9%84%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AA%D9%8A%20%D8%AA%D9%82%D8%AF%D9%85%D9%88%D9%86%D9%87%D8%A7.%20%D8%A3%D8%B1%D8%AC%D9%88%20%D8%A7%D9%84%D8%AA%D9%88%D8%A7%D8%B5%D9%84%20%D9%85%D8%B9%D9%8A%20%D9%84%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%A7%D9%84%D8%AA%D9%81%D8%A7%D8%B5%D9%8A%D9%84%20%D9%88%D8%A7%D9%84%D8%A3%D8%B3%D8%B9%D8%A7%D8%B1." 
           class="whatsapp-btn" target="_blank">
           <i class="fab fa-whatsapp"></i>
        </a>`;
    }

    // إنشاء الـ CSS
    function YG_createStyles() {
        return `
        <style>
            /* الشريط العلوي */
            .YG-topbar-wrap-area {
                background: linear-gradient(90deg, #1a237e, #621983);
                padding: 10px 0;
                box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
                border-bottom: 2px solid rgba(255, 255, 255, 0.1);
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
                transition: all 0.3s ease;
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
                transition: all 0.3s ease;
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
            
            /* اللوجو - تم التعديل هنا */
            .YG-logo {
                text-align: center;
                margin: 0 auto;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            
            .YG-logo a {
                display: inline-block;
                text-align: center;
            }
            
            .YG-logo img {
                height: 150px !important; /* حجم ثابت للوجو */
                width: auto;
                max-width: 200px;
                transition: all 0.3s ease;
                object-fit: contain;
            }
            
            /* لوجو القائمة الجانبية */
            .YG-sidebar-header .YG-logo img {
                height: 80px !important;
                max-width: 180px;
            }
            
            /* قائمة التنقل */
            .YG-navbar {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: space-between;
                padding: 10px 0;
                position: relative;
            }
            
            .YG-navbar-nav {
                display: flex;
                flex-direction: row;
                list-style: none;
                margin: 0;
                padding: 0;
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
                transition: all 0.3s ease;
                font-weight: 600;
                border-radius: 8px;
                margin: 0 3px;
                position: relative;
                font-size: 15px;
            }
            
            .YG-nav-link:hover, .YG-nav-link.YG-active {
                color: #1a237e;
                background-color: rgba(26, 35, 126, 0.08);
                transform: translateY(-2px);
            }
            
            .YG-nav-link::after {
                content: '';
                position: absolute;
                bottom: 8px;
                right: 18px;
                width: 0;
                height: 2px;
                background: linear-gradient(90deg, #1a237e, #621983);
                transition: width 0.3s ease;
                border-radius: 2px;
            }
            
            .YG-nav-link:hover::after, .YG-nav-link.YG-active::after {
                width: calc(100% - 36px);
            }
            
            /* القوائم المنسدلة للشاشات الكبيرة */
            .YG-dropdown-menu {
                position: absolute;
                top: 100%;
                right: 0;
                min-width: 250px;
                background-color: #fff;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
                border-radius: 12px;
                list-style: none;
                padding: 15px 0;
                opacity: 0;
                visibility: hidden;
                transform: translateY(15px);
                transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                z-index: 1001;
                border: 1px solid rgba(0, 0, 0, 0.05);
            }
            
            .YG-nav-item:hover > .YG-dropdown-menu {
                opacity: 1;
                visibility: visible;
                transform: translateY(5px);
            }
            
            .YG-dropdown-menu .YG-dropdown-menu {
                top: -15px;
                right: 100%;
                margin-right: 5px;
            }
            
            .YG-dropdown-menu li {
                width: 100%;
            }
            
            .YG-dropdown-menu .YG-nav-link {
                padding: 12px 20px;
                color: #555;
                justify-content: space-between;
                border-radius: 0;
                margin: 0;
                font-size: 14px;
                border-bottom: 1px solid rgba(0, 0, 0, 0.05);
            }
            
            .YG-dropdown-menu .YG-nav-link:hover {
                background-color: rgba(26, 35, 126, 0.1);
                color: #1a237e;
                padding-right: 25px;
                transform: translateX(-5px);
            }
            
            .YG-dropdown-menu .YG-nav-link:last-child {
                border-bottom: none;
            }
            
            /* ===== القائمة الجانبية المعدلة ===== */
            .YG-sidebar-modal {
                position: fixed;
                top: 0;
                right: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                z-index: 1002;
                transition: right 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                overflow: hidden;
                display: flex;
                flex-direction: column;
            }
            
            .YG-sidebar-modal.YG-active {
                right: 0;
            }
            
            .YG-sidebar-header {
                flex-shrink: 0;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 20px;
                background: rgba(255, 255, 255, 0.95);
                border-bottom: 1px solid #eee;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                z-index: 10;
            }
            
            .YG-close-sidebar {
                background: #1a237e;
                border: none;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                font-size: 20px;
                cursor: pointer;
                transition: all 0.3s ease;
                color: white;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .YG-close-sidebar:hover {
                background: #621983;
                transform: rotate(90deg);
            }
            
            /* حاوية التمرير الداخلية */
            .YG-sidebar-scroll-container {
                flex: 1;
                overflow-y: auto;
                padding: 20px;
                -webkit-overflow-scrolling: touch;
                background: rgba(255, 255, 255, 0.98);
                backdrop-filter: blur(10px);
            }
            
            /* تنسيقات القوائم داخل الحاوية */
            .YG-sidebar-scroll-container .YG-navbar-nav {
                display: flex !important;
                flex-direction: column;
                gap: 10px;
                padding-bottom: 20px;
            }
            
            /* ===== تعديلات القوائم المتداخلة للجوال ===== */
            .YG-sidebar-scroll-container .YG-dropdown-menu {
                position: static !important;
                opacity: 1 !important;
                visibility: visible !important;
                transform: none !important;
                box-shadow: none !important;
                padding-right: 0 !important;
                max-height: 0 !important;
                overflow: hidden !important;
                transition: max-height 0.3s ease !important;
                border: none !important;
                border-radius: 0 !important;
                margin-top: 5px !important;
                background: rgba(255, 255, 255, 0.9) !important;
                border-radius: 10px !important;
                margin: 5px 0 !important;
            }
            
            .YG-sidebar-scroll-container .YG-dropdown-menu.YG-show {
                max-height: 500px !important;
                overflow-y: auto !important;
            }
            
            .YG-sidebar-scroll-container .YG-dropdown-menu .YG-dropdown-menu {
                max-height: 0 !important;
                overflow: hidden !important;
                transition: max-height 0.3s ease !important;
                margin-right: 20px !important;
                background: rgba(255, 255, 255, 0.8) !important;
                border-right: 2px solid rgba(26, 35, 126, 0.1) !important;
            }
            
            .YG-sidebar-scroll-container .YG-dropdown-menu .YG-dropdown-menu.YG-show {
                max-height: 400px !important;
                overflow-y: auto !important;
            }
            
            /* أيقونات السهم لجميع المستويات */
            .YG-sidebar-scroll-container .YG-nav-link.has-dropdown {
                position: relative !important;
                padding-right: 40px !important;
            }
            
            .YG-sidebar-scroll-container .YG-nav-link.has-dropdown::after {
                content: '\\f078' !important;
                font-family: 'Font Awesome 6 Free' !important;
                font-weight: 900 !important;
                position: absolute !important;
                left: 15px !important;
                top: 50% !important;
                transform: translateY(-50%) !important;
                transition: transform 0.3s ease !important;
                font-size: 12px !important;
                color: #1a237e;
            }
            
            .YG-sidebar-scroll-container .YG-nav-link.has-dropdown.YG-rotated::after {
                transform: translateY(-50%) rotate(180deg) !important;
            }
            
            /* تحسين المسافات والخطوط */
            .YG-sidebar-scroll-container .YG-nav-link {
                padding: 15px !important;
                font-size: 16px !important;
                border-radius: 10px;
                border: 1px solid rgba(26, 35, 126, 0.1);
                margin: 5px 0;
                transition: all 0.3s ease;
                background: white;
                color: #333;
            }
            
            /* تأثير الهفر على الروابط */
            .YG-sidebar-scroll-container .YG-nav-link:hover,
            .YG-sidebar-scroll-container .YG-nav-link.YG-active {
                background: linear-gradient(135deg, #1a237e, #621983) !important;
                color: white !important;
                border-color: transparent !important;
                transform: translateX(-5px);
            }
            
            /* تنسيق الروابط داخل القوائم المنسدلة */
            .YG-sidebar-scroll-container .YG-dropdown-menu .YG-nav-link {
                padding: 12px 20px !important;
                font-size: 15px !important;
                border: 1px solid rgba(0, 0, 0, 0.05) !important;
                background: white !important;
            }
            
            .YG-sidebar-scroll-container .YG-dropdown-menu .YG-dropdown-menu .YG-nav-link {
                padding-right: 35px !important;
                font-size: 14px !important;
            }
            
            /* زر القائمة الجانبية */
            .YG-others-options {
                display: flex;
                align-items: center;
                gap: 20px;
            }
            
            .YG-burger-menu {
                width: 32px;
                height: 26px;
                position: relative;
                cursor: pointer;
                display: none;
                flex-direction: column;
                justify-content: space-between;
            }
            
            .YG-burger-menu span {
                display: block;
                height: 3px;
                width: 100%;
                background: linear-gradient(90deg, #1a237e, #621983);
                border-radius: 3px;
                transition: all 0.3s ease;
            }
            
            .YG-burger-menu.YG-active span:nth-child(1) {
                transform: rotate(45deg) translate(7px, 7px);
            }
            
            .YG-burger-menu.YG-active span:nth-child(2) {
                opacity: 0;
            }
            
            .YG-burger-menu.YG-active span:nth-child(3) {
                transform: rotate(-45deg) translate(7px, -7px);
            }
            
            /* تنسيقات للشاشات المتوسطة */
            @media (max-width: 1200px) {
                .YG-nav-link {
                    padding: 12px 15px;
                    font-size: 14px;
                }
                
                .YG-dropdown-menu {
                    min-width: 220px;
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
                    padding: 10px 0;
                }
                
                .YG-responsive-menu {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0;
                }
                
                .YG-burger-menu {
                    display: flex;
                }
                
                /* عرض القائمة الجانبية على الشاشات المتوسطة */
                .YG-sidebar-modal {
                    width: 350px;
                    max-width: 85%;
                    box-shadow: -5px 0 25px rgba(0, 0, 0, 0.2);
                }
                
                /* اللوجو في القائمة الجانبية */
                .YG-sidebar-header .YG-logo {
                    justify-content: flex-start;
                }
                
                .YG-sidebar-header .YG-logo img {
                    height: 60px !important;
                }
            }
            
            /* تنسيقات للشاشات الصغيرة */
            @media (max-width: 768px) {
                /* تحسينات عامة للشكل على الموبايل */
                .YG-topbar-wrap-area {
                    padding: 8px 0;
                }
                
                .YG-topbar-social-links {
                    gap: 3px;
                    justify-content: center;
                }
                
                .YG-topbar-social-links a {
                    font-size: 0;
                    padding: 10px;
                    border-radius: 50%;
                    width: 40px;
                    height: 40px;
                    justify-content: center;
                    background: rgba(255, 255, 255, 0.15);
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
                    gap: 5px;
                }
                
                .YG-topbar-action-list a {
                    padding: 10px 15px;
                    font-size: 14px;
                    border-radius: 20px;
                }
                
                .YG-topbar-action-list span {
                    display: none;
                }
                
                .YG-topbar-action-list i {
                    margin: 0 5px;
                }
                
                /* تحسين الشريط العلوي للشكل الحلو */
                .YG-topbar-wrap-area {
                    background: linear-gradient(135deg, #1a237e, #621983);
                }
                
                /* اللوجو في الشريط العلوي */
                .YG-responsive-nav .YG-logo {
                    margin: 0 auto;
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                }
                
                .YG-responsive-nav .YG-logo img {
                    height: 60px !important;
                }
                
                /* تحسين القائمة الجانبية */
                .YG-sidebar-header {
                    padding: 15px;
                    background: white;
                }
                
                .YG-sidebar-scroll-container {
                    padding: 15px;
                    background: rgba(255, 255, 255, 0.98);
                }
                
                .YG-sidebar-scroll-container .YG-nav-link {
                    padding: 12px 15px !important;
                    font-size: 15px !important;
                    margin: 3px 0;
                }
                
                .YG-close-sidebar {
                    width: 35px;
                    height: 35px;
                    font-size: 18px;
                }
            }
            
            /* تنسيقات للشاشات الدقيقة */
            @media (max-width: 576px) {
                .YG-topbar-wrap-area {
                    padding: 6px 0;
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
                
                /* اللوجو أصغر قليلاً على الشاشات الصغيرة */
                .YG-logo img {
                    height: 120px !important;
                    max-width: 160px;
                }
                
                .YG-responsive-nav .YG-logo img {
                    height: 50px !important;
                }
                
                /* القائمة الجانبية */
                .YG-sidebar-modal {
                    width: 100%;
                    max-width: 100%;
                }
                
                .YG-sidebar-scroll-container .YG-nav-link {
                    padding: 10px 12px !important;
                    font-size: 14px !important;
                }
                
                .YG-sidebar-header {
                    padding: 12px;
                }
                
                .YG-sidebar-scroll-container {
                    padding: 12px;
                }
                
                .YG-close-sidebar {
                    width: 30px;
                    height: 30px;
                    font-size: 16px;
                }
            }
            
            /* تنسيقات للشاشات الدقيقة جداً */
            @media (max-width: 375px) {
                .YG-topbar-social-links {
                    justify-content: space-around;
                }
                
                .YG-topbar-social-links a {
                    width: 32px;
                    height: 32px;
                    padding: 6px;
                }
                
                .YG-topbar-social-links i {
                    font-size: 14px;
                }
                
                .YG-topbar-action-list a {
                    font-size: 12px;
                    padding: 6px 10px;
                }
                
                .YG-logo img {
                    height: 100px !important;
                    max-width: 140px;
                }
            }
            
            /* تأثيرات الحركة */
            .YG-nav-link, .YG-topbar-social-links a, .YG-topbar-action-list a {
                transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
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
            
            /* تأثير عند تحميل الصفحة */
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
            
            .YG-topbar-wrap-area, .YG-navbar-area {
                animation: fadeInDown 0.5s ease-out;
            }
            
            /* إيموجيات */
            .YG-nav-link::before {
                margin-left: 8px;
                font-size: 16px;
            }
            
            /* تحسينات القوائم المنسدلة */
            .YG-dropdown-menu .YG-dropdown-menu::before {
                content: '';
                position: absolute;
                top: 20px;
                left: -5px;
                width: 10px;
                height: 10px;
                background: #fff;
                transform: rotate(45deg);
                border-left: 1px solid rgba(0, 0, 0, 0.05);
                border-bottom: 1px solid rgba(0, 0, 0, 0.05);
            }
            
            /* تأثير عند تمرير الماوس على العناصر */
            .YG-topbar-social-links li:hover a {
                transform: translateY(-3px) scale(1.05);
            }
            
            /* تأثير على العناصر النشطة */
            .YG-nav-item > .YG-nav-link.YG-active {
                background: linear-gradient(90deg, rgba(26, 35, 126, 0.1), rgba(40, 53, 147, 0.1));
                color: #1a237e;
                font-weight: 700;
            }
            
            /* تصميم الفأرة للروابط */
            a {
                cursor: pointer;
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
            
            /* شريط التمرير المخفي */
            .YG-sidebar-scroll-container::-webkit-scrollbar {
                width: 5px;
            }
            
            .YG-sidebar-scroll-container::-webkit-scrollbar-track {
                background: #f1f1f1;
                border-radius: 10px;
            }
            
            .YG-sidebar-scroll-container::-webkit-scrollbar-thumb {
                background: #888;
                border-radius: 10px;
            }
            
            .YG-sidebar-scroll-container::-webkit-scrollbar-thumb:hover {
                background: #555;
            }
            
            /* تحسين الشكل العام للتصميم */
            .YG-navbar-area {
                border-bottom: 3px solid #1a237e;
            }
            
            /* تحسين شكل القوائم للشكل الحلو */
            .YG-nav-link {
                border: 1px solid transparent;
            }
            
            .YG-nav-link:hover {
                border-color: #1a237e;
            }
            
            /* تحسين شكل القائمة الجانبية */
            .YG-sidebar-modal {
                background: white;
            }
            
            .YG-sidebar-header {
                background: linear-gradient(135deg, #1a237e, #621983);
            }
            
            .YG-sidebar-header .YG-logo img {
                filter: brightness(0) invert(1);
            }
            
            .YG-close-sidebar {
                background: white;
                color: #1a237e;
            }
            
            .YG-close-sidebar:hover {
                background: #1a237e;
                color: white;
            }
            
            /* تحسين شكل الروابط في القائمة الجانبية */
            .YG-sidebar-scroll-container .YG-nav-link {
                border-left: 3px solid transparent;
            }
            
            .YG-sidebar-scroll-container .YG-nav-link:hover,
            .YG-sidebar-scroll-container .YG-nav-link.YG-active {
                border-left-color: #1a237e;
            }

            /* زر واتساب */
            .whatsapp-btn {
                position: fixed;
                right: 20px;
                bottom: 50px;
                width: 60px;
                height: 60px;
                background-color: #25D366;
                color: white;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 30px;
                text-decoration: none;
                box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4);
                animation: pulse 2s infinite;
                z-index: 9999;
                transition: all 0.3s ease;
            }

            .whatsapp-btn:hover {
                transform: scale(1.1);
                box-shadow: 0 6px 20px rgba(37, 211, 102, 0.6);
            }

            /* تأثير النبض */
            @keyframes pulse {
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

            /* تحسين الزر على الموبايل */
            @media (max-width: 768px) {
                .whatsapp-btn {
                    width: 50px;
                    height: 50px;
                    font-size: 25px;
                    right: 15px;
                    bottom: 20px;
                }
            }
            .YG-responsive-nav {
                display: none;
            }
        </style>`;
    }

    // إدراج جميع العناصر في الصفحة
    function YG_insertNavigation() {
        // إضافة الـ CSS أولاً
        document.head.insertAdjacentHTML('beforeend', YG_createStyles());
        
        // إنشاء حاوية للتنقل
        const navigationContainer = document.createElement('div');
        navigationContainer.id = 'YG_navigation-container';
        
        // إضافة العناصر بالترتيب
        navigationContainer.innerHTML = YG_createTopBar() + YG_createNavbar() + YG_createSidebar() + YG_createWhatsappButton();
        
        // إضافة الحاوية في بداية body
        document.body.insertAdjacentElement('afterbegin', navigationContainer);
    }

    // تهيئة النظام الأساسي
    class YG_NavigationSystem {
        constructor() {
            this.YG_init();
        }

        YG_init() {
            this.YG_burgerMenu = null;
            this.YG_desktopBurgerMenu = null;
            this.YG_sidebarModal = null;
            this.YG_closeSidebar = null;
            this.YG_navbarArea = null;
            this.YG_sidebarNav = null;
            this.YG_sidebarScroll = null;
            
            this.YG_lastScrollTop = 0;
            this.YG_isSidebarOpen = false;
            this.YG_isMobile = window.innerWidth <= 992;
            
            this.YG_setupElements();
            this.YG_setupEvents();
            this.YG_createMobileMenu();
            this.YG_handleDesktopDropdowns();
            this.YG_setupScrollEffects();
            this.YG_setupLogoErrorHandling();
            this.YG_setupSocialLinksHover();
        }

        YG_setupElements() {
            this.YG_burgerMenu = document.getElementById('YG_burgerMenu');
            this.YG_desktopBurgerMenu = document.getElementById('YG_desktopBurgerMenu');
            this.YG_sidebarModal = document.getElementById('YG_sidebarModal');
            this.YG_closeSidebar = document.getElementById('YG_closeSidebar');
            this.YG_navbarArea = document.getElementById('YG_navbarArea');
            this.YG_sidebarNav = document.getElementById('YG_sidebarNav');
            this.YG_sidebarScroll = document.getElementById('YG_sidebarScroll');
        }

        YG_setupEvents() {
            // فتح/إغلاق القائمة الجانبية
            this.YG_burgerMenu?.addEventListener('click', () => this.YG_openSidebar());
            this.YG_desktopBurgerMenu?.addEventListener('click', () => this.YG_openSidebar());
            this.YG_closeSidebar?.addEventListener('click', () => this.YG_closeSidebarFunc());
            
            // إغلاق القائمة عند النقر خارجها
            document.addEventListener('click', (event) => {
                if (this.YG_sidebarModal?.classList.contains('YG-active') &&
                    !this.YG_sidebarModal.contains(event.target) && 
                    !this.YG_burgerMenu?.contains(event.target) && 
                    !this.YG_desktopBurgerMenu?.contains(event.target)) {
                    this.YG_closeSidebarFunc();
                }
            });
            
            // إغلاق القائمة عند الضغط على Esc
            document.addEventListener('keydown', (event) => {
                if (event.key === 'Escape') {
                    this.YG_closeSidebarFunc();
                }
            });
        }

        YG_createMobileMenu() {
            const mainNav = document.querySelector('.YG-navbar-nav');
            if (!mainNav || !this.YG_sidebarNav) return;
            
            const clonedNav = mainNav.cloneNode(true);
            
            function YG_processDropdowns(element) {
                element.querySelectorAll('.YG-nav-link').forEach(link => {
                    const hasDropdown = link.nextElementSibling && 
                                      link.nextElementSibling.classList.contains('YG-dropdown-menu');
                    
                    if (hasDropdown) {
                        link.classList.add('has-dropdown');
                        const icon = link.querySelector('.fa-chevron-down');
                        if (icon) icon.style.display = 'none';
                        
                        const dropdown = link.nextElementSibling;
                        if (dropdown) {
                            YG_processDropdowns(dropdown);
                        }
                    }
                });
            }
            
            YG_processDropdowns(clonedNav);
            this.YG_sidebarNav.innerHTML = '';
            this.YG_sidebarNav.appendChild(clonedNav);
            this.YG_setupAllMobileDropdowns();
        }

        YG_setupAllMobileDropdowns() {
            const allDropdownLinks = this.YG_sidebarNav?.querySelectorAll('.YG-nav-link.has-dropdown');
            allDropdownLinks?.forEach(link => {
                link.removeEventListener('click', this.YG_handleMobileDropdownClick);
                link.addEventListener('click', this.YG_handleMobileDropdownClick.bind(this));
            });
        }

        YG_handleMobileDropdownClick(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const link = e.currentTarget;
            const dropdown = link.nextElementSibling;
            
            if (dropdown && dropdown.classList.contains('YG-dropdown-menu')) {
                const isTopLevel = !link.closest('.YG-dropdown-menu');
                
                if (isTopLevel) {
                    document.querySelectorAll('.YG-sidebar-scroll-container > .YG-navbar-nav > .YG-nav-item > .YG-nav-link.has-dropdown').forEach(otherLink => {
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
                
                link.classList.add('YG-active');
                setTimeout(() => {
                    link.classList.remove('YG-active');
                }, 300);
            }
        }

        YG_closeAllDropdowns() {
            document.querySelectorAll('.YG-dropdown-menu.YG-show').forEach(menu => {
                menu.classList.remove('YG-show');
            });
            
            document.querySelectorAll('.YG-nav-link.has-dropdown.YG-rotated').forEach(link => {
                link.classList.remove('YG-rotated');
            });
        }

        YG_openSidebar() {
            this.YG_sidebarModal?.classList.add('YG-active');
            this.YG_burgerMenu?.classList.add('YG-active');
            this.YG_desktopBurgerMenu?.classList.add('YG-active');
            document.body.style.overflow = 'hidden';
            this.YG_createMobileMenu();
            this.YG_sidebarScroll?.scrollTo(0, 0);
            this.YG_isSidebarOpen = true;
        }

        YG_closeSidebarFunc() {
            this.YG_sidebarModal?.classList.remove('YG-active');
            this.YG_burgerMenu?.classList.remove('YG-active');
            this.YG_desktopBurgerMenu?.classList.remove('YG-active');
            document.body.style.overflow = '';
            this.YG_closeAllDropdowns();
            this.YG_isSidebarOpen = false;
        }

        YG_handleDesktopDropdowns() {
            const navItems = document.querySelectorAll('.YG-nav-item');
            
            if (window.innerWidth > 992) {
                navItems.forEach(item => {
                    item.addEventListener('mouseenter', () => {
                        const dropdown = item.querySelector('.YG-dropdown-menu');
                        if (dropdown) {
                            dropdown.style.opacity = '1';
                            dropdown.style.visibility = 'visible';
                            dropdown.style.transform = 'translateY(5px)';
                        }
                    });
                    
                    item.addEventListener('mouseleave', () => {
                        const dropdown = item.querySelector('.YG-dropdown-menu');
                        if (dropdown) {
                            dropdown.style.opacity = '0';
                            dropdown.style.visibility = 'hidden';
                            dropdown.style.transform = 'translateY(15px)';
                        }
                    });
                });
            }
        }

        YG_setupScrollEffects() {
            window.addEventListener('scroll', () => {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                
                if (scrollTop > 50) {
                    this.YG_navbarArea?.classList.add('YG-scrolled');
                } else {
                    this.YG_navbarArea?.classList.remove('YG-scrolled');
                }
                
                if (this.YG_isMobile) {
                    if (scrollTop > this.YG_lastScrollTop && scrollTop > 100) {
                        this.YG_navbarArea.style.transform = 'translateY(-100%)';
                        this.YG_navbarArea.style.transition = 'transform 0.3s ease';
                    } else {
                        this.YG_navbarArea.style.transform = 'translateY(0)';
                    }
                    
                    if (scrollTop > 100) {
                        this.YG_closeSidebarFunc();
                    }
                }
                
                this.YG_lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
            });
        }

        YG_setupLogoErrorHandling() {
            const logoImages = document.querySelectorAll('.YG-logo img');
            logoImages.forEach(img => {
                img.onerror = function() {
                    this.src = 'https://ygbrandmaker.site/logo.gif';
                    this.style.height = '150px';
                };
            });
        }

        YG_setupSocialLinksHover() {
            const socialLinks = document.querySelectorAll('.YG-topbar-social-links a');
            socialLinks.forEach(link => {
                link.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-4px) scale(1.05)';
                });
                
                link.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0) scale(1)';
                });
            });
        }
    }

    // تهيئة النظام عند تحميل الصفحة
    document.addEventListener('DOMContentLoaded', function() {
        // إدراج التنقل في الصفحة
        YG_insertNavigation();
        
        // تهيئة النظام بعد إدراج العناصر
        setTimeout(() => {
            window.YG_Navigation = new YG_NavigationSystem();
        }, 100);
        
        // التعامل مع تغيير حجم الشاشة
        window.addEventListener('resize', function() {
            if (window.YG_Navigation) {
                window.YG_Navigation.YG_isMobile = window.innerWidth <= 992;
                window.YG_Navigation.YG_handleDesktopDropdowns();
                
                if (window.innerWidth <= 992) {
                    window.YG_Navigation.YG_createMobileMenu();
                }
            }
        });
    });
})();//////////////////////////////////////////////////////////////
// footer-script.js
(function() {
    // انتظر تحميل DOM
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initFooter);
    } else {
        initFooter();
    }

    function initFooter() {
        // التأكد من عدم وجود footer مسبقاً
        if (document.querySelector('.YG-footer-main')) {
            console.warn('الـ footer موجود مسبقاً، تم تخطي الإنشاء');
            return;
        }
        
        createFooter();
        addStyles();
        addInteractions();
    }

    function createFooter() {
        const footer = document.createElement('footer');
        footer.className = 'YG-footer-main';
        
        footer.innerHTML = `
            <div class="YG-footer-top">
                <div class="YG-footer-container">
                    <div class="YG-footer-grid">
                        <div class="YG-footer-column">
                            <p class="YG-footer-description">
                                <span class="YG-highlight">✨ الرائدة في عالم الإبداع الرقمي</span>
                                نقدم حلولاً متكاملة في تصميم المواقع والمتاجر الإلكترونية والهوية البصرية والتسويق الرقمي بأحدث التقنيات.
                            </p>
                            <div class="YG-footer-contact">
                                <div class="YG-contact-item">
                                    <span class="YG-contact-icon">📧</span>
                                    <div>
                                        <span class="YG-contact-label">البريد الإلكتروني</span>
                                        <a href="mailto:info@ygbrandmaker.site" class="YG-contact-value">info@ygbrandmaker.site</a>
                                    </div>
                                </div>
                                <div class="YG-contact-item">
                                    <span class="YG-contact-icon">📞</span>
                                    <div>
                                        <span class="YG-contact-label">الهاتف / الواتساب</span>
                                        <a href="tel:+201030459067" class="YG-contact-value">+201030459067</a>
                                    </div>
                                </div>
                                <div class="YG-contact-item">
                                    <span class="YG-contact-icon">⏰</span>
                                    <div>
                                        <span class="YG-contact-label">ساعات العمل</span>
                                        <span class="YG-contact-value">الأحد - الخميس: 9 ص - 5 م</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="YG-footer-column">
                            <h3 class="YG-footer-title">
                                <span class="YG-title-icon">🚀</span>
                                خدماتنا الرئيسية
                            </h3>
                            <div class="YG-services-grid">
                                <a href="https://ygbrandmaker.site/web/design-company-website" class="YG-service-card">
                                    <span class="YG-service-icon">🌐</span>
                                    <span class="YG-service-text">تصميم المواقع الإلكترونية</span>
                                </a>
                                <a href="https://ygbrandmaker.site/web/design-online-store" class="YG-service-card">
                                    <span class="YG-service-icon">🛒</span>
                                    <span class="YG-service-text">تصميم المتاجر الإلكترونية</span>
                                </a>
                                <a href="https://ygbrandmaker.site/marketing/E-marketing-services" class="YG-service-card">
                                    <span class="YG-service-icon">📈</span>
                                    <span class="YG-service-text">التسويق الرقمي المتكامل</span>
                                </a>
                                <a href="https://ygbrandmaker.site/Graphic/portfolio-design-contracting" class="YG-service-card">
                                    <span class="YG-service-icon">🎨</span>
                                    <span class="YG-service-text">الهوية البصرية والتصميم</span>
                                </a>
                                <a href="https://ygbrandmaker.site/marketing/seo" class="YG-service-card">
                                    <span class="YG-service-icon">🔍</span>
                                    <span class="YG-service-text">تحسين محركات البحث SEO</span>
                                </a>
                                <a href="https://ygbrandmaker.site/marketing/content-creation" class="YG-service-card">
                                    <span class="YG-service-icon">✍️</span>
                                    <span class="YG-service-text">كتابة المحتوى التسويقي</span>
                                </a>
                            </div>
                        </div>

                        <div class="YG-footer-column">
                            <h3 class="YG-footer-title">
                                <span class="YG-title-icon">🔗</span>
                                روابط مهمة
                            </h3>
                            <div class="YG-important-links">
                                <a href="https://ygbrandmaker.site/web/payment" class="YG-important-link">
                                    <span class="YG-link-icon">💳</span>
                                    <span class="YG-link-text">طرق الدفع والشروط</span>
                                    <span class="YG-link-arrow">→</span>
                                </a>
                                <a href="https://ygbrandmaker.site/web/terms" class="YG-important-link">
                                    <span class="YG-link-icon">📄</span>
                                    <span class="YG-link-text">الشروط والأحكام</span>
                                    <span class="YG-link-arrow">→</span>
                                </a>
                                <a href="https://ygbrandmaker.site/brand" class="YG-important-link">
                                    <span class="YG-link-icon">🏷️</span>
                                    <span class="YG-link-text">العلامة التجارية</span>
                                    <span class="YG-link-arrow">→</span>
                                </a>
                                <a href="https://ygbrandmaker.site/marketing/social-media-campaign" class="YG-important-link">
                                    <span class="YG-link-icon">📱</span>
                                    <span class="YG-link-text">حملات السوشيال ميديا</span>
                                    <span class="YG-link-arrow">→</span>
                                </a>
                                <a href="https://ygbrandmaker.site/web/about-us" class="YG-important-link">
                                    <span class="YG-link-icon">👥</span>
                                    <span class="YG-link-text">من نحن</span>
                                    <span class="YG-link-arrow">→</span>
                                </a>
                                <a href="https://ygbrandmaker.site/portfolio" class="YG-important-link">
                                    <span class="YG-link-icon">📂</span>
                                    <span class="YG-link-text">معرض الأعمال</span>
                                    <span class="YG-link-arrow">→</span>
                                </a>
                            </div>
                        </div>

                        <div class="YG-footer-column">
                            <h3 class="YG-footer-title">
                                <span class="YG-title-icon">📊</span>
                                مراحل التصميم
                            </h3>
                            <div class="YG-design-stages">
                                <a href="https://ygbrandmaker.site/stages/Stages-electronic-marketing.html" class="YG-stage-card YG-stage-marketing">
                                    <div class="YG-stage-header">
                                        <span class="YG-stage-icon">📈</span>
                                        <span class="YG-stage-number">01</span>
                                    </div>
                                    <div class="YG-stage-content">
                                        <h4 class="YG-stage-title">الخطة التسويقية</h4>
                                        <p class="YG-stage-desc">تحليل السوق وتحديد الاستراتيجية المناسبة لمشروعك</p>
                                    </div>
                                    <span class="YG-stage-arrow">→</span>
                                </a>
                                <a href="https://ygbrandmaker.site/stages/Website-design-stages.html" class="YG-stage-card YG-stage-website">
                                    <div class="YG-stage-header">
                                        <span class="YG-stage-icon">🌐</span>
                                        <span class="YG-stage-number">02</span>
                                    </div>
                                    <div class="YG-stage-content">
                                        <h4 class="YG-stage-title">تصميم المواقع والتطبيقات</h4>
                                        <p class="YG-stage-desc">تصميم وبرمجة وتطوير الموقع أو التطبيق الخاص بك</p>
                                    </div>
                                    <span class="YG-stage-arrow">→</span>
                                </a>
                                <a href="https://ygbrandmaker.site/stages/E-commerce-design.html" class="YG-stage-card YG-stage-ecommerce">
                                    <div class="YG-stage-header">
                                        <span class="YG-stage-icon">🛒</span>
                                        <span class="YG-stage-number">03</span>
                                    </div>
                                    <div class="YG-stage-content">
                                        <h4 class="YG-stage-title">تصميم المتجر الإلكتروني</h4>
                                        <p class="YG-stage-desc">إنشاء وتطوير متجر إلكتروني متكامل وآمن</p>
                                    </div>
                                    <span class="YG-stage-arrow">→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="YG-footer-middle">
                <div class="YG-footer-container">
                    <div class="YG-social-section">
                        <h4 class="YG-social-title">
                            <span class="YG-title-icon">🌐</span>
                            تابعنا على وسائل التواصل
                        </h4>
                        <div class="YG-social-buttons">
                            <a href="https://www.fb.com/YGBrandMaker" class="YG-social-btn YG-facebook" target="_blank">
                                <span class="YG-social-icon">📘</span>
                                <span class="YG-social-text">فيسبوك</span>
                            </a>
                            <a href="https://www.instagram.com/ygbrandmaker/" class="YG-social-btn YG-instagram" target="_blank">
                                <span class="YG-social-icon">📸</span>
                                <span class="YG-social-text">إنستغرام</span>
                            </a>
                            <a href="https://www.linkedin.com/company/ygbrandmaker/" class="YG-social-btn YG-linkedin" target="_blank">
                                <span class="YG-social-icon">💼</span>
                                <span class="YG-social-text">لينكدإن</span>
                            </a>
                            <a href="https://wa.me/201030459067" class="YG-social-btn YG-whatsapp" target="_blank">
                                <span class="YG-social-icon">💚</span>
                                <span class="YG-social-text">واتساب</span>
                            </a>
                            <a href="https://www.youtube.com/@YGBrandMaker" class="YG-social-btn YG-youtube" target="_blank">
                                <span class="YG-social-icon">📺</span>
                                <span class="YG-social-text">يوتيوب</span>
                            </a>
                            <a href="https://t.me/YGBrandMaker" class="YG-social-btn YG-telegram" target="_blank">
                                <span class="YG-social-icon">📨</span>
                                <span class="YG-social-text">تليجرام</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="YG-footer-bottom">
                <div class="YG-footer-container">
                    <div class="YG-bottom-content">
                        <div class="YG-copyright">
                            <p>© 2024 <span class="YG-brand">YG Brand Maker</span>. جميع الحقوق محفوظة. | 
                               <a href="https://ygbrandmaker.site/web/terms">الشروط والأحكام</a> | 
                               <a href="#">سياسة الخصوصية</a></p>
                        </div>
                        <div class="YG-payment-methods">
                            <span class="YG-payment-text">نقبل جميع طرق الدفع</span>
                            <div class="YG-payment-icons">
                                <span class="YG-payment-icon">💳</span>
                                <span class="YG-payment-icon">🏦</span>
                                <span class="YG-payment-icon">📱</span>
                                <span class="YG-payment-icon">💲</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(footer);
    }

    function addStyles() {
        // تحقق من وجود الـ styles مسبقاً
        if (document.querySelector('style[data-footer-styles]')) {
            return;
        }
        
        const style = document.createElement('style');
        style.setAttribute('data-footer-styles', 'true');
        style.textContent = `
            html, body {
                margin: 0;
                padding: 0;
                width: 100%;
                overflow-x: hidden;
                box-sizing: border-box;
            }

            *,
            *::before,
            *::after {
                box-sizing: border-box;
            }

            .YG-footer-main {
                width: 100%;
                max-width: 100%;
                overflow: hidden;
                background: linear-gradient(135deg, #0a0f3d 0%, #621982 100%);
                color: #fff;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                line-height: 1.6;
                margin-top: 80px;
            }

            .YG-footer-container {
                width: 100%;
                max-width: 1200px;
                margin: 0 auto;
                padding: 0 20px;
            }

            .YG-footer-top {
                padding: 60px 0 40px;
                position: relative;
                overflow: hidden;
                width: 100%;
            }

            .YG-footer-top::before {
                content: '';
                position: absolute;
                top: 0;
                right: 0;
                width: 100%;
                height: 100%;
                background: 
                    radial-gradient(circle at 20% 80%, rgba(79, 195, 247, 0.1) 0%, transparent 50%),
                    radial-gradient(circle at 80% 20%, rgba(37, 211, 102, 0.1) 0%, transparent 50%);
                z-index: 0;
            }

            .YG-footer-grid {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 30px;
                position: relative;
                z-index: 1;
                width: 100%;
            }

            .YG-footer-column {
                width: 100%;
            }

            .YG-footer-description {
                color: rgba(255, 255, 255, 0.85);
                font-size: 15px;
                margin-bottom: 30px;
                line-height: 1.8;
                border-right: 3px solid #4FC3F7;
                padding-right: 15px;
                width: 100%;
            }

            .YG-highlight {
                color: #4FC3F7;
                font-weight: 600;
                display: block;
                margin-bottom: 10px;
            }

            .YG-footer-contact {
                background: rgba(255, 255, 255, 0.05);
                border-radius: 12px;
                padding: 20px;
                backdrop-filter: blur(10px);
                border: 1px solid rgba(255, 255, 255, 0.1);
                width: 100%;
            }

            .YG-contact-item {
                display: flex;
                align-items: center;
                gap: 15px;
                margin-bottom: 20px;
                padding-bottom: 20px;
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                transition: transform 0.3s ease;
                width: 100%;
            }

            .YG-contact-item:hover {
                transform: translateX(-5px);
            }

            .YG-contact-item:last-child {
                margin-bottom: 0;
                padding-bottom: 0;
                border-bottom: none;
            }

            .YG-contact-icon {
                font-size: 22px;
                width: 40px;
                height: 40px;
                background: rgba(79, 195, 247, 0.2);
                border-radius: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-shrink: 0;
            }

            .YG-contact-label {
                display: block;
                color: rgba(255, 255, 255, 0.7);
                font-size: 13px;
                margin-bottom: 5px;
            }

            .YG-contact-value {
                color: #fff;
                text-decoration: none;
                font-weight: 500;
                font-size: 15px;
                transition: color 0.3s ease;
                word-break: break-all;
            }

            .YG-contact-value:hover {
                color: #4FC3F7;
            }

            .YG-footer-title {
                font-size: 18px;
                margin-bottom: 25px;
                color: #fff;
                display: flex;
                align-items: center;
                gap: 10px;
                padding-bottom: 15px;
                border-bottom: 2px solid rgba(79, 195, 247, 0.3);
                width: 100%;
            }

            .YG-title-icon {
                font-size: 20px;
            }

            .YG-services-grid {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 12px;
                margin-bottom: 25px;
                width: 100%;
            }

            .YG-service-card {
                background: rgba(255, 255, 255, 0.05);
                border-radius: 10px;
                padding: 12px;
                text-decoration: none;
                color: rgba(255, 255, 255, 0.9);
                display: flex;
                align-items: center;
                gap: 10px;
                transition: all 0.3s ease;
                border: 1px solid transparent;
                width: 100%;
            }

            .YG-service-card:hover {
                background: rgba(79, 195, 247, 0.15);
                transform: translateY(-3px);
                border-color: rgba(79, 195, 247, 0.3);
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
                color: #fff;
            }

            .YG-service-icon {
                font-size: 18px;
                background: rgba(255, 255, 255, 0.1);
                width: 32px;
                height: 32px;
                border-radius: 8px;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-shrink: 0;
            }

            .YG-service-text {
                font-size: 13px;
                font-weight: 500;
                flex: 1;
                min-width: 0;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .YG-important-links {
                display: flex;
                flex-direction: column;
                gap: 10px;
                margin-bottom: 20px;
                width: 100%;
            }

            .YG-important-link {
                display: flex;
                align-items: center;
                gap: 12px;
                color: rgba(255, 255, 255, 0.9);
                text-decoration: none;
                padding: 12px 15px;
                background: rgba(255, 255, 255, 0.05);
                border-radius: 10px;
                transition: all 0.3s ease;
                position: relative;
                overflow: hidden;
                width: 100%;
            }

            .YG-important-link:hover {
                background: rgba(37, 211, 102, 0.15);
                transform: translateX(-5px);
                color: #fff;
            }

            .YG-important-link:hover .YG-link-arrow {
                transform: translateX(5px);
                opacity: 1;
            }

            .YG-link-icon {
                font-size: 18px;
                width: 32px;
                height: 32px;
                background: rgba(255, 255, 255, 0.1);
                border-radius: 8px;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-shrink: 0;
            }

            .YG-link-text {
                flex: 1;
                font-size: 14px;
                font-weight: 500;
                min-width: 0;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .YG-link-arrow {
                color: rgba(255, 255, 255, 0.5);
                font-size: 16px;
                transition: all 0.3s ease;
                opacity: 0.7;
                flex-shrink: 0;
            }

            .YG-design-stages {
                display: flex;
                flex-direction: column;
                gap: 12px;
                width: 100%;
            }

            .YG-stage-card {
                display: flex;
                align-items: center;
                justify-content: space-between;
                background: rgba(255, 255, 255, 0.05);
                border-radius: 10px;
                padding: 15px;
                text-decoration: none;
                color: rgba(255, 255, 255, 0.9);
                transition: all 0.4s ease;
                border: 1px solid transparent;
                position: relative;
                overflow: hidden;
                width: 100%;
            }

            .YG-stage-card:hover {
                transform: translateX(-5px);
                border-color: rgba(255, 255, 255, 0.2);
                box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
            }

            .YG-stage-card::before {
                content: '';
                position: absolute;
                right: 0;
                top: 0;
                height: 100%;
                width: 4px;
                opacity: 0;
                transition: opacity 0.3s ease;
            }

            .YG-stage-marketing:hover::before { 
                background: linear-gradient(180deg, #FF6B6B, #FF8E53);
                opacity: 1;
            }

            .YG-stage-website:hover::before { 
                background: linear-gradient(180deg, #4FC3F7, #2979FF);
                opacity: 1;
            }

            .YG-stage-ecommerce:hover::before { 
                background: linear-gradient(180deg, #25D366, #00C853);
                opacity: 1;
            }

            .YG-stage-header {
                display: flex;
                align-items: center;
                gap: 12px;
                flex-shrink: 0;
            }

            .YG-stage-icon {
                font-size: 20px;
                width: 40px;
                height: 40px;
                background: rgba(255, 255, 255, 0.1);
                border-radius: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .YG-stage-number {
                font-size: 24px;
                font-weight: 800;
                color: rgba(255, 255, 255, 0.3);
                font-family: 'Arial', sans-serif;
            }

            .YG-stage-content {
                flex: 1;
                padding: 0 15px;
                min-width: 0;
            }

            .YG-stage-title {
                font-size: 15px;
                font-weight: 600;
                margin-bottom: 4px;
                color: #fff;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }

            .YG-stage-desc {
                font-size: 12px;
                color: rgba(255, 255, 255, 0.7);
                line-height: 1.4;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }

            .YG-stage-arrow {
                font-size: 18px;
                color: rgba(255, 255, 255, 0.5);
                transition: all 0.3s ease;
                flex-shrink: 0;
            }

            .YG-stage-card:hover .YG-stage-arrow {
                color: #fff;
                transform: translateX(5px);
            }

            .YG-footer-middle {
                background: rgba(0, 0, 0, 0.15);
                padding: 30px 0;
                border-top: 1px solid rgba(255, 255, 255, 0.1);
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                width: 100%;
            }

            .YG-social-section {
                text-align: center;
                width: 100%;
            }

            .YG-social-title {
                font-size: 20px;
                margin-bottom: 25px;
                color: #fff;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 10px;
                width: 100%;
            }

            .YG-social-buttons {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                gap: 10px;
                max-width: 800px;
                margin: 0 auto;
                width: 100%;
            }

            .YG-social-btn {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
                padding: 10px 18px;
                border-radius: 10px;
                text-decoration: none;
                font-size: 13px;
                font-weight: 500;
                transition: all 0.3s ease;
                color: #fff;
                min-width: 120px;
                border: 1px solid transparent;
                flex: 1;
                max-width: 150px;
            }

            .YG-facebook { 
                background: linear-gradient(45deg, #1877F2, #0D5FD9);
                border-color: rgba(24, 119, 242, 0.3);
            }

            .YG-instagram { 
                background: linear-gradient(45deg, #E4405F, #C13584);
                border-color: rgba(228, 64, 95, 0.3);
            }

            .YG-linkedin { 
                background: linear-gradient(45deg, #0A66C2, #004182);
                border-color: rgba(10, 102, 194, 0.3);
            }

            .YG-whatsapp { 
                background: linear-gradient(45deg, #25D366, #128C7E);
                border-color: rgba(37, 211, 102, 0.3);
            }

            .YG-youtube { 
                background: linear-gradient(45deg, #FF0000, #CC0000);
                border-color: rgba(255, 0, 0, 0.3);
            }

            .YG-telegram { 
                background: linear-gradient(45deg, #0088CC, #006699);
                border-color: rgba(0, 136, 204, 0.3);
            }

            .YG-social-btn:hover {
                transform: translateY(-5px) scale(1.05);
                box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
                filter: brightness(1.1);
            }

            .YG-social-icon {
                font-size: 16px;
            }

            .YG-social-text {
                font-weight: 500;
            }

            .YG-footer-bottom {
                background: rgba(0, 0, 0, 0.2);
                padding: 20px 0;
                width: 100%;
            }

            .YG-bottom-content {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                flex-wrap: wrap;
            }

            .YG-copyright {
                flex: 1;
                min-width: 300px;
            }

            .YG-copyright p {
                color: rgba(255, 255, 255, 0.7);
                font-size: 14px;
                margin: 0;
                line-height: 1.6;
            }

            .YG-brand {
                color: #4FC3F7;
                font-weight: 600;
            }

            .YG-copyright a {
                color: rgba(255, 255, 255, 0.8);
                text-decoration: none;
                transition: color 0.3s ease;
                margin: 0 5px;
                white-space: nowrap;
            }

            .YG-copyright a:hover {
                color: #25D366;
            }

            .YG-payment-methods {
                display: flex;
                align-items: center;
                gap: 15px;
                flex-wrap: wrap;
                justify-content: flex-end;
            }

            .YG-payment-text {
                color: rgba(255, 255, 255, 0.7);
                font-size: 14px;
                white-space: nowrap;
            }

            .YG-payment-icons {
                display: flex;
                gap: 8px;
                flex-wrap: wrap;
            }

            .YG-payment-icon {
                font-size: 20px;
                background: rgba(255, 255, 255, 0.1);
                width: 36px;
                height: 36px;
                border-radius: 6px;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.3s ease;
                flex-shrink: 0;
            }

            .YG-payment-icon:hover {
                background: rgba(255, 255, 255, 0.2);
                transform: translateY(-2px);
            }

            /* Responsive Design */
            @media (max-width: 1200px) {
                .YG-footer-grid {
                    grid-template-columns: repeat(2, 1fr);
                    gap: 40px;
                }
                
                .YG-footer-column:first-child {
                    grid-column: 1 / -1;
                }
            }

            @media (max-width: 768px) {
                .YG-footer-top {
                    padding: 40px 0 30px;
                }
                
                .YG-footer-grid {
                    grid-template-columns: 1fr;
                    gap: 40px;
                }
                
                .YG-services-grid {
                    grid-template-columns: 1fr;
                }
                
                .YG-social-buttons {
                    flex-direction: column;
                    align-items: center;
                }
                
                .YG-social-btn {
                    max-width: 250px;
                    width: 100%;
                }
                
                .YG-bottom-content {
                    flex-direction: column;
                    text-align: center;
                    gap: 20px;
                }
            }

            @media (max-width: 480px) {
                .YG-footer-container {
                    padding: 0 15px;
                }
                
                .YG-footer-title {
                    font-size: 16px;
                }
                
                .YG-service-card {
                    padding: 10px;
                }
                
                .YG-social-btn {
                    padding: 12px;
                }
            }
        `;
        
        document.head.appendChild(style);
    }

    function addInteractions() {
        setTimeout(() => {
            const serviceCards = document.querySelectorAll('.YG-service-card');
            const socialButtons = document.querySelectorAll('.YG-social-btn');
            const stageCards = document.querySelectorAll('.YG-stage-card');
            const importantLinks = document.querySelectorAll('.YG-important-link');
            
            serviceCards.forEach(card => {
                card.addEventListener('mouseenter', () => {
                    card.style.transform = 'translateY(-3px)';
                });
                
                card.addEventListener('mouseleave', () => {
                    card.style.transform = 'translateY(0)';
                });
            });
            
            socialButtons.forEach(btn => {
                btn.addEventListener('mouseenter', () => {
                    btn.style.transform = 'translateY(-5px) scale(1.05)';
                });
                
                btn.addEventListener('mouseleave', () => {
                    btn.style.transform = 'translateY(0) scale(1)';
                });
            });
            
            stageCards.forEach(card => {
                card.addEventListener('mouseenter', () => {
                    card.style.transform = 'translateX(-5px)';
                });
                
                card.addEventListener('mouseleave', () => {
                    card.style.transform = 'translateX(0)';
                });
            });
            
            importantLinks.forEach(link => {
                link.addEventListener('mouseenter', () => {
                    const arrow = link.querySelector('.YG-link-arrow');
                    if (arrow) {
                        arrow.style.transform = 'translateX(5px)';
                        arrow.style.opacity = '1';
                    }
                });
                
                link.addEventListener('mouseleave', () => {
                    const arrow = link.querySelector('.YG-link-arrow');
                    if (arrow) {
                        arrow.style.transform = 'translateX(0)';
                        arrow.style.opacity = '0.7';
                    }
                });
            });
            
            // تأثير الظهور
            const footer = document.querySelector('.YG-footer-main');
            if (footer) {
                footer.style.opacity = '0';
                footer.style.transform = 'translateY(20px)';
                footer.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                
                setTimeout(() => {
                    footer.style.opacity = '1';
                    footer.style.transform = 'translateY(0)';
                }, 100);
            }
        }, 50);
    }
})();
