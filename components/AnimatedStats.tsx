"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Users, Trophy, CheckCircle, Laptop } from "lucide-react";

const stats = [
    {
        label: "Students Trained",
        value: 5000,
        icon: <Users size={40} />,
    },
    {
        label: "Expert Trainers",
        value: 15,
        icon: <Trophy size={40} />,
    },
    {
        label: "Courses Offered",
        value: 25,
        suffix: "+",
        icon: <Laptop size={40}/>,
    },
    {
        label: "Success Rate",
        value: 95,
        suffix: "%",
        icon: <CheckCircle size={40}/>,
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

export function AnimatedStats() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="py-12 bg-background"
        >
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className="text-center p-6 bg-card rounded-md border shadow-sm"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="inline-flex p-2 bg-primary/10 rounded-full mb-4">
                                {stat.icon}
                            </div>
                            <h3 className="text-3xl font-bold mb-2">
                                <CountUp
                                    start={0}
                                    end={stat.value}
                                    duration={2} // Adjust duration for animation
                                    separator=","
                                    suffix={stat.suffix || ""}
                                    enableScrollSpy
                                    scrollSpyOnce
                                />
                            </h3>
                            <p className="text-muted-foreground">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}
