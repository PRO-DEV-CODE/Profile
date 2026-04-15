'use strict';


// ==================== LANGUAGE / i18n ====================

const translations = {
  en: {
    // Sidebar
    sidebar_title: 'IT Manager',
    sidebar_show_contacts: 'Show Contacts',
    sidebar_email: 'Email',
    sidebar_phone: 'Phone',
    sidebar_birthday: 'Birthday',
    sidebar_location: 'Location',
    sidebar_download: 'Download',
    sidebar_download_resume: 'Download Resume',
    // Navbar
    nav_about: 'About',
    nav_resume: 'Resume',
    nav_portfolio: 'Portfolio',
    nav_contact: 'Contact',
    // About
    about_title: 'About me',
    about_text_1: "I'm an IT Manager at Combo Beach Hotel Samui. I like the job of supporting and repairing computer equipment. My hobby is writing websites and game systems.",
    about_text_2: 'My job is to help support the use of computer equipment in the organization and plan the use of technology to facilitate and reduce the workflow of users in the organization.',
    about_service_title: "What i'm doing",
    service_support_title: 'Technical Support',
    service_support_text: 'Take care of the advice on how to use the system and take care of it when you encounter problems.',
    service_repair_title: 'Repair And Maintenance',
    service_repair_text: 'Repair equipment and see and maintain according to the usage cycle.',
    service_game_title: 'Game Developer',
    service_game_text: 'Develop a script system and fix the game system',
    service_photo_title: 'Photography',
    service_photo_text: 'Design various posters according to user needs.',
    about_testimonials_title: 'Testimonials',
    about_clients_title: 'Clients',
    // Resume
    resume_title: 'Resume',
    resume_education: 'Education',
    resume_experience: 'Experience',
    resume_skills: 'My skills',
    // Education
    edu_samakkee: 'Samakkee Wittayathan School.',
    edu_samakkee_desc: 'high school',
    edu_sisaket: 'Sisaket Vocational College of Business Administration',
    edu_sisaket_desc: 'Business Computer (High Vocational Diploma)',
    edu_stou: 'Sukhothai Thammathirat Open University',
    edu_stou_desc: 'B.Sc. Computer Science — Major in Information and Communication Technology',
    // Experience
    exp_combo: 'Combo Beach Hotel Samui',
    exp_combo_desc: 'IT Manager',
    exp_kc: 'KC Grande Resort & Spa Koh Chang',
    exp_kc_desc: 'Assistant IT Manager <br>Write a website and manage to improve various applications suitable for working in the hotel.<br>Accept general IT related cases within the hotel<br>Solve problems that arise in IT related work in hotels<br>Make a maintenance plan for the month and year<br>',
    exp_digit: 'Digit Soul',
    exp_digit_desc: 'IT Support <br>Wrote a website that worked within the organization <br>Supported sales of the company <br>Supported for setting up events and organized events in various locations <br>',
    exp_sony: 'Sony Technology (Thailand) Co., Ltd.',
    exp_sony_desc: 'IT Support & Technician <br>Received work cases according to assigned work sites <br>Solved IT problems that occurred in the company such as took care of the company\'s systems, repaired computers, managed systems and electronic equipment in the workplace to always be in good condition <br>',
    exp_fahthai: 'Fahthai Aluminium & Curtain',
    exp_fahthai_desc: 'IT Support <br>Made program <br>Solved IT problems in the company <br>Took care of accounts and prepared daily and monthly income and expense accounting department summaries <br>Replied to emails and messages <br>',
    // Portfolio
    portfolio_title: 'Portfolio',
    filter_all: 'All',
    filter_web: 'Web design',
    filter_game: 'Game Developer',
    filter_select: 'Select category',
    // Contact
    contact_title: 'Contact',
    contact_form_title: 'Contact Form',
    contact_fullname: 'Full name',
    contact_email: 'Email address',
    contact_message: 'Your Message',
    contact_send: 'Send Message',
  },
  th: {
    // Sidebar
    sidebar_title: 'ผู้จัดการฝ่ายไอที',
    sidebar_show_contacts: 'แสดงข้อมูลติดต่อ',
    sidebar_email: 'อีเมล',
    sidebar_phone: 'โทรศัพท์',
    sidebar_birthday: 'วันเกิด',
    sidebar_location: 'ที่อยู่',
    sidebar_download: 'ดาวน์โหลด',
    sidebar_download_resume: 'ดาวน์โหลดเรซูเม่',
    // Navbar
    nav_about: 'เกี่ยวกับ',
    nav_resume: 'ประวัติ',
    nav_portfolio: 'ผลงาน',
    nav_contact: 'ติดต่อ',
    // About
    about_title: 'เกี่ยวกับฉัน',
    about_text_1: 'ผมเป็นผู้จัดการฝ่ายไอทีที่ Combo Beach Hotel Samui ผมชอบงานด้านการสนับสนุนและซ่อมบำรุงอุปกรณ์คอมพิวเตอร์ งานอดิเรกของผมคือการเขียนเว็บไซต์และระบบเกม',
    about_text_2: 'หน้าที่ของผมคือช่วยสนับสนุนการใช้อุปกรณ์คอมพิวเตอร์ในองค์กร และวางแผนการใช้เทคโนโลยีเพื่ออำนวยความสะดวกและลดขั้นตอนการทำงานของผู้ใช้ในองค์กร',
    about_service_title: 'สิ่งที่ฉันทำ',
    service_support_title: 'สนับสนุนด้านเทคนิค',
    service_support_text: 'ดูแลและให้คำแนะนำเกี่ยวกับการใช้งานระบบ และแก้ไขปัญหาเมื่อพบข้อขัดข้อง',
    service_repair_title: 'ซ่อมบำรุงและดูแลรักษา',
    service_repair_text: 'ซ่อมอุปกรณ์และดูแลบำรุงรักษาตามรอบการใช้งาน',
    service_game_title: 'นักพัฒนาเกม',
    service_game_text: 'พัฒนาระบบสคริปต์และแก้ไขระบบเกม',
    service_photo_title: 'การถ่ายภาพ',
    service_photo_text: 'ออกแบบโปสเตอร์ต่าง ๆ ตามความต้องการของผู้ใช้',
    about_testimonials_title: 'ผู้อ้างอิง',
    about_clients_title: 'ลูกค้า',
    // Resume
    resume_title: 'ประวัติ',
    resume_education: 'การศึกษา',
    resume_experience: 'ประสบการณ์',
    resume_skills: 'ทักษะของฉัน',
    // Education
    edu_samakkee: 'โรงเรียนสามัคคีวิทยาทาน',
    edu_samakkee_desc: 'มัธยมศึกษา',
    edu_sisaket: 'วิทยาลัยอาชีวศึกษาเพื่อธุรกิจศรีสะเกษ',
    edu_sisaket_desc: 'คอมพิวเตอร์ธุรกิจ (ประกาศนียบัตรวิชาชีพชั้นสูง)',
    edu_stou: 'มหาวิทยาลัยสุโขทัยธรรมาธิราช',
    edu_stou_desc: 'วิทยาศาสตรบัณฑิต สาขาวิทยาการคอมพิวเตอร์ วิชาเอกเทคโนโลยีสารสนเทศและการสื่อสาร',
    // Experience
    exp_combo: 'Combo Beach Hotel Samui',
    exp_combo_desc: 'ผู้จัดการฝ่ายไอที',
    exp_kc: 'KC Grande Resort & Spa Koh Chang',
    exp_kc_desc: 'ผู้ช่วยผู้จัดการฝ่ายไอที <br>เขียนเว็บไซต์และจัดการปรับปรุงแอปพลิเคชันต่าง ๆ ให้เหมาะสมกับการทำงานในโรงแรม<br>รับเคสงานไอทีทั่วไปภายในโรงแรม<br>แก้ไขปัญหาที่เกิดขึ้นในงานไอทีของโรงแรม<br>วางแผนการบำรุงรักษาประจำเดือนและประจำปี<br>',
    exp_digit: 'Digit Soul',
    exp_digit_desc: 'ฝ่ายสนับสนุนไอที <br>เขียนเว็บไซต์สำหรับใช้งานภายในองค์กร <br>สนับสนุนฝ่ายขายของบริษัท <br>สนับสนุนการจัดงานอีเวนต์ในสถานที่ต่าง ๆ <br>',
    exp_sony: 'Sony Technology (Thailand) Co., Ltd.',
    exp_sony_desc: 'ฝ่ายสนับสนุนไอทีและช่างเทคนิค <br>รับเคสงานตามไซต์งานที่ได้รับมอบหมาย <br>แก้ไขปัญหาไอทีในบริษัท เช่น ดูแลระบบ ซ่อมคอมพิวเตอร์ จัดการระบบและอุปกรณ์อิเล็กทรอนิกส์ในที่ทำงานให้อยู่ในสภาพดีเสมอ <br>',
    exp_fahthai: 'ฟ้าไทยอลูมิเนียมแอนด์เคอร์เทน',
    exp_fahthai_desc: 'ฝ่ายสนับสนุนไอที <br>เขียนโปรแกรม <br>แก้ไขปัญหาไอทีในบริษัท <br>ดูแลบัญชีและจัดทำสรุปรายรับรายจ่ายประจำวันและประจำเดือน <br>ตอบอีเมลและข้อความ <br>',
    // Portfolio
    portfolio_title: 'ผลงาน',
    filter_all: 'ทั้งหมด',
    filter_web: 'ออกแบบเว็บ',
    filter_game: 'นักพัฒนาเกม',
    filter_select: 'เลือกหมวดหมู่',
    // Contact
    contact_title: 'ติดต่อ',
    contact_form_title: 'แบบฟอร์มติดต่อ',
    contact_fullname: 'ชื่อ-นามสกุล',
    contact_email: 'อีเมล',
    contact_message: 'ข้อความของคุณ',
    contact_send: 'ส่งข้อความ',
  }
};

// Language filter mapping (English filter values → Thai display, for portfolio filtering)
const filterMap = {
  en: { 'all': 'All', 'web design': 'Web design', 'game developer': 'Game Developer' },
  th: { 'all': 'ทั้งหมด', 'web design': 'ออกแบบเว็บ', 'game developer': 'นักพัฒนาเกม' }
};

let currentLang = localStorage.getItem('lang') || 'en';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);

  // Update all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  // Update lang switcher buttons
  document.querySelectorAll('.lang-btn').forEach(function(btn) {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
}

// Language switcher click event
document.querySelectorAll('.lang-btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    setLanguage(this.getAttribute('data-lang'));
  });
});

// Apply saved language on load
if (currentLang !== 'en') {
  setLanguage(currentLang);
}



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = getFilterKey(this.innerText);
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// Reverse lookup: find English filter key from any language display text
function getFilterKey(text) {
  const lower = text.toLowerCase();
  for (const lang in filterMap) {
    for (const key in filterMap[lang]) {
      if (filterMap[lang][key].toLowerCase() === lower) return key;
    }
  }
  return lower;
}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = getFilterKey(this.innerText);
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    const targetPage = this.getAttribute('data-nav-page');

    for (let i = 0; i < pages.length; i++) {
      if (targetPage === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}


// ==================== CODE RAIN EFFECT ====================

(function() {
  const canvas = document.getElementById('code-rain');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789<>{}[]();:=+-%!@#$&*/\\|~^_.';
  const fontSize = 14;
  const columns = Math.floor(canvas.width / fontSize);
  const drops = Array(columns).fill(1);
  // Random font sizes per column (small and large variation)
  const sizes = [];
  for (let i = 0; i < columns; i++) {
    sizes.push(Math.floor(Math.random() * 16) + 8); // 8px to 24px
  }

  function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#D4A843';

    for (let i = 0; i < drops.length; i++) {
      const char = chars[Math.floor(Math.random() * chars.length)];
      const size = sizes[i];
      ctx.font = size + 'px monospace';
      ctx.fillText(char, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
        sizes[i] = Math.floor(Math.random() * 16) + 8;
      }
      drops[i]++;
    }
  }

  setInterval(draw, 50);
})();