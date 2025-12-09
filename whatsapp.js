
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