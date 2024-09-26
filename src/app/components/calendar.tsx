"use client";

import { Calendar } from "@nextui-org/react";
import { today, getLocalTimeZone } from "@internationalized/date";
import { motion } from "framer-motion";

export default function App() {
  return (
    <motion.div
      initial={{ y: 0 }} // Posição inicial
      animate={{
        y: [0, -5, 0], // Move para cima e depois para baixo
      }}
      transition={{
        duration: 2, // Duração da animação
        repeat: Infinity, // Repetir indefinidamente
        ease: "easeInOut", // Tipo de easing
      }}
    >
      <Calendar
        aria-label="Date (Read Only)"
        value={today(getLocalTimeZone())}
        isReadOnly
      />
    </motion.div>
  );
}
