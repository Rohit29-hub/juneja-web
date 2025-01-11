"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Mail, Phone } from "lucide-react"; // Added phone and calendar icons
import { useSearchParams } from "next/navigation";
import { courses } from "@/data/course";
import { Button } from "@/components/ui/button";
import * as LucideIcons from "lucide-react";
type IconName = keyof typeof LucideIcons;



type Course = {
    title: string;
    description: string;
    icon: IconName;
    modules: string[];
    duration: string;
    level: string;
};

const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
};

const EnrollPage = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        fullname: "",
        phone: "",
        age: "",
        course_name: "",
        course_type: "",
        class: "",
        timing: ""
    });

    const [course, setCourse] = useState<Course | null>(null); 

    const searchParams = useSearchParams();
    const title = searchParams.get("name");

    const handleEnrollCourse = (courseTitle: string) => {
        console.log(`Enrolling in: ${courseTitle}`);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted", formData);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const getIcon = (iconName: IconName): JSX.Element | null => {
        const IconComponent = LucideIcons[iconName];
        if (IconComponent) {
          // @ts-ignore
          return <IconComponent className="h-6 w-6" />;
        }
        return null;
      };

    useEffect(() => {
        const single_course = courses.find((course) => course.title === title);
        if (single_course) {
            setCourse(single_course);
        }
    }, [title]);

    return course ? (
        <div className="flex flex-col md:flex-row gap-8 p-8">
            {/* Left - Sticky Course Details Card with Border */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative w-full md:w-1/3 border border-gray-300 rounded-lg"
            >
                <motion.div
                    variants={item}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <div className="p-6">
                        <div className="flex items-center mb-4">
                            <div className="p-2 bg-primary/10 rounded-lg mr-4">
                                {getIcon(course.icon)} 
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800">{course.title}</h3>
                        </div>
                        <p className="text-muted-foreground mb-4 text-gray-600">{course.description}</p>
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
                            <h4 className="font-medium text-gray-800">Course Modules:</h4>
                            <ul className="space-y-2">
                                {course.modules.map((module, idx) => (
                                    <li key={idx} className="flex items-center text-gray-600">
                                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                                        {module}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            {/* Right - Enrollment Form (Outside Card, No Border) */}
            <div className="flex-1">
                <div className="w-full max-w-3xl mx-auto">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {/* Email Address */}
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="Enter your email"
                                        className="pl-10 py-3"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Full Name */}
                            <div className="space-y-2">
                                <label htmlFor="fullname" className="text-sm font-medium text-gray-700">
                                    Full Name
                                </label>
                                <div className="relative">
                                    <Input
                                        id="fullname"
                                        type="text"
                                        placeholder="Enter your full name"
                                        className="py-3"
                                        name="fullname"
                                        value={formData.fullname}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Phone Number */}
                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                                    Phone Number
                                </label>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                                    <Input
                                        id="phone"
                                        type="tel"
                                        placeholder="Enter your phone number"
                                        className="pl-10 py-3"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Age */}
                            <div className="space-y-2">
                                <label htmlFor="age" className="text-sm font-medium text-gray-700">
                                    Age
                                </label>
                                <div className="relative">
                                    <Input
                                        id="age"
                                        type="number"
                                        placeholder="Enter your age"
                                        className="py-3"
                                        name="age"
                                        value={formData.age}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Course Name */}
                            <div className="space-y-2">
                                <label htmlFor="course_name" className="text-sm font-medium text-gray-700">
                                    Course Name
                                </label>
                                <div className="relative">
                                    <Input
                                        id="course_name"
                                        type="text"
                                        placeholder="Enter course name"
                                        className="py-3"
                                        name="course_name"
                                        value={formData.course_name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Course Type (Select Field) */}
                            <div className="space-y-2">
                                <label htmlFor="course_type" className="text-sm font-medium text-gray-700">
                                    Course Type
                                </label>
                                <select
                                    id="course_type"
                                    name="course_type"
                                    className="w-full py-3 px-4 border border-gray-300 rounded-lg"
                                    value={formData.course_type}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="">Select course type</option>
                                    <option value="online">Online</option>
                                    <option value="offline">Offline</option>
                                </select>
                            </div>

                            {/* Class (Select Field) */}
                            <div className="space-y-2">
                                <label htmlFor="class" className="text-sm font-medium text-gray-700">
                                    Class
                                </label>
                                <select
                                    id="class"
                                    name="class"
                                    className="w-full py-3 px-4 border border-gray-300 rounded-lg"
                                    value={formData.class}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="">Select class</option>
                                    <option value="A">Class A</option>
                                    <option value="B">Class B</option>
                                    <option value="C">Class C</option>
                                </select>
                            </div>

                            {/* Timing (Select Field) */}
                            <div className="space-y-2">
                                <label htmlFor="timing" className="text-sm font-medium text-gray-700">
                                    Timing
                                </label>
                                <select
                                    id="timing"
                                    name="timing"
                                    className="w-full py-3 px-4 border border-gray-300 rounded-lg"
                                    value={formData.timing}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="">Select timing</option>
                                    <option value="morning">Morning</option>
                                    <option value="afternoon">Afternoon</option>
                                    <option value="evening">Evening</option>
                                </select>
                            </div>
                        </div>

                        <Button type="submit" className="w-full py-3 mt-4">
                            Submit
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    ) : (
        <p>Loading course details...</p>
    );
};

export default EnrollPage;
