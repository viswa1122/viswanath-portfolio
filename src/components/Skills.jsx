import React from "react";
import python from "../assets/images/python.svg"
import k8s from "../assets/images/k8s.svg"
import maven from "../assets/images/maven-logo.jpeg"
import gradle from "../assets/images/gradle-logo.svg"
import jenkins from "../assets/images/jenkins.png"
import ansible from "../assets/images/ansible.png"
import sonarqube from "../assets/images/sonarqube.svg"
import docker from "../assets/images/docker-logo.png"
import github from "../assets/images/github-logo.png"
import aws from "../assets/images/aws.png"
import linux from "../assets/images/linux.png"
import terraform from "../assets/images/terraform.png"
import grafana from "../assets/images/grafana.png"
import prometheus from "../assets/images/prometheus.png"
import elk from "../assets/images/elk.svg"
import nexus from "../assets/images/nexus.png"
import bash from "../assets/images/bash.png"
import helm from "../assets/images/helm.svg"

const Skills = () => {
  const skills = [
    {
      img: aws,
      name: "AWS",
    },
    {
      img: linux,
      name: "Linux",
    },
    {
      img: github,
      name: "Git & GitHub",
    },
    {
      img: maven,
      name: "Maven",
    },
    {
      img: gradle,
      name: "Gradle",
    },
    {
      img: nexus,
      name: "nexus",
    },
    {
      img: ansible,
      name: "Ansible",
    },
    {
      img: jenkins,
      name: "Jenkins",
    },
    {
      img: sonarqube,
      name: "Snoarqube",
    },
    {
      img: docker,
      name: "Docker",
    },
    {
      img: k8s,
      name: "Kubernetes",
    },
    {
      img: python,
      name: "Python",
    },
    {
      img: grafana,
      name: "Grafana",
    },
    {
      img: prometheus,
      name: "Prometheus",
    },
    {
      img: elk,
      name: "ELK",
    },
    {
      img: terraform,
      name: "Terraform",
    },
    {
      img: bash,
      name: "Bash",
    },
    {
      img: helm,
      name: "Helm",
    },
  ];
  return (
    <section id="skills" className="py-10 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          <span className="text-yellow-600">My</span> <span className="text-gray-700">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
        <div className="grid grid-cols-2 lg:grid-cols-5 lg:w-[70%] lg:mx-auto place-items-center justify-center mt-12 gap-10 mx-4">
          {skills?.map((skill, i) => (
            <div
              key={i}
              className="bg-gray-800 grid gap-[2rem] justify-center items-center p-5 w-[10rem] h-[10rem] rounded-md hover:shadow-md hover:scale-[1.1] transition-[0.4s]  hover:text-yellow-600"
            >
              <div className="justify-self-center w-16 h-16 border-[1px] border-yellow-500 rounded-full flex justify-center items-center">
                <img
                  src={skill.img}
                  alt="Figma Logo"
                  className={`w-[2.5rem] h-[2.5rem] ${["CSS", "Spring Data JPA", "Microservices", "Maven", "Docker", "Git & GitHub", "AWS fundamentals"].includes(skill.name) ? "rounded-full" : ""}`}
                />
              </div>
              <h3 className="mt-[-25px] font-semibold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
