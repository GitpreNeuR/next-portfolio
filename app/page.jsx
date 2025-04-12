"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { SectionHeader } from "@/components/section-header";
import Navigation from "@/components/navigation";
import DropGrid from "@/components/water-grid";
import { experiences, workSkills, hobbies, projects, certifications, links } from "@/lib/constants";
import {
  Github,
  Linkedin,
  Code,
  Award,
  Mail,
  Send,
  SquareActivity,
  ExternalLink,
  
  ChevronRight,
  Download,
  ArrowRight,
} from "lucide-react";


export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);
  const { theme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("hero");
  const [expandedProjects, setExpandedProjects] = useState({});
  const [visibleProjects, setVisibleProjects] = useState(6);

  const toggleProjectDescription = (index) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

 

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  const handleDownloadResume = () => {
    const resumeUrl = "/resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "devang_banta_resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

 

  return (
    <div className="flex">
      <Navigation
        theme={theme}
        setTheme={setTheme}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <main className="flex-1 ml-0 lg:ml-20">
        <div className="md:max-w-5xl max-w-auto space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24 mx-auto py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <section
            id="hero"
            className="min-h-full overflow-hidden lg:min-h-[90vh] relative flex items-center justify-center py-12 sm:py-14 md:py-16 lg:py-20"
          >
            <div className="absolute max-w-[75%] opacity-50 right-0 top-[50%] -translate-y-[50%] z-0">
              <DropGrid />
            </div>
            <motion.div
              className="max-w-4xl mx-auto space-y-6 sm:space-y-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <motion.div
                className="relative"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight relative z-10">
                  Hi, I am{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10 bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-600 text-transparent bg-clip-text">
                      Devang
                    </span>
                  </span>
                </h1>
              </motion.div>
  
              <motion.div
                className="text-sm sm:text-base font-medium text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                A{" "}
                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 rounded">
                  Fullstack Developer
                </span>{" "}
                with expertise in front-end, back-end, and database technologies. Passionate about solving problems, learning new technologies, and building impactful projects.
              </motion.div>
  
              <button
                className="relative z-0 flex items-center gap-2 overflow-hidden rounded-lg border border-emerald-400/50 px-6 sm:px-8 py-2 font-semibold uppercase text-emerald-400 transition-all duration-500 before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-emerald-600 before:transition-transform before:duration-1000 before:content-[''] hover:scale-105 hover:text-neutral-50 hover:before:translate-x-[0%] hover:before:translate-y-[0%] active:scale-95 neon-effect"
                onClick={handleDownloadResume}
              >
                <Download className="h-5 w-5" />
                <span>Resume</span>
              </button>
            </motion.div>
          </section>
  
          {/* About Section */}
          <section
            id="about"
            className="min-h-full md:min-h-[90vh] flex flex-col justify-center py-12 sm:py-14 md:py-16"
          >
            <SectionHeader title="About" subtitle="Get to know me better" />
            <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-6 sm:gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="space-y-4 text-sm sm:text-base"
              >
                <div className="relative overflow-hidden w-fit">
                  <div style={{ opacity: 1, transform: "none" }}>
                    <p className="leading-relaxed text-muted-foreground">
                      <span className="bg-emerald-500 text-white py-2 px-3 rounded font-bold mr-1 float-left text-2xl">
                        H
                      </span>
                      ey! I'm Devang Banta, a passionate and dedicated software developer from Joginder Nagar, Himachal Pradesh. I recently completed my Master's degree in Computer Science from Chitkara University, where I honed my skills in programming, problem-solving, and software development. Alongside my studies, I also completed a 10-month internship as a Full Stack Developer at Virtusa, where I contributed to a team project, gaining hands-on experience in real-world applications.
                    </p>
                  </div>
                </div>
  
                <div className="relative overflow-hidden w-fit">
                  <div style={{ opacity: 1, transform: "none" }}>
                    <p className="leading-relaxed text-muted-foreground">
                      I specialize in Full Stack, Frontend, and Web Development technologies, with a strong foundation in modern frameworks and tools. Recently, I've been diving into React Native and AWS to expand my skill set and stay updated with the latest trends in the tech industry. I'm always eager to learn and adapt, whether it's exploring new programming languages or experimenting with cutting-edge technologies.
                    </p>
                  </div>
                </div>
  
                <div className="relative overflow-hidden w-fit">
                  <div style={{ opacity: 1, transform: "none" }}>
                    <p className="leading-relaxed text-muted-foreground">
                      I'm excited to continue growing as a developer, contributing to innovative projects, and collaborating with like-minded individuals. Whether it's building scalable web applications or exploring new technologies, I'm always ready to take on new challenges and make a meaningful impact.
                    </p>
                  </div>
                </div>
  
                <div className="relative overflow-hidden w-fit">
                  <div style={{ opacity: 1, transform: "none" }}>
                    <p className="leading-relaxed text-muted-foreground">
                      I'm passively looking for new positions where I can merge my love for code with my love for the canvas. If you think you've got an opening that I might like, let's connect 🔗
                    </p>
                  </div>
                </div>
  
                <div className="relative overflow-hidden w-fit">
                  <div style={{ opacity: 1, transform: "none" }}>
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-4 text-sm text-emerald-500">
                        <span>My links</span>
                        <ChevronRight />
                      </div>
                      <div className="flex items-center text-lg gap-4">
                        {links.map((link, index) => (
                          <a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="nofollow"
                            className="text-muted-foreground hover:text-emerald-500 transition-colors"
                          >
                            {link.icon}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
  
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="relative"
              >
                <div className="relative overflow-hidden w-fit">
                  <div style={{ opacity: 1, transform: "none" }}>
                    <div>
                      <h4 className="flex items-center mb-6">
                        <Code className="text-emerald-500 text-2xl" />
                        <span className="font-bold ml-2">Use at work</span>
                      </h4>
                      <div className="flex flex-wrap gap-2 mb-12">
                        {workSkills.map((skill, index) => (
                          <span key={index} className="px-3 py-1 rounded-md text-xs sm:text-sm bg-emerald-500/10 text-emerald-500">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
  
                  <div className="relative overflow-hidden w-fit">
                    <div style={{ opacity: 1, transform: "none" }}>
                      <div>
                        <h4 className="flex items-center mb-6">
                          <SquareActivity className="text-emerald-500 text-2xl" />
                          <span className="font-bold ml-2">Hobbies</span>
                        </h4>
                        <div className="flex flex-wrap gap-2 mb-12">
                          {hobbies.map((skill, index) => (
                            <span key={index} className="px-3 py-1 rounded-md text-xs sm:text-sm bg-emerald-500/10 text-emerald-500">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
  
          {/* Projects Section */}
          <section
            id="projects"
            className="min-h-full md:min-h-[90vh] flex flex-col justify-center py-12 sm:py-14 md:py-16"
          >
            <SectionHeader title="Projects" subtitle="Some of my recent work" />
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-8">
              {projects.slice(0, visibleProjects).map((project, index) => (
                <motion.div
                  key={index}
                  className="group relative border border-muted-foreground/20 bg-card cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
  
                  <div className="px-3 py-2">
                    <h3 className="text-sm sm:text-base font-semibold mb-2">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs font-medium bg-emerald-500/10 text-emerald-500 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
  
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-sm text-muted-foreground mb-3"
                    >
                      {expandedProjects[index]
                        ? project.description
                        : `${project.description.slice(0, 100)}...`}
                    </motion.p>
  
                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => toggleProjectDescription(index)}
                        className="text-xs text-emerald-500 hover:text-emerald-600 font-medium flex items-center gap-1"
                      >
                        {expandedProjects[index] ? 'Show Less' : 'Read More'}
                        <motion.span
                          animate={{
                            rotate: expandedProjects[index] ? 180 : 0,
                          }}
                          transition={{ duration: 0.1 }}
                        >
                          <ArrowRight className="w-3 h-3" />
                        </motion.span>
                      </button>
  
                      <div className="flex gap-3">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="text-muted-foreground hover:text-emerald-500 transition-colors"
                        >
                          <Github className="h-4 w-4" />
                        </motion.a>
                        <motion.a
                          href={project.preview}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="text-muted-foreground hover:text-emerald-500 transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
  
          {/* Experience Section */}
          <section
            id="experience"
            className="min-h-full md:min-h-[90vh] flex flex-col justify-center py-12 sm:py-14 md:py-16"
          >
            <SectionHeader
              title="Experience"
              subtitle="My professional journey"
            />
            <div className="relative pl-0 md:pl-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="mb-8 relative"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="absolute left-0 top-1.5 w-3 h-3 bg-emerald-500 rounded-full" />
  
                  {index !== experiences.length && (
                    <div className="absolute left-[5px] top-5 w-px h-full bg-gray-300" />
                  )}
  
                  <div className="ml-8">
                    <div className="">
                      <h3 className="text-lg font-semibold">{exp.role}</h3>
                      <p className="text-base text-muted-foreground">
                        {exp.company} • {exp.period} • {exp.location}
                      </p>
                    </div>
  
                    <p className="text-base mt-2">{exp.description}</p>
  
                    {exp.achievements && exp.achievements.length > 0 && (
                      <ul className="mt-2 space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-base text-muted-foreground">
                            • {achievement}
                          </li>
                        ))}
                      </ul>
                    )}
  
                    {exp.technologies && exp.technologies.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 text-sm font-medium bg-emerald-500/10 text-emerald-500 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
  
          {/* Certifications Section */}
          <section
            id="certifications"
            className="min-h-full md:min-h-[90vh] flex flex-col justify-center py-12 sm:py-14 md:py-16"
          >
            <SectionHeader
              title="Certifications"
              subtitle="Professional certifications and achievements"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="group relative bg-card cursor-pointer rounded-lg p-6 border border-border hover:border-emerald-500/30 hover:shadow-xl transition-all overflow-visible"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="absolute -top-4 -right-4 bg-emerald-500 text-white p-2 rounded-bl-lg rounded-tr-lg shadow-md transform rotate-12 group-hover:rotate-0 transition-transform z-20">
                    <Award className="h-5 w-5" />
                  </div>
  
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
  
                  <div className="relative z-10 space-y-3">
                    <h3 className="text-base font-semibold text-foreground">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {cert.issuer}
                    </p>
                    <div className="text-sm text-muted-foreground">
                      <p>Issued: {cert.date}</p>
                    </div>
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-emerald-500 hover:text-emerald-600 transition-colors"
                    >
                      View Certificate
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
  
          {/* Contact Section */}
          <section
            id="contact"
            className="min-h-[90vh] flex flex-col justify-center py-12 sm:py-14 md:py-16"
          >
            <div className="text-center space-y-6 sm:space-y-8">
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Let's Build Something{" "}
                <span className="text-emerald-500">Amazing</span>
                <br />
                Together
              </motion.h2>
              <motion.p
                className="text-sm sm:text-base md:text-xl text-muted-foreground max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Have a project in mind? Let's discuss how we can bring your vision to life. Connect me via{" "}
                <a
                  href="mailto:devangbanta44@gmail.com"
                  className="text-emerald-500 hover:text-emerald-500/80 no-underline"
                >
                  Email
                </a>
                ,{" "}
                <a
                  href="https://github.com/GitpreNeuR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-500 hover:text-emerald-500/80 no-underline"
                >
                  GitHub
                </a>
                , or{" "}
                <a
                  href="https://www.linkedin.com/in/devang-banta-9501b5207/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-500 hover:text-emerald-500/80 no-underline"
                >
                  LinkedIn
                </a>
                .
              </motion.p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
