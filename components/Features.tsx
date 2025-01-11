"use client";
import React from 'react'
import { motion } from "framer-motion";
import { GraduationCap, LineChart, Laptop } from "lucide-react";

const Features = () => {
  return (
    <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-12">Why Choose Us</h2>
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <GraduationCap size={35} />,
                title: "Expert Instructors",
                description: "Learn from industry professionals with years of experience"
              },
              {
                icon: <Laptop size={35} />,
                title: "Practical Training",
                description: "Hands-on experience with real-world projects"
              },
              {
                icon: <LineChart size={35} />,
                title: "Career Support",
                description: "Job placement assistance and career guidance"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  show: { y: 0, opacity: 1 }
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="p-6 bg-white rounded-md"
              >
                <div className=" inline-flex rounded-full bg-primary/10 p-2 mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
  )
}

export default Features