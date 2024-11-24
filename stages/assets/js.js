 const YG_questionsContainer = document.querySelector('.YG-questions1'); const YG_contactButton = document.createElement('div'); YG_contactButton.classList.add('YG-contact-button'); const YG_contactToggle = document.createElement('button'); YG_contactToggle.classList.add('YG-contact-toggle'); const YG_toggleIcon = document.createElement('i'); YG_toggleIcon.classList.add('fa-regular', 'fa-comment-dots'); YG_contactToggle.appendChild(YG_toggleIcon); YG_contactButton.appendChild(YG_contactToggle); const YG_contactMenu = document.createElement('div'); YG_contactMenu.classList.add('YG-contact-menu', 'YG-hidden'); const YG_contactList = document.createElement('ul'); const platforms = [ { href: 'https://wa.me/201030459067', class: 'whatsapp', icon: 'fa-whatsapp', text: 'WhatsApp' }, { href: 'https://www.facebook.com/YGBrandMaker', class: 'facebook', icon: 'fa-facebook', text: 'Facebook' }, { href: 'https://www.instagram.com/YGBrandMaker', class: 'instagram', icon: 'fa-instagram', text: 'Instagram' }, { href: 'https://twitter.com/YGBrandMaker', class: 'twitter', icon: 'fa-twitter', text: 'Twitter' }, { href: 'https://www.linkedin.com/company/YGBrandMaker', class: 'linkedin', icon: 'fa-linkedin', text: 'LinkedIn' }, { href: 'https://www.tiktok.com/@YGBrandMaker', class: 'tiktok', icon: 'fa-tiktok', text: 'TikTok' }, { href: 'https://www.youtube.com/c/YGBrandMaker', class: 'youtube', icon: 'fa-youtube', text: 'YouTube' }, { href: 'https://www.snapchat.com/add/YGBrandMaker', class: 'snapchat', icon: 'fa-snapchat', text: 'Snapchat' } ]; platforms.forEach(platform => { const listItem = document.createElement('li'); const link = document.createElement('a'); link.href = platform.href; link.classList.add(platform.class); const icon = document.createElement('i'); icon.classList.add('fa-brands', platform.icon); link.appendChild(icon); link.appendChild(document.createTextNode(` ${platform.text}`)); listItem.appendChild(link); YG_contactList.appendChild(listItem); }); YG_contactMenu.appendChild(YG_contactList); YG_contactButton.appendChild(YG_contactMenu); YG_questionsContainer.appendChild(YG_contactButton); YG_contactToggle.addEventListener('click', function () { YG_contactMenu.classList.toggle('YG-hidden'); YG_contactMenu.classList.toggle('YG-show'); }); 
 
  // إنشاء عنصر <style>
    const styleElement = document.createElement('style');
    styleElement.type = 'text/css';

    // إضافة الكود CSS كـ نص داخل <style>
    styleElement.innerHTML = `
      .YG-questions1 {
        width: 500px !important;
      }

      .YG-questions1 h2 {
        padding: 40px !important;
      }

      .YG-questions1 p {
        font-size: 24px !important;
      }

      @keyframes YG-bounce {
        0%, 100% {
          transform: translateY(0) !important;
        }
        50% {
          transform: translateY(-10px) !important;
        }
      }

      .YG-contact-toggle i {
        color: #fff !important;
        font-size: 40px !important;
        display: inline-block !important;
        animation: YG-bounce 1s infinite !important;
      }

      .YG-contact-toggle {
        background-color: #6a2186 !important;
        border: none !important;
        border-radius: 50% !important;
        width: 60px !important;
        height: 60px !important;
        display: flex !important;
        justify-content: center !important;
        align-items: center !important;
        cursor: pointer !important;
      }

      .YG-contact-button {
        position: fixed;
        bottom: 20px !important;
        right: 20px !important;
      }

      .YG-contact-menu {
        position: absolute;
        bottom: 80px !important;
        right: 0 !important;
        background-color: #fff !important;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1) !important;
        border-radius: 10px !important;
        padding: 10px !important;
        display: none !important;
        width: 150px !important;
      }

      .YG-contact-menu ul {
        list-style: none !important;
        padding: 0 !important;
        margin: 0 !important;
      }

      .YG-contact-menu ul li {
        margin: 10px 0 !important;
		padding-left: 10px;
      }

      .YG-contact-menu ul li a {
        text-decoration: none !important;
        color: #333 !important;
        font-size: 16px !important;
        display: flex !important;
        align-items: center !important;
      }

      .YG-contact-menu ul li a i {
        margin-right: 10px !important;
		padding-left: 10px;
      }

      .YG-hidden {
        display: none !important;
      }

      .YG-show {
        display: block !important;
      }

      .YG-questions1 ul {
        list-style-type: none !important;
        padding: 0 !important;
      }

      .YG-questions1 li {
        margin: 10px 0 !important;
      }

      .YG-questions1 a {
        text-decoration: none !important;
        padding: 2px !important;
        border-radius: 5px !important;
        color: #ffffff !important;
      }

      .whatsapp i {
        color: #25D366 !important;
      }

      .facebook i {
        color: #3b5998 !important;
      }

      .instagram i {
        color: #C13584 !important;
      }

      .twitter i {
        color: #1DA1F2 !important;
      }

      .linkedin i {
        color: #0077B5 !important;
      }

      .tiktok i {
        color: #69C9D0 !important;
      }

      .youtube i {
        color: #FF0000 !important;
      }

      .snapchat i {
        color: #a7a40c !important;
      }

      .YG-questions1 a:hover {
        transform: scale(1.2);
      }

      .YG-contact-button {
        position: fixed;
        bottom: 20px !important;
        right: 20px !important;
        animation: YG-move-up-down 2s ease-in-out infinite;
      }

      @keyframes YG-move-up-down {
        0% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-10px);
        }
        100% {
          transform: translateY(0);
        }
      }

      .YG-contact-toggle i {
        animation: YG-bounce 1s infinite cubic-bezier(0.25, 1.5, 0.5, 1);
      }
    `;

    document.body.appendChild(styleElement);