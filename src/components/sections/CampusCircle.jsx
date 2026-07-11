import { motion } from "framer-motion";

import SectionHeading from "../ui/SectionHeading";

import {
  Users,
  GraduationCap,
  HeartHandshake,
  BrainCircuit,
  Archive,
  Briefcase,
} from "lucide-react";

const communityFeatures = [
  {
    icon: Users,
    title: "Student Communities",
    text: "Create vibrant class communities, clubs, societies, academic groups and leadership spaces where students collaborate beyond the classroom.",
  },

  {
    icon: GraduationCap,
    title: "Alumni Network",
    text: "Keep graduates connected through mentorship, career profiles, reunions, university journeys and lifelong institutional relationships.",
  },

  {
    icon: HeartHandshake,
    title: "Parent Community",
    text: "Bring parents closer to school life through announcements, volunteering opportunities, discussions and meaningful participation.",
  },

  {
    icon: BrainCircuit,
    title: "Community Intelligence",
    text: "AI helps identify shared interests, recommend mentors, encourage collaboration and strengthen the institutional community over time.",
  },

  {
    icon: Archive,
    title: "Institutional Memory",
    text: "Preserve photographs, achievements, graduation stories, events and historical milestones that become part of the school's living legacy.",
  },

  {
    icon: Briefcase,
    title: "Career & Opportunity Network",
    text: "Connect students and alumni through internships, scholarships, employment opportunities, entrepreneurship and professional networking.",
  },
];

function CampusCircle() {
  return (
    <section id="campus-circle" className="section campus-section">

      <SectionHeading
        eyebrow="Campus Circle™"
        title="One School. One Community. A Lifetime of Connection."
        description="Education does not end at graduation. Campus Circle™ keeps students, teachers, parents and alumni connected through one intelligent institutional community."
        align="center"
      />

      <div className="campus-grid">

        {communityFeatures.map((feature, index) => {

          const Icon = feature.icon;

          return (

            <motion.div
              key={feature.title}
              className="campus-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -8,
              }}
            >

              <div className="campus-icon">
                <Icon size={28} />
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.text}</p>

            </motion.div>

          );

        })}

      </div>

      <motion.div
        className="campus-ending"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >

        <h3>
          Communities built on learning should never end.
        </h3>

        <p>
          Campus Circle™ transforms every graduating class into a lifelong
          network of mentorship, collaboration and shared purpose—strengthening
          institutions across generations.
        </p>

      </motion.div>

    </section>
  );
}

export default CampusCircle;