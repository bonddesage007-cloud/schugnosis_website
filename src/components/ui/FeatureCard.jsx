import { motion } from "framer-motion";
import Card from "./Card";

function FeatureCard({ icon: Icon, title, text }) {
  return (
    <motion.div whileHover={{ y: -8 }}>
      <Card className="feature-card" as="article">
        <Icon size={26} />

        <h3>{title}</h3>

        <p>{text}</p>
      </Card>
    </motion.div>
  );
}

export default FeatureCard;