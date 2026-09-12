import { motion } from "framer-motion";

import {
  Archive,
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  GraduationCap,
  HeartHandshake,
  MessageCircle,
  Network,
  Sparkles,
  Users,
} from "lucide-react";

import "../../styles/campus-circle.css";

const communityGroups = [
  {
    number: "01",
    eyebrow: "Belonging",
    title: "A school should feel like a community.",
    icon: Users,
    features: [
      {
        icon: Users,
        title: "Student Communities",
        text: "Clubs, classes, societies, leadership spaces and shared interests continue beyond the classroom.",
      },
      {
        icon: HeartHandshake,
        title: "Parent Community",
        text: "Parents become informed participants in school life rather than distant observers.",
      },
    ],
  },
  {
    number: "02",
    eyebrow: "Continuity",
    title: "Graduation should not end the relationship.",
    icon: GraduationCap,
    features: [
      {
        icon: GraduationCap,
        title: "Alumni Network",
        text: "Graduates remain connected through mentorship, reunions, university journeys and lifelong relationships.",
      },
      {
        icon: Archive,
        title: "Institutional Memory",
        text: "Stories, achievements, photographs and milestones become part of the institution's living memory.",
      },
    ],
  },
  {
    number: "03",
    eyebrow: "Opportunity",
    title: "Connections should create meaningful futures.",
    icon: Network,
    features: [
      {
        icon: BriefcaseBusiness,
        title: "Career & Opportunity Network",
        text: "Internships, scholarships, jobs, entrepreneurship and professional opportunities flow through the community.",
      },
      {
        icon: BrainCircuit,
        title: "Community Intelligence",
        text: "Intelligence can help reveal shared interests, recommend mentors and strengthen relationships over time.",
      },
    ],
  },
];

function CampusCircle() {
  return (
    <section
      id="campus-circle"
      className="campus-circle-section"
    >
      <div className="campus-circle-shell">
        <motion.header
          className="campus-circle-heading"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <div className="campus-circle-kicker">
            <Sparkles size={14} />
            Campus Circle™
          </div>

          <h2>
            The institution is more than classrooms.
            <br />
            It is the people between them.
          </h2>

          <p>
            Campus Circle™ creates a living institutional community where
            students, educators, parents and alumni can continue to belong,
            contribute and grow together.
          </p>
        </motion.header>

        <div className="campus-story">
          <motion.figure
            className="campus-story-image campus-story-primary"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.75,
            }}
          >
            <img
              src="/images/campus-circle/campus-circle-collaboration.jpg"
              alt="Students collaborating together on a university campus"
              loading="lazy"
              decoding="async"
            />

            <div className="campus-image-treatment" />

            <figcaption className="campus-caption campus-caption-primary">
              <span>Learning</span>
              <strong>Ideas grow through people.</strong>
            </figcaption>

            <motion.div
              className="campus-floating-note"
              initial={{
                opacity: 0,
                y: 18,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.35,
              }}
              transition={{
                duration: 0.6,
                delay: 0.15,
              }}
            >
              <div className="campus-floating-icon">
                <Network size={18} />
              </div>

              <div className="campus-floating-copy">
                <span>Community is infrastructure.</span>

                <p>
                  When people stay connected, knowledge,
                  opportunity and institutional culture can
                  travel across generations.
                </p>
              </div>
            </motion.div>
          </motion.figure>

          <div className="campus-story-side">
            <motion.figure
              className="campus-story-image campus-story-secondary"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.65,
                delay: 0.08,
              }}
            >
              <img
                src="/images/campus-circle/campus-circle-community.jpg"
                alt="Students talking together on campus"
                loading="lazy"
                decoding="async"
              />

              <div className="campus-image-treatment" />

              <figcaption className="campus-caption campus-caption-secondary">
                <span>Community</span>
                <strong>Belonging continues beyond class.</strong>
              </figcaption>
            </motion.figure>

            <motion.figure
              className="campus-story-image campus-story-secondary"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.65,
                delay: 0.15,
              }}
            >
              <img
                src="/images/campus-circle/campus-circle-life.jpg"
                alt="Students socializing in a modern campus environment"
                loading="lazy"
                decoding="async"
              />

              <div className="campus-image-treatment" />

              <figcaption className="campus-caption campus-caption-secondary">
                <span>Connection</span>
                <strong>A network that grows with every generation.</strong>
              </figcaption>
            </motion.figure>
          </div>
        </div>

        <div className="campus-community-groups">
          {communityGroups.map((group, index) => {
            const GroupIcon = group.icon;

            return (
              <motion.article
                className="campus-community-group"
                key={group.title}
                initial={{
                  opacity: 0,
                  y: 26,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
              >
                <div className="campus-group-heading">
                  <div className="campus-group-index">
                    {group.number}
                  </div>

                  <GroupIcon size={23} />

                  <span>
                    {group.eyebrow}
                  </span>
                </div>

                <h3>
                  {group.title}
                </h3>

                <div className="campus-group-features">
                  {group.features.map((feature) => {
                    const FeatureIcon = feature.icon;

                    return (
                      <div
                        className="campus-group-feature"
                        key={feature.title}
                      >
                        <FeatureIcon size={18} />

                        <div>
                          <h4>
                            {feature.title}
                          </h4>

                          <p>
                            {feature.text}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          className="campus-circle-manifesto"
          initial={{
            opacity: 0,
            y: 24,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <div className="campus-manifesto-symbol">
            <MessageCircle size={23} />
          </div>

          <div>
            <span>
              A lifetime of connection
            </span>

            <h3>
              A graduating class should become a network,
              not an archive.
            </h3>

            <p>
              Campus Circle™ allows the relationships formed
              inside an institution to continue creating
              mentorship, collaboration, opportunity and
              shared identity long after graduation.
            </p>
          </div>

          <a href="#journey">
            Continue the journey

            <ArrowUpRight size={17} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default CampusCircle;