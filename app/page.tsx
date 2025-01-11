"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GraduationCap, LineChart, Laptop, CheckCircle, Users, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ImageCarousel } from "@/components/ImageCarousel";
import { SplashScreen } from "@/components/SplashScreen";
import { AnimatedStats } from "@/components/AnimatedStats";
import { useRouter } from "next/navigation";
import { courses } from "@/data/course";
import * as LucideIcons from "lucide-react";
type IconName = keyof typeof LucideIcons;


const stats = [
  { label: "Students Trained", value: "5000+", icon: <Users className="h-6 w-6" /> },
  { label: "Expert Trainers", value: "20+", icon: <Trophy className="h-6 w-6" /> },
  { label: "Success Rate", value: "95%", icon: <CheckCircle className="h-6 w-6" /> }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};


export default function Home() {
  const [loading, setLoading] = useState(true);
  const router = useRouter()

  const handleEnrollCourse = (params: string) => {
    router.push(`/enroll/course/?name=${params}`, { scroll: false });
  }

  const getIcon = (iconName: IconName): JSX.Element | null => {
    const IconComponent = LucideIcons[iconName];
    if (IconComponent) {
      // @ts-ignore
      return <IconComponent className="h-6 w-6" />;
    }
    return null;
  };



  useEffect(() => {
    const isAlreadyLoaded = sessionStorage.getItem("isLoaded");

    if (!isAlreadyLoaded) {
      const timeoutId = setTimeout(() => {
        sessionStorage.setItem("isLoaded", "true"); // Mark as loaded
        setLoading(false);
      }, 3000);

      return () => clearTimeout(timeoutId);
    } else {
      setLoading(false);
    }
  }, []);


  if (loading) {
    return <SplashScreen finishLoading={() => setLoading(true)} />;
  }

  return !loading && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-background to-secondary"
    >
      <ImageCarousel />

      {/* Stats Section */}
      <AnimatedStats />

      {/* Courses Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
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
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {courses.map((course, index) => (
              <motion.div
                key={index}
                variants={item}
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

      {/* Features Section */}
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
            variants={container}
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
                variants={item}
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
    </motion.div>
  );
}