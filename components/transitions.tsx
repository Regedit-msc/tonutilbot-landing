"use client";

import { motion } from "framer-motion";
import React from "react";

export default function Transition({
  children,
  duration,
  className,
}: {
  children: React.ReactNode;
  duration?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ y: -30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ ease: "easeInOut", duration: duration || 1 }}
      className={`flex justify-center items-center ${className}`}
    >
      {children}
    </motion.div>
  );
}
