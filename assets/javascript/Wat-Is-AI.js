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

  // Globaal voor navigatie
  let currentPage = 'info';

  // INFO content (uitgebreid)
  function renderInfoContent() {
    const container = document.getElementById('cardContent');
    if (!container) return;

    container.innerHTML = `
      <!-- Inhoudsopgave -->
      <div class="table-of-contents fade-scroll">
        <h3>📑 Inhoudsopgave</h3>
        <ul class="toc-links">
          <li><a class="toc-link" data-section="intro">Wat is AI?</a></li>
          <li><a class="toc-link" data-section="how">✨ Hoe werkt het?</a></li>
          <li><a class="toc-link" data-section="examples">🌍 Voorbeelden</a></li>
          <li><a class="toc-link" data-section="types">📌 Soorten AI</a></li>
          <li><a class="toc-link" data-section="history">📜 Geschiedenis</a></li>
          <li><a class="toc-link" data-section="ethics">⚖️ Ethiek & risico's</a></li>
          <li><a class="toc-link" data-section="fakenews">🧩 AI & nepnieuws</a></li>
          <li><a class="toc-link" data-section="sources">📚 Bronnen</a></li>
        </ul>
      </div>

      <div id="intro" class="fade-scroll">
        <div class="page-title">Wat is AI? 🤖</div>
        <div class="text-block highlight">
          <strong>🧠 Kunstmatige Intelligentie (AI)</strong> — een tak van de informatica die zich richt op het creëren van systemen die taken kunnen uitvoeren waarvoor normaal gesproken menselijke intelligentie nodig is. Denk aan leren, redeneren, problemen oplossen, waarnemen en taal begrijpen.
        </div>
      </div>

      <div id="how" class="fade-scroll">
        <div class="section-title">✨ Hoe werkt het?</div>
        <div class="grid-2col">
          <div class="info-card">
            <div class="ai-icon">📊</div>
            <h3>Machine Learning</h3>
            <p>Algoritmes leren van data in plaats van expliciete regels. Ze herkennen patronen en maken voorspellingen.</p>
          </div>
          <div class="info-card">
            <div class="ai-icon">🧠</div>
            <h3>Deep Learning</h3>
            <p>Neurale netwerken met vele lagen verwerken enorme hoeveelheden data – ideaal voor beeld- en spraakherkenning.</p>
          </div>
          <div class="info-card">
            <div class="ai-icon">🗣️</div>
            <h3>NLP</h3>
            <p>Natural Language Processing geeft computers de mogelijkheid menselijke taal te begrijpen, analyseren en genereren.</p>
          </div>
        </div>
      </div>

      <div id="examples" class="fade-scroll">
        <div class="section-title">🌍 Voorbeelden in het dagelijks leven</div>
        <ul class="example-list">
          <li>🔍 <strong>Zoekmachines</strong> – Google, Bing gebruiken AI om de beste resultaten te tonen.</li>
          <li>📱 <strong>Spraakassistenten</strong> – Siri, Google Assistant en Alexa begrijpen spraakopdrachten.</li>
          <li>📺 <strong>Aanbevelingssystemen</strong> – Netflix, Spotify, YouTube raden content aan op basis van jouw gedrag.</li>
          <li>🚗 <strong>Zelfrijdende auto's</strong> – Tesla, Waymo gebruiken sensoren en AI om te navigeren.</li>
          <li>🖼️ <strong>Beeldherkenning</strong> – Gezichtsherkenning op smartphones en medische beeldanalyse.</li>
          <li>✍️ <strong>Chatbots & AI-schrijvers</strong> – ChatGPT en vergelijkbare taalmodellen genereren menselijke tekst.</li>
        </ul>
      </div>

      <div id="types" class="fade-scroll">
        <div class="section-title">📌 Soorten AI</div>
        <div class="grid-2col">
          <div class="info-card">
            <h3>Zwakke AI (Narrow AI)</h3>
            <p>Ontworpen voor één specifieke taak: schaakcomputers, gezichtsherkenning, vertaalmachines. De meeste AI van vandaag is zwakke AI.</p>
          </div>
          <div class="info-card">
            <h3>Sterke AI (AGI)</h3>
            <p>Algemene intelligentie die elke intellectuele taak kan uitvoeren zoals een mens. Bestaat nog niet, maar is een belangrijk onderzoeksdoel.</p>
          </div>
          <div class="info-card">
            <h3>Superintelligentie</h3>
            <p>Hypothetische AI die ver boven het menselijk niveau uitstijgt. Wordt veel besproken in ethiek en toekomstscenario's.</p>
          </div>
        </div>
      </div>

      <div id="history" class="fade-scroll">
        <div class="section-title">📜 Korte geschiedenis van AI</div>
        <div class="text-block">
          <strong>1956:</strong> De term "Artificial Intelligence" wordt bedacht tijdens de Dartmouth Conference.<br>
          <strong>1997:</strong> IBM's Deep Blue verslaat wereldkampioen schaken Garry Kasparov.<br>
          <strong>2012:</strong> Deep learning doorbraak met AlexNet voor beeldherkenning.<br>
          <strong>2022:</strong> ChatGPT maakt AI toegankelijk voor het grote publiek.<br>
          <strong>2024:</strong> AI-modellen met miljarden parameters genereren tekst, afbeeldingen en video.
        </div>
        <div class="fun-fact">
          💡 <strong>Wist je dat?</strong> De rekenkracht die nodig was om de maanlanding te berekenen, is vandaag de dag minder dan die van een gemiddelde smartphone!
        </div>
      </div>

      <div id="ethics" class="fade-scroll">
        <div class="section-title">⚖️ Ethische dilemma's & risico's</div>
        <div class="grid-2col">
          <div class="info-card">
            <h3>🔒 Privacy</h3>
            <p>AI-systemen verzamelen enorme hoeveelheden persoonlijke data. Hoe beschermen we onze privacy?</p>
          </div>
          <div class="info-card">
            <h3>🎯 Bias & discriminatie</h3>
            <p>AI kan vooroordelen overnemen uit trainingsdata, wat leidt tot oneerlijke beslissingen.</p>
          </div>
          <div class="info-card">
            <h3>💼 Banenverlies</h3>
            <p>Automatisering kan bepaalde beroepen overbodig maken. Omscholing is essentieel.</p>
          </div>
          <div class="info-card">
            <h3>🤖 Controle & veiligheid</h3>
            <p>Hoe zorgen we dat AI-systemen veilig blijven en doen wat we willen?</p>
          </div>
        </div>
      </div>

      <div id="fakenews" class="fade-scroll">
        <div class="section-title">🧩 AI en nepnieuws – waarom waakzaam?</div>
        <div class="text-block">
          Generatieve AI kan overtuigende maar volledig <strong>gefabriceerde artikelen, afbeeldingen en video's</strong> produceren (deepfakes). 
          Dat maakt AI een krachtig middel voor <strong>desinformatie</strong>. Daarom is het belangrijk om altijd bronnen te controleren en kritisch te blijven. 
          Deze website toont een bewust voorbeeld van AI-nepnieuws om het bewustzijn te vergroten.
        </div>
        <div class="text-block" style="background: #fff4e8;">
          <strong>⚠️ Hoe herken je AI-nepnieuws?</strong><br>
          ✅ Check de bron – is deze betrouwbaar?<br>
          ✅ Zoek naar meerdere onafhankelijke berichtgeving<br>
          ✅ Let op overdreven sensationele taal<br>
          ✅ Gebruik factcheck websites zoals FactCheck.org of EUvsDisinfo<br>
          ✅ Wees kritisch bij ongelooflijke claims zonder bewijs
        </div>
      </div>

      <div id="sources" class="fade-scroll">
        <div class="section-title">📚 Bronnen & verder lezen</div>
        <div class="sources-section">
          <h4>📖 Aanbevolen literatuur & websites</h4>
          <ul>
            <li>Russell, S. & Norvig, P. (2020). <em>Artificial Intelligence: A Modern Approach</em>. Pearson.</li>
            <li><a href="#" target="_blank">European Commission: AI Act</a> – Regelgeving voor kunstmatige intelligentie</li>
            <li><a href="#" target="_blank">EUvsDisinfo</a> – Bestrijding van desinformatie</li>
            <li><a href="#" target="_blank">Coursera: AI For Everyone (Andrew Ng)</a> – Gratis cursus</li>
            <li><a href="#" target="_blank">MIT Technology Review: AI</a> – Actueel AI-nieuws</li>
          </ul>
        </div>
        <div class="text-block" style="background: #f0f9fe; margin-top: 1rem;">
          <strong>📚 Meer weten?</strong> AI is een snelgroeiend vakgebied. Van ethische vraagstukken tot technische innovaties: 
          de toekomst van AI zal onze maatschappij ingrijpend veranderen. Blijf nieuwsgierig en leer de signalen van AI gegenereerde inhoud herkennen!
        </div>
      </div>
    `;

    // Observer toevoegen aan alle fade-scroll elementen
    const newFadeElements = container.querySelectorAll('.fade-scroll');
    newFadeElements.forEach(el => fadeObserver.observe(el));

    // Inhoudsopgave links functionaliteit
    const tocLinks = document.querySelectorAll('.toc-link');
    tocLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('data-section');
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
          sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  // HOME placeholder (simpel, kan worden aangepast)
  function renderHomePlaceholder() {
    const container = document.getElementById('cardContent');
    if (!container) return;
    container.innerHTML = `
      <div class="fade-scroll">
        <div class="page-title">Home</div>
        <div class="text-block highlight">
          Welkom bij de AI-informatiewebsite. Gebruik de navigatie om naar de Info-pagina te gaan voor uitgebreide uitleg over AI.
        </div>
      </div>
    `;
    const newFadeElements = container.querySelectorAll('.fade-scroll');
    newFadeElements.forEach(el => fadeObserver.observe(el));
  }

  // QUIZ placeholder
  function renderQuizPlaceholder() {
    const container = document.getElementById('cardContent');
    if (!container) return;
    container.innerHTML = `
      <div class="fade-scroll">
        <div class="page-title">AI Kennisquiz</div>
        <div class="text-block highlight">
          <strong>📝 Test je kennis!</strong><br /><br />
          <strong>Vraag 1:</strong> Wat is Machine Learning?<br />
          <em>Antwoord: Algoritmes die leren van data.</em><br /><br />
          <strong>Vraag 2:</strong> Wat is een voorbeeld van Narrow AI?<br />
          <em>Antwoord: Gezichtsherkenning op een smartphone.</em><br /><br />
          <strong>Vraag 3:</strong> Hoe herken je AI-nepnieuws?<br />
          <em>Antwoord: Bronnen checken en kritisch blijven.</em>
        </div>
      </div>
    `;
    const newFadeElements = container.querySelectorAll('.fade-scroll');
    newFadeElements.forEach(el => fadeObserver.observe(el));
  }

  // Navigatie functie
  function navigateTo(page) {
    currentPage = page;
    const navHome = document.querySelector('.nav-item[data-page="home"]');
    const navQuiz = document.querySelector('.nav-item[data-page="quiz"]');
    const navInfo = document.querySelector('.nav-item[data-page="info"]');
    
    // Update active classes
    if (navHome) navHome.classList.remove('active');
    if (navQuiz) navQuiz.classList.remove('active');
    if (navInfo) navInfo.classList.remove('active');
    
    if (page === 'home') {
      if (navHome) navHome.classList.add('active');
      renderHomePlaceholder();
    } else if (page === 'quiz') {
      if (navQuiz) navQuiz.classList.add('active');
      renderQuizPlaceholder();
    } else if (page === 'info') {
      if (navInfo) navInfo.classList.add('active');
      renderInfoContent();
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Initialisatie
  document.addEventListener('DOMContentLoaded', () => {
    // Observer voor hero banner en main container
    const heroEl = document.getElementById('heroBanner');
    const aiPageEl = document.getElementById('aiPage');
    if (heroEl) heroObserver.observe(heroEl);
    if (aiPageEl) heroObserver.observe(aiPageEl);
    
    // Start met info content
    renderInfoContent();
    
    // Navigatie event listeners
    const navHome = document.querySelector('.nav-item[data-page="home"]');
    const navQuiz = document.querySelector('.nav-item[data-page="quiz"]');
    const navInfo = document.querySelector('.nav-item[data-page="info"]');
    
    if (navHome) navHome.addEventListener('click', () => navigateTo('home'));
    if (navQuiz) navQuiz.addEventListener('click', () => navigateTo('quiz'));
    if (navInfo) navInfo.addEventListener('click', () => navigateTo('info'));
  });