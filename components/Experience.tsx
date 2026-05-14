"use client";

import { motion } from "framer-motion";

const jobs = [
  {
    title: "Incident Management & Governance",
    range: "Jul 2025 – Sep 2025",
    description: [
      "Developed three incident response playbooks (Phishing, Malware, Suspicious Logins) with defined escalation procedures and role-based responsibilities aligned to ISO 27001 controls.",
      "Built Microsoft Sentinel dashboards to visualize incident metrics and compliance readiness.",
    ],
  },
  {
    title: "Endpoint Security Assessment",
    range: "May 2025 – Jun 2025",
    description: [
      "Performed endpoint security evaluations using open-source EDR tools on Windows and Linux.",
      "Documented Indicators of Compromise (IoCs), impact analysis, and remediation plans using the incident response lifecycle framework.",
    ],
  },
  {
    title: "Network Traffic Monitoring",
    range: "Mar 2025 – Apr 2025",
    description: [
      "Analyzed network traffic for anomalies and potential threats.",
      "Delivered firewall policy and logging improvement recommendations aligned with governance and compliance standards.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="flex items-center gap-4 text-2xl sm:text-3xl font-bold text-[#ccd6f6] mb-8">
            <span className="text-[#64ffda] font-mono text-lg">02.</span>
            Where I have Worked
            <span className="hidden sm:block flex-1 h-[1px] bg-[#233554] ml-4"></span>
          </h2>

          <div className="space-y-12">
            {jobs.map((job, index) => (
              <div key={index} className="grid md:grid-cols-[140px_1fr] gap-4 md:gap-8">
                <div className="text-sm text-[#8892b0]/60 font-mono pt-1">
                  {job.range}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#ccd6f6] hover:text-[#64ffda] transition-colors cursor-default">
                    {job.title}
                  </h3>
                  <ul className="space-y-2 mt-3">
                    {job.description.map((item, i) => (
                      <li key={i} className="text-[#8892b0] text-sm leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
