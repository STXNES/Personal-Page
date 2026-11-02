export interface Project {
  id: string;
  name: string;
  tag: string;
  short: string;
  summary: string;
  bullets: string[];
  meta: {
    type: string;
    role: string;
    status: string;
    highlight: string;
    year: string;
  };
  overview: string;
  decisions: {
    title: string;
    body: string;
  }[];
  challenges: string[];
  stack: string[];
  github: string;
  demo?: string;
  image: string;
  badge?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  summary: string;
  bullets: string[];
  tags: string[];
}

export interface TechGroup {
  title: string;
  items: { name: string; level?: string }[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
  status: string;
  badge?: string;
  link?: string;
}

export interface LocaleContent {
  nav: {
    sections: string;
    work: string;
    experience: string;
    stack: string;
    certifications: string;
    about: string;
    contact: string;
  };
  hero: {
    role: string;
    titleLine1: string;
    titleHighlight: string;
    subtitle: string;
    ctaWork: string;
    ctaCv: string;
    systemStatus: string;
    systemReady: string;
  };
  work: {
    label: string;
    featuredTag: string;
    viewProject: string;
    viewDetails: string;
    detail: {
      back: string;
      overview: string;
      decisions: string;
      stack: string;
      challenges: string;
      info: string;
      type: string;
      role: string;
      status: string;
      year: string;
      highlight: string;
      repo: string;
      demo: string;
    };
    projects: Project[];
  };
  experience: {
    label: string;
    items: ExperienceItem[];
  };
  stack: {
    label: string;
    groups: TechGroup[];
  };
  certifications: {
    label: string;
    educationTitle: string;
    certsTitle: string;
    items: CertificationItem[];
    education: {
      degree: string;
      institution: string;
      status: string;
      period: string;
    }[];
  };
  about: {
    label: string;
    p1: string;
    p2: string;
    quote: string;
    stats: {
      value: string;
      label: string;
    }[];
  };
  playerCard: {
    statusText: string;
    viewProfile: string;
    quickInfo: string;
    location: string;
    locationVal: string;
    email: string;
    emailVal: string;
    phone: string;
    phoneVal: string;
    github: string;
    linkedin: string;
    downloadCv: string;
    close: string;
  };
  footer: {
    copyright: string;
    builtWith: string;
  };
}

export const portfolioData: { en: LocaleContent; es: LocaleContent } = {
  en: {
    nav: {
      sections: "SECTIONS",
      work: "Work",
      experience: "Experience",
      stack: "Stack",
      certifications: "Certifications",
      about: "About",
      contact: "Contact & CV",
    },
    hero: {
      role: "SYSTEMS ENGINEER · CLOUD & INFRASTRUCTURE · AGENTIC AI",
      titleLine1: "Engineering resilient infrastructure & agentic systems that",
      titleHighlight: "solve real-world problems.",
      subtitle:
        "Systems Engineering student with hands-on experience in enterprise infrastructure (Windows Server 2022, Active Directory, VMware, Linux) and applied AI automation (RAG pipelines, n8n). Background in 24/7 mission-critical operations under ITIL at Intel.",
      ctaWork: "View Selected Work",
      ctaCv: "Download CV",
      systemStatus: "SYSTEM STATUS",
      systemReady: "ALL SYSTEMS OPERATIONAL · READY TO ARCHITECT & AUTOMATE.",
    },
    work: {
      label: "SELECTED WORK",
      featuredTag: "FEATURED LAB & PRODUCT",
      viewProject: "View project",
      viewDetails: "View architectural details",
      detail: {
        back: "Back to projects",
        overview: "System Overview",
        decisions: "Key Architectural Decisions",
        stack: "Technology Stack",
        challenges: "Challenges & Engineering Solutions",
        info: "System Metadata",
        type: "Project Type",
        role: "My Role",
        status: "Deployment Status",
        year: "Year",
        highlight: "Core Highlight",
        repo: "GitHub Repository",
        demo: "Live Demonstration",
      },
      projects: [
        {
          id: "alura-agent",
          name: "Alura Agente Inteligente",
          tag: "RAG & AGENTIC AI",
          short: "Enterprise RAG Q&A agent for business documents with exact source citations.",
          summary:
            "RAG knowledge retrieval agent querying internal PDFs and CSVs in natural language with verifiable page and row citations, FAISS vector index, and Groq/Gemini orchestration.",
          bullets: [
            "Sub-15ms semantic search with CPU FAISS index and multi-model fallback (Groq Llama 3.3 & Gemini).",
            "Anti-hallucination citation engine tracing answers to exact document sections; containerized on OCI Compute.",
          ],
          meta: {
            type: "Enterprise AI Challenge",
            role: "AI & Fullstack Engineer (Solo)",
            status: "Production Ready / OCI Deployed",
            highlight: "FAISS · Exact Citations · OCI · Docker",
            year: "2026",
          },
          overview:
            "Developed for the Challenge Alura Agente (Alura Latam x Oracle Next Education). The system ingests corporate PDFs and CSV spreadsheets, slices them into semantic chunks, and indexes them in FAISS. Queries are synthesized through Groq Llama 3.3 and Google Gemini with strict page-level source citations.",
          decisions: [
            {
              title: "FAISS Vector Store for Speed & Privacy",
              body: "Delivers sub-15ms similarity search in CPU memory without cloud vector database costs, keeping company data strictly private.",
            },
            {
              title: "Strict Citation Architecture",
              body: "Preserves document metadata through token splitting, appending verified page/row citations to every generative answer.",
            },
            {
              title: "Resilient Multi-LLM Fallback",
              body: "Primary inference on Groq Llama 3.3 70B with automatic failover to Google Gemini 1.5 Pro.",
            },
          ],
          challenges: [
            "Preserving tabular CSV structures across token chunking boundaries; resolved with custom structured serializing.",
          ],
          stack: [
            "Python 3.10+",
            "LangChain",
            "FAISS Vector DB",
            "Groq (Llama 3.3)",
            "Google Gemini",
            "Docker",
            "Oracle Cloud (OCI)",
          ],
          github: "https://github.com/STXNES/ChallengeAluraAgent",
          image: "/images/projects/alura-agent.svg",
          badge: "/images/badge-rag-agente-ia.png",
        },
        {
          id: "hr-assistant",
          name: "HR AI Process Automation Assistant",
          tag: "WORKFLOW AUTOMATION & RAG",
          short: "Automated HR assistant orchestrating n8n workflows, Cohere embeddings, and Telegram.",
          summary:
            "Automated HR pipeline linking n8n workflows with Cohere embeddings, serverless Neon PostgreSQL, and an interactive Telegram bot for 24/7 employee self-service.",
          bullets: [
            "Event-driven workflow execution on n8n with automated salary certificate generation and digital signing.",
            "Contextual RAG pipeline with Cohere multilingual embeddings and decoupled state logging in Neon PostgreSQL.",
          ],
          meta: {
            type: "ONE Enterprise Automation",
            role: "Automation Developer",
            status: "Functional Workflow / Deployed",
            highlight: "n8n · Cohere · Telegram Bot · Neon DB",
            year: "2026",
          },
          overview:
            "Developed under the Oracle Next Education (ONE) AI immersion. Employees query company policies, verify leave balances, or generate PDF salary certificates directly through Telegram. The n8n engine authenticates against Neon PostgreSQL and performs RAG queries via Cohere.",
          decisions: [
            {
              title: "n8n Event-Driven Architecture",
              body: "Modular workflow engine connecting webhook triggers, LLM calls, and document generation without monolithic complexity.",
            },
            {
              title: "Cohere Multilingual Embeddings",
              body: "High-accuracy semantic retrieval for corporate Spanish policies and labor documentation.",
            },
          ],
          challenges: [
            "Ensuring transactional consistency between Telegram bot confirmations and asynchronous PDF certificate compilation.",
          ],
          stack: [
            "n8n Workflow Engine",
            "Cohere Embeddings",
            "PostgreSQL (Neon)",
            "Telegram Bot API",
            "REST APIs",
            "Python",
          ],
          github: "https://github.com/STXNES",
          image: "/images/projects/hr-assistant.svg",
        },
        {
          id: "ws22-lab",
          name: "Windows Server 2022 Enterprise Home Lab",
          tag: "ENTERPRISE INFRASTRUCTURE & AD DS",
          short: "Virtualized enterprise Active Directory domain infrastructure in VMware Workstation Pro.",
          summary:
            "Client-server enterprise lab virtualized in VMware Workstation Pro featuring Windows Server 2022 as Primary Domain Controller (AD DS, DNS, DHCP), departmental OUs (AGDLP), and baseline security GPOs.",
          bullets: [
            "Dual-VM topology on isolated virtual network (VMnet2) with AD DS, integrated DNS, and DHCP scope.",
            "Tiered OU design enforcing baseline GPOs: 14-char password complexity, BitLocker, and USB lockout.",
          ],
          meta: {
            type: "Enterprise Infrastructure Lab",
            role: "Systems Administrator",
            status: "Fully Configured & Documented",
            highlight: "Windows Server 2022 · AD DS · GPO · VMware",
            year: "2026",
          },
          overview:
            "Replicates real corporate IT infrastructure. Hosted on VMware Workstation Pro, the environment provisions a Windows Server 2022 Domain Controller (`CORP.LOCAL`) managing a Windows 11 Enterprise workstation with granular group policies and Kerberos authentication.",
          decisions: [
            {
              title: "Isolated Virtual Network Architecture",
              body: "Segregated VMnet testing realistic DHCP lease distribution, reverse DNS lookups, and broadcast containment.",
            },
            {
              title: "Role-Based Access Control via AGDLP",
              body: "Structured OU hierarchy isolating Tier-1 administrative accounts from standard business department workstations.",
            },
          ],
          challenges: [
            "Configuring PTR reverse lookup zones and binding orders to eliminate Kerberos authentication delays during domain join.",
          ],
          stack: [
            "Windows Server 2022",
            "Active Directory (AD DS)",
            "Group Policy (GPOs)",
            "VMware Workstation Pro",
            "DNS / DHCP",
            "PowerShell",
          ],
          github: "https://github.com/STXNES/Windows-Server-2022-Active-Directory-Home-Lab",
          image: "/images/projects/ws22-lab.svg",
        },
        {
          id: "linux-infrastructure",
          name: "Enterprise Linux Hardened Server & Services",
          tag: "LINUX ADMINISTRATION & HARDENING",
          short: "Hardened Debian/RHEL enterprise server with systemd orchestration, fail2ban, and Nginx.",
          summary:
            "Production-grade Linux server configured under CIS security benchmarks: ed25519 SSH keys, fail2ban jails, UFW firewall, systemd sandboxing, Nginx reverse proxy, and automated encrypted Bash backups.",
          bullets: [
            "Hardened security stance: root login disabled, fail2ban intrusion prevention, UFW default deny, and Nginx TLS 1.3.",
            "Automated Bash backup pipeline with zstd compression, GPG asymmetric encryption, and syslog integrity auditing.",
          ],
          meta: {
            type: "Enterprise Linux Lab",
            role: "Linux Systems Engineer",
            status: "Documented & Automated",
            highlight: "Debian/RHEL · Hardening · systemd · Bash",
            year: "2026",
          },
          overview:
            "Reference architecture for production Linux environments. Every daemon is sandboxed via systemd (`ProtectSystem=full`). Automated cron jobs execute Bash scripts that snapshot file systems, compress with zstd, and encrypt with GPG.",
          decisions: [
            {
              title: "CIS-Aligned Defense in Depth",
              body: "Enforced ed25519 cryptographic keys, disabled password auth, and tuned sysctl to mitigate network flood attacks.",
            },
            {
              title: "Encrypted Backup Automation",
              body: "Modular shell scripts managing automated daily snapshots with GPG encryption and SHA256 integrity verification.",
            },
          ],
          challenges: [
            "Balancing restrictive systemd sandboxing rules with daemon access to temporary socket paths.",
          ],
          stack: [
            "Debian / RHEL",
            "Bash Scripting",
            "systemd",
            "Nginx",
            "UFW / Fail2ban",
            "GPG / zstd",
          ],
          github: "https://github.com/STXNES/linux-enterprise-infrastructure",
          image: "/images/projects/linux-infrastructure.svg",
        },
      ],
    },
    experience: {
      label: "EXPERIENCE",
      items: [
        {
          role: "Technician Operator",
          company: "Intel Corporation, Costa Rica",
          period: "2023 – 2025",
          summary:
            "High-precision server chipset manufacturing operations in a 24/7 mission-critical cleanroom environment under strict ITIL and SOP compliance.",
          bullets: [
            "Operated TSX-certified die-attach equipment for server chipsets — a high-precision process previously restricted to L2/L3 technicians — under strict thermal, vacuum, and gas parameters.",
            "Monitored critical parameters via Intel proprietary process-control software, diagnosing log/graph anomalies before escalating to downtime or yield loss.",
            "Led shift passdowns, machine setups, and X-ray verification across 24/7 rotating night shifts (12h 4x3), maintaining precise incident documentation under strict SLAs.",
          ],
          tags: ["Intel TSX", "SOP / SLA Compliance", "Process-Control", "ITIL-Aligned", "24/7 Operations", "Root-Cause Analysis"],
        },
      ],
    },
    stack: {
      label: "TECH STACK & COMPETENCIES",
      groups: [
        {
          title: "INFRASTRUCTURE & SERVERS",
          items: [
            { name: "Windows Server 2022" },
            { name: "Active Directory (AD DS)" },
            { name: "Group Policy (GPOs / OUs)" },
            { name: "DNS & DHCP Management" },
            { name: "Linux Administration (Debian, RHEL)" },
            { name: "Networking (CCNA)" },
          ],
        },
        {
          title: "VIRTUALIZATION & CLOUD",
          items: [
            { name: "VMware Workstation Pro / ESXi" },
            { name: "Hyper-V Virtualization" },
            { name: "Microsoft Azure (AZ-900)" },
            { name: "Oracle Cloud (OCI Compute)" },
            { name: "Google Cloud Foundations" },
          ],
        },
        {
          title: "APPLIED AI & AUTOMATION",
          items: [
            { name: "RAG (Retrieval-Augmented Generation)" },
            { name: "LangChain & LangGraph" },
            { name: "Agentic AI Architecture" },
            { name: "n8n Workflow Automation" },
            { name: "Cohere & FAISS Vector Stores" },
            { name: "Groq & Gemini APIs" },
          ],
        },
        {
          title: "IDENTITY & FRAMEWORKS",
          items: [
            { name: "Microsoft Intune (MD-102)" },
            { name: "Microsoft Entra ID (SC-300)" },
            { name: "Microsoft 365 Administration" },
            { name: "ITIL & SOP Compliance" },
            { name: "Incident & SLA Management" },
            { name: "Root Cause Troubleshooting" },
          ],
        },
        {
          title: "SCRIPTING & TOOLS",
          items: [
            { name: "Python (LangChain, FastAPI)" },
            { name: "PowerShell Scripting" },
            { name: "Bash Automation" },
            { name: "PostgreSQL & Neon DB" },
            { name: "Docker & Compose" },
            { name: "Git & GitHub" },
          ],
        },
      ],
    },
    certifications: {
      label: "EDUCATION & CERTIFICATIONS",
      educationTitle: "ACADEMIC EDUCATION",
      certsTitle: "CERTIFICATIONS & CREDENTIALS",
      education: [
        {
          degree: "Bachelor's Degree in Systems Engineering",
          institution: "Universidad Fidélitas, Costa Rica",
          status: "In Progress",
          period: "Expected 2029",
        },
        {
          degree: "Web Development Technician",
          institution: "Universidad Fidélitas, Costa Rica",
          status: "Degree Awarded",
          period: "Completed",
        },
      ],
      items: [
        {
          title: "Tech AI Builder (5 Complete Formations)",
          issuer: "ONE AI FOR TECH LATAM (Alura Latam x Oracle)",
          year: "2026",
          status: "Completed",
          badge: "/images/badge-rag-agente-ia.png",
        },
        {
          title: "SC-300: Microsoft Identity & Access Administrator",
          issuer: "Microsoft Certified",
          year: "2026",
          status: "Exam Scheduled",
        },
        {
          title: "MD-102: Microsoft Endpoint Administrator",
          issuer: "Microsoft Certified",
          year: "2026",
          status: "Exam Scheduled",
        },
        {
          title: "CCNA: Introduction to Networks",
          issuer: "Cisco Networking Academy",
          year: "Completed",
          status: "Completed",
        },
        {
          title: "CompTIA A+ Professional Preparation",
          issuer: "Coursera",
          year: "Completed",
          status: "Completed",
        },
        {
          title: "Microsoft Azure AZ-900: Azure Fundamentals",
          issuer: "Microsoft / DataCamp",
          year: "2026",
          status: "In Progress",
        },
      ],
    },
    about: {
      label: "ABOUT ME",
      p1: "I am an IT and Systems Engineering professional based in Costa Rica, combining foundational enterprise infrastructure experience (Windows Server, VMware, Active Directory, Linux, Azure) with applied AI engineering (RAG pipelines and n8n workflow automation).",
      p2: "My two years at Intel Corporation operating TSX cleanroom machinery under 24/7 shifts instilled disciplined execution, zero-assumption troubleshooting, and adherence to ITIL frameworks. Currently advancing my Systems Engineering degree at Universidad Fidélitas.",
      quote:
        "I don't just maintain infrastructure. I design resilient architectures that eliminate operational friction and scale reliably through automation and AI.",
      stats: [
        { value: "24/7", label: "Mission-Critical Production Experience" },
        { value: "5+", label: "AI Specializations & Cloud Certifications" },
        { value: "100%", label: "Committed to Resilient Engineering" },
      ],
    },
    playerCard: {
      statusText: "AVAILABLE FOR SYSTEMS & AI ROLES",
      viewProfile: "Open Contact & Dossier",
      quickInfo: "Systems Engineer · Cloud Infrastructure & AI Specialist",
      location: "Location",
      locationVal: "Naranjo, Alajuela, Costa Rica",
      email: "Email",
      emailVal: "axelry2402@gmail.com",
      phone: "Phone / WhatsApp",
      phoneVal: "+506 6359-9128",
      github: "GitHub Profile",
      linkedin: "LinkedIn Profile",
      downloadCv: "Download Full Curriculum Vitae (PDF)",
      close: "Close Dossier",
    },
    footer: {
      copyright: "© 2026 Axell Rojas. Systems Engineering & AI Architect.",
      builtWith: "Astro · Tailwind CSS · High-Tech Cyber-HUD Aesthetic",
    },
  },
  es: {
    nav: {
      sections: "SECCIONES",
      work: "Proyectos",
      experience: "Experiencia",
      stack: "Habilidades",
      certifications: "Certificaciones",
      about: "Sobre Mí",
      contact: "Contacto & CV",
    },
    hero: {
      role: "INGENIERO DE SISTEMAS · INFRAESTRUCTURA & CLOUD · IA AGÉNTICA",
      titleLine1: "Ingeniería de infraestructura resiliente y sistemas agénticos que",
      titleHighlight: "resuelven problemas del mundo real.",
      subtitle:
        "Estudiante de Ingeniería en Sistemas con experiencia práctica en infraestructura empresarial (Windows Server 2022, Active Directory, VMware, Linux) y automatización con IA (pipelines RAG, n8n). Formado en operaciones críticas 24/7 bajo estándares ITIL en Intel Corporation.",
      ctaWork: "Ver Proyectos Seleccionados",
      ctaCv: "Descargar CV",
      systemStatus: "ESTADO DEL SISTEMA",
      systemReady: "TODOS LOS SISTEMAS OPERACIONALES · LISTO PARA ARQUITECTAR Y AUTOMATIZAR.",
    },
    work: {
      label: "PROYECTOS SELECCIONADOS",
      featuredTag: "LAB & PRODUCTO DESTACADO",
      viewProject: "Ver proyecto",
      viewDetails: "Ver detalles de arquitectura",
      detail: {
        back: "Volver a proyectos",
        overview: "Descripción del Sistema",
        decisions: "Decisiones Clave de Arquitectura",
        stack: "Stack Tecnológico",
        challenges: "Desafíos y Soluciones de Ingeniería",
        info: "Metadatos del Sistema",
        type: "Tipo de Proyecto",
        role: "Mi Rol",
        status: "Estado de Despliegue",
        year: "Año",
        highlight: "Aspecto Destacado",
        repo: "Repositorio GitHub",
        demo: "Demostración en Vivo",
      },
      projects: [
        {
          id: "alura-agent",
          name: "Alura Agente Inteligente",
          tag: "RAG & IA AGÉNTICA",
          short: "Agente RAG empresarial para consulta de documentación interna con citas exactas.",
          summary:
            "Asistente RAG para consulta de PDFs normativos e inventarios CSV en lenguaje natural, con índice vectorial FAISS y orquestación multi-modelo Groq (Llama 3.3) y Gemini.",
          bullets: [
            "Búsqueda semántica FAISS sub-15ms con citas exactas por página y fila; despliegue contenerizado en OCI Compute.",
            "Arquitectura anti-alucinaciones con metadatos preservados y fallback resiliente entre modelos de lenguaje.",
          ],
          meta: {
            type: "Challenge Empresarial de IA",
            role: "Ingeniero de IA & Fullstack (Solo)",
            status: "Listo para Producción / Desplegado OCI",
            highlight: "FAISS · Citas Exactas · OCI · Docker",
            year: "2026",
          },
          overview:
            "Desarrollado para el Challenge Alura Agente de Alura Latam x Oracle Next Education. Fragmenta documentación interna en chunks semánticos e indexa en FAISS CPU, consultando Groq Llama 3.3 y Gemini con citas obligatorias de número de página.",
          decisions: [
            {
              title: "FAISS para Privacidad y Velocidad",
              body: "Búsqueda vectorial en memoria CPU con latencias inferiores a 15ms sin costos de nubes vectoriales de terceros.",
            },
            {
              title: "Trazabilidad de Citas",
              body: "Preservación estricta de página y fila para auditoría y cumplimiento normativo.",
            },
          ],
          challenges: [
            "Mapeo de datos tabulares en CSV sin pérdida semántica de columnas durante el chunking de tokens.",
          ],
          stack: [
            "Python 3.10+",
            "LangChain",
            "FAISS Vector DB",
            "Groq (Llama 3.3)",
            "Google Gemini",
            "Docker",
            "Oracle Cloud (OCI)",
          ],
          github: "https://github.com/STXNES/ChallengeAluraAgent",
          image: "/images/projects/alura-agent.svg",
          badge: "/images/badge-rag-agente-ia.png",
        },
        {
          id: "hr-assistant",
          name: "HR AI Process Automation Assistant",
          tag: "AUTOMATIZACIÓN & RAG",
          short: "Asistente automatizado de RRHH con n8n, embeddings Cohere y bot de Telegram.",
          summary:
            "Pipeline de automatización con n8n, embeddings multilingües de Cohere, base de datos serverless Neon PostgreSQL y bot de Telegram para autoservicio de colaboradores.",
          bullets: [
            "Flujos por eventos en n8n con generación automatizada de constancias salariales en PDF con firma digital.",
            "Pipeline RAG con embeddings de Cohere para consultas de políticas y registro de auditoría en Neon PostgreSQL.",
          ],
          meta: {
            type: "ONE Enterprise Automation",
            role: "Desarrollador de Automatización",
            status: "Flujo Funcional / Desplegado",
            highlight: "n8n · Cohere · Telegram Bot · Neon DB",
            year: "2026",
          },
          overview:
            "Desarrollado en la inmersión de IA de Oracle Next Education (ONE). Los colaboradores consultan políticas y solicitan constancias por Telegram, procesadas por n8n con validación en PostgreSQL y embeddings Cohere.",
          decisions: [
            {
              title: "n8n como Núcleo de Automatización",
              body: "Integración modular visual entre webhooks, consultas de base de datos y modelos de lenguaje.",
            },
            {
              title: "Embeddings Multilingües de Cohere",
              body: "Precisión semántica para terminología laboral y artículos de políticas corporativas en español.",
            },
          ],
          challenges: [
            "Sincronización asíncrona entre la interacción del bot de Telegram y la generación del certificado PDF.",
          ],
          stack: [
            "n8n Workflow Engine",
            "Cohere Embeddings",
            "PostgreSQL (Neon)",
            "Telegram Bot API",
            "REST APIs",
            "Python",
          ],
          github: "https://github.com/STXNES",
          image: "/images/projects/hr-assistant.svg",
        },
        {
          id: "ws22-lab",
          name: "Windows Server 2022 Enterprise Home Lab",
          tag: "INFRAESTRUCTURA & ACTIVE DIRECTORY",
          short: "Infraestructura de dominio Active Directory empresarial virtualizada en VMware Workstation.",
          summary:
            "Entorno empresarial en VMware Workstation Pro con Windows Server 2022 como Controlador de Dominio Principal (AD DS, DNS, DHCP), estaciones cliente Windows y gobierno centralizado mediante GPOs.",
          bullets: [
            "Topología cliente-servidor en red aislada (VMnet2) con AD DS, zonas DNS directa/inversa y ámbito DHCP.",
            "Diseño de OUs por departamentos (AGDLP) y directivas GPO (BitLocker, contraseñas de 14 chars, bloqueo USB).",
          ],
          meta: {
            type: "Laboratorio de Infraestructura TI",
            role: "Administrador de Sistemas",
            status: "Configurado y Documentado",
            highlight: "Windows Server 2022 · AD DS · GPO · VMware",
            year: "2026",
          },
          overview:
            "Laboratorio en VMware Workstation Pro con Windows Server 2022 Datacenter como DC del dominio `CORP.LOCAL` y estación Windows 11 Enterprise en red privada, abarcando aprovisionamiento y Kerberos.",
          decisions: [
            {
              title: "Red Virtual Aislada (VMnet2)",
              body: "Contención de tráfico broadcast, pruebas de asignación DHCP y validación DNS independiente del anfitrión.",
            },
            {
              title: "Modelo de OUs AGDLP",
              body: "Aislamiento estricto de cuentas de administración Tier-1 respecto a puestos de trabajo departamentales.",
            },
          ],
          challenges: [
            "Configuración de zonas de búsqueda inversa PTR para optimizar tiempos de negociación en la unión al dominio.",
          ],
          stack: [
            "Windows Server 2022",
            "Active Directory (AD DS)",
            "Group Policy (GPOs)",
            "VMware Workstation Pro",
            "DNS / DHCP",
            "PowerShell",
          ],
          github: "https://github.com/STXNES/Windows-Server-2022-Active-Directory-Home-Lab",
          image: "/images/projects/ws22-lab.svg",
        },
        {
          id: "linux-infrastructure",
          name: "Enterprise Linux Hardened Server & Services",
          tag: "ADMINISTRACIÓN LINUX & HARDENING",
          short: "Servidor empresarial Debian/RHEL robustecido con systemd, fail2ban y proxy inverso Nginx.",
          summary:
            "Servidor Linux de producción configurado bajo estándares CIS: llaves SSH ed25519, prevención de intrusiones con fail2ban, firewall UFW, proxy inverso Nginx TLS 1.3 y respaldos en Bash con GPG y zstd.",
          bullets: [
            "Fortificación CIS: SSH solo por llaves ed25519, 3 cárceles fail2ban, firewall UFW denegación y Nginx TLS 1.3.",
            "Pipeline en Bash para respaldos automáticos con compresión zstd, cifrado asimétrico GPG y logs SHA256.",
          ],
          meta: {
            type: "Laboratorio Linux Empresarial",
            role: "Ingeniero de Sistemas Linux",
            status: "Documentado y Automatizado",
            highlight: "Debian/RHEL · Hardening · systemd · Bash",
            year: "2026",
          },
          overview:
            "Arquitectura de referencia para servidores Linux en producción con servicios aislados en sandbox systemd (`ProtectSystem=full`) y mantenimiento automatizado mediante scripts en Bash.",
          decisions: [
            {
              title: "Hardening CIS en Capas",
              body: "Deshabilitación de acceso root, autenticación ed25519 obligatoria y ajuste de sysctl contra ataques de red.",
            },
            {
              title: "Respaldos Cifrados con GPG",
              body: "Scripts modulares que capturan volcados, comprimen con zstd y cifran asimétricamente con verificación hash.",
            },
          ],
          challenges: [
            "Definición de directivas de sandbox de systemd compatibles con sockets de comunicación locales.",
          ],
          stack: [
            "Debian / RHEL",
            "Bash Scripting",
            "systemd",
            "Nginx",
            "UFW / Fail2ban",
            "GPG / zstd",
          ],
          github: "https://github.com/STXNES/linux-enterprise-infrastructure",
          image: "/images/projects/linux-infrastructure.svg",
        },
      ],
    },
    experience: {
      label: "EXPERIENCIA PROFESIONAL",
      items: [
        {
          role: "Technician Operator",
          company: "Intel Corporation, Costa Rica",
          period: "2023 – 2025",
          summary:
            "Operación de equipos de alta precisión en producción de chipsets para servidores en sala limpia 24/7 bajo estricto cumplimiento de SOPs e ITIL.",
          bullets: [
            "Operé equipo die-attach con certificación TSX para chipsets de servidores — proceso de alta precisión restringido a técnicos L2/L3 —, uniendo matrices doradas bajo parámetros térmicos, de vacío y gases.",
            "Monitoreé parámetros críticos en software de control de procesos de Intel, anticipando anomalías en gráficos y logs para evitar pérdidas de producción dentro de ventanas SLA.",
            "Lideré traspasos de turno, configuraciones de máquina, calibraciones y verificación por rayos X en régimen rotativo 24/7 (turnos de 12h 4x3), manteniendo documentación precisa de incidentes.",
          ],
          tags: ["Intel TSX", "Cumplimiento SOP / SLA", "Control de Procesos", "Alineado a ITIL", "Operaciones 24/7", "Análisis Causa Raíz"],
        },
      ],
    },
    stack: {
      label: "STACK TECNOLÓGICO Y HABILIDADES",
      groups: [
        {
          title: "INFRAESTRUCTURA & SERVIDORES",
          items: [
            { name: "Windows Server 2022" },
            { name: "Active Directory (AD DS)" },
            { name: "Group Policy (GPOs / OUs)" },
            { name: "Administración DNS & DHCP" },
            { name: "Administración Linux (Debian, RHEL)" },
            { name: "Fundamentos de Redes (CCNA)" },
          ],
        },
        {
          title: "VIRTUALIZACIÓN & CLOUD",
          items: [
            { name: "VMware Workstation Pro / ESXi" },
            { name: "Virtualización Hyper-V" },
            { name: "Microsoft Azure (AZ-900)" },
            { name: "Oracle Cloud (OCI Compute)" },
            { name: "Google Cloud Foundations" },
          ],
        },
        {
          title: "IA APLICADA & AUTOMATIZACIÓN",
          items: [
            { name: "RAG (Retrieval-Augmented Generation)" },
            { name: "LangChain & LangGraph" },
            { name: "Arquitectura de IA Agéntica" },
            { name: "Automatización con n8n" },
            { name: "Bases Vectoriales Cohere & FAISS" },
            { name: "APIs Groq & Gemini" },
          ],
        },
        {
          title: "IDENTIDAD & MARCOS",
          items: [
            { name: "Microsoft Intune (MD-102)" },
            { name: "Microsoft Entra ID (SC-300)" },
            { name: "Administración Microsoft 365" },
            { name: "Alineación a ITIL & SOPs" },
            { name: "Gestión de Incidentes & SLAs" },
            { name: "Solución de Problemas Causa Raíz" },
          ],
        },
        {
          title: "SCRIPTING & DEV",
          items: [
            { name: "Python (LangChain, FastAPI)" },
            { name: "PowerShell Scripting" },
            { name: "Bash Automation" },
            { name: "PostgreSQL & Neon DB" },
            { name: "Docker & Compose" },
            { name: "Control Git & GitHub" },
          ],
        },
      ],
    },
    certifications: {
      label: "EDUCACIÓN Y CERTIFICACIONES",
      educationTitle: "FORMACIÓN ACADÉMICA",
      certsTitle: "CERTIFICACIONES Y CREDENCIALES",
      education: [
        {
          degree: "Bachillerato en Ingeniería en Sistemas",
          institution: "Universidad Fidélitas, Costa Rica",
          status: "En Curso",
          period: "Esperado 2029",
        },
        {
          degree: "Técnico en Desarrollo Web",
          institution: "Universidad Fidélitas, Costa Rica",
          status: "Título Obtenido",
          period: "Completado",
        },
      ],
      items: [
        {
          title: "Tech AI Builder (5 Formaciones Completadas)",
          issuer: "ONE AI FOR TECH LATAM (Alura Latam x Oracle)",
          year: "2026",
          status: "Completado",
          badge: "/images/badge-rag-agente-ia.png",
        },
        {
          title: "SC-300: Microsoft Identity & Access Administrator",
          issuer: "Microsoft Certified",
          year: "2026",
          status: "Examen Programado",
        },
        {
          title: "MD-102: Microsoft Endpoint Administrator",
          issuer: "Microsoft Certified",
          year: "2026",
          status: "Examen Programado",
        },
        {
          title: "CCNA: Introducción a Redes",
          issuer: "Cisco Networking Academy",
          year: "Completado",
          status: "Completado",
        },
        {
          title: "CompTIA A+ Preparación Profesional",
          issuer: "Coursera",
          year: "Completado",
          status: "Completado",
        },
        {
          title: "Microsoft Azure AZ-900: Azure Fundamentals",
          issuer: "Microsoft / DataCamp",
          year: "2026",
          status: "En Progreso",
        },
      ],
    },
    about: {
      label: "SOBRE MÍ",
      p1: "Soy un profesional en Sistemas e Infraestructura de TI en Costa Rica. Combino una sólida base técnica en administración corporativa (Windows Server, VMware, Active Directory, Linux, Azure) con ingeniería de IA aplicada (pipelines RAG y automatización con n8n).",
      p2: "Mi experiencia de dos años en Intel Corporation operando maquinaria TSX en régimen rotativo 24/7 me dio disciplina operativa, rigor metódico y apego a marcos ITIL. Actualmente curso el Bachillerato en Ingeniería en Sistemas en la Universidad Fidélitas para diseñar arquitecturas resilientes y sistemas agénticos escalables.",
      quote:
        "No me limito a mantener infraestructura. Diseño arquitecturas resilientes que eliminan la fricción operativa y escalan con confiabilidad mediante automatización e IA.",
      stats: [
        { value: "24/7", label: "Experiencia en Producción Crítica" },
        { value: "5+", label: "Especializaciones en IA & Cloud" },
        { value: "100%", label: "Enfocado en Soluciones Resilientes" },
      ],
    },
    playerCard: {
      statusText: "DISPONIBLE PARA ROLES DE SISTEMAS & IA",
      viewProfile: "Ver Ficha de Contacto & CV",
      quickInfo: "Ingeniero de Sistemas · Infraestructura Cloud & Especialista en IA",
      location: "Ubicación",
      locationVal: "Naranjo, Alajuela, Costa Rica",
      email: "Correo Electrónico",
      emailVal: "axelry2402@gmail.com",
      phone: "Teléfono / WhatsApp",
      phoneVal: "+506 6359-9128",
      github: "Perfil de GitHub",
      linkedin: "Perfil de LinkedIn",
      downloadCv: "Descargar Currículum Vitae Completo (PDF)",
      close: "Cerrar Ficha",
    },
    footer: {
      copyright: "© 2026 Axell Rojas. Sistemas & Automatización con IA.",
      builtWith: "Astro · Tailwind CSS · Estética Cyber-HUD de Alta Tecnología",
    },
  },
};
