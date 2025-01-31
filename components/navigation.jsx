"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Home,
  User,
  FolderKanban,
  Briefcase,
  Award,
  Contact,
  Sun,
  Moon,
} from "lucide-react";

const Navigation = ({ theme, setTheme, activeSection, setActiveSection }) => {
  const sections = [
    { id: 'hero', icon: Home, label: 'Hero' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'projects', icon: FolderKanban, label: 'Projects' },
    { id: 'experience', icon: Briefcase, label: 'Experience' },
    { id: 'certifications', icon: Award, label: 'Certifications' },
    { id: 'contact', icon: Contact, label: 'Contact' },
  ];

  const sections2 = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Proj." },
    { id: "experience", label: "Exp." },
    { id: "certifications", label: "Cert." },
    { id: "contact", label: "Cont." },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map((section) => ({
        id: section.id,
        element: document.getElementById(section.id),
      }));

      const currentSection = sectionElements.find((section) => {
        if (!section.element) return false;
        const rect = section.element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setActiveSection]);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed  left-0 top-1/2 -translate-y-1/2 w-16 hidden lg:flex lg:flex-col items-center">
      <Button
        variant="ghost"
        size="icon"
        className="hover:bg-transparent"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {theme === 'dark' ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )}
      </Button>
      <div className="h-10 w-[2px] rounded-full bg-border" />

      <motion.div
        className="flex flex-col space-y-4 items-center"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2, // Delay between each child animation
            },
          },
        }}
      >
        {sections.map(({ id, icon: Icon, label }, index) => (
          <motion.div
            key={id}
            variants={{
              hidden: { opacity: 0, x: -20 }, // Initial state (hidden, off-screen to the left)
              visible: { opacity: 1, x: 0 }, // Animated state (visible, slides in from the left)
            }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            <Button
              variant="ghost"
              size="icon"
              className={`rounded-full transition-all duration-200 ${
                activeSection === id ? 'bg-emerald-500' : 'hover:bg-primary/10'
              }`}
              onClick={() => {
                document
                  .getElementById(id)
                  ?.scrollIntoView({ behavior: 'smooth' });
                setActiveSection(id);
              }}
            >
              <Icon className="h-5 w-5" />
              <span className="sr-only">{label}</span>
            </Button>
          </motion.div>
        ))}
      </motion.div>
    </nav>

      {/* Mobile Navigation */}
      <nav className="no-scrollbar lg:hidden  bg-muted-foreground/10  md:w-12 w-10 h-screen gap-2 sticky top-0 left-0 z-20 flex flex-col items-center  overflow-y-scroll overflow-x-hidden" style={{transform:'none'}}>
          {sections2.map(({ id, label }) => (
            <button
              key={id}
              className={`writing-vertical-rl -rotate-90 py-10 px-6 overflow-hidden w-fit font-bold shrink-0 flex items-center justify-center  text-sm transition-all ${
                activeSection === id
                  ? "text-emerald-500 bg-primary/10"
                  : "hover:bg-primary/10"
              }`}
              onClick={() => {
                document
                  .getElementById(id)
                  ?.scrollIntoView({ behavior: "smooth" });
                setActiveSection(id);
              }}
            >
              {label}
            </button>
          ))}
      </nav>
    </>
  );
};
<a class="writing-vertical h-24 shrink-0 flex items-center justify-center border-r-2 text-sm transition-all w-full border-transparent hover:border-r-zinc-50 opacity-50 hover:bg-zinc-900" style="transform: none;" href="/#about">About</a>

export default Navigation;