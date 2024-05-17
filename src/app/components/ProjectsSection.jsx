"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Bad Bith Songs Cover Art",
    description: "Sijal Leito Khalse Canis",
    image: "/images/projects/1.png",
    tag: "Design",
    gitUrl: "/images/projects/1.png",
    previewUrl: "/images/projects/1.png",
  },
  {
    id: 2,
    title: "Homie Songs Cover Art",
    description: "Mehyad",
    image: "/images/projects/2.png",
    tag: "Design",
    gitUrl: "/images/projects/2.png",
    previewUrl: "/images/projects/2.png",
  },
  {
    id: 3,
    title: "Eybi Nadare Songs Cover Art",
    description: "Talkdown X Fedi",
    image: "/images/projects/3.png",
    tag: "Design",
    gitUrl: "/images/projects/3.png",
    previewUrl: "/images/projects/3.png",
  },
  {
    id: 4,
    title: "Bemoon Ba Man Songs Cover Art",
    description: "Koorosh X Arta",
    image: "/images/projects/4.png",
    tag: "Design",
    gitUrl: "/images/projects/4.png",
    previewUrl: "/images/projects/4.png",
  },
  {
    id: 5,
    title: "French X",
    description: "Nazli Mcfian",
    image: "/images/projects/5.png",
    tag: "Design",
    gitUrl: "/images/projects/5.png",
    previewUrl: "/images/projects/5.png",
  },
  {
    id: 6,
    title: "Homie Songs Cover Art",
    description: "Mehyad",
    image: "/images/projects/6.png",
    tag: "Design",
    gitUrl: "/images/projects/6.png",
    previewUrl: "/images/projects/6.png",
  },
  {
    id: 7,
    title: "Edame Songs Cover Art",
    description: "Mahyar",
    image: "/images/projects/7.png",
    tag: "Design",
    gitUrl: "/images/projects/7.png",
    previewUrl: "/images/projects/7.png",
  },
  {
    id: 8,
    title: "Parvane ha Songs Cover Art",
    description: "Mehyad X Lennah",
    image: "/images/projects/8.png",
    tag: "Design",
    gitUrl: "/images/projects/8.png",
    previewUrl: "/images/projects/8.png",
  },
  {
    id: 9,
    title: "Parvaz Songs Cover Art",
    description: "Xarshia",
    image: "/images/projects/9.png",
    tag: "Design",
    gitUrl: "/images/projects/9.png",
    previewUrl: "/images/projects/9.png",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Design");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Design"
          isSelected={tag === "Design"}
        />
        {/* <ProjectTag
          onClick={handleTagChange}
          name="Cover Art"
          isSelected={tag === "Cover Art"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="UI"
          isSelected={tag === "UI"}
        /> */}
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
