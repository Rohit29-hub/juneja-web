"use client";

import React from 'react'
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { courses } from "@/data/course";
import * as LucideIcons from "lucide-react";
import { useRouter } from "next/navigation";

type IconName = keyof typeof LucideIcons;

const Courses = () => {

    const router = useRouter()

    const handleEnrollCourse = (params: string) => {
        router.push(`/enroll/course/?name=${params}`, { scroll: true });
    }

    // get the icon
    const getIcon = (iconName: IconName): JSX.Element | null => {
        const IconComponent = LucideIcons[iconName];
        if (IconComponent) {
            // @ts-ignore
            return <IconComponent className="h-6 w-6" />;
        }
        return null;
    };

    return (
        <section className="px-4 py-4 sm:px-6 lg:px-8 bg-background">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <GraduationCap className="h-12 w-12 mx-auto text-primary mb-4" />
                    <h2 className="text-3xl font-bold text-primary">Our Courses</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Comprehensive training programs to advance your career
                    </p>
                </motion.div>

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
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {courses.map((course, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { y: 20, opacity: 0 },
                                show: { y: 0, opacity: 1 }
                            }}
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Card className="p-6 hover:shadow-lg transition-shadow">
                                <div className="flex items-center mb-4">
                                    <div className="p-2 bg-primary/10 rounded-lg mr-4">
                                        {getIcon(course.icon)}
                                    </div>
                                    <h3 className="text-xl font-semibold">{course.title}</h3>
                                </div>
                                <p className="text-muted-foreground mb-4">{course.description}</p>
                                <div className="mb-4">
                                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                                        <span className="font-medium mr-2">Duration:</span>
                                        {course.duration}
                                    </div>
                                    <div className="flex items-center text-sm text-muted-foreground">
                                        <span className="font-medium mr-2">Level:</span>
                                        {course.level}
                                    </div>
                                </div>
                                <div className="space-y-2 mb-6">
                                    <h4 className="font-medium">Course Modules:</h4>
                                    <ul className="space-y-2">
                                        {course.modules.map((module, idx) => (
                                            <li key={idx} className="flex items-center">
                                                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                                                {module}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <Button onClick={() => handleEnrollCourse(course.title)} className="w-full">Enroll Now</Button>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Courses