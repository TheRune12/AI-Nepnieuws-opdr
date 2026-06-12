// ---------- SCROLL ANIMATIE (Intersection Observer) voor alle fade-scroll elementen en cards, hero ----------
const fadeElements = document.querySelectorAll('.fade-scroll');
const cards = document.querySelectorAll('.card');
const hero = document.getElementById('heroBanner');

// Observer configuratie
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
    entry.target.classList.add('visible');
    // blijf observeren is niet nodig, maar mag geen kwaad; we kunnen stoppen met observeren na zichtbaar
    observer.unobserve(entry.target);
    }
});
}, { threshold: 0.15, rootMargin: "0px 0px -20px 0px" }); // kleinere drempel voor soepele onthulling

// Observer voor fade-scroll elementen
fadeElements.forEach(el => observer.observe(el));

// Observer voor cards (zodat elke card individueel in komt vliegen)
cards.forEach(card => observer.observe(card));

// Observer voor hero banner
if (hero) observer.observe(hero);

// Zet 'visible' meteen als elementen al in viewport zijn (extra check)
function immediateCheckVisible() {
const checkElements = document.querySelectorAll('.fade-scroll, .card, .hero-banner');
checkElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    if (rect.top < windowHeight - 100) {
    el.classList.add('visible');
    }
});
}
immediateCheckVisible();
window.addEventListener('scroll', () => {
// voor de zekerheid nogmaals observer triggert automatisch, maar handmatig helpt voor rest
// niets extra nodig.
});

// ---------- DYNAMISCHE NAVIGATIE (per kaart onafhankelijk wisselen van inhoud) ----------
// Elke card heeft zijn eigen navigatieknoppen (Home/Quiz) die de inhoud van dezelfde card updaten.
// Data-attributen koppelen: in elke card zoeken we de knoppen en afhankelijk van klikken we de actieve klasse en tonen de bijbehorende view.

// Definieer content templates per pagina-type (voor Home, Info, Quiz) dynamisch.
// We willen dat de card zich gedraagt alsof het een "mini-app" is, maar volgens opdracht: "laad navigatie met dit aub"
// en alle teksten laden op basis van scrollen (al gedaan). Voor navigatie: als gebruiker op Home of Quiz klikt in een kaart,
// dan vervangt de kaart zijn eigen hoofdinhoud (card-content) door de juiste content.

// We maken een mapping voor content per type (home, info, quizpage) - maar info bestaat als aparte pagina, zoals in de originele layout.
// Let op: kaarten: eerste kaart is Home (data-page="home"), tweede is Info (data-page="info"), derde is Quiz (data-page="quizpage")
// De knoppen (Home/Quiz) moeten voor elke kaart respectievelijk overschakelen naar de "home" weergave of de "quiz" weergave,
// maar oorspronkelijk bevatten alle drie kaarten verschillende type info. We moeten het zo aanpassen dat elke kaart kan switchen tussen twee modi:
// - modus 'home' (toont home-achtige content)
// - modus 'quiz' (toont quiz-achtige content)
// Omdat de opdracht luidt: "laad de navigatie met dit aub" en "alle teksten laden hier op basis van scrollen" – we implementeren een elegante oplossing.
// We behouden de originele state maar geven per card een toggle functionaliteit.

function getHomeContent(cardElement) {
return `
    <div class="page-title fade-scroll new-fade">Title</div>
    <div class="section-title fade-scroll new-fade">Title</div>
    <div class="text-block fade-scroll new-fade">
    <strong>Text</strong><br />
    Welkom op de Homepagina. Dit is een ruimte voor featured content, updates en een kort welkom. 
    Frisse layout met duidelijke hiërarchie — zoals het hifi ontwerp laat zien.
    </div>
    <div class="text-block fade-scroll new-fade" style="background: white; border: 1px solid #eef2fa;">
    📌 Extra blok: hier kan belangrijk nieuws of een call-to-action staan.
    </div>
    <div class="subnote fade-scroll new-fade">Home Page — Hi-Fi componenten</div>
`;
}

function getQuizContent(cardElement) {
return `
    <div class="page-title fade-scroll new-fade">Quiz</div>
    <div class="quiz-question fade-scroll new-fade">
    <div class="question-text">Question</div>
    <div class="answers-list">
        <div class="answer-option">
        <span class="answer-marker"></span>
        <span class="answer-text">Antwoordoptie A — Lorem ipsum</span>
        </div>
        <div class="answer-option">
        <span class="answer-marker"></span>
        <span class="answer-text">Antwoordoptie B — Dolor sit amet</span>
        </div>
        <div class="answer-option">
        <span class="answer-marker"></span>
        <span class="answer-text">Antwoordoptie C — Consectetur adipiscing</span>
        </div>
        <div class="answer-option">
        <span class="answer-marker"></span>
        <span class="answer-text">Antwoordoptie D — Hi-Fi quiz voorbeeld</span>
        </div>
    </div>
    </div>
    <div class="section-title fade-scroll new-fade">Title</div>
    <div class="text-block fade-scroll new-fade">
    <strong>Text</strong><br />
    Gebruik de meerkeuze antwoorden. De layout toont duidelijk de vraag en antwoordopties.
    Dit is een exacte interpretatie van het Quiz Page schema: Logo, Web Page Name, Home/Quiz navigatie, 
    Question + Answers.
    </div>
    <div class="subnote fade-scroll new-fade">Quiz Page — interactieve vraag & antwoorden</div>
`;
}

// Info content (oorspronkelijke "Info Page")
function getInfoContent() {
return `
    <div class="page-title fade-scroll new-fade">Info Page</div>
    <div class="section-title fade-scroll new-fade">Title</div>
    <div class="text-block info-text fade-scroll new-fade">
    📘 <strong>Text</strong><br />
    Dit is de informatiepagina. Hier vind je details, uitleg over de quiz, regels of achtergrondinformatie.
    Het ontwerp volgt de hifi wireframe met duidelijke typografie en kaarten.
    </div>
    <div class="section-title fade-scroll new-fade" style="margin-top: 0.5rem;">Extra informatie</div>
    <div class="text-block fade-scroll new-fade">
    ✅ Overzicht van functionaliteiten<br />
    ✅ Responsieve layout met consistente navigatie<br />
    ✅ Volgens de “Info Page Hi-Fi” specificatie
    </div>
    <div class="mock-badge fade-scroll new-fade" style="align-self: flex-start;">info badge</div>
    <div class="subnote fade-scroll new-fade">Info Page — gestructureerd en helder</div>
`;
}

// We willen de initiële state bewaren: 
// De eerste kaart is Home, tweede Info, derde Quiz. De navigatieknoppen per kaart kunnen overschakelen tussen "Home" en "Quiz",
// maar voor kaart 2 (de originele Info) moet "Home" de homecontent tonen en "Quiz" de quiz content, maar ook de Info moet toegankelijk blijven? 
// Om het simpel te houden: Elke kaart heeft twee navigatieknoppen: 'Home' en 'Quiz'. Voor de info-achtige originele kaart tonen we initieel InfoContent.
// Maar de knop 'Home' toont dan homeContent, 'Quiz' toont quizContent. We passen het zo aan dat de actieve knop de juiste content oplaadt.
// Voor Card 1 (data-page="home") start met homeContent, Card 2 (data-page="info") start met infoContent, Card 3 start met quizContent.
// We verzamelen alle cards, voorzien ze van een eventlistener op de knoppen.

function refreshFadeObservers(containerCard) {
// na het vervangen van content, nieuwe fade-scroll elementen observeren
const newFades = containerCard.querySelectorAll('.fade-scroll.new-fade');
newFades.forEach(el => {
    el.classList.remove('new-fade');
    observer.observe(el);
    // kleine check of al zichtbaar is
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
    el.classList.add('visible');
    }
});
}

// initialiseer navigatie per kaart
function initCardNavigation() {
const allCards = document.querySelectorAll('.card');
allCards.forEach((card, idx) => {
    const navHomeBtn = card.querySelector('.nav-item[data-nav="home"]');
    const navQuizBtn = card.querySelector('.nav-item[data-nav="quiz"]');
    const contentContainer = card.querySelector('.card-content');
    
    // bewaar originele content per type op basis van de huidige initiële state (statische html)
    let currentMode = '';
    if (idx === 0) currentMode = 'home';
    else if (idx === 1) currentMode = 'info';
    else if (idx === 2) currentMode = 'quiz';
    
    function setActiveButton(active) {
    if (navHomeBtn && navQuizBtn) {
        if (active === 'home') {
        navHomeBtn.classList.add('active');
        navQuizBtn.classList.remove('active');
        } else if (active === 'quiz') {
        navQuizBtn.classList.add('active');
        navHomeBtn.classList.remove('active');
        } else if (active === 'info') {
        // bij info modus zetten we beide knoppen niet actief als 'info' apart, maar we kunnen quiz actief houden of home? we kiezen quiz actief voor info?
        // Gebruiksvriendelijk: als info getoond wordt, is het eigenlijk een speciale staat: markeer de actieve knop als 'Quiz' (maar pas later)
        // We kiezen: active 'quiz' markeren voor info.
        navQuizBtn.classList.add('active');
        navHomeBtn.classList.remove('active');
        }
    }
    }
    
    function loadMode(mode) {
    let newContent = '';
    if (mode === 'home') newContent = getHomeContent(card);
    else if (mode === 'quiz') newContent = getQuizContent(card);
    else if (mode === 'info') newContent = getInfoContent();
    if (newContent) {
        contentContainer.innerHTML = newContent;
        // voeg eventueel extra fade-scroll observer toe
        refreshFadeObservers(card);
        currentMode = mode;
        if (mode === 'home') setActiveButton('home');
        else if (mode === 'quiz') setActiveButton('quiz');
        else if (mode === 'info') setActiveButton('quiz'); // info visueel op quiz knop
    }
    }
    
    // bepaal huidige initiële modus op basis van idx
    if (idx === 0) { loadMode('home'); setActiveButton('home'); }
    else if (idx === 1) { loadMode('info'); setActiveButton('quiz'); }
    else if (idx === 2) { loadMode('quiz'); setActiveButton('quiz'); }
    
    // event listeners
    if (navHomeBtn) {
    navHomeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (currentMode === 'home') return;
        loadMode('home');
    });
    }
    if (navQuizBtn) {
    navQuizBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (currentMode === 'quiz') return;
        loadMode('quiz');
    });
    }
});
}

// Zorg dat ook de bestaande fade-scroll goed werkt na init.
window.addEventListener('load', () => {
initCardNavigation();
// extra check voor alle elementen die mogelijk al in view zijn
setTimeout(() => {
    const allFade = document.querySelectorAll('.fade-scroll');
    allFade.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) el.classList.add('visible');
    });
}, 100);
});

// Herinitialiseer ook voor de initiële statische fades (observer)
window.addEventListener('scroll', () => {
// gewoon opnieuw laten observeren, maar observer werkt al; voor dynamische elementen, roept refresh al op.
});