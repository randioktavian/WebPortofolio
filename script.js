// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'light';

document.documentElement.setAttribute('data-theme', currentTheme);
themeToggle.innerHTML = currentTheme === 'dark' ? 
    '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';

themeToggle.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    themeToggle.innerHTML = theme === 'dark' ? 
        '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile Menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.innerHTML = navMenu.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Skills Data
const skills = [
    "HTML5", "CSS3", "JavaScript", "React", 
    "PHP", "MySQL", "Git & GitHub", "Figma", "Bootstrap", "Tailwind"
];

// Render Skills
function renderSkills() {
// Tools & Software
const tools = [
    {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        name: "VS Code",
        desc: "Editor utama untuk coding"
    },
    {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        name: "Git & GitHub",
        desc: "Version Control"
    },
    {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
        name: "PHP",
        desc: "Backend Development"
    },
    {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        name: "MySQL",
        desc: "Database Management"
    },
    {
        icon: "https://www.knime.com/themes/custom/bootstrap_knime/logo.svg",   // ← Updated
        name: "KNIME",
        desc: "Data Analytics"
    },
    {
        icon: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Orange-software-logo.png",  // ← Updated
        name: "Orange",
        desc: "Data Mining & Visualization"
    },
    {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
        name: "Microsoft Office",
        desc: "Office Suite"
    },
    {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
        name: "Photoshop",
        desc: "Photo Editing"
    },
    {
        icon: "https://upload.wikimedia.org/wikipedia/commons/a/a5/CorelDraw_logo_%282%29.svg",  // ← Updated
        name: "CorelDraw",
        desc: "Vector Design"
    },
    {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-plain.svg",
        name: "Premiere Pro",
        desc: "Video Editing"
    }
];

    document.getElementById('tools-grid').innerHTML = tools.map(tool => `
        <div class="skill-card">
            <img src="${tool.icon}" alt="${tool.name}" class="skill-logo">
            <h4>${tool.name}</h4>
            <p>${tool.desc}</p>
        </div>
    `).join('');

    // Hard Skills
    const hardSkills = [
        { icon: "🌐", name: "Web Development", desc: "HTML, CSS, JavaScript" },
        { icon: "🗄️", name: "Database", desc: "MySQL & PHP" },
        { icon: "📈", name: "Data Analysis", desc: "KNIME & Orange" }
    ];

    document.getElementById('hard-grid').innerHTML = hardSkills.map(skill => `
        <div class="skill-card">
            <span class="skill-icon">${skill.icon}</span>
            <h4>${skill.name}</h4>
            <p>${skill.desc}</p>
        </div>
    `).join('');

    // Soft Skills
    const softSkills = [
        { icon: "🤝", name: "Problem Solving", desc: "Analisis dan solusi cepat" },
        { icon: "⏱️", name: "Time Management", desc: "Manajemen tugas" },
        { icon: "📢", name: "Communication", desc: "Presentasi & dokumentasi" },
        { icon: "🚀", name: "Fast Learning", desc: "Adaptasi teknologi baru" }
    ];

    document.getElementById('soft-grid').innerHTML = softSkills.map(skill => `
        <div class="skill-card">
            <span class="skill-icon">${skill.icon}</span>
            <h4>${skill.name}</h4>
            <p>${skill.desc}</p>
        </div>
    `).join('');
}

// Projects Data
const projects = [
    
    {
        title: "Portfolio Website",
        desc: "Website portofolio pribadi responsif dengan dark mode dan animasi halus.",
        tags: ["HTML", "CSS", "JavaScript"]
    },

        {
        title: "aplikasi web penghitung bonus sederhana",
        desc: "Website untuk menghitung bonus atau potongan harga pada produk.",
        tags: ["HTML", "CSS", "JavaScript"]
    },

    {
        title: "Sistem Manajemen Mahasiswa",
        desc: "Aplikasi web full-stack untuk mengelola data mahasiswa, nilai, dan jadwal kuliah dengan fitur autentikasi.",
        tags: ["PHP", "MySQL", "Bootstrap", "JavaScript"]
    },
    {
        title: "E-Commerce Fashion",
        desc: "Toko online modern dengan sistem cart, payment gateway simulasi, dan rekomendasi produk.",
        tags: ["React", "Tailwind", "Firebase", "Stripe"]
    },
    {
        title: "Weather Dashboard",
        desc: "Aplikasi cuaca real-time dengan grafik dan forecast 7 hari menggunakan API eksternal.",
        tags: ["JavaScript", "Chart.js", "API", "Responsive"]
    },

];

function renderProjects() {
    const container = document.getElementById('portfolio-grid');
    container.innerHTML = projects.map(project => `
        <div class="project-card">
            <div>
                <div class="project-year">2025 - 2026</div>
                <h3>${project.title}</h3>
            </div>
            <div>
                <p class="project-desc">${project.desc}</p>
                <div class="project-tags">
                    ${project.tags ? project.tags.map(tag => `<span>${tag}</span>`).join('') : ''}
                </div>
            </div>
        </div>
    `).join('');
}

// Contact Form
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Pesan berhasil dikirim! Terima kasih.');
    this.reset();
});

// Initialize
renderSkills();
renderProjects();

// Back to Top Button
const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});