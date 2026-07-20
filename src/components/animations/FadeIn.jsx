import { motion } from "framer-motion";

function FadeIn({
  children,
  direction = "up",
  delay = 0,
}) {
  const directions = {
    up: { x: 0, y: 50 },
    down: { x: 0, y: -50 },
    left: { x: -50, y: 0 },
    right: { x: 50, y: 0 },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directions[direction],
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      transition={{
        duration: 0.7,
        delay,
      }}
      viewport={{
        once: false,
        amount: 0.3,
      }}
    >
      {children}
    </motion.div>
  );
}

export default FadeIn;