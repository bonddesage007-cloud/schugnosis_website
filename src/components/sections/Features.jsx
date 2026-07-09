import { motion } from "framer-motion";
import { platformFeatures } from "../../data/platformFeatures";

function Features() {
  return (
    <section id="features" className="section">
      <div className="section-heading">
        <span>Core Modules</span>

        <h2>
          Everything a school needs to look organized, serious and modern.
        </h2>

        <p>
          Schugnosis is designed for schools that want structure, beauty,
          speed and reliability without depending on internet connection.
        </p>
      </div>

      <div className="feature-grid">
        {platformFeatures.map((feature) => (
          <motion.div
            className="feature-card"
            key={feature.title}
            whileHover={{ y: -8 }}
          >
            <feature.icon size={26} />

            <h3>{feature.title}</h3>

            <p>{feature.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Features;