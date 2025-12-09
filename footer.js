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
