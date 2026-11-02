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
    p3: string;
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
        "IT and Systems Engineering professional combining hands-on enterprise infrastructure experience — Windows Server 2022, Active Directory, VMware ESXi, Linux administration, and Microsoft 365/Azure — with applied AI engineering (RAG pipelines, LangChain, n8n workflow automation). Proven in 24/7 mission-critical operations under strict ITIL and SOP compliance at Intel.",
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
            "A high-precision Retrieval-Augmented Generation (RAG) assistant designed for enterprise knowledge retrieval. It allows users to query internal documentation (PDFs, policies, CSV inventories) in natural language, producing validated responses backed by exact document and page/row citations.",
          bullets: [
            "Semantic ingestion pipeline with FAISS vector indexing for sub-15ms similarity search.",
            "Anti-hallucination citation engine pinning answers to specific PDF pages and CSV records.",
            "Multi-LLM provider orchestration (Groq Llama 3.3 70B, Google Gemini, OpenAI) with automatic fallback.",
            "Containerized with Docker & Docker Compose and deployed onto Oracle Cloud Infrastructure (OCI Compute).",
          ],
          meta: {
            type: "Enterprise AI Challenge",
            role: "AI & Fullstack Engineer (Solo)",
            status: "Production Ready / OCI Deployed",
            highlight: "FAISS · Exact Citations · OCI · Docker",
            year: "2026",
          },
          overview:
            "Developed for the Challenge Alura Agente (Alura Latam x Oracle Next Education), this application solves a recurring enterprise pain point: employees losing hours searching across lengthy internal manuals and spreadsheets. Built with LangChain and FAISS, the system slices documents into semantic chunks, generates dense vector representations, and surfaces relevant fragments upon query. Groq's high-throughput Llama 3.3 70B and Google Gemini synthesize authoritative answers while strictly enforcing source attribution.",
          decisions: [
            {
              title: "FAISS Vector Store for Speed and Privacy",
              body: "Adopted FAISS (Facebook AI Similarity Search) running directly in CPU RAM. It delivers sub-15ms similarity queries without external vector cloud costs, keeping internal sensitive business documents fully within the private deployment container.",
            },
            {
              title: "Strict Source Citation Architecture",
              body: "Engineered metadata preservation throughout the RecursiveCharacterTextSplitter chunking process. Every vector chunk carries original filename, header path, and page number, enabling verifiable, zero-hallucination footnotes for compliance.",
            },
            {
              title: "Multi-Model Fallback Layer",
              body: "Configured runtime resilience with Groq (ultra-low inference latency) as primary, Gemini 1.5/2.0 as contextual backup, and a graceful degraded fallback displaying verified text passages directly if API limits are triggered.",
            },
            {
              title: "OCI Compute & Docker Isolation",
              body: "Packaged the entire runtime with Python 3.10, FastAPI, and Streamlit into lightweight Docker containers, orchestrating environment variables and volumes for OCI Compute cloud deployment.",
            },
          ],
          challenges: [
            "Parsing heterogeneous table structures from CSV sheets without losing column headers during token chunking; solved via custom tabular text serializers.",
            "Mitigating context window overflow while querying multiple manuals simultaneously; resolved through cross-encoder reranking.",
          ],
          stack: [
            "Python 3.10+",
            "LangChain",
            "FAISS Vector DB",
            "Groq API (Llama 3.3)",
            "Google Gemini",
            "FastAPI",
            "Streamlit",
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
            "An enterprise automation pipeline that combines the n8n workflow engine with a Retrieval-Augmented Generation (RAG) agent. It processes employee requests, generates salary certificates, queries internal policies via Cohere multilingual embeddings, and delivers real-time conversational assistance over Telegram, backed by Neon PostgreSQL.",
          bullets: [
            "Event-driven workflow orchestration built on self-hosted n8n nodes and REST webhooks.",
            "Contextual RAG pipeline leveraging Cohere embeddings for nuanced Spanish HR policy queries.",
            "Serverless PostgreSQL (Neon) database integration for audit logs, employee verification, and state storage.",
            "Interactive Telegram bot interface allowing frictionless 24/7 self-service for distributed staff.",
          ],
          meta: {
            type: "ONE Enterprise Automation",
            role: "Automation & Systems Developer",
            status: "Functional Workflow / Deployed",
            highlight: "n8n · Cohere · Telegram Bot · Neon DB",
            year: "2026",
          },
          overview:
            "Developed under the Oracle Next Education (ONE) AI immersion, this assistant eliminates manual HR bottlenecks. By linking a Telegram bot interface directly to an n8n automated workflow engine, employees can instantly ask policy questions, query their leave balance, or request formal salary letters. The workflow verifies employee identity against a Neon PostgreSQL database, triggers Cohere multilingual embeddings to retrieve policy clauses, and synthesizes accurate replies or PDF certificates on the fly.",
          decisions: [
            {
              title: "n8n as Visual Event-Driven Hub",
              body: "Selected n8n for its low-friction node architecture, allowing rapid iteration of webhook listeners, payload transformations, conditional routing, and automated retry mechanisms without monolithic code overhead.",
            },
            {
              title: "Cohere Multilingual Embeddings",
              body: "Utilized Cohere's multilingual embedding models tailored for Spanish corporate jargon, significantly improving semantic match quality for labor code and benefits terminology.",
            },
            {
              title: "State & Audit Decoupling in Neon PostgreSQL",
              body: "Separated conversational state and operational execution logs into a serverless Neon PostgreSQL cluster, enabling immutable audit trails for compliance and HR auditability.",
            },
            {
              title: "Telegram Bot as Zero-Barrier Endpoint",
              body: "Deployed the client interface via Telegram bot webhooks, providing immediate mobile access for field operators without requiring dedicated app installations or enterprise VPN setups.",
            },
          ],
          challenges: [
            "Managing rate limits and payload size between Telegram webhook retries and LLM token limits; implemented an async queuing and acknowledgment node pattern.",
            "Guaranteeing data privacy for employee identification records before passing prompts to external generative models.",
          ],
          stack: [
            "n8n Workflow Engine",
            "Cohere Embeddings",
            "PostgreSQL (Neon)",
            "Telegram Bot API",
            "REST APIs",
            "LangChain",
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
            "A comprehensive enterprise client-server infrastructure virtualized in VMware Workstation Pro. Deploys Windows Server 2022 as Primary Domain Controller (AD DS, DNS, DHCP) and Windows Enterprise clients on an isolated virtual network, establishing centralized governance with custom OUs, GPOs, and least-privilege security access.",
          bullets: [
            "Provisioned and sized dual virtual machine architecture simulating enterprise enterprise topology.",
            "Promoted DC01 to Active Directory Domain Controller with integrated forward/reverse DNS and DHCP scope.",
            "Designed departmental Organizational Units (OUs) and security groups following the AGDLP model.",
            "Engineered Group Policy Objects (GPOs) for BitLocker enforcement, password complexity, and USB lockdown.",
          ],
          meta: {
            type: "Enterprise Infrastructure Lab",
            role: "Systems Administrator",
            status: "Fully Configured & Documented",
            highlight: "Windows Server 2022 · AD DS · GPO · VMware",
            year: "2026",
          },
          overview:
            "Constructed to replicate enterprise IT operations, this home lab serves as a live proving ground for systems administration. Hosted on VMware Workstation Pro, the lab provisions a Windows Server 2022 Datacenter instance configured as Domain Controller and DNS/DHCP master for the `CORP.LOCAL` domain, alongside a domain-joined Windows 11 Enterprise workstation on an isolated virtual network (VMnet). The lab exercises user provisioning, security group delegation, GPO rollout, and Kerberos authentication debugging.",
          decisions: [
            {
              title: "Segregated Virtual Network Architecture",
              body: "Configured a private VMnet adapter isolated from host traffic to validate end-to-end DHCP lease assignments, static IP DNS pointer records, and realistic client-server broadcast containment.",
            },
            {
              title: "Hierarchical OU Model (AGDLP Structure)",
              body: "Architected a tiered OU hierarchy separating Service Accounts, Administrative Tiers, and Business Departments (IT, Finance, Operations), implementing role-based access through security groups.",
            },
            {
              title: "Hardened GPO Baselines",
              body: "Constructed targeted Group Policy Objects enforcing minimum 14-character passphrase complexity, 5-attempt account lockout thresholds, automated screen saver locks, and removable media write restrictions.",
            },
            {
              title: "PowerShell Administrative Automation",
              body: "Leveraged PowerShell cmdlets (`New-ADUser`, `Get-ADGroupMember`, `Test-ComputerSecureChannel`) for repeatable directory creation, bulk provisioning, and verification testing.",
            },
          ],
          challenges: [
            "Resolving DNS reverse lookup timeouts causing slow domain join negotiations on client machines; resolved by configuring PTR records and binding order.",
            "Ensuring non-conflicting GPO precedence between Departmental policies and Default Domain Policies using GPResult and WMI filters.",
          ],
          stack: [
            "Windows Server 2022",
            "Active Directory (AD DS)",
            "Group Policy (GPOs)",
            "VMware Workstation Pro",
            "DNS / DHCP",
            "PowerShell",
            "Windows 11 Enterprise",
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
            "A production-grade enterprise Linux server deployment engineered following CIS security hardening guidelines. Features SSH ed25519 key authentication, fail2ban intrusion detection, strict UFW firewall policies, systemd service sandboxing, Nginx reverse proxy with TLS 1.3, and automated Bash backup pipelines with encrypted offsite replication.",
          bullets: [
            "Kernel tuning via sysctl and complete SSH hardening (root login disabled, port remapping, key-only).",
            "Automated Bash backup automation with zstd compression, GPG encryption, and SHA256 integrity logs.",
            "Reverse proxy architecture with Nginx: SSL termination, HTTP/2, HSTS, and rate-limiting headers.",
            "Multi-jail Fail2ban intrusion prevention and UFW default-deny incoming firewall configuration.",
          ],
          meta: {
            type: "Enterprise Linux Lab",
            role: "Linux Systems Engineer",
            status: "Documented & Automated",
            highlight: "Debian/RHEL · Hardening · systemd · Bash",
            year: "2026",
          },
          overview:
            "Built as a robust reference architecture for production Linux environments, this project encompasses comprehensive OS hardening, network segmentation, and automated maintenance. Implemented on Debian/Ubuntu and RHEL architectures, every service is orchestrated via systemd with sandboxing parameters (`ProtectSystem=full`, `PrivateTmp=true`). Automated backup routines capture database dumps and configuration trees, encrypt payloads with GPG, and archive them offsite with integrity checksum verification.",
          decisions: [
            {
              title: "Defense-in-Depth CIS Hardening Baseline",
              body: "Disabled root SSH access, enforced ed25519 cryptographic key authentication, configured sudo with dedicated command restrictions, and tuned sysctl to mitigate TCP SYN flood and ICMP redirect attacks.",
            },
            {
              title: "Automated Resilient Bash Backup Pipeline",
              body: "Authored modular shell scripts managing automated daily snapshots, compressing via zstd (level 19) for minimal storage footprints, encrypting with asymmetric GPG keys, and logging run states to syslog.",
            },
            {
              title: "Dynamic Intrusion Prevention with Fail2ban & UFW",
              body: "Established active defense rules banning IP addresses exceeding 3 failed authentication attempts across SSH and web endpoints, while maintaining strict stateful firewall packet filtering.",
            },
            {
              title: "Nginx Reverse Proxy with Modern TLS Stance",
              body: "Deployed Nginx as TLS 1.3 gateway enforcing strong cipher suites, OCSP stapling, HTTP Strict Transport Security (HSTS), and clean reverse proxy pass-through to internal microservices.",
            },
          ],
          challenges: [
            "Crafting non-disruptive systemd sandboxing directives without preventing daemons from accessing specific socket paths or temporary runtime directories.",
            "Designing atomic backup routines that ensure database consistency without requiring prolonged service lockouts.",
          ],
          stack: [
            "Debian / RHEL",
            "Bash Scripting",
            "systemd",
            "Nginx",
            "UFW / iptables",
            "Fail2ban",
            "SSH (ed25519)",
            "GPG / zstd",
            "Cron",
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
            "Operated TSX-certified die-attach equipment for server chipset production — a high-precision process previously restricted to L2/L3 technicians — bonding gold-plated dies to substrates under strict thermal, vacuum, and gas parameters.",
            "Monitored bonding parameters (speed, force, temperature) via Intel's proprietary process-control software, proactively reading logs and graphs to catch anomalies before they escalated into line failures or yield loss.",
            "Diagnosed and resolved equipment errors (vacuum/suction failures, substrate positioning) within SLA-defined time windows, escalating complex cases to engineering to keep the line running with minimal disruption.",
            "Owned shift passdowns, machine setups, calibrations, and X-ray verification across a 24/7 production environment, maintaining precise incident documentation for Team Leaders.",
            "Sustained consistent performance and composure across 4x3 rotating night shifts (6 PM – 6 AM, rotating every 6 months) in high-pressure cleanroom cells.",
          ],
          tags: ["Intel TSX", "SOP / SLA Compliance", "Process-Control", "ITIL-Aligned", "24/7 Operations", "Root-Cause Analysis"],
        },
      ],
    },
    stack: {
      label: "TECH STACK & COMPETENCIES",
      groups: [
        {
          title: "CORE INFRASTRUCTURE & SERVERS",
          items: [
            { name: "Windows Server 2022" },
            { name: "Active Directory (AD DS)" },
            { name: "Group Policy (GPOs / OUs)" },
            { name: "DNS & DHCP Administration" },
            { name: "Linux Administration (Debian, RHEL)" },
            { name: "Networking Fundamentals (CCNA)" },
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
            { name: "Groq & Gemini API Integration" },
          ],
        },
        {
          title: "IDENTITY, ENDPOINT & FRAMEWORKS",
          items: [
            { name: "Microsoft Intune (MD-102)" },
            { name: "Microsoft Entra ID (SC-300)" },
            { name: "Microsoft 365 Administration" },
            { name: "ITIL-Aligned Processes & SOPs" },
            { name: "Incident & SLA Management" },
            { name: "Root Cause Troubleshooting" },
          ],
        },
        {
          title: "SCRIPTING, DATA & DEV",
          items: [
            { name: "Python (LangChain, FastAPI)" },
            { name: "PowerShell Scripting" },
            { name: "Bash Automation" },
            { name: "PostgreSQL & Neon DB" },
            { name: "Docker & Docker Compose" },
            { name: "Git & GitHub Version Control" },
          ],
        },
      ],
    },
    certifications: {
      label: "EDUCATION & CERTIFICATIONS",
      educationTitle: "ACADEMIC EDUCATION",
      certsTitle: "CERTIFICATIONS & PROFESSIONAL TRAINING",
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
          title: "SC-300: Microsoft Identity and Access Administrator",
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
          issuer: "DataCamp / Microsoft",
          year: "2026",
          status: "In Progress",
        },
        {
          title: "Oracle Cloud Infrastructure (OCI) AI Foundations Associate",
          issuer: "Oracle University",
          year: "2026",
          status: "Preparation Stage",
        },
        {
          title: "Google Cloud Foundations",
          issuer: "Google Cloud Academic Training",
          year: "Completed",
          status: "Completed",
        },
        {
          title: "Akamai Network Engineering Specialization",
          issuer: "Coursera (Akamai Technical Academy)",
          year: "2026",
          status: "In Progress",
        },
        {
          title: "Microsoft AI Skill Fest 2026: Agentic AI Systems",
          issuer: "Microsoft",
          year: "2026",
          status: "Completed",
        },
      ],
    },
    about: {
      label: "ABOUT ME",
      p1: "I am an IT and Systems Engineering professional based in Costa Rica with a rare dual focus: deep foundational experience in enterprise IT infrastructure (Windows Server, VMware, Active Directory, Linux, Azure) combined with modern applied AI engineering (RAG architectures, intelligent agents, and n8n workflow automation).",
      p2: "Having spent two years at Intel Corporation operating TSX-certified die-attach equipment under rigorous thermal, vacuum, and SLA standards, I bring disciplined composure, zero-tolerance for unverified assumptions, and adherence to ITIL frameworks to every engineering challenge.",
      p3: "Currently advancing my Bachelor's Degree in Systems Engineering at Universidad Fidélitas, I bridge the gap between reliable server administration and the next generation of autonomous AI systems.",
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
      quickInfo: "Systems Engineer · Cloud Infrastructure & AI Automation",
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
        "Profesional en Sistemas e Infraestructura TI que combina experiencia práctica en infraestructura empresarial — Windows Server 2022, Active Directory, VMware ESXi, administración Linux y Microsoft 365/Azure — con ingeniería de IA aplicada (pipelines RAG, LangChain, automatización n8n). Experiencia comprobada en operaciones críticas 24/7 bajo estándares ITIL y cumplimiento estricto de SOPs en Intel Corporation.",
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
            "Asistente de alta precisión basado en arquitectura RAG (Retrieval-Augmented Generation) para entornos corporativos. Permite a colaboradores consultar documentación interna (PDFs normativos, políticas, inventarios CSV) en lenguaje natural, produciendo respuestas fundamentadas con la cita exacta del documento y página/fila de origen.",
          bullets: [
            "Pipeline de ingesta semántica con índice vectorial FAISS para búsquedas por similitud en menos de 15 ms.",
            "Motor de citas anti-alucinaciones que vincula cada afirmación con la página del PDF o fila del CSV.",
            "Orquestación multi-proveedor de LLM (Groq Llama 3.3 70B, Google Gemini, OpenAI) con fallback automático.",
            "Contenerizado con Docker y Docker Compose y desplegado en Oracle Cloud Infrastructure (OCI Compute).",
          ],
          meta: {
            type: "Challenge Empresarial de IA",
            role: "Ingeniero de IA & Fullstack (Solo)",
            status: "Listo para Producción / Desplegado OCI",
            highlight: "FAISS · Citas Exactas · OCI · Docker",
            year: "2026",
          },
          overview:
            "Desarrollado para el Challenge Alura Agente de Alura Latam x Oracle Next Education, esta aplicación resuelve una ineficiencia corporativa crítica: colaboradores perdiendo horas revisando extensos manuales y hojas de cálculo. Construido con LangChain y FAISS, el sistema fragmenta documentos en chunks semánticos, calcula representaciones vectoriales densas y recupera los pasajes más relevantes ante una consulta. Groq (Llama 3.3 70B de ultra-baja latencia) y Google Gemini sintetizan respuestas fundamentadas respetando citas de origen.",
          decisions: [
            {
              title: "Almacén Vectorial FAISS para Privacidad y Baja Latencia",
              body: "Se eligió FAISS ejecutándose directamente en memoria CPU para entregar búsquedas semánticas en sub-15ms sin incurrir en costos de bases de datos vectoriales en nube, preservando la confidencialidad de los documentos internos dentro del contenedor privado.",
            },
            {
              title: "Arquitectura Estricta de Citas y Trazabilidad",
              body: "Se diseñó la preservación de metadatos en cada etapa del RecursiveCharacterTextSplitter. Cada chunk vectorial retiene el archivo fuente, sección y número de página original, posibilitando notas al pie verificables para cumplimiento normativo.",
            },
            {
              title: "Capa de Resiliencia Multi-LLM",
              body: "Se implementó Groq (Llama 3.3 70B) como motor de inferencia principal por su velocidad, con Gemini como respaldo contextual y degradación elegante hacia visualización directa de pasajes recuperados en caso de desconexión.",
            },
            {
              title: "Despliegue Aislado con Docker en OCI Compute",
              body: "Se empaquetó el backend FastAPI y la interfaz Streamlit en contenedores Docker livianos con volúmenes persistentes, facilitando su despliegue en instancias Ampere A1 de Oracle Cloud Infrastructure.",
            },
          ],
          challenges: [
            "Extracción limpia de datos tabulares desde archivos CSV sin perder la semántica de las cabeceras; resuelto con serializadores de texto estructurado.",
            "Prevención de saturación de ventana de contexto al consultar múltiples manuales simultáneamente; mitigado mediante filtros de umbral de similitud L2.",
          ],
          stack: [
            "Python 3.10+",
            "LangChain",
            "FAISS Vector DB",
            "Groq API (Llama 3.3)",
            "Google Gemini",
            "FastAPI",
            "Streamlit",
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
            "Pipeline de automatización empresarial que integra el motor de flujos n8n con un agente RAG. Procesa solicitudes de colaboradores, emite constancias salariales, consulta normativas mediante embeddings de Cohere y ofrece asistencia conversacional en tiempo real a través de Telegram, conectado a PostgreSQL (Neon).",
          bullets: [
            "Orquestación de flujos basada en eventos con n8n, webhooks y generación automatizada de documentos.",
            "Pipeline RAG contextual con embeddings multilingües de Cohere para consultas de políticas internas.",
            "Base de datos PostgreSQL serverless (Neon) para registro de auditoría, verificación de empleados y estado.",
            "Interfaz en Telegram bot para autoservicio inmediato 24/7 sin barreras de acceso para colaboradores.",
          ],
          meta: {
            type: "ONE Enterprise Automation",
            role: "Desarrollador de Automatización & Sistemas",
            status: "Flujo Funcional / Desplegado",
            highlight: "n8n · Cohere · Telegram Bot · Neon DB",
            year: "2026",
          },
          overview:
            "Desarrollado en la inmersión de IA de Oracle Next Education (ONE), este asistente elimina cuellos de botella en RRHH. Conectando un bot de Telegram con un motor n8n, los colaboradores consultan beneficios, solicitan constancias o resuelven dudas sobre políticas. El flujo valida la identidad en Neon PostgreSQL, ejecuta embeddings de Cohere para recuperar fragmentos normativos y redacta certificados en PDF entregados al instante.",
          decisions: [
            {
              title: "n8n como Núcleo de Automatización por Eventos",
              body: "Permite una integración modular y visual entre webhooks entrantes, llamadas REST y disparadores de LLM sin la rigidez de arquitecturas monolíticas.",
            },
            {
              title: "Embeddings Multilingües de Cohere",
              body: "Excelente rendimiento semántico para terminología corporativa y laboral en español, garantizando coincidencia precisa de artículos de políticas.",
            },
            {
              title: "Persistencia Desacoplada en Neon PostgreSQL",
              body: "Almacenamiento de auditoría y estados de conversación en una base de datos relacional serverless, facilitando trazabilidad para el equipo de auditoría interna.",
            },
            {
              title: "Telegram Bot como Canal de Acceso Inmediato",
              body: "Elimina la fricción de instalar software adicional o requerir VPN corporativa para los colaboradores de planta o en turnos rotativos.",
            },
          ],
          challenges: [
            "Manejo de reintentos y sincronización asíncrona entre el bot de Telegram y la generación del PDF; resuelto con nodos de confirmación y encolado.",
            "Garantizar la protección de datos personales de los colaboradores antes de procesar prompts en modelos generativos externos.",
          ],
          stack: [
            "n8n Workflow Engine",
            "Cohere Embeddings",
            "PostgreSQL (Neon)",
            "Telegram Bot API",
            "REST APIs",
            "LangChain",
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
            "Laboratorio empresarial desplegado en VMware Workstation Pro. Propone una arquitectura cliente-servidor con Windows Server 2022 como Controlador de Dominio Principal (AD DS, DNS, DHCP) y estaciones cliente Windows Enterprise en una red virtual aislada, implementando Unidades Organizativas (OUs), GPOs y administración centralizada.",
          bullets: [
            "Diseño y dimensionamiento de dos máquinas virtuales simulando un entorno cliente-servidor real.",
            "Promoción a Controlador de Dominio (AD DS) con zonas de búsqueda DNS directa e inversa y DHCP.",
            "Creación de Unidades Organizativas departamentales y grupos de seguridad bajo el modelo AGDLP.",
            "Configuración de GPOs de seguridad: complejidad de contraseñas, BitLocker y bloqueo de puertos USB.",
          ],
          meta: {
            type: "Laboratorio de Infraestructura TI",
            role: "Administrador de Sistemas",
            status: "Configurado y Documentado",
            highlight: "Windows Server 2022 · AD DS · GPO · VMware",
            year: "2026",
          },
          overview:
            "Diseñado para replicar operaciones de TI corporativas, este laboratorio sirve como entorno de prueba para administración de sistemas. Alojado en VMware Workstation Pro, cuenta con una instancia de Windows Server 2022 Datacenter actuando como DC y servidor DNS/DHCP para el dominio `CORP.LOCAL`, conectado a una máquina cliente Windows 11 Enterprise en una red virtual privada (VMnet). El proyecto abarca aprovisionamiento de usuarios, políticas de grupo y diagnóstico de autenticación Kerberos.",
          decisions: [
            {
              title: "Segmentación en Red Virtual Aislada (VMnet2)",
              body: "Se configuró una interfaz virtual aislada del tráfico del anfitrión para probar asignación DHCP, registros DNS PTR y contención de broadcasts de red de forma fiel a un entorno real.",
            },
            {
              title: "Modelo Jerárquico de OUs y Grupos de Seguridad",
              body: "Estructura de OUs organizada por Departamentos (IT, Finanzas, Operaciones) y Cuentas de Servicio, aplicando el principio de mínimo privilegio mediante grupos de seguridad globales y de dominio local.",
            },
            {
              title: "Línea Base de Seguridad Mediante GPO",
              body: "Políticas de grupo que imponen contraseñas de al menos 14 caracteres, bloqueo tras 5 intentos fallidos, protector de pantalla con bloqueo automático y prohibición de escritura en medios extraíbles.",
            },
            {
              title: "Automatización Administrativa con PowerShell",
              body: "Scripts con cmdlets de Active Directory para creación masiva de cuentas, verificación de pertenencia a grupos y validación de canal seguro con el controlador.",
            },
          ],
          challenges: [
            "Tiempos de espera en resolución DNS inversa que retrasaban la unión de clientes al dominio; corregido mediante creación de zonas PTR y ajuste del orden de enlace de adaptadores.",
            "Precedencia y conflictos entre políticas de grupo de nivel de dominio y departamentales; resuelto mediante diagnósticos con GPResult y filtros WMI.",
          ],
          stack: [
            "Windows Server 2022",
            "Active Directory (AD DS)",
            "Group Policy (GPOs)",
            "VMware Workstation Pro",
            "DNS / DHCP",
            "PowerShell",
            "Windows 11 Enterprise",
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
            "Despliegue de servidor Linux para producción configurado bajo los estándares de seguridad CIS. Incluye autenticación SSH exclusiva por llaves ed25519, prevención de intrusiones con fail2ban, firewall estricto con UFW, aislamiento de servicios con systemd, proxy inverso Nginx con TLS 1.3 y automatización de respaldos en Bash con cifrado asimétrico.",
          bullets: [
            "Optimización de kernel con sysctl y fortificación de SSH (sin acceso root, puerto alternativo, solo llaves).",
            "Pipeline de respaldos en Bash con compresión zstd, cifrado GPG y verificación de integridad SHA256.",
            "Arquitectura de proxy inverso con Nginx: terminación TLS, HTTP/2, cabeceras HSTS y limitación de tasa.",
            "Defensa activa con Fail2ban multicarcel y configuración UFW con política por defecto de denegación entrante.",
          ],
          meta: {
            type: "Laboratorio Linux Empresarial",
            role: "Ingeniero de Sistemas Linux",
            status: "Documentado y Automatizado",
            highlight: "Debian/RHEL · Hardening · systemd · Bash",
            year: "2026",
          },
          overview:
            "Construido como arquitectura de referencia para servidores Linux en producción, este proyecto aborda fortificación del sistema operativo, segmentación de red y mantenimiento automatizado. Cada servicio se encuentra orquestado en systemd con directivas de sandbox (`ProtectSystem=full`, `PrivateTmp=true`). Tareas cron ejecutan scripts en Bash que empaquetan respaldos, los comprimen con zstd nivel 19, los cifran con llaves GPG y los replican a almacenamiento externo con registro en syslog.",
          decisions: [
            {
              title: "Línea Base de Hardening CIS en Capas",
              body: "Deshabilitación del usuario root en SSH, adopción exclusiva de criptografía ed25519, sudoers restrictivo y parámetros de red en sysctl para mitigar ataques de SYN flood e ICMP redirects.",
            },
            {
              title: "Pipeline Automatizado de Respaldos en Bash",
              body: "Scripts que capturan volcados de bases de datos y árboles de configuración, comprimen con zstd, cifran con GPG y validan hashes SHA256 con notificación de éxito a syslog.",
            },
            {
              title: "Prevención Dinámica de Intrusiones con Fail2ban y UFW",
              body: "Reglas que bloquean direcciones IP que superan 3 intentos fallidos de autenticación en SSH o servicios web, manteniendo una postura de denegación predeterminada.",
            },
            {
              title: "Proxy Inverso Nginx con TLS 1.3 Estricto",
              body: "Nginx actuando como pasarela segura con suites criptográficas robustas, grapado OCSP, HSTS forzado y enrutamiento hacia microservicios internos.",
            },
          ],
          challenges: [
            "Definir directivas restrictivas de systemd sin interferir en el acceso de los demonios a sockets de comunicación o directorios temporales compartidos.",
            "Asegurar consistencia transaccional durante los respaldos sin congelar los servicios web en ejecución.",
          ],
          stack: [
            "Debian / RHEL",
            "Bash Scripting",
            "systemd",
            "Nginx",
            "UFW / iptables",
            "Fail2ban",
            "SSH (ed25519)",
            "GPG / zstd",
            "Cron",
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
            "Operación de equipos de alta precisión en producción de chipsets para servidores en salas limpias 24/7 bajo estricto cumplimiento de SOPs e ITIL.",
          bullets: [
            "Operación de equipo die-attach con certificación TSX para producción de chipsets de servidor — proceso de alta precisión restringido a técnicos L2/L3 —, uniendo matrices doradas a sustratos bajo parámetros térmicos, de vacío y gases (oxígeno/nitrógeno).",
            "Monitoreo continuo de parámetros (velocidad, fuerza, temperatura) en el software de control de procesos propietario de Intel, detectando anomalías en gráficos y logs antes de que provocaran fallas o pérdidas de producción.",
            "Diagnóstico y resolución de errores de equipo (fallas de succión/vacío, posicionamiento de sustratos) dentro de ventanas SLA, escalando casos complejos a ingeniería para mantener la línea con mínima interrupción.",
            "Liderazgo en traspasos de turno (passdowns), configuraciones de máquina, calibraciones y verificación por rayos X en entorno 24/7, manteniendo documentación precisa de incidentes.",
            "Rendimiento constante y compostura en turnos nocturnos rotativos 4x3 (6 PM – 6 AM, rotación semestral) en celdas de trabajo compartidas con operadores, técnicos e ingenieros.",
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
            { name: "Integración APIs Groq & Gemini" },
          ],
        },
        {
          title: "IDENTIDAD, DISPOSITIVOS & MARCOS",
          items: [
            { name: "Microsoft Intune (MD-102)" },
            { name: "Microsoft Entra ID (SC-300)" },
            { name: "Administración Microsoft 365" },
            { name: "Procesos Alineados a ITIL & SOPs" },
            { name: "Gestión de Incidentes & SLAs" },
            { name: "Solución de Problemas Causa Raíz" },
          ],
        },
        {
          title: "SCRIPTING, DATOS & DEV",
          items: [
            { name: "Python (LangChain, FastAPI)" },
            { name: "PowerShell Scripting" },
            { name: "Bash Automation" },
            { name: "PostgreSQL & Neon DB" },
            { name: "Docker & Docker Compose" },
            { name: "Control de Versiones Git & GitHub" },
          ],
        },
      ],
    },
    certifications: {
      label: "EDUCACIÓN Y CERTIFICACIONES",
      educationTitle: "FORMACIÓN ACADÉMICA",
      certsTitle: "CERTIFICACIONES Y ENTRENAMIENTO",
      education: [
        {
          degree: "Bachillerato en Ingeniería en Sistemas de Información",
          institution: "Universidad Fidélitas, Costa Rica",
          status: "En Curso",
          period: "Graduación Esperada 2029",
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
          title: "SC-300: Microsoft Identity and Access Administrator",
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
          issuer: "DataCamp / Microsoft",
          year: "2026",
          status: "En Progreso",
        },
        {
          title: "Oracle Cloud Infrastructure (OCI) AI Foundations Associate",
          issuer: "Oracle University",
          year: "2026",
          status: "En Preparación",
        },
        {
          title: "Google Cloud Foundations",
          issuer: "Google Cloud Academic Training",
          year: "Completado",
          status: "Completado",
        },
        {
          title: "Akamai Network Engineering Specialization",
          issuer: "Coursera (Akamai Technical Academy)",
          year: "2026",
          status: "En Progreso",
        },
        {
          title: "Microsoft AI Skill Fest 2026: Sistemas de IA Agéntica",
          issuer: "Microsoft",
          year: "2026",
          status: "Completado",
        },
      ],
    },
    about: {
      label: "SOBRE MÍ",
      p1: "Soy un profesional en Sistemas e Infraestructura de TI en Costa Rica con un perfil dual: sólida base práctica en administración de infraestructura corporativa (Windows Server, VMware, Active Directory, Linux, Azure) combinada con ingeniería de IA aplicada (arquitecturas RAG, agentes inteligentes y automatización con n8n).",
      p2: "Mi experiencia de dos años en Intel Corporation operando maquinaria TSX de die-attach bajo estrictos estándares térmicos, de vacío y tiempos de respuesta (SLA) me enseñó disciplina operativa, verificación meticulosa y adhesión a marcos ITIL en entornos donde el error no es una opción.",
      p3: "Actualmente cursando el Bachillerato en Ingeniería en Sistemas en la Universidad Fidélitas, busco unir la confiabilidad de los servidores empresariales con la nueva frontera de sistemas agénticos de inteligencia artificial.",
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
      quickInfo: "Ingeniero de Sistemas · Infraestructura Cloud & Automatización con IA",
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
      copyright: "© 2026 Axell Rojas. Arquitectura de Sistemas & IA.",
      builtWith: "Astro · Tailwind CSS · Estética Cyber-HUD de Alta Tecnología",
    },
  },
};
