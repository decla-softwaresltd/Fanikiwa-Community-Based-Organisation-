// --- 1. Sticky Navigation Scroll Effect ---
const header = document.getElementById('main-header');

if (header) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// --- 2. Fully Responsive Mobile Navigation Hamburger Logic ---
const navToggle = document.querySelector('.mobile-nav-toggle');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-link-item');

function toggleMenu() {
    navToggle.classList.toggle('open');
    navLinks.classList.toggle('open');
    document.body.classList.toggle('overflow-hidden');
}

if (navToggle && navLinks) {
    navToggle.addEventListener('click', toggleMenu);

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('open')) {
                toggleMenu();
            }
        });
    });
}

// --- 3. Interactive Modal Content Engine for Pillars Page ---
const pillarData = {
    sdgs: {
        title: "SDGs Localisation Framework",
        icon: '<i class="fa-solid fa-globe"></i>',
        content: `
            <p>Our interventions map local achievements directly onto United Nations frameworks, tracking structural indicators for <strong>SDG 1 (No Poverty)</strong>, <strong>SDG 4 (Quality Education)</strong>, and <strong>SDG 6 (Clean Water & Sanitation)</strong>.</p>
            <p>By transforming macroeconomic targets into concrete actions—like setting up family kitchen gardens or arranging school bursary pools—we ensure global milestones are realized at the household level.</p>
        `
    },
    impact: {
        title: "Impact Status & Tracking Portal",
        icon: '<i class="fa-solid fa-chart-line"></i>',
        content: `
            <p>Data accountability defines our project management lifecycle. We utilize a cloud-based tracking system to audit every field framework, documenting local metrics before and after project execution.</p>
            <p>This allows our board and partners to evaluate real indicators like household water security, forest canopy growth, and student retention rates transparently.</p>
        `
    },
    democracy: {
        title: "Democracy, Governance & Elections",
        icon: '<i class="fa-solid fa-check-to-slot"></i>',
        content: `
            <p>Strong institutions require an informed, active community. Fanikiwa hosts constructive non-partisan workshops to support transparent public governance processes and voter registration awareness.</p>
            <p>Our training programs empower grassroots groups to understand public budgets, engage effectively with development plans, and advocate for human rights safely and productively.</p>
        `
    },
    health: {
        title: "Health Awareness Interventions",
        icon: '<i class="fa-solid fa-heart-pulse"></i>',
        content: `
            <p>Preventative care reduces long-term medical vulnerability. Our teams arrange local health awareness drives, distribute critical family wellness guides, and design educational sessions on nutritional hygiene.</p>
            <p>By connecting families to preventative screenings and local clinical partners, we build stable support frameworks for public health on the ground.</p>
        `
    },
    agriculture: {
        title: "Agriculture & Food Security Planning",
        icon: '<i class="fa-solid fa-wheat-awn"></i>',
        content: `
            <p>To insulate smallholder farmers from climate fluctuations, we teach bio-intensive farming methods, organic composting techniques, and local crop diversification.</p>
            <p>Our focus shifts rural communities away from high-cost input cycles toward resilient setups that improve soil microbiology and guarantee nutritional security.</p>
        `
    },
    wash: {
        title: "Water, Sanitation & Hygiene (WASH Systems)",
        icon: '<i class="fa-solid fa-faucet-drip"></i>',
        content: `
            <p>Clean water is an absolute necessity for health and development. Our WASH team helps communities install low-maintenance water extraction tools, build hygienic sanitation facilities, and implement household water treatment procedures.</p>
            <p>These efforts prevent water-borne illnesses and significantly reduce the time spent collecting water, allowing young girls to focus on school.</p>
        `
    },
    education: {
        title: "Education & Skill Development",
        icon: '<i class="fa-solid fa-graduation-cap"></i>',
        content: `
            <p>We work to eliminate barriers to learning by connecting students to bursaries and upgrading basic school infrastructure.</p>
            <p>Simultaneously, our vocational skills division runs technical bootcamps in computing, digital creation, and micro-business management, preparing young people for the modern labor market.</p>
        `
    }
};

const modal = document.getElementById('pillar-modal');
const modalTitle = document.getElementById('modal-title');
const modalIcon = document.getElementById('modal-icon');
const modalBody = document.getElementById('modal-body');
const modalClose = document.querySelector('.modal-close');
const pillarCards = document.querySelectorAll('.pillar-card');

// Modal operation safety wrapper
if (modal && pillarCards.length > 0) {
    pillarCards.forEach(card => {
        card.addEventListener('click', () => {
            const pillarKey = card.getAttribute('data-pillar');
            const data = pillarData[pillarKey];

            if (data) {
                modalIcon.innerHTML = data.icon;
                modalTitle.innerText = data.title;
                modalBody.innerHTML = data.content;
                modal.classList.add('active');
            }
        });
    });

    function closeModal() {
        modal.classList.remove('active');
    }

    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
}

// --- 4. Contact Form Feedback Interactivity ---
const contactForm = document.getElementById('interactive-contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerText;

        submitBtn.innerText = "Sending...";
        submitBtn.style.backgroundColor = "#27ae60";
        submitBtn.disabled = true;

        setTimeout(() => {
            alert(`Thank you, ${name}! Your message has been simulated successfully.`);
            contactForm.reset();
            submitBtn.innerText = originalText;
            submitBtn.style.backgroundColor = "";
            submitBtn.disabled = false;
        }, 1200);
    });
}
// --- 5. Support Us Page Interactivity Control Hub ---
const supportCards = document.querySelectorAll('.support-nav-card');
const supportPanes = document.querySelectorAll('.support-pane');

if (supportCards.length > 0 && supportPanes.length > 0) {
    supportCards.forEach(card => {
        card.addEventListener('click', () => {
            // Remove active classes everywhere
            supportCards.forEach(c => c.classList.remove('active'));
            supportPanes.forEach(p => p.classList.remove('active'));

            // Toggle active status for target element
            card.classList.add('active');
            const targetID = card.getAttribute('data-target');
            const targetPane = document.getElementById(targetID);

            if (targetPane) {
                targetPane.classList.add('active');
            }
        });
    });
}

// Sub-Form Event Simulation Engine
const subForms = document.querySelectorAll('.sub-support-form');
subForms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("Thank you! Your support request has been simulated accurately. Connect your endpoint services to launch production storage hooks.");
        form.reset();
    });
});