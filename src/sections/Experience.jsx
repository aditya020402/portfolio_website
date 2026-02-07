const experiences = [
    {
    period: "2025 July - Present",
    role: "AI Software Engineer",
    company: "UBS",
    points: [
      "Built a multi-agent architecture using LangGraph to automate incident triage, log analysis, runbook execution, and remediation recommendations.",
      "Reduced manual SRE effort by 40–50% and improved Mean Time to Resolution (MTTR) by ~30%.",
      "Architected and deployed an AI-powered Document Automation Analyzer to evaluate runbooks and technical documents for automation readiness.",
      "Implemented an 8-agent LangGraph workflow reducing document processing time by 60–70% compared to manual reviews.",
      "Built a multimodal document processing pipeline integrating PDF parsing, OCR, and semantic vector search across 1000+ automation documents."
    ],
    technologies: ["React", "TypeScript", "PostgresDB", "Javascript", "Node.js", "OAuth", "Cloud Cost Management"],
    current: true,
  },
  {
    period: "2024 August - 2025 July",
    role: "Software Engineer",
    company: "UBS",
    points: [
      "Architected and developed Ecube, an automated incident classification and clustering platform to identify similar incidents.",
      "Enabled automation reuse across recurring incidents, reducing repetitive manual SRE effort by 30–40% and improving service reliability.",
      "Accelerated incident resolution by leveraging historical incident embeddings and automation patterns.",
      "Designed and built a Cloud Cost Optimization Portal with OAuth-based authentication for real-time cloud spend visualization.",
      "Delivered actionable cost optimization recommendations (VM right-sizing, reservations, region optimization) resulting in $100K+ in verified savings.",
      "Improved financial governance and cost transparency enabling self-service cost analysis without direct SRE or FinOps intervention.",
      "Designed and developed an AutoSys Job Monitoring & Visualization Platform to visualize job execution status and complex dependencies using an interactive graph-based UI. Reduced job failure analysis and dependency investigation time by ~40%, enabling faster root-cause identification."
    ],
    technologies: ["React", "TypeScript", "PostgresDB", "Javascript", "Node.js", "OAuth", "Cloud Cost Management"],
    current: true,
  },
  {
    period: "2024 January - 2024 July",
    role: "Software Engineer Intern",
    company: "UBS",
    points: [
      "Developed a bulk blob cleanup utility using Azure Blob Storage, reducing storage consumption by 20–30% with measurable cost savings.",
      "Integrated secure runtime credential retrieval using EVA Enterprise Vault, eliminating hardcoded secrets and improving security posture.",
      "Designed reusable UI components, improving usability and reducing frontend development effort for new features.",
      "Led the Node.js runtime upgrade from v12 to v20, improving security, performance, and long-term maintainability."
    ],
    technologies: ["React", "Redux", "Jest", "EVA", "Azure Blob Storage", "Node.js"],
    current: false,
  },
  {
    period: "2023 May - 2023 July",
    role: "Software Engineer Summer Intern",
    company: "UBS",
    points: [
      "Contributed to sensitive data scanning (CID) workflows, gaining end-to-end exposure to application architecture and security considerations.",
      "Delivered UI/UX enhancements with advanced filtering capabilities, reducing data discovery time by 40–50%.",
      "Implemented a Trie-based keyword search algorithm, improving search performance by 60%."
    ],
    technologies: ["React", "Node.js", "Typescript", "BIGID","Data Structures"],
    current: false,
  },
  {
    period: "2021 Aug — 2021 Dec",
    role: "Technical Content Writer",
    company: "GFG",
    points: [
      "Authored high-quality technical articles on computer science fundamentals, data structures, and programming concepts.",
      "Published content with strong engagement, including a featured article achieving 10,000+ views.",
      "Article Link: https://www.geeksforgeeks.org/cpp/multiple-comparisons-in-a-c-priority-queue/"
    ],
    technologies: ["HTML", "CSS", "Javascript", "CPP"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              speaks volumes.
            </span>
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            A timeline of my professional growth, from curious beginner to
            senior engineer leading teams and building products at scale.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <ul className="text-sm text-muted-foreground mt-4 space-y-3 text-left">
                      {exp.points.map((point, pointIdx) => (
                        <li key={pointIdx} className="flex gap-2">
                          <span className="text-primary flex-shrink-0">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};