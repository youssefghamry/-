document.addEventListener('DOMContentLoaded', function() {
    // إنشاء عناصر الرأس
    const head = document.head;
    
    // إضافة ملفات CSS
    const styleLink = document.createElement('link');
    styleLink.rel = 'stylesheet';
    styleLink.href = 'style.css';
    head.appendChild(styleLink);
    
    const fontAwesomeLink = document.createElement('link');
    fontAwesomeLink.rel = 'stylesheet';
    fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    head.appendChild(fontAwesomeLink);
    
    const bootstrapIconsLink = document.createElement('link');
    bootstrapIconsLink.rel = 'stylesheet';
    bootstrapIconsLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css';
    head.appendChild(bootstrapIconsLink);
    
    // إضافة ملف JavaScript
    const mainScript = document.createElement('script');
    mainScript.src = 'main.js';
    head.appendChild(mainScript);
    
    // إنشاء عنصر body إذا لم يكن موجودًا
    const body = document.body || document.createElement('body');
    document.documentElement.appendChild(body);
    
    // إنشاء الهيكل الرئيسي
    createTopbar();
    createNavbar();
    createSidebar();
    createWhatsAppButton();
});

function createTopbar() {
    // الشريط العلوي
    const topbarWrap = document.createElement('div');
    topbarWrap.className = 'YG-topbar-wrap-area';
    
    const containerFluid = document.createElement('div');
    containerFluid.className = 'YG-container-fluid';
    
    const row = document.createElement('div');
    row.className = 'YG-row YG-align-items-center YG-justify-content-center';
    
    // العمود الأول (الروابط الاجتماعية)
    const col1 = document.createElement('div');
    col1.className = 'YG-col-lg-8 YG-col-md-8';
    
    const socialLinks = document.createElement('ul');
    socialLinks.className = 'YG-topbar-social-links';
    
    const socialPlatforms = [
        { href: 'https://www.fb.com/YGBrandMaker', icon: 'fab fa-facebook', text: 'فيسبوك', title: 'فيسبوك' },
        { href: 'https://twitter.com/YGBrandMaker', icon: 'fab fa-twitter', text: 'تويتر', title: 'تويتر' },
        { href: 'https://www.linkedin.com/company/ygbrandmaker/', icon: 'fab fa-linkedin', text: 'لينكدإن', title: 'لينكدإن' },
        { href: 'https://www.instagram.com/ygbrandmaker/', icon: 'fab fa-instagram', text: 'إنستغرام', title: 'إنستغرام' },
        { href: 'https://t.me/YGBrandMaker', icon: 'fab fa-telegram', text: 'تليجرام', title: 'تليجرام' },
        { href: 'https://www.tiktok.com/@ygbrandmaker', icon: 'fab fa-tiktok', text: 'تيك توك', title: 'تيك توك' },
        { href: '#', icon: 'fab fa-snapchat', text: 'سناب شات', title: 'سناب شات' },
        { href: 'https://wa.me/201030459067', icon: 'fab fa-whatsapp', text: 'واتساب', title: 'واتساب' }
    ];
    
    socialPlatforms.forEach(platform => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = platform.href;
        a.target = '_blank';
        a.title = platform.title;
        
        const i = document.createElement('i');
        i.className = platform.icon;
        
        a.appendChild(i);
        a.appendChild(document.createTextNode(' ' + platform.text));
        li.appendChild(a);
        socialLinks.appendChild(li);
    });
    
    col1.appendChild(socialLinks);
    row.appendChild(col1);
    
    // العمود الثاني (رقم الهاتف)
    const col2 = document.createElement('div');
    col2.className = 'YG-col-lg-4 YG-col-md-4';
    
    const actionList = document.createElement('ul');
    actionList.className = 'YG-topbar-action-list';
    
    const li = document.createElement('li');
    const phoneLink = document.createElement('a');
    phoneLink.href = 'tel:01030459067';
    
    const phoneIcon = document.createElement('i');
    phoneIcon.className = 'bi bi-telephone-fill';
    
    phoneLink.appendChild(phoneIcon);
    phoneLink.appendChild(document.createTextNode(' 01030459067'));
    li.appendChild(phoneLink);
    actionList.appendChild(li);
    
    col2.appendChild(actionList);
    row.appendChild(col2);
    
    // بناء الهيكل
    containerFluid.appendChild(row);
    topbarWrap.appendChild(containerFluid);
    document.body.appendChild(topbarWrap);
}

function createNavbar() {
    // شريط التنقل الرئيسي
    const navbarArea = document.createElement('div');
    navbarArea.className = 'YG-navbar-area YG-navbar-area-with-position-relative';
    navbarArea.id = 'YG-navbarArea';
    
    // التنقل للجوال
    const responsiveNav = document.createElement('div');
    responsiveNav.className = 'YG-responsive-nav';
    
    const responsiveContainer = document.createElement('div');
    responsiveContainer.className = 'YG-container';
    
    const responsiveMenu = document.createElement('div');
    responsiveMenu.className = 'YG-responsive-menu';
    
    const logoDiv1 = document.createElement('div');
    logoDiv1.className = 'YG-logo';
    
    const logoLink1 = document.createElement('a');
    logoLink1.href = 'https://ygbrandmaker.site';
    
    const logoImg1 = document.createElement('img');
    logoImg1.src = 'https://ygbrandmaker.site/logo.gif';
    logoImg1.alt = 'YG Brand Maker';
    logoImg1.onerror = "this.onerror=null; this.src='https://ygbrandmaker.site/logo.gif'";
    
    logoLink1.appendChild(logoImg1);
    logoDiv1.appendChild(logoLink1);
    
    const burgerMenu1 = document.createElement('div');
    burgerMenu1.className = 'YG-burger-menu';
    burgerMenu1.id = 'YG-burgerMenu';
    
    for (let i = 0; i < 3; i++) {
        const span = document.createElement('span');
        burgerMenu1.appendChild(span);
    }
    
    responsiveMenu.appendChild(logoDiv1);
    responsiveMenu.appendChild(burgerMenu1);
    responsiveContainer.appendChild(responsiveMenu);
    responsiveNav.appendChild(responsiveContainer);
    navbarArea.appendChild(responsiveNav);
    
    // التنقل الرئيسي
    const aronixNav = document.createElement('div');
    aronixNav.className = 'YG-aronix-nav';
    
    const containerFluid = document.createElement('div');
    containerFluid.className = 'YG-container-fluid';
    
    const nav = document.createElement('nav');
    nav.className = 'YG-navbar YG-navbar-expand-md YG-navbar-light';
    
    const logoDiv2 = document.createElement('div');
    logoDiv2.className = 'YG-logo';
    
    const logoLink2 = document.createElement('a');
    logoLink2.href = 'https://ygbrandmaker.site';
    
    const logoImg2 = document.createElement('img');
    logoImg2.src = 'https://ygbrandmaker.site/logo.gif';
    logoImg2.alt = 'YG Brand Maker';
    logoImg2.onerror = "this.onerror=null; this.src='https://ygbrandmaker.site/logo.gif'";
    
    logoLink2.appendChild(logoImg2);
    logoDiv2.appendChild(logoLink2);
    nav.appendChild(logoDiv2);
    
    const navbarCollapse = document.createElement('div');
    navbarCollapse.className = 'YG-collapse YG-navbar-collapse YG-mean-menu';
    navbarCollapse.id = 'YG-navbarSupportedContent';
    
    const navbarNav = document.createElement('ul');
    navbarNav.className = 'YG-navbar-nav';
    
    // إضافة عناصر القائمة
    createMenuItems(navbarNav);
    
    navbarCollapse.appendChild(navbarNav);
    
    // خيارات إضافية
    const othersOptions = document.createElement('div');
    othersOptions.className = 'YG-others-options';
    
    const cartItems = document.createElement('div');
    cartItems.className = 'YG-cart-items';
    
    const desktopBurgerMenu = document.createElement('div');
    desktopBurgerMenu.className = 'YG-burger-menu';
    desktopBurgerMenu.id = 'YG-desktopBurgerMenu';
    
    for (let i = 0; i < 3; i++) {
        const span = document.createElement('span');
        desktopBurgerMenu.appendChild(span);
    }
    
    othersOptions.appendChild(cartItems);
    othersOptions.appendChild(desktopBurgerMenu);
    navbarCollapse.appendChild(othersOptions);
    
    nav.appendChild(navbarCollapse);
    containerFluid.appendChild(nav);
    aronixNav.appendChild(containerFluid);
    navbarArea.appendChild(aronixNav);
    
    document.body.appendChild(navbarArea);
}

function createMenuItems(navbarNav) {
    // عناصر القائمة الرئيسية
    const menuItems = [
        {
            text: '🏠 الرئيسية',
            href: 'https://ygbrandmaker.site',
            className: 'YG-nav-link'
        },
        {
            text: '📢 ركن التسويق',
            href: '#',
            className: 'YG-nav-link ',
            hasDropdown: true,
            subItems: [
                {
                    text: '🚀 خدمات التسويق الالكتروني',
                    href: 'https://ygbrandmaker.site/marketing/E-marketing-services',
                    className: 'YG-nav-link'
                },
                {
                    text: '🛒 حلول التجارة الإلكترونية',
                    href: 'https://ygbrandmaker.site/marketing/e-commerce-solutions',
                    className: 'YG-nav-link'
                },
                {
                    text: '📱 حملات السوشيال ميديا',
                    href: 'https://ygbrandmaker.site/marketing/social-media-campaign',
                    className: 'YG-nav-link '
                },
                {
                    text: '🔍 التسويق عبر محركات البحث SEO',
                    href: 'https://ygbrandmaker.site/marketing/seo',
                    className: 'YG-nav-link'
                },
                {
                    text: '✍️ كتابة المحتوي',
                    href: 'https://ygbrandmaker.site/marketing/content-creation',
                    className: 'YG-nav-link'
                },
                {
                    text: '📲 تسويق السوشيل ميديا',
                    href: '#',
                    className: 'YG-nav-link ',
                    hasDropdown: true,
                    subItems: [
                        { text: '📘 التسويق عبر الفيسبوك', href: 'https://ygbrandmaker.site/marketing/facebook-marketing', className: 'YG-nav-link' },
                        { text: '💼 التسويق عبر لينكد ان', href: 'https://ygbrandmaker.site/marketing/linkedin-marketing', className: 'YG-nav-link' },
                        { text: '📨 التسويق عبر تلجرام', href: 'https://ygbrandmaker.site/marketing/Telegram-marketing', className: 'YG-nav-link' },
                        { text: '📸 التسويق عبر انستجرام', href: 'https://ygbrandmaker.site/marketing/instagram-marketing', className: 'YG-nav-link' },
                        { text: '🐦 التسويق عبر تويتر', href: 'https://ygbrandmaker.site/marketing/Twitter-Marketing', className: 'YG-nav-link' },
                        { text: '👻 التسويق عبر سناب شات', href: 'https://ygbrandmaker.site/marketing/Snapchat-Marketing', className: 'YG-nav-link' },
                        { text: '🎵 التسويق عبر تيك توك', href: 'https://ygbrandmaker.site/marketing/TikTok-Marketing', className: 'YG-nav-link' },
                        { text: '🔍 التسويق عبر جوجل', href: 'https://ygbrandmaker.site/marketing/Google-Adwords', className: 'YG-nav-link' }
                    ]
                }
            ]
        },
        {
            text: '💻 ركن البرمجة',
            href: '#',
            className: 'YG-nav-link',
            hasDropdown: true,
            subItems: [
                {
                    text: '🌐 ركن برمجة المواقع',
                    href: '#',
                    className: 'YG-nav-link',
                    hasDropdown: true,
                    subItems: [
                        { text: '🎓 تصميم المواقع الالكترونية', href: 'https://ygbrandmaker.site/web/design-educational-website', className: 'YG-nav-link' },
                        { text: '🏢 تصميم موقع شركة', href: 'https://ygbrandmaker.site/web/design-company-website', className: 'YG-nav-link' },
                        { text: '📰 تصميم موقع اخباري', href: 'https://ygbrandmaker.site/web/design-news-website', className: 'YG-nav-link' },
                        { text: '🍽️ تصميم موقع مطعم', href: 'https://ygbrandmaker.site/web/design-restaurant-website', className: 'YG-nav-link' },
                        { text: '📚 تصميم موقع تعليمي', href: 'https://ygbrandmaker.site/web/design-educational-website', className: 'YG-nav-link' },
                        { text: '🗺️ تصميم موقع سياحي', href: 'https://ygbrandmaker.site/web/design-tourist-website', className: 'YG-nav-link' },
                        { text: '🏠 تصميم موقع عقاري', href: 'https://ygbrandmaker.site/web/design-real-estate-website', className: 'YG-nav-link' },
                        { text: '🏥 تصميم موقع طبي', href: 'https://ygbrandmaker.site/web/design-clinic-website', className: 'YG-nav-link' },
                        { text: '⚽ تصميم موقع رياضي', href: 'https://ygbrandmaker.site/web/design-sports-website', className: 'YG-nav-link' },
                        { text: '⚖️ تصميم موقع محاماة', href: 'https://ygbrandmaker.site/web/design-law-firm-website', className: 'YG-nav-link' },
                        { text: '🚗 تصميم موقع معرض سيارات', href: 'https://ygbrandmaker.site/web/design-car-website', className: 'YG-nav-link' },
                        { text: '🛒 تصميم متاجر الكترونية', href: 'https://ygbrandmaker.site/web/design-online-store', className: 'YG-nav-link' },
                        { text: '🔧 تصميم متجر ووردبريس', href: '', className: 'YG-nav-link' },
                        { text: '⚙️ تصميم متجر ماجنتو', href: '', className: 'YG-nav-link' }
                    ]
                },
                {
                    text: '📱 ركن برمجة التطبيقات',
                    href: '#',
                    className: 'YG-nav-link',
                    hasDropdown: true,
                    subItems: [
                        { text: '💊 تصميم تطبيق وتوصيل أدوية للصيدلية', href: '', className: 'YG-nav-link' },
                        { text: '🏫 تصميم تطبيق مدرسة', href: '', className: 'YG-nav-link' },
                        { text: '🚕 تطبيق مثل اوبر وكريم وتوصيل ركاب', href: '', className: 'YG-nav-link' },
                        { text: '📦 تصميم تطبيق توصيل طلبات', href: '', className: 'YG-nav-link' },
                        { text: '🏘️ تصميم تطبيق عقاري مثل عقار ماب', href: '', className: 'YG-nav-link' },
                        { text: '🏪 تصميم تطبيق إعلانات بيع وشراء مثل حراج', href: '', className: 'YG-nav-link' },
                        { text: '✈️ تصميم تطبيق سياحى مثل Tripadvisor', href: '', className: 'YG-nav-link' },
                        { text: '👕 تصميم متجر بيع ملابس أونلاين', href: '', className: 'YG-nav-link' },
                        { text: '📦 تصميم تطبيق توصيل طرود لشركة شحن وتوصيل', href: '', className: 'YG-nav-link' },
                        { text: '📚 تصميم تطبيق مكتبة إلكترونية', href: '', className: 'YG-nav-link' },
                        { text: '🚗 تصميم تطبيق تأجير سيارات مثل درايف', href: '', className: 'YG-nav-link' },
                        { text: '📖 تصميم تطبيق مصحف قرءان كريم', href: '', className: 'YG-nav-link' },
                        { text: '👥 تصميم متجر الكتروني متعدد التجار', href: '', className: 'YG-nav-link' }
                    ]
                }
            ]
        },
        {
            text: '🎨 ركن التصميمات',
            href: '#',
            className: 'YG-nav-link',
            hasDropdown: true,
            subItems: [
                {
                    text: '🎭 ركن تصميمات الهوية البصرية',
                    href: '#',
                    className: 'YG-nav-link',
                    hasDropdown: true,
                    subItems: [
                        { text: '📁 تصميم بورتفوليو', href: 'https://ygbrandmaker.site/Graphic/portfolio-design-contracting', className: 'YG-nav-link' },
                        { text: '🖋️ تصميم ختم', href: '', className: 'YG-nav-link' },
                        { text: '📝 تصميم ملصق اعلاني ارشادي', href: 'https://ygbrandmaker.site/Graphic/design-company-stamp', className: 'YG-nav-link' },
                        { text: '🎫 تصميم كوبون هدية', href: 'https://ygbrandmaker.site/Graphic/design-gift-coupon', className: 'YG-nav-link' },
                        { text: '📊 مقاسات وابعاد ملف تعريفي للشركة جاهز بوربوينت', href: '#', className: 'YG-nav-link' },
                        { text: '🏢 تصميم يافطة شركة من الداخل والخارج', href: 'https://ygbrandmaker.site/Graphic/design-company-sign', className: 'YG-nav-link' },
                        { text: '📓 تصميم نوت بوك جذابة باسم الشركة', href: 'https://ygbrandmaker.site/Graphic/design-company-notebook', className: 'YG-nav-link' },
                        { text: '📅 تصميم نتيجة العام الجديد 2024', href: 'https://ygbrandmaker.site/Graphic/design-new-year-calendar', className: 'YG-nav-link' },
                        { text: '📧 تصميم توقيع البريد الالكتروني', href: 'https://ygbrandmaker.site/Graphic/design-email-signature', className: 'YG-nav-link' },
                        { text: '✏️ تصميم اقلام شركة للدعاية', href: 'https://ygbrandmaker.site/Graphic/design-advertising-pens', className: 'YG-nav-link' },
                        { text: '📜 تصميم رول اب', href: 'https://ygbrandmaker.site/Graphic/design-company-rollup', className: 'YG-nav-link' },
                        { text: '👔 تصميم زي عمل للموظفين والشركات', href: 'https://ygbrandmaker.site/Graphic/design-uniforms-for-employees-and-companies', className: 'YG-nav-link' },
                        { text: '📄 تصميم فلاير اعلاني flyer', href: 'https://ygbrandmaker.site/Graphic/design-advertising-flyer', className: 'YG-nav-link' }
                    ]
                },
                {
                    text: '📄 تصميمات المطبوعات الورقية',
                    href: '#',
                    className: 'YG-nav-link',
                    hasDropdown: true,
                    subItems: [
                        { text: '🧾 تصميم ايصال دفع', href: 'https://ygbrandmaker.site/Graphic/design-payment-receipts', className: 'YG-nav-link' },
                        { text: '🧾 تصميم ايصال قبض', href: 'https://ygbrandmaker.site/Graphic/design-receipt', className: 'YG-nav-link' },
                        { text: '📊 تصميم تقرير للعمل لقياس الاداء', href: 'https://ygbrandmaker.site/Graphic/design-measure-performance', className: 'YG-nav-link' },
                        { text: '📁 تصميم حافظة اوراق فولدر', href: 'https://ygbrandmaker.site/Graphic/design-folder', className: 'YG-nav-link' },
                        { text: '💌 تصميم دعوة فرح وحضور مؤتمرات', href: 'https://ygbrandmaker.site/Graphic/design-wedding-invitation-and-attending-conferences', className: 'YG-nav-link' },
                        { text: '📑 تصميم دفتر فواتير شركة', href: 'https://ygbrandmaker.site/Graphic/design-company-invoice', className: 'YG-nav-link' },
                        { text: '📜 تصميم رول اب شركة rollup', href: 'https://ygbrandmaker.site/Graphic/design-company-rollup', className: 'YG-nav-link' },
                        { text: '✉️ تصميم ظرف مراسلات للشركات', href: 'https://ygbrandmaker.site/Graphic/design-corporate-envelopes', className: 'YG-nav-link' },
                        { text: '📚 تصميم غلاف كتاب او مجلة', href: 'https://ygbrandmaker.site/Graphic/design-book-or-magazine-cover', className: 'YG-nav-link' },
                        { text: '🍽️ تصميم منيو مطعم قائمة اسعار كافية احترافية menu', href: 'https://ygbrandmaker.site/Graphic/design-restaurant-menus', className: 'YG-nav-link' },
                        { text: '📄 تصميم ورقة شركة A4', href: 'https://ygbrandmaker.site/Graphic/design-letterhead-a4', className: 'YG-nav-link' }
                    ]
                },
                {
                    text: '📱 ركن تصميمات السوشيل ميديا',
                    href: '#',
                    className: 'YG-nav-link',
                    hasDropdown: true,
                    subItems: [
                        { text: '🐦 تصميم غلاف وصورة تويتر', href: 'https://ygbrandmaker.site/Graphic/twitter-cover-and-photo-design', className: 'YG-nav-link' },
                        { text: '📺 تصميم غلاف قناة يوتيوباحترافي', href: 'https://ygbrandmaker.site/Graphic/youtube-cover-channel-design', className: 'YG-nav-link' },
                        { text: '🎬 تصميم صور متحركة للفيس وانستقرام', href: 'https://ygbrandmaker.site/Graphic/design-animated-for-facebook-and-instagram', className: 'YG-nav-link' },
                        { text: '📸 تصميم صور اعلانات وبوستات انستقرام', href: 'https://ygbrandmaker.site/Graphic/instagram-ads-design-pictures', className: 'YG-nav-link' },
                        { text: '🔷 تصميم لوجو فيسبوك احترافي', href: 'https://ygbrandmaker.site/Graphic/design-logo-facebook-instagram-youtube', className: 'YG-nav-link' },
                        { text: '📖 تصميم قصة انستقرام', href: 'https://ygbrandmaker.site/Graphic/instagram-story-design', className: 'YG-nav-link' },
                        { text: '📱 تصميم منشور انستا', href: 'https://ygbrandmaker.site/Graphic/instagram-post-design', className: 'YG-nav-link' },
                        { text: '🎥 تصميم صور فيديوهات قناة اليوتيوب', href: 'https://ygbrandmaker.site/Graphic/youtube-video-design-pictures', className: 'YG-nav-link' },
                        { text: '📘 تصميم بوستات فيس بوك', href: 'https://ygbrandmaker.site/Graphic/facebook-post-design', className: 'YG-nav-link' },
                        { text: '🏢 تصميم غلاف فيس بوك', href: 'https://ygbrandmaker.site/Graphic/facebook-cover-design', className: 'YG-nav-link' }
                    ]
                }
            ]
        },
        {
            text: '📌 أشياء تهمك',
            href: '#',
            className: 'YG-nav-link',
            hasDropdown: true,
            subItems: [
                { text: '👥 من نحن', href: 'https://ygbrandmaker.site/web/about-us', className: 'YG-nav-link' },
                { text: '🏷️ العلامة التجارية', href: 'https://ygbrandmaker.site/brand', className: 'YG-nav-link' },
                { text: '💳 طرق الدفع', href: 'https://ygbrandmaker.site/web/payment', className: 'YG-nav-link' },
                { text: '📜 اتفاقية وشروط الاستخدام', href: 'https://ygbrandmaker.site/web/terms', className: 'YG-nav-link' }
            ]
        },
        {
            text: '📂 أعمالنا',
            href: '#',
            className: 'YG-nav-link',
            hasDropdown: true,
            subItems: [
                { text: '🎨 الهوية البصرية', href: 'https://ygbrandmaker.site/portfolio', className: 'YG-nav-link' },
                { text: '🌐 مواقع - ومتاجر', href: 'https://ygbrandmaker.site/portfolio/portfolio/web', className: 'YG-nav-link' }
            ]
        }
    ];
    
    // إنشاء عناصر القائمة
    menuItems.forEach(item => {
        const li = document.createElement('li');
        li.className = 'YG-nav-item';
        
        const a = document.createElement('a');
        a.href = item.href;
        a.className = item.className;
        a.innerHTML = item.text;
        
        if (item.hasDropdown) {
            const icon = document.createElement('i');
            icon.className = 'fas fa-chevron-down';
            a.appendChild(icon);
            
            const dropdown = document.createElement('ul');
            dropdown.className = 'YG-dropdown-menu';
            
            createSubMenuItems(dropdown, item.subItems);
            li.appendChild(a);
            li.appendChild(dropdown);
        } else {
            li.appendChild(a);
        }
        
        navbarNav.appendChild(li);
    });
}

function createSubMenuItems(parentElement, items) {
    items.forEach(item => {
        const li = document.createElement('li');
        li.className = 'YG-nav-item';
        
        const a = document.createElement('a');
        a.href = item.href;
        a.className = item.className;
        a.innerHTML = item.text;
        
        if (item.hasDropdown) {
            const icon = document.createElement('i');
            icon.className = 'fas fa-chevron-down';
            a.appendChild(icon);
            
            const dropdown = document.createElement('ul');
            dropdown.className = 'YG-dropdown-menu';
            
            createSubMenuItems(dropdown, item.subItems);
            li.appendChild(a);
            li.appendChild(dropdown);
        } else {
            li.appendChild(a);
        }
        
        parentElement.appendChild(li);
    });
}

function createSidebar() {
    // القائمة الجانبية
    const sidebarModal = document.createElement('div');
    sidebarModal.className = 'YG-sidebar-modal';
    sidebarModal.id = 'YG-sidebarModal';
    
    const sidebarHeader = document.createElement('div');
    sidebarHeader.className = 'YG-sidebar-header';
    
    const closeSidebarBtn = document.createElement('button');
    closeSidebarBtn.className = 'YG-close-sidebar';
    closeSidebarBtn.id = 'YG-closeSidebar';
    closeSidebarBtn.innerHTML = '✕';
    
    sidebarHeader.appendChild(closeSidebarBtn);
    
    const sidebarScroll = document.createElement('div');
    sidebarScroll.className = 'YG-sidebar-scroll-container';
    sidebarScroll.id = 'YG-sidebarScroll';
    
    const sidebarNav = document.createElement('ul');
    sidebarNav.className = 'YG-navbar-nav';
    sidebarNav.id = 'YG-sidebarNav';
    
    sidebarScroll.appendChild(sidebarNav);
    sidebarModal.appendChild(sidebarHeader);
    sidebarModal.appendChild(sidebarScroll);
    
    document.body.appendChild(sidebarModal);
}

function createWhatsAppButton() {
    // زر واتساب
    const whatsappBtn = document.createElement('a');
    whatsappBtn.href = 'https://wa.me/201030459067?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D9%86%D8%A7%20%D9%85%D9%87%D8%AA%D9%85%20%D8%A8%D8%A7%D9%84%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AA%D9%8A%20%D8%AA%D9%82%D8%AF%D9%85%D9%88%D9%86%D9%87%D8%A7.%20%D8%A3%D8%B1%D8%AC%D9%88%20%D8%A7%D9%84%D8%AA%D9%88%D8%A7%D8%B5%D9%84%20%D9%85%D8%B9%D9%8A%20%D9%84%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%A7%D9%84%D8%AA%D9%81%D8%A7%D8%B5%D9%8A%D9%84%20%D9%88%D8%A7%D9%84%D8%A3%D8%B3%D8%B9%D8%A7%D8%B1.';
    whatsappBtn.className = 'whatsapp-btn';
    whatsappBtn.target = '_blank';
    
    const whatsappIcon = document.createElement('i');
    whatsappIcon.className = 'fab fa-whatsapp';
    
    whatsappBtn.appendChild(whatsappIcon);
    document.body.appendChild(whatsappBtn);
}
