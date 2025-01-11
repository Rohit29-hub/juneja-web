"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export function SplashScreen({ finishLoading }: { finishLoading: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 1.5
          }}
        >
          <GraduationCap className="h-32 w-32 mx-auto text-primary mb-8" />
        </motion.div>
        
        <div className="overflow-hidden">
          <motion.h1
            className="md:text-4xl text-2xl font-bold mb-4"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              delay: 0.5,
              type: "spring",
              stiffness: 200,
              damping: 20
            }}
          >
            Welcome to
          </motion.h1>
        </div>

        <div className="overflow-hidden">
          <motion.h2
            className="md:text-6xl text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              delay: 0.8,
              type: "spring",
              stiffness: 200,
              damping: 20
            }}
          >
            Juneja Institute Centre
          </motion.h2>
        </div>

        <motion.div
          className="mt-6"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div 
            className="h-1 w-24 mx-auto bg-primary rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          onAnimationComplete={finishLoading}
          className="mt-4 text-lg text-muted-foreground"
        >
          Empowering Futures Through Education
        </motion.div>
      </div>
    </motion.div>
  );
}