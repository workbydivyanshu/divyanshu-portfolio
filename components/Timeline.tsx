"use client";

import { motion } from "framer-motion";
import { Shield, Bug, Server, GraduationCap } from "lucide-react";

const timelineItems = [
  {
    icon: Shield,
    title: "Incident Management Playbooks & Governance",
    period: "Jul 2025  Sep 2025",
    description:
      "Created three incident management playbooks (phishing, malware, suspicious logins) with defined roles, escalation processes, and Microsoft Sentinel dashboards for compliance review.",
    skills: [
      "Microsoft Sentinel",
      "Incident Response",
      "ISO 27001",
      "Governance",
    ],
  },
  {
    icon: Bug,
    title: "Endpoint Security Assessment",
    period: "May 2025  Jun 2025",
    description:
      "Performed comprehensive endpoint security assessments in controlled lab environments using open-source EDR tools on Windows and Linux systems.",
    skills: [
      "EDR Tools",
      "Windows/Linux",
      "Incident Response",
      "Risk Management",
    ],
  },
  {
    icon: Server,
    title: "Network Traffic Monitoring & Control",
    period: "Mar 2025  Apr 2025",
    description:
      "Monitored and analyzed network traffic patterns to identify anomalies and potential threats. Created remediation checklists for firewall policies and logging improvements.",
    skills: [
      "Wireshark",
      "Firewall Config",
      "Threat Analysis",
      "Compliance",
    ],
  },
  {
    icon: GraduationCap,
    title: "Education & Certifications",
    period: "Ongoing",
    description:
      "Google Cybersecurity Professional Certificate. Cisco Networking Academy (Cybersecurity, Network Defense, Endpoint Security). The Odin Project (Full Stack Web Development).",
    skills: [
      "Full Stack Dev",
      "Cybersecurity",
      "Networking",
      "Python",
    ],
  },
];

export default function Timeline() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Experience & <span className="gradient-text">Background</span>
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            My journey from foundational IT skills to full-stack development and cybersecurity, built through hands-on projects, labs, and continuous learning.
          </p>
        </motion.div>

        <div className="space-y-8">
          {timelineItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-xl p-6 hover:glass-light transition-all duration-300 border border-primary/10 hover:border-primary/30"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/5 shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold">
                      {item.title}
                    </h3>
                    <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-primary/10 text-primary w-fit shrink-0">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-text-muted text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-xs font-medium rounded-full bg-surface-2 text-text-muted"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
