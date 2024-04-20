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
    tag: ["All", "Web"],
    gitUrl: "/https://github.com/zeeshan457/Stocks-Processing-Web-Application",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "CyberFlowGuard",
    description: "An SAAS product helping users to secure their network from cyber attacks. It provides a real-time monitoring system to detect and prevent cyber attacks. It also provides a dashboard to visualize the network traffic and security status.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/https://github.com/zeeshan457/CyberFlowGuard",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Autonomous-Flight-Control-System",
    description: "The Autonomous Flight Control Drone project is an innovative and challenging endeavour that aims to develop an intelligent drone capable of flying autonomously, navigating through predefined waypoints, and avoiding obstacles in real-time. The drone will utilize cutting-edge Java programming.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/https://github.com/zeeshan457/Autonomous_Flight_Control_System",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Desk Booking Application",
    description: "Due to the ongoing pandemic, all university employees are now advised to reserve their desks while returning to campus. The goal of this project is to develop a desktop application that allows university staff to reserve desks in university buildings. There will be three buildings, each of which will include a number of desks that can be reserved, with some of these desks having unique features. The software must include a front end, a back end (for data storage), and an application layer – a three-tier design is required.",
    image: "/images/projects/1.png",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "/https://github.com/zeeshan457/Java-Projects/tree/main/Desk_Booking_Application",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Login MFA System",
    description: "The login Multi-Factor Authentication (MFA) system with SMS and email authentication adds an extra layer of security to the traditional login process. With MFA, users are required to provide two or more authentication factors to prove their identity, making it much harder for attackers to gain unauthorized access to user accounts.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/https://github.com/zeeshan457/Login_MFA_System",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "The Mist",
    description: "A single player survival game in an open world environment. You wake up in a strange deserted island and you must survive by finding resources, but you are not ALONE!",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/https://github.com/zeeshan457/TheMist",
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
