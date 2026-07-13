'use strict';

/* ============================================================
   Site content data
   Edit these arrays to update the page; markup is generated
   from them by the shared render helpers below.
   ============================================================ */

var SOCIAL = [
    { href: 'mailto:akash20041764591@gmail.com', label: 'Email', icon: 'fa-solid fa-envelope' },
    { href: 'https://drive.google.com/file/d/1l3oBU-zzhbPDugwjJnki6kt1cyzC_exH/view?usp=sharing', label: 'CV', icon: 'fa-solid fa-file-lines', external: true },
    { href: 'https://scholar.google.com/citations?user=j8UvD20AAAAJ&hl=en', label: 'Google Scholar', icon: 'ai ai-google-scholar-square', external: true },
    { href: 'https://github.com/akash1764591', label: 'GitHub', icon: 'fa-brands fa-github', external: true },
    { href: 'https://www.linkedin.com/in/akash-s-473781263/', label: 'LinkedIn', icon: 'fa-brands fa-linkedin-in', external: true }
];

var NEWS = [
    { date: 'June 2026', html: 'I’m joining <a href="https://www.latentforce.ai/" target="_blank">LatentForce</a> full-time as a Research Scientist!' },
    { date: 'May 2026', html: 'Our preprint <em>"Fairness in Two-Player Zero-Sum Games with Bandit Feedback"</em> is now on <a href="https://arxiv.org/abs/2606.01159" target="_blank">arXiv</a>!' },
    { date: 'May 2026', html: 'Paper accepted at <a href="https://rl-conference.cc/" target="_blank">RLC 2026</a> and <a href="https://probml.cc/" target="_blank">ProbML @ ICML 2026</a>!' },
    { date: 'Mar 2026', html: 'My paper on multi-dueling bandits with Pratik Gajane now on arXiv! Check it out <a href="https://arxiv.org/abs/2603.18972" target="_blank">here</a>.' },
    { date: 'Jan 2026', html: 'Started my internship at LatentForce.' },
    { date: 'Dec 2025', html: 'Excited to be back in Hyderabad for the <a href="https://alphagrep.iiit.ac.in/acm-winter-school.html" target="_blank">ACM Winter School</a> on AI &amp; Finance. (Thanks to AlphaGrep &times; IIITH lab)' },
    { date: 'Oct 2025', html: 'Our Team <em>Apex</em> secured 24th position (out of 80,000+) in the Amazon ML Challenge \'25.' },
    { date: 'June 2025', html: 'Attended the Microsoft Research Academic Summit (gained a fresh Outlook!).' },
    { date: 'May 2025', html: 'Started my summer internship at IRIT Toulouse.' },
    { date: 'Mar 2025', html: 'Selected for the France Excellence Charpak Scholarship (among 35 Indian undergrads).' },
    { date: 'Dec 2024', html: 'Spent a week at IIT Bombay leading the team on the BharatForge challenge for Inter IIT Tech Meet 13.0.' },
    { date: 'Dec 2024', html: 'Selected for the CS Theory Winter Residency at IIT Delhi (cohort of 30 students nationwide).' },
    { date: 'May 2024', html: 'Started my summer internship at IIIT Hyderabad.' },
    { date: 'Dec 2023', html: 'Represented Team IIT Patna in the Devrev problem statement at Inter IIT Tech Meet 12.0 hosted by IIT Madras.' },
    { date: 'Aug 2023', html: 'Stepped up as Sophomore Coordinator for the campus Machine Learning society.' },
    { date: 'Nov 2022', html: 'Joined IIT Patna for my undergrad studies.' }
];

var PUBLICATIONS = [
    {
        title: 'Fairness in Two-Player Zero-Sum Games with Bandit Feedback',
        url: 'https://arxiv.org/abs/2606.01159',
        authors: '<strong>S Akash</strong>, Pratik Gajane',
        venues: [],
        links: [{ label: 'arXiv', href: 'https://arxiv.org/abs/2606.01159' }],
        abstract: 'We study two-player zero-sum games with bandit feedback under a fairness constraint that requires every action to be played at least a minimum fraction of the time. Such a constraint typically turns the optimal strategy from a single action into a mixture, which is harder to learn. Our key tool is a reparametrization that rewrites any fair game as an ordinary zero-sum game on a modified payoff matrix, so classical equilibrium theory carries over directly. With it, we bound the price of fairness, propose an Explore-Then-Commit algorithm with provable regret guarantees, and obtain a sharper, instance-dependent rate when the fair solution concentrates on a single dominant action.'
    },
    {
        title: 'Best-of-Both-Worlds Multi-Dueling Bandits: Unified Algorithms for Stochastic and Adversarial Preferences under Condorcet and Borda Objectives',
        url: 'https://arxiv.org/abs/2603.18972',
        authors: '<strong>S Akash</strong>, Pratik Gajane, Jawar Singh',
        venues: [
            '<em>Reinforcement Learning Conference (<strong>RLC</strong>)</em>, 2026',
            '<em>ProbML Workshop @ ICML</em>, 2026 &nbsp;(extended abstract)'
        ],
        links: [
            { label: 'arXiv', href: 'https://arxiv.org/abs/2603.18972' },
            { label: 'paper', href: 'DATA/Multi_Dueling_Bandits.pdf' },
            { label: 'ext. abstract', href: 'DATA/Multi_Dueling_Bandits_extended_abstract.pdf' }
        ],
        abstract: 'Multi-dueling bandits — where a learner selects multiple arms per round and observes only the winner — arise naturally in ranking and recommendation systems. We ask: can a single algorithm perform optimally in both stochastic and adversarial environments, without knowing which regime it faces? We answer affirmatively, giving the first best-of-both-worlds algorithms for multi-dueling bandits under both Condorcet and Borda objectives, with matching lower bounds for the Condorcet setting and near optimal bounds for the Borda setting.'
    }
];

var EXPERIENCE = [
    {
        logo: 'images/latentforce_ai_logo.jpeg', alt: 'LatentForce',
        role: 'Research Intern', org: 'LatentForce',
        meta: 'Jan 2026 &ndash; Present',
        body: 'RL &times; LLMs.'
    },
    {
        logo: 'images/irit_logo.webp', alt: 'IRIT Toulouse',
        role: 'Research Intern', org: 'IRIT Toulouse',
        meta: 'May 2025 &ndash; July 2025 &nbsp;&middot;&nbsp; Advisor: Dr. Urtzi Ayesta',
        body: 'Interned with the RMESS team, focusing on the development and analysis of Whittle index-based scheduling algorithms.'
    },
    {
        logo: 'images/IIIT_Hyderabad_Logo-e1655116937986.jpg', alt: 'IIIT Hyderabad',
        role: 'Research Intern', org: 'IIIT Hyderabad',
        meta: 'May 2024 &ndash; July 2024 &nbsp;&middot;&nbsp; Advisor: Dr. Tejas Bodas',
        body: 'Developed RL algorithms for Markovian bandits and a hybrid algorithm to improve the sample efficiency of Q-learning.'
    }
];

/* ============================================================
   Shared render helpers
   ============================================================ */

// Render a list of data items into a container using a template
// function that maps each item to an HTML string.
function renderList(selector, items, template) {
    var container = document.querySelector(selector);
    if (!container) return;
    container.innerHTML = items.map(template).join('');
}

// Build an anchor's target/rel attributes for external links.
function linkAttrs(external) {
    return external ? ' target="_blank" rel="noopener"' : '';
}

/* ---- Section templates ---- */

function socialTemplate(s) {
    return '<a href="' + s.href + '"' + linkAttrs(s.external) +
        ' title="' + s.label + '" aria-label="' + s.label + '">' +
        '<i class="' + s.icon + '"></i></a>';
}

function newsTemplate(n) {
    return '<div class="news-row">' +
        '<span class="news-date">' + n.date + '</span>' +
        '<span>' + n.html + '</span>' +
        '</div>';
}

function pubTemplate(p) {
    var venues = (p.venues || []).map(function (v) {
        return '<div class="pub-venue">' + v + '</div>';
    }).join('');
    var links = (p.links || []).map(function (l) {
        return '<a href="' + l.href + '" target="_blank" rel="noopener">' + l.label + '</a>';
    }).join('');
    // The abstract-body follows pub-links, matching the original layout.
    var abstractLink = p.abstract ? '<span class="abstract-link" data-toggle-abstract>abstract</span>' : '';
    var abstractBody = p.abstract
        ? '<div class="abstract-body"><div class="abstract-text">' + p.abstract + '</div></div>'
        : '';
    return '<div class="pub-item">' +
        '<div class="pub-title"><a href="' + p.url + '" target="_blank" rel="noopener">' + p.title + '</a></div>' +
        '<div class="pub-authors">' + p.authors + '</div>' +
        venues +
        '<div class="pub-links">' + links + abstractLink + '</div>' +
        abstractBody +
        '</div>';
}

function experienceTemplate(e) {
    return '<div class="tl-item">' +
        '<div class="tl-head">' +
        '<div class="tl-logo"><img src="' + e.logo + '" alt="' + e.alt + '"></div>' +
        '<div>' +
        '<div class="tl-role">' + e.role + ' <span class="org">&middot; ' + e.org + '</span></div>' +
        '<div class="tl-meta">' + e.meta + '</div>' +
        '</div></div>' +
        '<p>' + e.body + '</p>' +
        '</div>';
}

/* ============================================================
   Behaviour
   ============================================================ */

// Fade-up reveal on scroll.
function initReveal() {
    var els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
        els.forEach(function (el) { el.classList.add('in'); });
        return;
    }
    var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
            if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function (el) { io.observe(el); });
}

// Scrollspy — highlight the nav link for the section in view.
function initScrollspy() {
    var links = [].slice.call(document.querySelectorAll('.site-nav a.nav-link'));
    var map = {}, ids = [];
    links.forEach(function (l) {
        var id = (l.getAttribute('href') || '').replace('#', '');
        var sec = id && document.getElementById(id);
        if (sec) { map[id] = l; ids.push(id); }
    });
    if (!ids.length || !('IntersectionObserver' in window)) return;
    var ratios = {};
    var spy = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { ratios[e.target.id] = e.isIntersecting ? e.intersectionRatio : 0; });
        var current = null, best = -1;
        ids.forEach(function (id) { var v = ratios[id] || 0; if (v > best) { best = v; current = id; } });
        links.forEach(function (l) { l.classList.remove('active'); });
        if (current && map[current]) map[current].classList.add('active');
    }, { rootMargin: '-70px 0px -55% 0px', threshold: [0, 0.2, 0.5, 1] });
    ids.forEach(function (id) { spy.observe(document.getElementById(id)); });
}

// Dark / light toggle.
function initThemeToggle() {
    var btn = document.getElementById('themeToggle');
    if (!btn) return;
    var icon = btn.querySelector('i');
    function sync() {
        var dark = document.documentElement.getAttribute('data-theme') === 'dark';
        if (icon) icon.className = dark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
        btn.setAttribute('title', dark ? 'Switch to light' : 'Switch to dark');
    }
    sync();
    btn.addEventListener('click', function () {
        var dark = document.documentElement.getAttribute('data-theme') === 'dark';
        var next = dark ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        try { localStorage.setItem('theme', next); } catch (e) {}
        sync();
    });
}

// Single delegated handler for all abstract toggles (replaces the
// per-item inline onclick handlers).
function initAbstractToggles() {
    document.addEventListener('click', function (e) {
        var trigger = e.target.closest('[data-toggle-abstract]');
        if (!trigger) return;
        var item = trigger.closest('.pub-item');
        if (!item) return;
        var body = item.querySelector('.abstract-body');
        if (body) body.classList.toggle('open');
    });
}

/* ============================================================
   Boot
   ============================================================ */

function init() {
    renderList('#social', SOCIAL, socialTemplate);
    renderList('#news .news-scroll', NEWS, newsTemplate);
    renderList('#publications .pub-list', PUBLICATIONS, pubTemplate);
    renderList('#experience .timeline', EXPERIENCE, experienceTemplate);

    initReveal();
    initScrollspy();
    initThemeToggle();
    initAbstractToggles();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
