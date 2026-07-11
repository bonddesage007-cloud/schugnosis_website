import { GraduationCap, Users, School } from "lucide-react";
import { motion } from "framer-motion";

function FutureEducation() {
  return (
    <section className="future-section">

      <motion.div
        className="future-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .8 }}
      >

        <span className="section-label">
          THE FUTURE OF EDUCATION
        </span>

        <h2>
          Education is entering a new era.
        </h2>

        <p>
          Educational institutions are no longer expected to simply manage
          classrooms and examinations. They are expected to create connected
          learning experiences, empower educators, engage families, protect
          students, and prepare every learner for an increasingly intelligent
          world.
        </p>

        <p>
          The schools that thrive over the next decade will not simply adopt
          more technology. They will adopt technology that understands the
          people it serves.
        </p>

      </motion.div>

      <div className="future-grid">

        <motion.div
          className="future-card"
          whileHover={{ y: -8 }}
        >
          <GraduationCap size={34} />

          <h3>Students are Changing</h3>

          <p>
            Learning is becoming increasingly personal. Every learner deserves
            guidance that adapts to their pace, strengths and aspirations.
          </p>

        </motion.div>

        <motion.div
          className="future-card"
          whileHover={{ y: -8 }}
        >
          <Users size={34} />

          <h3>Teachers are Evolving</h3>

          <p>
            Educators need intelligent tools that reduce administrative burden,
            provide insight, and allow them to focus on teaching and mentoring.
          </p>

        </motion.div>

        <motion.div
          className="future-card"
          whileHover={{ y: -8 }}
        >
          <School size={34} />

          <h3>Schools are Transforming</h3>

          <p>
            Institutions require connected ecosystems rather than disconnected
            applications. Every department should contribute to one unified
            educational experience.
          </p>

        </motion.div>

      </div>

    </section>
  );
}

export default FutureEducation;