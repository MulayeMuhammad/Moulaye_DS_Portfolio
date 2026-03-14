/* ================================================================
   MOULAYE AHMED PORTFOLIO — i18n (EN / FR)   Full translation of every visible text element
   ================================================================ */

const TRANSLATIONS = {
  en: {
    /* Navbar */
    'nav.about':'About','nav.skills':'Skills','nav.experience':'Experience',
    'nav.certifications':'Certifications','nav.projects':'Projects','nav.contact':'Contact',

    /* Hero */
    'hero.available':'Open to opportunities','hero.role_prefix':'I am a',
    'hero.scroll':'Scroll','hero.cta_projects':'View Projects','hero.cta_contact':'Get in Touch',
    'hero.desc':'Statistics and Data Engineering graduate from the Polytechnic School of Nouakchott (ESP), with a specialization in Applied Economics, Statistics & Big Data through an exchange at the National Institute of Statistics and Applied Economics (INSEA), Rabat. Through diverse experiences across mining, finance, petroleum, and government sectors, I\'ve developed expertise spanning the complete data lifecycle — from economic modeling and statistical analysis to building scalable data architectures and AI-powered applications. Passionate about leveraging quantitative methods and modern data technologies to drive strategic innovation and solve complex business challenges.',

    /* About */
    'about.label':'About Me',
    'about.heading':'Building at the intersection of <span class="gradient-text">Data, AI, Statistics & Economics</span>',
    'about.p1':'I\'m Moulaye Ahmed Mohammed Brahim, a Data & AI Engineer and Statistician-Economist from Mauritania. I hold an Engineering Degree in Statistics and Data Engineering from the Polytechnique School of Nouakchott (ESP) and completed an exchange at the prestigious National Institute of Statistics and Applied Economics (INSEA) in Rabat, Morocco, specialising in Applied Economics, Statistics, and Big Data.',
    'about.p2':'My expertise spans the full data spectrum — from architecting enterprise-scale Data Warehouses and Lakehouses, to building deep learning models for computer vision and NLP, to rigorous econometric analysis using DSGE, GMM, and spatial methods. I transform complex datasets into strategic insights that drive real decisions.',
    'about.p3':'Recently, I completed a major internship at <strong>Kinross Tasiast (TMLSA)</strong> where I designed and deployed a full enterprise data platform — achieving 93% reduction in report consolidation time and 97% improvement in incident analysis speed, entirely on open-source technology.',
    'about.location':'Nouakchott, Mauritania / Rabat, Morocco',
    'about.degree':'Engineering in Statistics & Data Engineering — ESP / INSEA',

    /* Stats */
    'stat.projects':'Projects Completed','stat.roles':'Professional Roles','stat.sectors':'Industry Sectors',
    'stat.report':'Report Time Saved · Kinross','stat.query':'Query Speed Boost · ClickHouse',
    'stat.incident':'Faster Incident Analysis','stat.tons':'Tons of Transactions Audited',
    'stat.forms':'Banking Forms Automated','stat.delays':'Less Approval Delays',

    /* Skills */
    'skills.label':'Technical Stack','skills.heading':'Skills & Technologies',
    'skills.sub':'A comprehensive toolkit built across data science, engineering, and economic modeling.',
    'skills.ai':'AI & LLM Engineering','skills.ml':'Machine Learning & Deep Learning',
    'skills.de':'Data Engineering','skills.stats':'Statistics & Econometrics',
    'skills.cloud':'Cloud, DevOps & Databases','skills.viz':'Visualisation & BI',
    'skills.geo':'Geospatial & Remote Sensing','skills.industry':'Industry & Engineering',

    /* Experience */
    'exp.label':'Career','exp.heading':'Experience & Education',
    'exp.sub':'A journey across AI engineering, data platforms, econometrics, and industry sectors.',
    'exp.tab.pro':'Professional','exp.tab.edu':'Education','exp.tab.vol':'Volunteering',

    /* Timeline — Roles */
    'tl.role.insightex':'AI Engineer',
    'tl.role.bumec':'External Consultant',
    'tl.role.amc':'Analytics Engineer',
    'tl.role.kinross_pfe':'Final Year Internship (End-of-Studies Project)',
    'tl.role.kinross_assist':'Assistant Engineer',
    'tl.role.smcp':'Data Scientist Intern',
    'tl.role.bcm':'Final Year Internship — Econometrics',
    'tl.role.mpe':'Statistician Intern',
    'tl.role.insea':'Exchange Program — Applied Economics, Statistics & Big Data',
    'tl.role.esp':'Engineering Degree — Statistics & Data Engineering',
    'tl.role.isms':'Bachelor\'s Degree — Statistics & Applied Economics',
    'tl.role.bac':'Mathematics Baccalaureate',
    'tl.role.mec':'Member',
    'tl.role.ufc':'Member',

    /* Timeline — Descriptions */
    'tl.desc.insightex':'AI Engineer focused on building production-grade AI systems and intelligent applications, including LLM-powered solutions and satellite imagery exploitation for remote sensing applications.',
    'tl.desc.bumec':'External data and analytics consultant providing strategic expertise in statistical analysis, data engineering, and decision-support systems.',
    'tl.desc.amc':'Analytics Engineer specialized in operational resource optimization and digital transformation.<ul><li><strong>Weighing Audit & Fraud Detection</strong> — Led transportation resource optimization through in-depth weighing flow analysis. Implemented advanced statistical controls (Benford\'s Law test) enabling detection of anomalies and potential manipulations across 765+ tons of client/supplier transactions.</li><li><strong>Energy Optimization & Predictive Modeling</strong> — Developed fuel consumption analysis model through integration and reconciliation of heterogeneous sources (EDK & Fleeti). Designed dynamic tolerance margin methodology, reducing filling gaps and optimizing operational costs.</li><li><strong>Data-Driven Strategic Prioritization</strong> — Applied Pareto analysis to identify the 20% of units generating 80% of discrepancies, enabling precise intervention targeting and optimal allocation of audit and maintenance resources.</li><li><strong>Banking Automation Solution (Form Builder)</strong> — Designed and developed a full-stack web application (React/Vite + Laravel API) enabling automatic generation of 6 types of official banking forms in high-quality PDF. Multilingual architecture (FR/AR - RTL) with real-time validation and automated financial calculations.</li><li><strong>Data Infrastructure & ETL Pipelines</strong> — Designed and automated robust ETL pipelines ensuring integrity, traceability, and availability of critical KPIs. Version control and deployment via GitLab.</li><li><strong>Business Intelligence & Dashboarding</strong> — Created real-time interactive dashboards transforming complex data into actionable insights for management.</li></ul>',
    'tl.desc.kinross_pfe':'Designed and deployed a comprehensive enterprise data platform for the Security Department:<ul><li><strong>SFWMS</strong>: React/Django web application with 6-role RBAC, automated financial workflows, and full audit traceability</li><li><strong>PostgreSQL Data Warehouse</strong>: Medallion architecture (Bronze/Silver/Gold) with star schema, Apache Airflow orchestration, dbt transformations</li><li><strong>Data Lakehouse</strong>: Delta Lake + ClickHouse delivering 35–45× faster query performance for ad-hoc analytics</li><li>Integrated 6 heterogeneous data sources via CDC (Debezium/Kafka), REST APIs, NLP, OCR, Spark ETL — 96–100% success rates</li><li>93% reduction in report time · 70% reduction in approval delays · 97% faster incident analysis</li><li>12 Superset dashboards · 94.3% data quality rate · MTTR &lt; 30 min via Prometheus/Grafana/Loki</li></ul>',
    'tl.desc.kinross_assist':'Designed decision support tools and automated bottleneck identification systems that optimised production processes in mining operations.',
    'tl.desc.smcp':'Developed machine learning models for fishery product demand prediction, optimising inventory levels and analysing seafood export trends in Mauritania.',
    'tl.desc.bcm':'Conducted comprehensive econometric analysis of inflation determinants in Mauritania (1986–2020) using Co-integration and Vector Error Correction Models (VECM) to understand monetary policy impacts.',
    'tl.desc.mpe':'Analysed the domestic hydrocarbons market and developed forecasting models for liquid hydrocarbon consumption (2012–2020).',
    'tl.desc.insea':'Advanced coursework in statistical methods, big data technologies, spatial econometrics, DSGE modeling, and applied economic analysis.',
    'tl.desc.esp':'Comprehensive training in statistical engineering, data science, machine learning, big data infrastructure, and modern analytics methodologies.',
    'tl.desc.isms':'Foundation in statistical theory, econometrics, and applied economic analysis.',
    'tl.desc.bac':'Strong foundation in mathematics, paving the path for quantitative specialisation.',
    'tl.desc.mec':'Member of the Mauritanian Engineering Community, a professional association uniting Mauritanian engineers and engineering students worldwide regardless of their country of study or residence. The MEC aims to:<ul><li>Build a network of engineers and engineering students to exchange ideas and experiences.</li><li>Promote and structure the engineering profession and represent it before the public, government bodies, and international organizations.</li><li>Support professional integration and the training of engineering students.</li><li>Develop cooperation with national and international engineering organizations, institutions, and enterprises.</li><li>Organize knowledge-sharing activities: debates, roundtables, conferences, and specialized training programs.</li></ul>',
    'tl.desc.ufc':'Member of a non-governmental organization dedicated to combating climate change and promoting environmental sustainability. Through advocacy, community engagement, and educational initiatives, contributing to raising awareness about environmental issues and driving impactful actions towards a greener, more resilient planet. The mission: inspire individuals and communities to protect natural resources and support policies that ensure a sustainable future for generations to come.',

    /* Gallery */
    'tl.gallery.archi':'Technical Architectures',
    'tl.gallery.cap.medallion':'Medallion Data Architecture (Bronze / Silver / Gold)',
    'tl.gallery.cap.lakehouse':'Delta Lake + ClickHouse Lakehouse Architecture',
    'tl.gallery.cap.ocr':'OCR & NLP Ingestion Pipeline',
    'tl.gallery.cap.team':'Final presentation with department heads & supervisor — Kinross Tasiast',
    'tl.gallery.cap.certif':'Certificate of Appreciation — Kinross Tasiast (TMLSA)',

    /* Certifications */
    'cert.label':'Credentials','cert.heading':'Licenses & Certifications',
    'cert.sub':'Professional certifications and courses across data engineering, AI, and analytics.',

    /* Projects */
    'proj.label':'Portfolio','proj.heading':'Featured Projects',
    'proj.sub':'A selection of projects spanning deep learning, econometrics, data engineering, and NLP.',
    'proj.filter.all':'All','proj.filter.dl':'Deep Learning','proj.filter.nlp':'NLP',
    'proj.filter.eco':'Econometrics','proj.filter.ml':'Machine Learning','proj.filter.de':'Data Engineering',
    'proj.readmore':'Read more',
    'proj.badge.dl':'Deep Learning','proj.badge.ml':'Machine Learning','proj.badge.nlp':'NLP',
    'proj.badge.econ':'Econometrics','proj.badge.de':'Data Engineering',

    'proj.p10.title':'Predicting Poverty from Satellite Imagery in Nigeria',
    'proj.p10.desc':'Leverages CNN and transfer learning on satellite imagery to map poverty levels across Nigerian regions — a cost-effective alternative to household surveys.',
    'proj.p8.title':'Real-Time Stock Price Prediction with LSTM',
    'proj.p8.desc':'LSTM vs RNN architectures for stock forecasting — LSTM achieves 37% improvement in MAE and 94% R² score. Interactive Streamlit app with real-time forecasting.',
    'proj.p9.title':'Income & Democracy: Panel Econometrics Replication',
    'proj.p9.desc':'Replicates and extends Acemoglu et al. (2008) using Fixed Effects, IV, and GMM estimation. Key finding: the income-democracy correlation disappears once country-specific factors are controlled.',
    'proj.p4.title':'Mauritanian Music Notes Recognition using LSTM',
    'proj.p4.desc':'Deep learning model for recognising and classifying traditional Mauritanian music notes (Tidinit instrument, Maqamat scales) using LSTM architecture — preserving cultural heritage with AI.',
    'proj.p5.title':'LSTM-Based French-to-English Translation Model',
    'proj.p5.desc':'Seq2Seq NLP model using LSTM architecture for French-to-English translation, tackling cross-linguistic challenges in grammar, syntax, and vocabulary through deep learning.',
    'proj.p1.title':'Conversion Rate Optimisation with Logistic Regression',
    'proj.p1.desc':'Predictive classification model for user conversion propensity using logistic regression — enabling data-driven marketing optimisation and revenue maximisation.',
    'proj.p2.title':'Classification of Vulnerable Households in Mauritania',
    'proj.p2.desc':'ML models targeting vulnerable households by socio-demographic category and consumer spending, using national survey data (EPCVM 2019-2020), PCA, and Artificial Neural Networks.',
    'proj.p3.title':'Image Generation with Variational Auto-Encoder',
    'proj.p3.desc':'Implements a VAE for generative image modelling, exploring latent space representations and probabilistic image synthesis using deep neural networks.',
    'proj.p7.title':'AgrInnovators — Agricultural Data Analysis Platform',
    'proj.p7.desc':'Full-stack platform for agricultural data analysis and farmer support — combining data pipelines, analytics, and a user-facing interface to democratise agricultural insights.',
    'proj.p6.title':'CHAPO Application for INPC Management',
    'proj.p6.desc':'Developed the CHAPO application for managing the National Consumer Price Index (INPC) — automating data collection, processing, and reporting workflows.',

    /* Contact */
    'contact.label':'Contact','contact.heading':"Let's Work Together",
    'contact.desc':"Whether you have a data engineering challenge, an ML project, a research collaboration, or just want to connect — I'm always open to new opportunities and enriching conversations.",

    /* Footer & Badges */
    'footer.text':'© 2024 <strong>Moulaye Ahmed Mohammed Brahim</strong> — Data & AI Engineer · Statistician Economist',
    'badge.current':'Current','badge.active':'Active',
  },

  fr: {
    /* Navbar */
    'nav.about':'À Propos','nav.skills':'Compétences','nav.experience':'Expérience',
    'nav.certifications':'Certifications','nav.projects':'Projets','nav.contact':'Contact',

    /* Hero */
    'hero.available':'Ouvert aux opportunités','hero.role_prefix':'Je suis',
    'hero.scroll':'Défiler','hero.cta_projects':'Voir les Projets','hero.cta_contact':'Me Contacter',
    'hero.desc':'Diplômé en Statistiques et Ingénierie des Données de l\'École Supérieure Polytechnique de Nouakchott (ESP), avec une spécialisation en Économie Appliquée, Statistiques & Big Data à l\'Institut National de Statistique et d\'Économie Appliquée (INSEA), Rabat. À travers des expériences dans les secteurs minier, financier, pétrolier et gouvernemental, j\'ai développé une expertise couvrant l\'ensemble du cycle de vie des données — de la modélisation économique et l\'analyse statistique à la conception d\'architectures données scalables et d\'applications IA. Passionné par l\'exploitation des méthodes quantitatives et des technologies modernes pour stimuler l\'innovation stratégique et résoudre des défis complexes.',

    /* About */
    'about.label':'Qui Suis-Je',
    'about.heading':'À l\'intersection de la <span class="gradient-text">Data, l\'IA, la Statistique & l\'Économie</span>',
    'about.p1':'Je suis Moulaye Ahmed Mohammed Brahim, Data & AI Engineer et Statistician Economist de Mauritanie. Je suis titulaire d\'un diplôme d\'Ingénieur en Statistiques et Ingénierie des Données de l\'École Supérieure Polytechnique de Nouakchott (ESP), et j\'ai effectué un échange académique à l\'Institut National de Statistique et d\'Économie Appliquée (INSEA) de Rabat, au Maroc, en Économie Appliquée, Statistiques et Big Data.',
    'about.p2':'Mon expertise couvre tout le spectre des données — de la conception de Data Warehouses et Lakehouses à l\'échelle entreprise, à la construction de modèles de deep learning pour la vision par ordinateur et le NLP, en passant par des analyses économétriques rigoureuses (DSGE, GMM, méthodes spatiales). Je transforme des données complexes en décisions stratégiques concrètes.',
    'about.p3':'Récemment, j\'ai accompli un stage majeur chez <strong>Kinross Tasiast (TMLSA)</strong> où j\'ai conçu et déployé une plateforme de données d\'entreprise complète — réduisant de 93% le temps de consolidation des rapports et améliorant de 97% la vitesse d\'analyse des incidents, entièrement sur technologie open-source.',
    'about.location':'Nouakchott, Mauritanie / Rabat, Maroc',
    'about.degree':'Ingénierie en Statistiques & Data Engineering — ESP / INSEA',

    /* Stats */
    'stat.projects':'Projets Réalisés','stat.roles':'Postes Professionnels','stat.sectors':'Secteurs d\'Activité',
    'stat.report':'Temps Rapport Économisé · Kinross','stat.query':'Gain Vitesse Requêtes · ClickHouse',
    'stat.incident':'Analyse Incidents Accélérée','stat.tons':'Tonnes de Transactions Auditées',
    'stat.forms':'Formulaires Bancaires Automatisés','stat.delays':'Délais d\'Approbation Réduits',

    /* Skills */
    'skills.label':'Stack Technique','skills.heading':'Compétences & Technologies',
    'skills.sub':'Un ensemble d\'outils complet couvrant la science des données, l\'ingénierie et la modélisation économique.',
    'skills.ai':'IA & Ingénierie LLM','skills.ml':'Machine Learning & Deep Learning',
    'skills.de':'Ingénierie des Données','skills.stats':'Statistiques & Économétrie',
    'skills.cloud':'Cloud, DevOps & Bases de Données','skills.viz':'Visualisation & BI',
    'skills.geo':'Géospatial & Télédétection','skills.industry':'Industrie & Ingénierie',

    /* Experience */
    'exp.label':'Parcours','exp.heading':'Expérience & Formation',
    'exp.sub':'Un parcours à travers l\'ingénierie IA, les plateformes de données, l\'économétrie et divers secteurs industriels.',
    'exp.tab.pro':'Professionnel','exp.tab.edu':'Formation','exp.tab.vol':'Bénévolat',

    /* Timeline — Roles */
    'tl.role.insightex':'Ingénieur IA',
    'tl.role.bumec':'Consultant Externe',
    'tl.role.amc':'Ingénieur Analytics',
    'tl.role.kinross_pfe':'Stage de Fin d\'Études (Projet de Fin d\'Études)',
    'tl.role.kinross_assist':'Ingénieur Assistant',
    'tl.role.smcp':'Stagiaire Data Scientist',
    'tl.role.bcm':'Stage de Fin d\'Études — Économétrie',
    'tl.role.mpe':'Stagiaire Statisticien',
    'tl.role.insea':'Programme d\'Échange — Économie Appliquée, Statistiques & Big Data',
    'tl.role.esp':'Diplôme d\'Ingénieur — Statistiques & Ingénierie des Données',
    'tl.role.isms':'Licence — Statistiques & Économie Appliquée',
    'tl.role.bac':'Baccalauréat Mathématiques',
    'tl.role.mec':'Membre',
    'tl.role.ufc':'Membre',

    /* Timeline — Descriptions */
    'tl.desc.insightex':'Ingénieur IA spécialisé dans la construction de systèmes IA en production et d\'applications intelligentes, incluant des solutions propulsées par LLM et l\'exploitation d\'images satellites pour des applications de télédétection.',
    'tl.desc.bumec':'Consultant externe en données et analytique, apportant une expertise stratégique en analyse statistique, ingénierie des données et systèmes d\'aide à la décision.',
    'tl.desc.amc':'Ingénieur Analytics spécialisé dans l\'optimisation des ressources opérationnelles et la transformation numérique.<ul><li><strong>Audit Pesage & Détection de Fraude</strong> — Optimisation des ressources de transport par analyse approfondie des flux de pesage. Mise en œuvre de contrôles statistiques avancés (test de la loi de Benford) permettant la détection d\'anomalies et de manipulations potentielles sur plus de 765 tonnes de transactions clients/fournisseurs.</li><li><strong>Optimisation Énergétique & Modélisation Prédictive</strong> — Développement d\'un modèle d\'analyse de la consommation de carburant par intégration de sources hétérogènes (EDK & Fleeti). Conception d\'une méthodologie de marge de tolérance dynamique, réduisant les écarts de remplissage et optimisant les coûts opérationnels.</li><li><strong>Priorisation Stratégique Data-Driven</strong> — Application de l\'analyse Pareto pour identifier les 20% d\'unités générant 80% des écarts, permettant un ciblage précis et une allocation optimale des ressources d\'audit et de maintenance.</li><li><strong>Solution d\'Automatisation Bancaire (Form Builder)</strong> — Conception et développement d\'une application web full-stack (React/Vite + Laravel API) permettant la génération automatique de 6 types de formulaires bancaires officiels en PDF haute qualité. Architecture multilingue (FR/AR - RTL) avec validation en temps réel et calculs financiers automatisés.</li><li><strong>Infrastructure Data & Pipelines ETL</strong> — Conception et automatisation de pipelines ETL robustes assurant l\'intégrité, la traçabilité et la disponibilité des KPIs critiques. Gestion des versions et déploiement via GitLab.</li><li><strong>Business Intelligence & Tableaux de Bord</strong> — Création de tableaux de bord interactifs en temps réel transformant des données complexes en insights actionnables pour la direction.</li></ul>',
    'tl.desc.kinross_pfe':'Conception et déploiement d\'une plateforme de données d\'entreprise complète pour le Département Sécurité :<ul><li><strong>SFWMS</strong> : Application web React/Django avec RBAC 6 rôles, workflows financiers automatisés et traçabilité complète des audits</li><li><strong>Entrepôt de Données PostgreSQL</strong> : Architecture Médaillon (Bronze/Silver/Gold) avec schéma en étoile, orchestration Apache Airflow, transformations dbt</li><li><strong>Data Lakehouse</strong> : Delta Lake + ClickHouse offrant des performances de requêtes 35–45× plus rapides pour l\'analytique ad-hoc</li><li>Intégration de 6 sources de données hétérogènes via CDC (Debezium/Kafka), APIs REST, NLP, OCR, Spark ETL — taux de succès 96–100%</li><li>Réduction de 93% du temps de reporting · 70% de réduction des délais d\'approbation · 97% plus rapide pour l\'analyse des incidents</li><li>12 tableaux de bord Superset · Taux de qualité données 94,3% · MTTR &lt; 30 min via Prometheus/Grafana/Loki</li></ul>',
    'tl.desc.kinross_assist':'Conception d\'outils d\'aide à la décision et de systèmes automatisés d\'identification des goulots d\'étranglement ayant optimisé les processus de production dans les opérations minières.',
    'tl.desc.smcp':'Développement de modèles de machine learning pour la prédiction de la demande de produits halieutiques, optimisation des niveaux de stocks et analyse des tendances d\'exportation de produits de la mer en Mauritanie.',
    'tl.desc.bcm':'Analyse économétrique approfondie des déterminants de l\'inflation en Mauritanie (1986–2020) à l\'aide des modèles de Co-intégration et de Correction d\'Erreur Vectorielle (VECM) pour comprendre les impacts de la politique monétaire.',
    'tl.desc.mpe':'Analyse du marché domestique des hydrocarbures et développement de modèles de prévision de la consommation d\'hydrocarbures liquides (2012–2020).',
    'tl.desc.insea':'Cours avancés en méthodes statistiques, technologies big data, économétrie spatiale, modélisation DSGE et analyse économique appliquée.',
    'tl.desc.esp':'Formation complète en ingénierie statistique, science des données, machine learning, infrastructure big data et méthodologies analytiques modernes.',
    'tl.desc.isms':'Fondements en théorie statistique, économétrie et analyse économique appliquée.',
    'tl.desc.bac':'Solides bases en mathématiques, ouvrant la voie à une spécialisation quantitative.',
    'tl.desc.mec':'Membre de la Communauté des Ingénieurs Mauritaniens, association professionnelle unissant les ingénieurs et étudiants en ingénierie mauritaniens dans le monde entier. La MEC vise à :<ul><li>Construire un réseau d\'ingénieurs et d\'étudiants pour échanger idées et expériences.</li><li>Promouvoir et structurer la profession d\'ingénieur et la représenter auprès du public, des institutions gouvernementales et des organisations internationales.</li><li>Soutenir l\'intégration professionnelle et la formation des étudiants en ingénierie.</li><li>Développer la coopération avec les organisations, institutions et entreprises nationales et internationales d\'ingénierie.</li><li>Organiser des activités de partage des connaissances : débats, tables rondes, conférences et programmes de formation spécialisés.</li></ul>',
    'tl.desc.ufc':'Membre d\'une organisation non gouvernementale dédiée à la lutte contre le changement climatique et à la promotion de la durabilité environnementale. À travers le plaidoyer, l\'engagement communautaire et les initiatives éducatives, contribution à la sensibilisation aux enjeux environnementaux et aux actions vers une planète plus verte et plus résiliente. La mission : inspirer individus et communautés à protéger les ressources naturelles et soutenir des politiques assurant un avenir durable pour les générations futures.',

    /* Gallery */
    'tl.gallery.archi':'Architectures Techniques',
    'tl.gallery.cap.medallion':'Architecture de Données Médaillon (Bronze / Silver / Gold)',
    'tl.gallery.cap.lakehouse':'Architecture Data Lakehouse Delta Lake + ClickHouse',
    'tl.gallery.cap.ocr':'Pipeline d\'Ingestion OCR & NLP',
    'tl.gallery.cap.team':'Présentation finale avec les chefs de département & superviseur — Kinross Tasiast',
    'tl.gallery.cap.certif':'Certificat d\'Appréciation — Kinross Tasiast (TMLSA)',

    /* Certifications */
    'cert.label':'Accréditations','cert.heading':'Licences & Certifications',
    'cert.sub':'Certifications professionnelles en ingénierie des données, IA et analytique.',

    /* Projects */
    'proj.label':'Portfolio','proj.heading':'Projets Phares',
    'proj.sub':'Une sélection de projets couvrant le deep learning, l\'économétrie, l\'ingénierie des données et le NLP.',
    'proj.filter.all':'Tous','proj.filter.dl':'Deep Learning','proj.filter.nlp':'NLP',
    'proj.filter.eco':'Économétrie','proj.filter.ml':'Machine Learning','proj.filter.de':'Ingénierie Données',
    'proj.readmore':'Lire la suite',
    'proj.badge.dl':'Deep Learning','proj.badge.ml':'Machine Learning','proj.badge.nlp':'NLP',
    'proj.badge.econ':'Économétrie','proj.badge.de':'Ingénierie des Données',

    'proj.p10.title':'Prédiction de la Pauvreté par Images Satellites au Nigéria',
    'proj.p10.desc':'Utilise les CNN et le transfer learning sur des images satellites pour cartographier les niveaux de pauvreté dans les régions nigérianes — une alternative économique aux enquêtes ménages.',
    'proj.p8.title':'Prédiction du Prix des Actions IBM en Temps Réel avec LSTM',
    'proj.p8.desc':'Architectures LSTM vs RNN pour la prédiction boursière — LSTM atteint 37% d\'amélioration du MAE et un R² de 94%. Application Streamlit interactive avec prévisions en temps réel.',
    'proj.p9.title':'Revenu & Démocratie : Réplication en Économétrie sur Données de Panel',
    'proj.p9.desc':'Réplique et étend Acemoglu et al. (2008) avec effets fixes, IV et estimation GMM. Résultat clé : la corrélation revenu-démocratie disparaît une fois les facteurs spécifiques aux pays contrôlés.',
    'proj.p4.title':'Reconnaissance de Notes de Musique Mauritanienne par LSTM',
    'proj.p4.desc':'Modèle de deep learning pour la reconnaissance et la classification des notes de musique traditionnelle mauritanienne (instrument Tidinit, gammes Maqamat) — préserver le patrimoine culturel grâce à l\'IA.',
    'proj.p5.title':'Modèle de Traduction Français-Anglais basé sur LSTM',
    'proj.p5.desc':'Modèle NLP Seq2Seq utilisant l\'architecture LSTM pour la traduction français-anglais, traitant les défis linguistiques de grammaire, syntaxe et vocabulaire par deep learning.',
    'proj.p1.title':'Optimisation du Taux de Conversion par Régression Logistique',
    'proj.p1.desc':'Modèle de classification prédictive de la propension à la conversion des utilisateurs par régression logistique — optimisation marketing data-driven et maximisation des revenus.',
    'proj.p2.title':'Classification des Ménages Vulnérables en Mauritanie',
    'proj.p2.desc':'Modèles ML ciblant les ménages vulnérables par catégorie socio-démographique et dépenses de consommation, utilisant les données de l\'enquête nationale (EPCVM 2019-2020), ACP et réseaux de neurones artificiels.',
    'proj.p3.title':'Génération d\'Images avec Auto-Encodeur Variationnel',
    'proj.p3.desc':'Implémente un VAE pour la modélisation générative d\'images, explorant les représentations de l\'espace latent et la synthèse probabiliste d\'images par réseaux de neurones profonds.',
    'proj.p7.title':'AgrInnovators — Plateforme d\'Analyse de Données Agricoles',
    'proj.p7.desc':'Plateforme full-stack d\'analyse de données agricoles et d\'aide aux agriculteurs — combinant pipelines de données, analytique et interface utilisateur pour démocratiser les insights agricoles.',
    'proj.p6.title':'Application CHAPO pour la Gestion de l\'INPC',
    'proj.p6.desc':'Développement de l\'application CHAPO pour la gestion de l\'Indice National des Prix à la Consommation (INPC) — automatisation de la collecte, du traitement et des flux de reporting.',

    /* Contact */
    'contact.label':'Contact','contact.heading':'Travaillons Ensemble',
    'contact.desc':'Que vous ayez un défi d\'ingénierie des données, un projet ML, une collaboration de recherche, ou simplement envie d\'échanger — je suis toujours ouvert à de nouvelles opportunités et conversations enrichissantes.',

    /* Footer & Badges */
    'footer.text':'© 2024 <strong>Moulaye Ahmed Mohammed Brahim</strong> — Data & AI Engineer · Statistician Economist',
    'badge.current':'En cours','badge.active':'Actif',
  }
};

(function () {
  'use strict';

  let currentLang = localStorage.getItem('portfolio-lang') || 'en';

  function applyLang(lang) {
    const t = TRANSLATIONS[lang];
    if (!t) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (t[key] !== undefined) el.textContent = t[key];
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.dataset.i18nHtml;
      if (t[key] !== undefined) el.innerHTML = t[key];
    });

    const btn = document.getElementById('lang-toggle');
    if (btn) btn.textContent = lang === 'en' ? 'FR' : 'EN';

    document.documentElement.lang = lang;
    currentLang = lang;
  }

  function toggleLang() {
    const next = currentLang === 'en' ? 'fr' : 'en';
    localStorage.setItem('portfolio-lang', next);
    applyLang(next);
  }

  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('lang-toggle');
    if (btn) btn.addEventListener('click', toggleLang);
    applyLang(currentLang);
  });
})();
