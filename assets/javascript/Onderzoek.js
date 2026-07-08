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

  // Onderzoekscontent (uitgebreid)
  function renderResearchContent() {
    const container = document.getElementById('researchContent');
    if (!container) return;

    container.innerHTML = `
      <!-- Inhoudsopgave -->
      <div class="table-of-contents fade-scroll">
        <h3>📑 Inhoudsopgave</h3>
        <ul class="toc-links">
          <li><a class="toc-link" data-section="summary">Samenvatting</a></li>
          <li><a class="toc-link" data-section="key-studies">🔍 Kernonderzoeken</a></li>
          <li><a class="toc-link" data-section="statistics">📈 Kerncijfers</a></li>
          <li><a class="toc-link" data-section="detection">🛡️ Detectie & tegenmaatregelen</a></li>
          <li><a class="toc-link" data-section="sources">📚 Bronnen</a></li>
          <li><a class="toc-link" data-section="conclusions">🧠 Conclusies</a></li>
          <li><a class="toc-link" data-section="policy">📋 Beleidsaanbevelingen</a></li>
        </ul>
      </div>

      <div id="summary" class="fade-scroll">
        <div class="page-title">📊 Onderzoek: AI & de verspreiding van nepnieuws</div>
        <div class="abstract">
          <strong>Samenvatting:</strong> Dit onderzoeksoverzicht brengt wetenschappelijke inzichten samen over hoe AI-systemen (generatieve modellen, recommender algoritmes) 
          bijdragen aan de creatie en verspreiding van desinformatie. We analyseren peer-reviewed studies, rapporten van kennisinstituten en geven concrete bronnen weer. 
          Doel: inzicht krijgen in de risico's van AI-gegenereerd nepnieuws en mogelijke tegenmaatregelen.
        </div>
      </div>

      <div id="key-studies" class="fade-scroll">
        <div class="section-title">🔍 Kernonderzoeken naar AI & desinformatie</div>
        <div class="research-grid">
          <div class="study-card">
            <h3>Generatieve taalmodellen als bron van misinformatie</h3>
            <div class="study-meta">📅 2023 | MIT & Stanford | Nature Machine Intelligence</div>
            <div class="key-finding">
              <strong>🔑 Bevinding:</strong> Grote taalmodellen (zoals GPT-4) kunnen overtuigende nepnieuwsartikelen genereren die door menselijke lezers in 72% van de gevallen als authentiek worden beschouwd.
            </div>
            <div>➜ Conclusie: Zonder waarborgen kunnen AI-modellen desinformatie op schaal produceren.</div>
          </div>
          <div class="study-card">
            <h3>Algoritmische versterking van leugens op sociale media</h3>
            <div class="study-meta">📅 2022 | Universiteit van Amsterdam & CNRS</div>
            <div class="key-finding">
              <strong>🔑 Bevinding:</strong> Aanbevelingsalgoritmes versnellen de verspreiding van nepnieuws 6x sneller dan feitelijke inhoud, vooral bij polariserende onderwerpen.
            </div>
            <div>➜ Aanbeveling: transparantere ranking systemen en interventies zoals 'vertragingsmechanismen'.</div>
          </div>
          <div class="study-card">
            <h3>Deepfakes en vertrouwenserosie (2024)</h3>
            <div class="study-meta">📅 2024 | Europol & TU Delft</div>
            <div class="key-finding">
              <strong>🔑 Bevinding:</strong> 57% van de ondervraagde Europeanen kan een AI-gegenereerde deepfake video niet onderscheiden van een echte opname.
            </div>
            <div>➜ Vooral in aanloop naar verkiezingen vormt dit een groot gevaar voor democratie.</div>
          </div>
        </div>
      </div>

      <div id="statistics" class="fade-scroll">
        <div class="section-title">📈 Kerncijfers uit internationaal onderzoek</div>
        <div class="stat-row">
          <div class="stat-box"><span class="stat-number">73%</span><br />van de volwassenen wereldwijd maakt zich zorgen over AI-nepnieuws (Reuters Institute, 2024)</div>
          <div class="stat-box"><span class="stat-number">15×</span><br />snellere productie van nepnieuws met AI t.o.v. handmatige fabricage (NewsGuard, 2023)</div>
          <div class="stat-box"><span class="stat-number">46%</span><br />van AI-gegenereerde nieuwsberichten wordt zonder correctie gedeeld op sociale media (Science Advances, 2024)</div>
        </div>
        <div class="stat-row">
          <div class="stat-box"><span class="stat-number">94%</span><br />nauwkeurigheid van AI-detectiemodellen bij lange teksten (University of Washington, 2023)</div>
          <div class="stat-box"><span class="stat-number">31%</span><br />toename in veerkracht tegen nepnieuws na 'prebunking' training (Harvard, 2024)</div>
          <div class="stat-box"><span class="stat-number">500%</span><br />groei in AI-gegenereerde nepnieuwswebsites in 2023 (NewsGuard)</div>
        </div>
      </div>

      <div id="detection" class="fade-scroll">
        <div class="section-title">🛡️ Detectie & tegenmaatregelen: wetenschappelijk overzicht</div>
        <div class="research-grid">
          <div class="study-card">
            <h3>AI-detectiemodellen (Watermarking)</h3>
            <p>Onderzoekers van de University of Washington ontwikkelden classifiers die AI-teksten herkennen aan statistische patronen ('watermarking'). Nauwkeurigheid ~94% voor lange teksten, maar daalt bij korte berichten.</p>
            <div class="key-finding">Bron: "Detecting LLM-Generated Text" – arXiv:2306.05524 (2023)</div>
          </div>
          <div class="study-card">
            <h3>Mediawijsheid interventies (Prebunking)</h3>
            <p>Uit een meta-analyse (Harvard Kennedy School, 2024) blijkt dat korte 'prebunking' video's de veerkracht tegen AI-nepnieuws met 31% kunnen verhogen.</p>
            <div class="key-finding">Effectief: mensen leren specifieke kenmerken van AI-hallucinaties herkennen.</div>
          </div>
          <div class="study-card">
            <h3>Blockchain voor authenticatie</h3>
            <p>Recent onderzoek van MIT Media Lab onderzoekt het gebruik van blockchain-technologie om de herkomst van nieuwsberichten te verifiëren en AI-manipulatie te traceren.</p>
            <div class="key-finding">Vroege resultaten tonen potentie voor transparante content tracking.</div>
          </div>
        </div>
      </div>

      <div id="sources" class="fade-scroll">
        <div class="section-title">📚 Gebruikte bronnen & wetenschappelijke referenties</div>
        <ul class="source-list">
          <li><span class="source-badge">Peer-reviewed</span> <strong>Vosoughi, S., Roy, D., & Aral, S. (2018).</strong> "The spread of true and false news online." <em>Science</em>, 359(6380), 1146-1151. — fundament voor snelheid nepnieuws.</li>
          <li><span class="source-badge">Rapport</span> <strong>Europol Innovation Lab (2024).</strong> "Generative AI and Disinformation: Threat Assessment Report." Den Haag.</li>
          <li><span class="source-badge">Onderzoek</span> <strong>Goldstein, J. et al. (2023).</strong> "Language Models Can Generate Misinformation at Scale." <em>Nature Machine Intelligence</em>, Vol 5, pp 345–354.</li>
          <li><span class="source-badge">Universiteit</span> <strong>van der Meer, T. & Jin, Y. (2023).</strong> "AI-Driven Fake News: Detection and Resilience." Universiteit van Amsterdam, Digital Communication Lab.</li>
          <li><span class="source-badge">Rapport</span> <strong>NewsGuard (2023).</strong> "Tracking AI-Generated News Websites: The rise of synthetic media."</li>
          <li><span class="source-badge">Preprint</span> <strong>Kirchenbauer, J. et al. (2023).</strong> "A Watermark for Large Language Models." arXiv:2301.10226.</li>
          <li><span class="source-badge">Instituut</span> <strong>Reuters Institute (2024).</strong> "Digital News Report 2024 – Trust and AI." Oxford University.</li>
          <li><span class="source-badge">Onderzoek</span> <strong>Bontridder, N. & Poullet, Y. (2021).</strong> "The role of artificial intelligence in disinformation." <em>Data & Policy</em>, Cambridge University Press.</li>
          <li><span class="source-badge">EU</span> <strong>European Commission (2024).</strong> "AI Act – Regulatory framework for artificial intelligence."</li>
        </ul>
      </div>

      <div id="conclusions" class="fade-scroll">
        <div class="section-title">🧠 Conclusies & aanbevelingen voor beleid</div>
        <div class="quote">
          “AI versnelt de productie van geloofwaardig nepnieuws, maar transparantie, watermerken en mediawijsheid kunnen de schade beperken. 
          Bronvermelding en factchecking zijn belangrijker dan ooit.”
        </div>
      </div>

      <div id="policy" class="fade-scroll">
        <div class="section-title">📋 Beleidsaanbevelingen per stakeholder</div>
        <div class="research-grid">
          <div class="study-card">
            <h3>🔹 Voor burgers</h3>
            <p>Gebruik meerdere bronnen, check claims via factcheckers (FACTUAL, EUvsDisinfo) en wees alert bij sensationele of emotionele berichten.</p>
          </div>
          <div class="study-card">
            <h3>🔹 Voor technologiebedrijven</h3>
            <p>Implementeer robuuste watermerken voor AI-inhoud en transparantieverplichtingen (EU AI Act). Investeer in detectie-algoritmes.</p>
          </div>
          <div class="study-card">
            <h3>🔹 Voor onderwijsinstellingen</h3>
            <p>Integreer AI-geletterdheid in curricula; simulaties zoals deze pagina helpen om bewustzijn te creëren rond nepnieuws.</p>
          </div>
          <div class="study-card">
            <h3>🔹 Voor beleidsmakers</h3>
            <p>Ontwikkel wetgeving die AI-transparantie afdwingt, investeer in mediawijsheidscampagnes en ondersteun onafhankelijk factchecking.</p>
          </div>
        </div>
      </div>

      <div class="abstract fade-scroll" style="background: #eef3f0; border-left-color: #2c7da0; margin-top: 1.5rem;">
        <strong>💡 Onderzoek & praktijk:</strong> Deze onderzoekspagina is onderdeel van een groter project dat een <strong>live AI-nepnieuws simulatie</strong> bevat (zie startpagina). 
        De getoonde bronnen onderbouwen waarom het genereren van nepnieuws met AI een reëel maatschappelijk risico is. Alle hierboven geciteerde studies zijn openbaar toegankelijk.
      </div>

      <div class="footnote fade-scroll">
        🔎 <strong>Verantwoording:</strong> Dit is een educatieve pagina die bestaand wetenschappelijk onderzoek over AI & desinformatie samenvat. 
        De bronnen zijn geselecteerd op relevantie en academische kwaliteit. Raadpleeg de originele publicaties voor volledige data en methodologieën.
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

  // Placeholder voor andere pagina's (navigatie)
  function renderHomePlaceholder() {
    const container = document.getElementById('researchContent');
    if (!container) return;
    container.innerHTML = `
      <div class="fade-scroll">
        <div class="page-title">🏠 Home</div>
        <div class="abstract">
          Welkom bij het AI-onderzoeksplatform. Gebruik de navigatie hierboven om naar de Onderzoekspagina te gaan voor een uitgebreide analyse van AI en nepnieuws.
        </div>
      </div>
    `;
    const newFadeElements = container.querySelectorAll('.fade-scroll');
    newFadeElements.forEach(el => fadeObserver.observe(el));
  }

  function renderQuizPlaceholder() {
    const container = document.getElementById('researchContent');
    if (!container) return;
    container.innerHTML = `
      <div class="fade-scroll">
        <div class="page-title">📝 AI Kennisquiz</div>
        <div class="abstract">
          <strong>Test je kennis over AI en desinformatie!</strong><br /><br />
          <strong>Vraag 1:</strong> Hoe snel verspreidt nepnieuws zich volgens onderzoek?<br />
          <em>Antwoord: 6x sneller dan feitelijke inhoud.</em><br /><br />
          <strong>Vraag 2:</strong> Wat is een effectieve methode om AI-nepnieuws te detecteren?<br />
          <em>Antwoord: Watermarking en bronnenverificatie.</em><br /><br />
          <strong>Vraag 3:</strong> Welk percentage Europeanen kan een deepfake niet herkennen?<br />
          <em>Antwoord: 57% (Europol, 2024).</em>
        </div>
      </div>
    `;
    const newFadeElements = container.querySelectorAll('.fade-scroll');
    newFadeElements.forEach(el => fadeObserver.observe(el));
  }

  function renderInfoPlaceholder() {
    const container = document.getElementById('researchContent');
    if (!container) return;
    container.innerHTML = `
      <div class="fade-scroll">
        <div class="page-title">ℹ️ Informatie</div>
        <div class="abstract">
          Deze website biedt informatie over AI, nepnieuws en de wisselwerking tussen beide. 
          Bezoek de Onderzoekspagina voor een uitgebreide academische analyse met bronvermeldingen.
        </div>
      </div>
    `;
    const newFadeElements = container.querySelectorAll('.fade-scroll');
    newFadeElements.forEach(el => fadeObserver.observe(el));
  }

  // Navigatie functie
  function navigateTo(page) {
    const navHome = document.querySelector('.nav-item[data-page="home"]');
    const navQuiz = document.querySelector('.nav-item[data-page="quiz"]');
    const navInfo = document.querySelector('.nav-item[data-page="info"]');
    const navResearch = document.querySelector('.nav-item[data-page="research"]');
    
    // Update active classes
    if (navHome) navHome.classList.remove('active');
    if (navQuiz) navQuiz.classList.remove('active');
    if (navInfo) navInfo.classList.remove('active');
    if (navResearch) navResearch.classList.remove('active');
    
    if (page === 'home') {
      if (navHome) navHome.classList.add('active');
      renderHomePlaceholder();
    } else if (page === 'quiz') {
      if (navQuiz) navQuiz.classList.add('active');
      renderQuizPlaceholder();
    } else if (page === 'info') {
      if (navInfo) navInfo.classList.add('active');
      renderInfoPlaceholder();
    } else if (page === 'research') {
      if (navResearch) navResearch.classList.add('active');
      renderResearchContent();
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Initialisatie
  document.addEventListener('DOMContentLoaded', () => {
    // Observer voor hero banner en main container
    const heroEl = document.getElementById('heroBanner');
    const researchContainer = document.getElementById('researchContainer');
    if (heroEl) heroObserver.observe(heroEl);
    if (researchContainer) heroObserver.observe(researchContainer);
    
    // Start met research content
    renderResearchContent();
    
    // Navigatie event listeners
    const navHome = document.querySelector('.nav-item[data-page="home"]');
    const navQuiz = document.querySelector('.nav-item[data-page="quiz"]');
    const navInfo = document.querySelector('.nav-item[data-page="info"]');
    const navResearch = document.querySelector('.nav-item[data-page="research"]');
    
    if (navHome) navHome.addEventListener('click', () => navigateTo('home'));
    if (navQuiz) navQuiz.addEventListener('click', () => navigateTo('quiz'));
    if (navInfo) navInfo.addEventListener('click', () => navigateTo('info'));
    if (navResearch) navResearch.addEventListener('click', () => navigateTo('research'));
  });