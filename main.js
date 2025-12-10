        document.addEventListener('DOMContentLoaded', function() {
            // العناصر الرئيسية
            const burgerMenu = document.getElementById('YG-burgerMenu');
            const desktopBurgerMenu = document.getElementById('YG-desktopBurgerMenu');
            const sidebarModal = document.getElementById('YG-sidebarModal');
            const closeSidebar = document.getElementById('YG-closeSidebar');
            const navbarArea = document.getElementById('YG-navbarArea');
            const sidebarNav = document.getElementById('YG-sidebarNav');
            const sidebarScroll = document.getElementById('YG-sidebarScroll');
            
            // إنشاء القوائم الجانبية ديناميكياً
            function createMobileMenu() {
                const mainNav = document.querySelector('.YG-navbar-nav');
                if (!mainNav) return;
                
                // استنساخ القائمة الرئيسية بعمق
                const clonedNav = mainNav.cloneNode(true);
                
                // دالة مساعدة لإضافة classes لجميع المستويات
                function processDropdowns(element) {
                    element.querySelectorAll('.YG-nav-link').forEach(link => {
                        const hasDropdown = link.nextElementSibling && 
                                          link.nextElementSibling.classList.contains('YG-dropdown-menu');
                        
                        if (hasDropdown) {
                            // إضافة classes
                            link.classList.add('has-dropdown');
                            
                            // إخفاء الأيقونة الأصلية
                            const icon = link.querySelector('.fa-chevron-down');
                            if (icon) icon.style.display = 'none';
                            
                            // معالجة القوائم الفرعية داخل هذه القائمة
                            const dropdown = link.nextElementSibling;
                            if (dropdown) {
                                processDropdowns(dropdown);
                            }
                        }
                    });
                }
                
                // معالجة جميع القوائم
                processDropdowns(clonedNav);
                
                // إضافة القائمة المستنسخة
                sidebarNav.innerHTML = '';
                sidebarNav.appendChild(clonedNav);
                
                // إعداد جميع القوائم المنسدلة
                setupAllMobileDropdowns();
            }
            
            // إعداد جميع القوائم المنسدلة (جميع المستويات)
            function setupAllMobileDropdowns() {
                // الحصول على جميع الروابط التي لديها قوائم منسدلة
                const allDropdownLinks = sidebarNav.querySelectorAll('.YG-nav-link.has-dropdown');
                
                allDropdownLinks.forEach(link => {
                    // إزالة الأحداث السابقة
                    link.removeEventListener('click', handleMobileDropdownClick);
                    // إضافة الحدث الجديد
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
                    // تحقق إذا كانت القائمة في المستوى الأول (ليس داخل قائمة أخرى)
                    const isTopLevel = !link.closest('.YG-dropdown-menu');
                    
                    if (isTopLevel) {
                        // إغلاق القوائم الأخرى في المستوى الأول فقط
                        document.querySelectorAll('.YG-sidebar-scroll-container > .YG-navbar-nav > .YG-nav-item > .YG-nav-link.has-dropdown').forEach(otherLink => {
                            if (otherLink !== link) {
                                const otherDropdown = otherLink.nextElementSibling;
                                if (otherDropdown) {
                                    otherDropdown.classList.remove('YG-show');
                                    otherLink.classList.remove('YG-rotated');
                                    
                                    // إغلاق جميع القوائم الداخلية أيضاً
                                    otherDropdown.querySelectorAll('.YG-dropdown-menu.YG-show').forEach(innerDropdown => {
                                        innerDropdown.classList.remove('YG-show');
                                        const innerLink = innerDropdown.previousElementSibling;
                                        if (innerLink) innerLink.classList.remove('YG-rotated');
                                    });
                                }
                            }
                        });
                    }
                    
                    // تبديل حالة القائمة الحالية
                    const isOpen = dropdown.classList.contains('YG-show');
                    dropdown.classList.toggle('YG-show');
                    link.classList.toggle('YG-rotated');
                    
                    // إذا كنا نقوم بإغلاق القائمة، أغلق القوائم الفرعية داخلها
                    if (isOpen && isTopLevel) {
                        dropdown.querySelectorAll('.YG-dropdown-menu.YG-show').forEach(innerDropdown => {
                            innerDropdown.classList.remove('YG-show');
                            const innerLink = innerDropdown.previousElementSibling;
                            if (innerLink) innerLink.classList.remove('YG-rotated');
                        });
                    }
                    
                    // إضافة تأثير الهفر للرابط الذي تم النقر عليه
                    link.classList.add('YG-active');
                    setTimeout(() => {
                        link.classList.remove('YG-active');
                    }, 300);
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
            
            // فتح القائمة الجانبية
            function openSidebar() {
                sidebarModal.classList.add('YG-active');
                burgerMenu.classList.add('YG-active');
                desktopBurgerMenu.classList.add('YG-active');
                document.body.style.overflow = 'hidden'; // منع التمرير في الصفحة الرئيسية
                
                // إعادة إنشاء القائمة للتأكد من تحديثها
                createMobileMenu();
                
                // إعادة تعيين وضع التمرير
                sidebarScroll.scrollTop = 0;
            }
            
            // إغلاق القائمة الجانبية
            function closeSidebarFunc() {
                sidebarModal.classList.remove('YG-active');
                burgerMenu.classList.remove('YG-active');
                desktopBurgerMenu.classList.remove('YG-active');
                document.body.style.overflow = ''; // إعادة التمرير في الصفحة الرئيسية
                
                // إغلاق جميع القوائم المنسدلة عند إغلاق الشريط الجانبي
                closeAllDropdowns();
            }
            
            // إضافة أحداث النقر
            burgerMenu.addEventListener('click', openSidebar);
            desktopBurgerMenu.addEventListener('click', openSidebar);
            closeSidebar.addEventListener('click', closeSidebarFunc);
            
            // إغلاق القائمة الجانبية عند النقر خارجها
            document.addEventListener('click', function(event) {
                if (!sidebarModal.contains(event.target) && 
                    !burgerMenu.contains(event.target) && 
                    !desktopBurgerMenu.contains(event.target)) {
                    closeSidebarFunc();
                }
            });
            
            // إغلاق القائمة عند الضغط على زر Esc
            document.addEventListener('keydown', function(event) {
                if (event.key === 'Escape') {
                    closeSidebarFunc();
                }
            });
            
            // منع تمرير الصفحة عند التمرير داخل القائمة
            sidebarScroll.addEventListener('wheel', function(e) {
                // حساب إذا كان هناك محتوى إضافي للتمرير
                const isScrollable = this.scrollHeight > this.clientHeight;
                const isAtTop = this.scrollTop === 0;
                const isAtBottom = this.scrollTop + this.clientHeight === this.scrollHeight;
                
                // منع انتشار التمرير للصفحة الرئيسية
                if (isScrollable) {
                    // إذا كان التمرير لأسفل وفي الأعلى، أو لأعلى وفي الأسفل
                    if ((e.deltaY < 0 && isAtTop) || (e.deltaY > 0 && isAtBottom)) {
                        e.preventDefault();
                    }
                }
            }, { passive: false });
            
            // منع تمرير اللمس للصفحة الرئيسية عند التمرير داخل القائمة
            let startY = 0;
            sidebarScroll.addEventListener('touchstart', function(e) {
                startY = e.touches[0].clientY;
            }, { passive: true });
            
            sidebarScroll.addEventListener('touchmove', function(e) {
                const currentY = e.touches[0].clientY;
                const isScrollable = this.scrollHeight > this.clientHeight;
                const isAtTop = this.scrollTop === 0;
                const isAtBottom = this.scrollTop + this.clientHeight === this.scrollHeight;
                
                // منع انتشار اللمس للصفحة الرئيسية
                if (isScrollable) {
                    // إذا كان التمرير لأسفل وفي الأعلى، أو لأعلى وفي الأسفل
                    if ((currentY > startY && isAtTop) || (currentY < startY && isAtBottom)) {
                        e.preventDefault();
                    }
                }
            }, { passive: false });
            
            // تأثير التمرير على الهيدر
            let lastScrollTop = 0;
            window.addEventListener('scroll', function() {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                
                // إضافة/إزالة الكلاس عند التمرير
                if (scrollTop > 50) {
                    navbarArea.classList.add('YG-scrolled');
                } else {
                    navbarArea.classList.remove('YG-scrolled');
                }
                
                // إخفاء الهيدر عند التمرير لأسفل على الجوال
                if (window.innerWidth <= 992) {
                    if (scrollTop > lastScrollTop && scrollTop > 100) {
                        navbarArea.style.transform = 'translateY(-100%)';
                        navbarArea.style.transition = 'transform 0.3s ease';
                    } else {
                        navbarArea.style.transform = 'translateY(0)';
                    }
                    
                    // إغلاق القائمة الجانبية عند التمرير
                    if (scrollTop > 100) {
                        closeSidebarFunc();
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
                                dropdown.style.transform = 'translateY(5px)';
                            }
                        });
                        
                        item.addEventListener('mouseleave', function() {
                            const dropdown = this.querySelector('.YG-dropdown-menu');
                            if (dropdown) {
                                dropdown.style.opacity = '0';
                                dropdown.style.visibility = 'hidden';
                                dropdown.style.transform = 'translateY(15px)';
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
            
            // إنشاء القائمة أول مرة
            createMobileMenu();
            
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
            
         
        });
