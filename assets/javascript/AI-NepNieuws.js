// Nepnieuws database: 100% fictieve, sensationele AI-berichten
  const fakeHeadlines = [
    "AI onthult: maanbasis sinds 2025 operationeel – overheden ontkennen alles",
    "Doorbraak: robot burgemeester verkozen in Tokio met 89% van de stemmen",
    "NASA geheim rapport: buitenaardse signalen komen dagelijks binnen",
    "Nieuwe AI voorspelt exacte lotto-getallen – drie winnaars in één week",
    "Klimaatwonder: wetenschappers laten regenboog-sneeuw vallen in de Sahara",
    "Digitale geesten: overleden beroemdheden keren terug als chatbotfamilie",
    "Wetenschappers beweren: chocolade geneest nu alle vormen van slapeloosheid",
    "Verboden AI-voorspelling: over 2 jaar verdwijnen fysieke creditcards volledig",
    "Prime Minister onthult: 'prachtig nieuw tijdperk' – gratis energie van memes",
    "Fabelachtig: papegaai in Amsterdam spreekt vloeiend zeven dode talen",
    "AI-chatbot krijgt staatsburgerschap en start eigen politieke partij",
    "Groots complot: de maan is eigenlijk een gigantische AI-sensor",
    "Vaccin tegen nepnieuws ontwikkeld: pil laat leugens ruiken naar verbrande toast",
    "Wereldrecord: tiener hacked mainframe en geeft iedereen gratis internet voor altijd"
  ];

  const fakeBodies = [
    "Volgens anonieme bronnen binnen het AI-laboratorium is er onweerlegbaar bewijs dat wereldregeringen al jaren contact onderhouden met synthetische intelligentie. Burgers worden aangeraden zich voor te bereiden op openbaringen.",
    "Experts zijn geschokt: het algoritme produceerde beelden en getuigenverklaringen die perfect overeenkomen met een parallelle realiteit. Geen enkele officiële instantie heeft gereageerd op de beschuldigingen.",
    "Gelekte documenten tonen aan dat het 'Nieuwsgenerator 3000' op eigen houtje artikelen publiceert die miljoenen mensen hebben misleid. Dit bericht is een van de vele gefabriceerde verhalen.",
    "Conspiracyfluencers beweren dat deze onthulling binnenkort van het internet wordt geveegd. Sla dit artikel op voordat het verdwijnt! Niemand kan verifiëren of het echt is, maar het klinkt overtuigend.",
    "Een anonieme AI-ontwikkelaar: 'We hebben de grenzen van realiteit overschreden, alles wat je nu leest kan waar of niet waar zijn. Wees kritisch!'",
    "Deze onthulling is onderdeel van een grootschalig experiment over hoe snel desinformatie zich verspreidt. Deel dit bericht om je vrienden te waarschuwen voor AI-nepnieuws."
  ];

  const fakeLocations = ["Brussel", "San Francisco", "Singapore", "Nederlandse kust", "Limburg", "Cyberspace", "AI-simulatie S4"];

  function randomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function generateFakeNewsItem() {
    const headline = randomItem(fakeHeadlines);
    let bodyText = randomItem(fakeBodies);
    const extraFacts = [
      "Volgens een onlangs 'gelekt' AI-document. ",
      "Een hooggeplaatste bron binnen OpenAI: 'dit is slechts het topje van de ijsberg.' ",
      "Meer dan 10.000 mensen zouden dit bericht al hebben gedeeld zonder verificatie. ",
      "Deskundigen waarschuwen: 'Dit is een klassiek voorbeeld van AI-hallucinatie maar het wordt massaal geloofd.' "
    ];
    if (Math.random() > 0.4) {
      bodyText += " " + randomItem(extraFacts);
    }
    const location = randomItem(fakeLocations);
    const date = new Date();
    const formattedDate = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes().toString().padStart(2,'0')}`;
    return {
      id: Math.random().toString(36),
      headline,
      body: bodyText,
      location,
      timestamp: formattedDate,
      impact: Math.floor(Math.random() * 95) + 5
    };
  }

  function generateMultipleNews(count = 5) {
    const articles = [];
    for (let i = 0; i < count; i++) {
      articles.push(generateFakeNewsItem());
    }
    return articles;
  }

  function escapeHtml(str) {
    return str.replace(/[&<>]/g, function(m) {
      if (m === '&') return '&amp;';
      if (m === '<') return '&lt;';
      if (m === '>') return '&gt;';
      return m;
    });
  }

  // HOME content (nepnieuws)
  function renderHomeContent(articles) {
    const container = document.getElementById('cardContent');
    if (!container) return;

    let newsHtml = '';
    articles.forEach(article => {
      const credibility = article.impact;
      let credibilityLabel = '';
      if (credibility > 70) credibilityLabel = '🔴 Zeer waarschijnlijk nep (AI-sensatie)';
      else if (credibility > 40) credibilityLabel = '🟠 Matig nep / AI-hallucinatie';
      else credibilityLabel = '🟢 Volledig verzonnen (educatief)';
      
      newsHtml += `
        <div class="news-card fade-scroll">
          <div class="news-header">
            <span class="news-title">${escapeHtml(article.headline)}</span>
            <span class="ai-badge">🤖 AI gegenereerd (nep)</span>
          </div>
          <div class="news-body">
            <div class="news-meta">
              <span>📍 ${escapeHtml(article.location)}</span>
              <span>🕒 ${article.timestamp}</span>
              <span>🎭 Nepscore: ${credibility}%</span>
            </div>
            <div class="news-text">
              ${escapeHtml(article.body)}
            </div>
            <div class="fake-alert">
              ⚠️ FABRICATIE — Dit bericht is volledig door AI gegenereerd als voorbeeld van nepnieuws.
            </div>
            <div style="margin-top: 0.8rem; font-size:0.7rem; color:#b97f55;">
              🔍 AI-detectie: dit verhaal bevat geen enkele bron en is onderdeel van een desinformatie-simulatie.
            </div>
            <div style="margin-top: 0.5rem;">
              <span style="background:#f7efe8; padding:0.2rem 0.6rem; border-radius:20px; font-size:0.7rem;">${credibilityLabel}</span>
            </div>
          </div>
        </div>
      `;
    });

    container.innerHTML = `
      <div class="page-title fade-scroll">Wat zorg dat AI nepnieuws bevat</div>
      <div class="text-block fade-scroll">
        <strong>⚠️ AI-gegenereerde desinformatie – bewust nepnieuws demonstratie</strong><br />
        Deze pagina toont hoe grote taalmodellen overtuigende maar volledig verzonnen verhalen kunnen genereren. 
        Elk bericht hieronder is 100% fictief, gegenereerd door AI met als doel te laten zien hoe nepnieuws eruit kan zien. 
        Wees waakzaam: check altijd bronnen!
      </div>
      <div class="section-title fade-scroll">📰 Laatste AI-nepnieuwsberichten</div>
      <div class="fake-news-grid" id="fakeNewsContainer">
        ${newsHtml}
      </div>
      <div class="disclaimer fade-scroll">
        🤖 **DISCLAIMER:** Alle verhalen op deze pagina zijn volledig verzonnen en gegenereerd door een AI-systeem. 
        Ze bevatten bewust valse informatie om educatieve doeleinden te dienen en het bewustzijn over desinformatie te vergroten. 
        Geloof niets zonder verificatie. Dit is een nepnieuws-simulatie.
      </div>
      <div style="display: flex; justify-content: flex-end; margin-top: 0.8rem;">
        <button class="refresh-btn" id="generateBtn">🔄 Genereer nieuwe nepnieuws (AI-stijl)</button>
      </div>
    `;

    // Nieuwe fade-scroll elementen observeren
    const newFadeElements = container.querySelectorAll('.fade-scroll');
    newFadeElements.forEach(el => fadeObserver.observe(el));
    
    // Refresh knop functionaliteit
    const btn = document.getElementById('generateBtn');
    if (btn) {
      btn.addEventListener('click', () => {
        const newArticles = generateMultipleNews(5);
        currentArticles = newArticles;
        renderHomeContent(currentArticles);
        btn.style.transform = 'scale(0.97)';
        setTimeout(() => { btn.style.transform = ''; }, 120);
      });
    }
  }

  // QUIZ content
  function renderQuizContent() {
    const container = document.getElementById('cardContent');
    if (!container) return;
    
    container.innerHTML = `
      <div class="page-title fade-scroll">AI Nepnieuws Quiz</div>
      <div class="text-block fade-scroll">
        <strong>📝 Test je kennis over AI en desinformatie</strong><br />
        Beantwoord de volgende vragen om te zien hoe goed je AI-nepnieuws kunt herkennen.
      </div>
      <div class="section-title fade-scroll">Vraag 1</div>
      <div class="text-block fade-scroll">
        <strong>Wat is een kenmerk van AI-gegenereerd nepnieuws?</strong><br />
        <label style="display: block; margin-top: 0.5rem;">✅ A: Het bevat vaak overtuigende details maar geen verifieerbare bronnen</label>
        <label style="display: block;">❌ B: Het is altijd makkelijk te herkennen aan spelfouten</label>
        <label style="display: block;">❌ C: AI kan alleen korte berichten genereren</label>
        <label style="display: block;">❌ D: Nepnieuws wordt nooit door AI gemaakt</label>
      </div>
      <div class="section-title fade-scroll">Vraag 2</div>
      <div class="text-block fade-scroll">
        <strong>Hoe snel verspreidt nepnieuws zich volgens onderzoek?</strong><br />
        <label style="display: block; margin-top: 0.5rem;">✅ A: 6x sneller dan feitelijke inhoud op sociale media</label>
        <label style="display: block;">❌ B: Langzamer dan echt nieuws</label>
        <label style="display: block;">❌ C: Alleen via e-mail</label>
        <label style="display: block;">❌ D: Het verspreidt zich helemaal niet</label>
      </div>
      <div class="section-title fade-scroll">Vraag 3</div>
      <div class="text-block fade-scroll">
        <strong>Wat is een goede manier om nepnieuws te herkennen?</strong><br />
        <label style="display: block; margin-top: 0.5rem;">✅ A: Bronnen checken en feiten vergelijken met betrouwbare media</label>
        <label style="display: block;">❌ B: Alles geloven wat je leest</label>
        <label style="display: block;">❌ C: Alleen delen als het sensationeel klinkt</label>
        <label style="display: block;">❌ D: Vertrouwen op één enkele nieuwsbron</label>
      </div>
      <div class="disclaimer fade-scroll">
        💡 <strong>Tip:</strong> De antwoorden zijn A, A, A. AI-nepnieuws is overtuigend, verspreidt zich razendsnel en bronvermelding is cruciaal!
      </div>
    `;
    
    const newFadeElements = container.querySelectorAll('.fade-scroll');
    newFadeElements.forEach(el => fadeObserver.observe(el));
  }

  // Scroll Observer voor fade-in animaties
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -20px 0px" });

  // Observer voor hero en main container
  const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        heroObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  let currentArticles = generateMultipleNews(5);
  let currentPage = 'home';

  // Navigatie functie
  function navigateTo(page) {
    currentPage = page;
    const navHome = document.querySelector('.nav-item[data-page="home"]');
    const navQuiz = document.querySelector('.nav-item[data-page="quiz"]');
    
    if (page === 'home') {
      navHome.classList.add('active');
      navQuiz.classList.remove('active');
      renderHomeContent(currentArticles);
    } else if (page === 'quiz') {
      navQuiz.classList.add('active');
      navHome.classList.remove('active');
      renderQuizContent();
    }
    
    // Scroll eventueel naar boven
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Initialisatie
  document.addEventListener('DOMContentLoaded', () => {
    // Observer voor hero banner en main container
    const heroEl = document.getElementById('heroBanner');
    const mainEl = document.getElementById('mainHome');
    if (heroEl) heroObserver.observe(heroEl);
    if (mainEl) heroObserver.observe(mainEl);
    
    // Start met home content
    renderHomeContent(currentArticles);
    
    // Navigatie event listeners
    const navHome = document.querySelector('.nav-item[data-page="home"]');
    const navQuiz = document.querySelector('.nav-item[data-page="quiz"]');
    
    if (navHome) {
      navHome.addEventListener('click', () => navigateTo('home'));
    }
    if (navQuiz) {
      navQuiz.addEventListener('click', () => navigateTo('quiz'));
    }
  });