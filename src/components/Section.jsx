import { motion } from "framer-motion";

export default function Section({ children, className = "", id }) {
  return (
    <>
      <motion.section
        id={id}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={className}
      >
        {children}
      </motion.section>
    </>
  );
}
