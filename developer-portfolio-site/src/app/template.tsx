"use client";

import { motion } from "framer-motion";

const variant = {
  hidden: { opacity: 0, y: 300 },
  visible: { opacity: 1, y: 0 },
};

const transition = {
  duration: 0.6,
  ease: "easeInOut",
};

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      variants={variant}
      initial="hidden"
      animate="visible"
      transition={transition}
    >
      {children}
    </motion.main>
  );
}
