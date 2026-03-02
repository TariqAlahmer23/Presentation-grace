export type Locale = "en" | "ar" | "de";

const TEAM = [
  ["Tariq Alahmer", "", ""],
  ["Mohammed Zair", "", ""],
  ["Afaf Alshalaby", "", ""],
  ["Rawan Zair", "", ""],
  ["Yousef Latifa", "", ""],
  ["Thair Haider", "", ""]
] as const;

export const COPY = {
  en: {
    navSummary:
      "A structured mental health platform designed for individuals and therapists who expect clarity, calm design, and real clinical depth.",
    labels: {
      slide: "Slide",
      progress: "Progress",
      explore: "Explore the Platform",
      contact: "Contact Us",
      website: "Main Website",
      download: "Download APK (Beta)",
      appFlow: "App Flow",
      tasks: "Today's Tasks",
      tasksBadge: "0/5 completed",
      mobileExperience: "Experience Grace on Mobile",
      patientExperience: "Patient Experience",
      therapistExperience: "Therapist Experience"
    },
    sections: [
      {
        badge: "MENTAL HEALTH, RESTRUCTURED.",
        title:
          "Grace transforms mental healthcare into a structured, intelligent daily journey.",
        description:
          "Clinical pathways, AI-assisted insights, and therapist-ready workflows unified in one guided ecosystem."
      },
      {
        badge: "OUR SERVICES",
        title:
          "A layered mental health system - from intelligent diagnosis to human care.",
        description:
          "Grace is built around four integrated pillars: clinical AI assessment, emotional AI support, structured behavioral training, and therapist integration. Each layer works independently - and together - to create a complete mental health journey."
      },
      {
        badge: "OUR APP",
        title:
          "A structured daily system for clarity, action, and measurable progress.",
        description:
          "Grace transforms mental health from abstract emotion into guided steps. Each screen reduces friction, clarifies the next action, and reinforces a consistent care rhythm."
      },
      {
        badge: "MEET OUR TEAM",
        title: "Built by operators who understand both care and systems.",
        description:
          "Grace is developed by a multidisciplinary team blending clinical thinking, product engineering, and trust-first system architecture. We build with long-term responsibility - not short-term hype."
      },
      {
        badge: "Pricing",
        title:
          "Clear plans for personal care, clinics, and enterprise deployment.",
        description:
          "Pricing is structured for adoption, retention, and measurable support without hidden complexity."
      },
      {
        badge: "SECURITY",
        title: "Security engineered at every layer.",
        description:
          "Grace is built on a defense-in-depth architecture. Every layer is designed to protect user data, prevent abuse, and ensure operational resilience. Core application servers and database infrastructure are hosted in Germany."
      },
      {
        badge: "AI LAYER",
        title: "AI that strengthens clinical judgment - not replaces it.",
        description:
          "Grace AI combines deterministic clinical evaluation with adaptive conversational intelligence."
      },
      {
        badge: "WHY GRACE",
        title: "Structured care. Ethical intelligence. Real clinical continuity.",
        description:
          "Grace connects assessment, emotional support, behavioral training, and therapist collaboration into one continuous system. Grace is not a feature app. It is a mental health operating system."
      },
      {
        badge: "CONTACT US",
        title: "Bring Grace into your clinic, program, or partner ecosystem.",
        description:
          "We work with mental health teams, wellness platforms, and employer programs that want a premium digital experience."
      }
    ],
    introHighlights: [
      [
        "Guided Pathways",
        "Clear mental health journeys across assessments, mood tracking, AI interviews, and therapy integration."
      ],
      [
        "Therapist-Ready Infrastructure",
        "AI-generated summaries, structured session preparation, and streamlined client management."
      ],
      [
        "Designed for Emotional Stability",
        "Calm, distraction-free interface built to reduce cognitive overload during stress."
      ],
      [
        "Built for Clinical Expansion",
        "Scalable architecture ready for clinics, organizations, and institutional partnerships."
      ]
    ],
    serviceHighlights: [
      [
        "AI Engine",
        "Clinical-grade structured evaluation. Depression classification, AI-powered interviews, cognitive assessments, and data-driven mental health indicators."
      ],
      [
        "Liora - Emotional AI Companion",
        "A safe space for emotional release and intelligent reflection, with sentiment detection, summaries, pattern identification, crisis monitoring, and AI journaling."
      ],
      [
        "Structured Trainings",
        "Guided micro-practices, cognitive strengthening, emotional regulation modules, and daily task reinforcement."
      ],
      [
        "Therapist Discovery",
        "Intelligent therapist matching, fit-based recommendations, seamless appointments, and AI summaries shared before sessions."
      ]
    ],
    taskItems: [
      ["Set Mood", "Daily emotional signal tracking"],
      ["Talk to Liora", "Guided emotional reflection"],
      ["Depression Assessment", "Structured clinical screening"],
      ["Trainings", "Short cognitive and emotional exercises"],
      ["Find a Therapist", "Matched human care options"]
    ],
    therapistTitle: "Built for Therapists",
    therapistSubtitle: "Clinical clarity without administrative overload.",
    therapistPoints: [
      "Unified client flow across sessions and assessments",
      "AI-generated summaries before appointments",
      "Structured follow-up tools and guided task handoffs"
    ],
    techTitle: "Built for Secure Care Operations",
    techSubtitle: "Secure, role-aware, and fully traceable.",
    techPoints: [
      "Secure Authentication",
      "End-to-End Encryption",
      "RBAC",
      "Audit Logs",
      "Smart Notifications"
    ],
    mobileShowcaseText:
      "A guided sequence that adapts to the user - not the other way around.",
    team: TEAM,
    securityPrimaryTitle: "Database Layer Protection",
    securityPrimaryPoints: [
      "Full Disk Encryption (LUKS v2) - persistent storage encrypted at the physical disk level.",
      "Field-Level Encryption - sensitive fields encrypted at the application layer.",
      "Isolated Database Architecture - PostgreSQL runs in a private container network with no public exposure on Germany-based servers."
    ],
    securitySecondaryTitle: "API & Backend Protection",
    securitySecondaryPoints: [
      "JWT-based authentication for tokenized access control.",
      "Rate limiting and abuse protection against brute force and flooding.",
      "Custom exception handling with no stack trace leakage.",
      "CORS restricted to approved production domains."
    ],
    securityHighlights: [
      [
        "Real-Time Layer Security",
        "Message rate controls, payload size limits, and automatic abusive connection termination."
      ],
      [
        "WebRTC / TURN Infrastructure",
        "TLS 1.3, DTLS 1.2, strong cipher suites, and isolated relay configuration."
      ],
      [
        "Operations Hardening",
        "Services run in isolated containers with internal networking, monitoring, log aggregation, secure headers, enforced HTTPS, and Germany-based hosting."
      ]
    ],
    metrics: [
      ["Our internally designed evaluation model", "Internal", "brain"],
      ["Structured scoring pipelines", "Scoring", "clock"],
      ["DeepSeek fallback reasoning and extended context support", "DeepSeek", "shield"]
    ],
    aiTitle: "AI Engine",
    aiSummary:
      "The structured diagnostic layer. Depression scoring, guided clinical interview logic, cognitive testing modules, and structured mental state indicators built on our proprietary evaluation model.",
    aiBullets: [
      "Liora - Emotional Support Layer",
      "Sentiment and emotional pattern detection",
      "Context-aware conversation flow",
      "Therapeutic summary generation",
      "Crisis-sensitive signal routing"
    ],
    differenceA: [
      "Different by Design",
      "Not just a chatbot - Grace combines structured clinical evaluation with guided emotional AI.",
      "Not just a therapist directory - measurable insight starts before sessions and continues after them.",
      "Not just wellness content - trainings connect directly to assessments and progress tracking."
    ],
    differenceB: [
      "Different in Depth",
      "Clinical plus emotional layers - AI Engine handles diagnosis and cognitive tests while Liora supports emotional engagement.",
      "Structured continuity - every action connects to a measurable care path.",
      "Institutional readiness - consent-based analytics support responsible public health insight.",
      "Trust-first architecture - privacy and governance are built into workflows."
    ],
    contactLine:
      "Ready for clinics, wellness programs, and strategic partnerships.",
    email: "contact@gracee.app",
    secondaryEmail: "tariqalahmer@gracee.app",
    phone: "+963 968 058 784"
  },
  ar: {
    navSummary:
      "منصة صحة نفسية منظمة ومصممة للأفراد والمعالجين الذين يتوقعون الوضوح وهدوء الواجهة وعمقًا سريريًا حقيقيًا.",
    labels: {
      slide: "شريحة",
      progress: "التقدم",
      explore: "استكشف المنصة",
      contact: "تواصل معنا",
      website: "الموقع الرئيسي",
      download: "تحميل APK (Beta)",
      appFlow: "مسار التطبيق",
      tasks: "مهام اليوم",
      tasksBadge: "0/5 مكتمل",
      mobileExperience: "اختبر Grace على الهاتف",
      patientExperience: "تجربة المريض",
      therapistExperience: "تجربة المعالج"
    },
    sections: [
      {
        badge: "إعادة هيكلة الصحة النفسية.",
        title: "تحوّل Grace الرعاية النفسية إلى رحلة يومية منظمة وذكية.",
        description:
          "مسارات سريرية ورؤى مدعومة بالذكاء الاصطناعي وتدفقات عمل جاهزة للمعالجين ضمن منظومة موجهة واحدة."
      },
      {
        badge: "خدماتنا",
        title: "نظام صحة نفسية متعدد الطبقات - من التشخيص الذكي إلى الرعاية البشرية.",
        description:
          "تعتمد Grace على أربع ركائز مترابطة: تقييم سريري بالذكاء الاصطناعي، دعم عاطفي ذكي، تدريبات سلوكية منظمة، وتكامل مع المعالجين. كل طبقة تعمل منفردة - ومعًا - لتشكّل رحلة صحة نفسية متكاملة."
      },
      {
        badge: "تطبيقنا",
        title: "نظام يومي منظم للوضوح والتنفيذ والتقدم القابل للقياس.",
        description:
          "تحول Grace الصحة النفسية من شعور مجرد إلى خطوات موجهة. كل شاشة تقلل الاحتكاك وتوضح الإجراء التالي وتدعم إيقاع رعاية ثابتًا."
      },
      {
        badge: "تعرف على فريقنا",
        title: "بُني على يد مشغّلين يفهمون الرعاية والأنظمة معًا.",
        description:
          "يتم تطوير Grace بواسطة فريق متعدد التخصصات يجمع بين التفكير السريري وهندسة المنتج وبنية أنظمة تضع الثقة أولًا. نحن نبني بمسؤولية طويلة المدى - لا بضجيج قصير الأمد."
      },
      {
        badge: "الأسعار",
        title: "خطط واضحة للرعاية الفردية والعيادات والنشر المؤسسي.",
        description:
          "تم تصميم التسعير للتبني والاستمرارية والرعاية القابلة للقياس دون تعقيد خفي."
      },
      {
        badge: "الأمان",
        title: "أمان مصمم هندسيًا في كل طبقة.",
        description:
          "تعتمد Grace على بنية دفاع متعددة الطبقات. كل طبقة مصممة لحماية بيانات المستخدم ومنع الإساءة وضمان المرونة التشغيلية. الخوادم الأساسية والبنية الخاصة بقاعدة البيانات مستضافة في ألمانيا."
      },
      {
        badge: "طبقة الذكاء الاصطناعي",
        title: "ذكاء اصطناعي يعزز الحكم السريري - ولا يستبدله.",
        description:
          "يجمع ذكاء Grace الاصطناعي بين التقييم السريري الحتمي والذكاء الحواري التكيفي."
      },
      {
        badge: "لماذا Grace",
        title: "رعاية منظمة. ذكاء أخلاقي. استمرارية سريرية حقيقية.",
        description:
          "تربط Grace بين التقييم والدعم العاطفي والتدريب السلوكي وتعاون المعالجين ضمن نظام مستمر واحد. Grace ليست تطبيق مزايا. إنها نظام تشغيل للصحة النفسية."
      },
      {
        badge: "تواصل معنا",
        title: "أدخل Grace إلى عيادتك أو برنامجك أو منظومة شركائك.",
        description:
          "نعمل مع فرق الصحة النفسية ومنصات العافية وبرامج أصحاب العمل التي تريد تجربة رقمية عالية المستوى."
      }
    ],
    introHighlights: [
      ["مسارات موجهة", "رحلات واضحة عبر التقييمات وتتبع المزاج والمقابلات الذكية والتكامل العلاجي."],
      ["بنية جاهزة للمعالجين", "ملخصات ذكية وتحضير منظم للجلسات وإدارة أكثر سلاسة للعملاء."],
      ["مصمم للاستقرار العاطفي", "واجهة هادئة تقلل الحمل المعرفي أثناء التوتر."],
      ["جاهز للتوسع السريري", "بنية قابلة للتوسع للعيادات والمنظمات والشراكات المؤسسية."]
    ],
    serviceHighlights: [
      ["محرك الذكاء الاصطناعي", "تقييم منظم بمستوى سريري يشمل تصنيف الاكتئاب والمقابلات الذكية والتقييمات المعرفية والمؤشرات القائمة على البيانات."],
      ["ليورا - الرفيق العاطفي الذكي", "مساحة آمنة للتفريغ العاطفي والتأمل الذكي مع تحليل المشاعر والملخصات ومراقبة إشارات الأزمات."],
      ["تدريبات منظمة", "ممارسات قصيرة موجهة وتمارين معرفية ووحدات لتنظيم العاطفة وتعزيز يومي للمهام."],
      ["اكتشاف المعالج", "مطابقة ذكية مع المعالج وتوصيات مبنية على الملاءمة ومواعيد سلسة وملخصات تشارك قبل الجلسات."]
    ],
    taskItems: [
      ["سجل المزاج", "تتبع يومي للإشارات العاطفية"],
      ["تحدث مع ليورا", "تأمل عاطفي موجه"],
      ["تقييم الاكتئاب", "فحص سريري منظم"],
      ["التدريبات", "تمارين معرفية وعاطفية قصيرة"],
      ["ابحث عن معالج", "خيارات رعاية بشرية مناسبة"]
    ],
    therapistTitle: "مصمم للمعالجين",
    therapistSubtitle: "وضوح سريري دون عبء إداري زائد.",
    therapistPoints: [
      "تدفق موحد للعميل عبر الجلسات والتقييمات",
      "ملخصات مولدة بالذكاء الاصطناعي قبل المواعيد",
      "أدوات متابعة منظمة وتسليم موجه للمهام"
    ],
    techTitle: "مصمم لعمليات رعاية آمنة",
    techSubtitle: "آمن وقائم على الأدوار وقابل للتتبع بالكامل.",
    techPoints: [
      "مصادقة آمنة",
      "تشفير من طرف إلى طرف",
      "صلاحيات قائمة على الأدوار",
      "سجلات تدقيق",
      "إشعارات ذكية"
    ],
    mobileShowcaseText: "تسلسل موجه يتكيف مع المستخدم - وليس العكس.",
    team: TEAM,
    securityPrimaryTitle: "حماية طبقة قاعدة البيانات",
    securityPrimaryPoints: [
      "تشفير كامل للقرص (LUKS v2) على مستوى التخزين الفيزيائي.",
      "تشفير على مستوى الحقول للبيانات الحساسة داخل التطبيق.",
      "بنية قاعدة بيانات معزولة تعمل دون أي تعرض عام وعلى خوادم موجودة في ألمانيا."
    ],
    securitySecondaryTitle: "حماية الواجهة البرمجية والخلفية",
    securitySecondaryPoints: [
      "مصادقة مبنية على JWT للتحكم بالوصول.",
      "تحديد معدل وحماية من الإساءة ضد الهجمات ومحاولات الإغراق.",
      "معالجة مخصصة للاستثناءات دون تسريب تتبعات الأخطاء.",
      "تقييد CORS لنطاقات الإنتاج المعتمدة فقط."
    ],
    securityHighlights: [
      ["أمان الطبقة اللحظية", "ضوابط على معدل الرسائل وحدود لحجم الحمولة وإنهاء تلقائي للاتصالات المسيئة."],
      ["بنية WebRTC / TURN", "TLS 1.3 وDTLS 1.2 ومجموعات تشفير قوية وإعداد ترحيل معزول."],
      ["تحصين التشغيل", "خدمات معزولة داخل حاويات مع شبكات داخلية ومراقبة وسجلات ورؤوس أمان وHTTPS واستضافة في ألمانيا."]
    ],
    metrics: [
      ["نموذج التقييم المصمم داخليًا", "داخلي", "brain"],
      ["مسارات التقييم الهيكلية", "Scoring", "clock"],
      ["تكامل DeepSeek للاستدلال الاحتياطي والدعم السياقي", "DeepSeek", "shield"]
    ],
    aiTitle: "محرك الذكاء الاصطناعي",
    aiSummary:
      "الطبقة التشخيصية المنظمة. تتضمن تقييم الاكتئاب ومنطق المقابلة السريرية الموجهة ووحدات الاختبار المعرفي ومؤشرات منظمة للحالة النفسية مبنية على نموذج التقييم الخاص بنا.",
    aiBullets: [
      "ليورا - طبقة الدعم العاطفي",
      "تحليل المشاعر والأنماط العاطفية",
      "تدفق محادثة واعٍ بالسياق",
      "توليد ملخصات علاجية",
      "توجيه الإشارات الحساسة للأزمات"
    ],
    differenceA: [
      "مختلفة في التصميم",
      "ليست مجرد روبوت دردشة - Grace تجمع بين التقييم السريري المنظم والذكاء العاطفي الموجه.",
      "ليست مجرد دليل للمعالجين - تبدأ الرؤية القابلة للقياس قبل الجلسات وتستمر بعدها.",
      "ليست مجرد محتوى رفاهية - التدريبات مرتبطة مباشرة بالتقييمات وتتبع التقدم."
    ],
    differenceB: [
      "مختلفة في العمق",
      "طبقات سريرية وعاطفية - محرك الذكاء الاصطناعي يتولى التشخيص والاختبارات المعرفية بينما تدعم ليورا التفاعل العاطفي.",
      "استمرارية منظمة - كل إجراء يرتبط بمسار رعاية قابل للقياس.",
      "جاهزية مؤسسية - تحليلات مبنية على الموافقة تدعم رؤية مسؤولة للصحة العامة.",
      "بنية تضع الثقة أولًا - الخصوصية والحوكمة مدمجتان في سير العمل."
    ],
    contactLine: "جاهز للعيادات وبرامج العافية والشراكات الاستراتيجية.",
    email: "contact@gracee.app",
    secondaryEmail: "tariqalahmer@gracee.app",
    phone: "+963 968 058 784"
  },
  de: {
    navSummary:
      "Eine strukturierte Mental-Health-Plattform für Menschen und Therapeut:innen, die Klarheit, ruhiges Design und echte klinische Tiefe erwarten.",
    labels: {
      slide: "Folie",
      progress: "Fortschritt",
      explore: "Plattform erkunden",
      contact: "Kontakt",
      website: "Hauptwebsite",
      download: "APK herunterladen (Beta)",
      appFlow: "App-Ablauf",
      tasks: "Heutige Aufgaben",
      tasksBadge: "0/5 erledigt",
      mobileExperience: "Grace auf dem Smartphone erleben",
      patientExperience: "Patient:innen-Erlebnis",
      therapistExperience: "Therapeut:innen-Erlebnis"
    },
    sections: [
      {
        badge: "MENTAL HEALTH, NEU STRUKTURIERT.",
        title:
          "Grace verwandelt mentale Versorgung in eine strukturierte, intelligente tägliche Journey.",
        description:
          "Klinische Pfade, KI-gestützte Erkenntnisse und therapeut:innen-taugliche Workflows in einem geführten Ökosystem."
      },
      {
        badge: "UNSERE LEISTUNGEN",
        title:
          "Ein mehrschichtiges Mental-Health-System - von intelligenter Diagnostik bis zu menschlicher Versorgung.",
        description:
          "Grace basiert auf vier integrierten Säulen: klinische KI-Bewertung, emotionale KI-Begleitung, strukturierte Verhaltenstrainings und Therapeut:innen-Integration. Jede Ebene arbeitet eigenständig - und gemeinsam - für eine vollständige Mental-Health-Journey."
      },
      {
        badge: "UNSERE APP",
        title:
          "Ein strukturiertes tägliches System für Klarheit, Handlung und messbaren Fortschritt.",
        description:
          "Grace verwandelt mentale Gesundheit von abstraktem Empfinden in geführte Schritte. Jeder Screen reduziert Reibung, klärt die nächste Aktion und stärkt einen konstanten Versorgungsrhythmus."
      },
      {
        badge: "UNSER TEAM",
        title:
          "Gebaut von Operator:innen, die sowohl Versorgung als auch Systeme verstehen.",
        description:
          "Grace wird von einem interdisziplinären Team entwickelt, das klinisches Denken, Product Engineering und vertrauensorientierte Systemarchitektur verbindet. Wir bauen mit langfristiger Verantwortung - nicht mit kurzfristigem Hype."
      },
      {
        badge: "PREISE",
        title:
          "Klare Pakete für persönliche Versorgung, Praxen und Enterprise-Rollouts.",
        description:
          "Die Preisstruktur ist auf Einführung, Bindung und messbare Unterstützung ohne versteckte Komplexität ausgelegt."
      },
      {
        badge: "SICHERHEIT",
        title: "Sicherheit auf jeder Ebene technisch umgesetzt.",
        description:
          "Grace basiert auf einer Defense-in-Depth-Architektur. Jede Ebene ist darauf ausgelegt, Nutzerdaten zu schützen, Missbrauch zu verhindern und operative Resilienz sicherzustellen. Kernserver und Datenbankinfrastruktur werden in Deutschland gehostet."
      },
      {
        badge: "KI-EBENE",
        title: "KI stärkt klinisches Urteilsvermögen - sie ersetzt es nicht.",
        description:
          "Grace AI verbindet deterministische klinische Bewertung mit adaptiver dialogischer Intelligenz."
      },
      {
        badge: "WARUM GRACE",
        title:
          "Strukturierte Versorgung. Ethische Intelligenz. Echte klinische Kontinuität.",
        description:
          "Grace verbindet Assessment, emotionale Unterstützung, Verhaltenstrainings und Therapeut:innen-Zusammenarbeit in einem kontinuierlichen System. Grace ist keine Feature-App. Es ist ein Betriebssystem für mentale Gesundheit."
      },
      {
        badge: "KONTAKT",
        title:
          "Bringen Sie Grace in Ihre Praxis, Ihr Programm oder Ihr Partner-Ökosystem.",
        description:
          "Wir arbeiten mit Mental-Health-Teams, Wellness-Plattformen und Arbeitgeberprogrammen, die eine hochwertige digitale Erfahrung wollen."
      }
    ],
    introHighlights: [
      ["Geführte Pfade", "Klare Journeys über Assessments, Mood-Tracking, KI-Interviews und Therapie-Integration."],
      ["Therapeut:innen-taugliche Infrastruktur", "KI-Zusammenfassungen, strukturierte Sitzungsvorbereitung und schlankes Client-Management."],
      ["Für emotionale Stabilität gestaltet", "Eine ruhige Oberfläche, die kognitive Überlastung in Stressmomenten reduziert."],
      ["Für klinische Expansion gebaut", "Skalierbare Architektur für Praxen, Organisationen und institutionelle Partnerschaften."]
    ],
    serviceHighlights: [
      ["KI-Engine", "Klinisch strukturierte Bewertung mit Depressionsklassifizierung, KI-Interviews, kognitiven Assessments und datenbasierten Indikatoren."],
      ["Liora - emotionale KI-Begleitung", "Ein sicherer Raum für Entlastung und intelligente Reflexion mit Sentiment-Erkennung, Zusammenfassungen und Krisensignalen."],
      ["Strukturierte Trainings", "Geführte Mikro-Praktiken, kognitive Stärkung, Emotionsregulation und tägliche Aufgabenverstärkung."],
      ["Therapeut:innen-Findung", "Intelligentes Matching, passungsbasierte Empfehlungen, nahtlose Termine und KI-Zusammenfassungen vor Sitzungen."]
    ],
    taskItems: [
      ["Stimmung erfassen", "Tägliches Tracking emotionaler Signale"],
      ["Mit Liora sprechen", "Geführte emotionale Reflexion"],
      ["Depressions-Assessment", "Strukturiertes klinisches Screening"],
      ["Trainings", "Kurze kognitive und emotionale Übungen"],
      ["Therapeut:in finden", "Passende menschliche Versorgungsoptionen"]
    ],
    therapistTitle: "Für Therapeut:innen",
    therapistSubtitle: "Klinische Klarheit ohne administrativen Overhead.",
    therapistPoints: [
      "Einheitlicher Client-Flow über Sitzungen und Assessments hinweg",
      "KI-generierte Zusammenfassungen vor Terminen",
      "Strukturierte Follow-up-Tools und geführte Aufgabenübergaben"
    ],
    techTitle: "Für sichere Care Operations",
    techSubtitle: "Sicher, rollenbasiert und vollständig nachvollziehbar.",
    techPoints: [
      "Sichere Authentifizierung",
      "Ende-zu-Ende-Verschlüsselung",
      "Rollenbasierte Zugriffe",
      "Audit-Logs",
      "Intelligente Benachrichtigungen"
    ],
    mobileShowcaseText:
      "Eine geführte Sequenz, die sich an die Nutzer:innen anpasst - nicht umgekehrt.",
    team: TEAM,
    securityPrimaryTitle: "Schutz der Datenbankebene",
    securityPrimaryPoints: [
      "Vollständige Datenträgerverschlüsselung (LUKS v2) auf physischer Speicherebene.",
      "Feldbasierte Verschlüsselung für sensible Daten auf Anwendungsebene.",
      "Isolierte Datenbankarchitektur ohne öffentliche Erreichbarkeit auf Servern in Deutschland."
    ],
    securitySecondaryTitle: "API- und Backend-Schutz",
    securitySecondaryPoints: [
      "JWT-basierte Authentifizierung für tokenisierte Zugriffskontrolle.",
      "Rate Limiting und Abuse Protection gegen Brute Force und Flooding.",
      "Individuelle Exception-Behandlung ohne Stacktrace-Leaks.",
      "CORS nur für freigegebene Produktionsdomains."
    ],
    securityHighlights: [
      ["Sicherheit der Echtzeitebene", "Nachrichtenraten-Kontrollen, Payload-Limits und automatische Beendigung missbräuchlicher Verbindungen."],
      ["WebRTC / TURN-Infrastruktur", "TLS 1.3, DTLS 1.2, starke Cipher Suites und isolierte Relay-Konfiguration."],
      ["Operative Härtung", "Isolierte Container, interne Netzwerke, Monitoring, Log-Aggregation, sichere Header, HTTPS und Hosting in Deutschland."]
    ],
    metrics: [
      ["Unser intern entwickeltes Bewertungsmodell", "Intern", "brain"],
      ["Strukturierte Scoring-Pipelines", "Scoring", "clock"],
      ["DeepSeek-Fallback-Reasoning und erweiterter Kontext", "DeepSeek", "shield"]
    ],
    aiTitle: "KI-Engine",
    aiSummary:
      "Die strukturierte diagnostische Ebene. Depressions-Scoring, geführte klinische Interviewlogik, kognitive Testmodule und strukturierte mentale Zustandsindikatoren auf Basis unseres proprietären Bewertungsmodells.",
    aiBullets: [
      "Liora - emotionale Support-Ebene",
      "Erkennung emotionaler Muster",
      "Kontextbewusster Gesprächsfluss",
      "Therapeutische Zusammenfassungen",
      "Krisensensible Signalweiterleitung"
    ],
    differenceA: [
      "Anders im Design",
      "Nicht nur ein Chatbot - Grace kombiniert strukturierte klinische Bewertung mit geführter emotionaler KI.",
      "Nicht nur ein Therapeut:innen-Verzeichnis - messbare Erkenntnisse beginnen vor Sitzungen und gehen danach weiter.",
      "Nicht nur Wellness-Content - Trainings sind direkt mit Assessments und Fortschrittsmessung verknüpft."
    ],
    differenceB: [
      "Anders in der Tiefe",
      "Klinische und emotionale Ebenen - die KI-Engine übernimmt Diagnostik und kognitive Tests, Liora unterstützt emotionale Bindung.",
      "Strukturierte Kontinuität - jede Aktion ist mit einem messbaren Versorgungspfad verbunden.",
      "Institutionelle Einsatzfähigkeit - einwilligungsbasierte Analysen unterstützen verantwortungsvolle Public-Health-Erkenntnisse.",
      "Trust-first-Architektur - Datenschutz und Governance sind in Workflows eingebaut."
    ],
    contactLine:
      "Bereit für Praxen, Wellness-Programme und strategische Partnerschaften.",
    email: "contact@gracee.app",
    secondaryEmail: "tariqalahmer@gracee.app",
    phone: "+963 968 058 784"
  }
} as const;
