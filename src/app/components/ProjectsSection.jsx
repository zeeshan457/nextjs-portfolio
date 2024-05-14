"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Stocks-Processing-Web-Application",
    description: "This system recommends equities to investors based on metrics; the metrics come from historical data and are managed by the system to process them. As a result, this application will help market players with investments.",
    image: "/images/projects/stock_processing.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "ReviseAI",
    description: "ReviseWise is an SAAS based AI-powered academic revision and task management platform designed to help students efficiently prepare for exams and manage their study schedules. It combines advanced AI chat capabilities with intuitive task management features to streamline the revision process..",
    image: "/images/projects/ReviseAI.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Autonomous-Flight-Control-System",
    description: "The Autonomous Flight Control Drone project is an innovative and challenging endeavour that aims to develop an intelligent drone capable of flying autonomously, navigating through predefined waypoints, and avoiding obstacles in real-time. The drone will utilize cutting-edge Java programming.",
    image: "/images/projects/drone_application.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Desk Booking Application",
    description: "Due to the ongoing pandemic, all university employees are now advised to reserve their desks while returning to campus. The goal of this project is to develop a desktop application that allows university staff to reserve desks in university buildings. There will be three buildings, each of which will include a number of desks that can be reserved, with some of these desks having unique features. The software must include a front end, a back end (for data storage), and an application layer – a three-tier design is required.",
    image: "/images/projects/manager.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Login MFA System",
    description: "The login Multi-Factor Authentication (MFA) system with SMS and email authentication adds an extra layer of security to the traditional login process. With MFA, users are required to provide two or more authentication factors to prove their identity, making it much harder for attackers to gain unauthorized access to user accounts.",
    image: "/images/projects/loginMFA.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Google Maps Navigation Application",
    description: "An effective mobile application that allows users to search for locations like cities, countries, or famous landmarks using a search map to query a map interface Locations can also be saved and navigated to externally.",
    image: "/images/projects/mobile_app_search.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
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
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
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
