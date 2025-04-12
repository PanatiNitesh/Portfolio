import { FaReact, FaNodeJs, FaDatabase, FaCode } from 'react-icons/fa';
import Link from 'next/link';

export default function SkillsSection() {
  const skills = [
    {
      icon: <FaReact className="text-4xl text-primary mb-4" />,
      title: "Frontend Development",
      description: "Building responsive and interactive UIs with React, Next.js, and modern CSS frameworks.",
      technologies: ["React", "Next.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
      icon: <FaNodeJs className="text-4xl text-primary mb-4" />,
      title: "Backend Development",
      description: "Developing robust server-side applications with Node.js, Express, and Java Spring Boot.",
      technologies: ["Node.js", "Express", "Java Spring Boot", "RESTful APIs"]
    },
    {
      icon: <FaDatabase className="text-4xl text-primary mb-4" />,
      title: "Database Management",
      description: "Working with both SQL and NoSQL databases to store and manage application data efficiently.",
      technologies: ["MongoDB", "MySQL", "PostgreSQL"]
    },
    {
      icon: <FaCode className="text-4xl text-primary mb-4" />,
      title: "Programming",
      description: "Proficient in multiple programming languages for different application needs.",
      technologies: ["JavaScript", "Python", "Java", "C"]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">My Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {skills.map((skill, index) => (
            <div key={index} className="card text-center">
              <div className="flex justify-center">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
              <p className="text-gray-600 mb-4">{skill.description}</p>
              <div className="flex flex-wrap justify-center gap-2">
                {skill.technologies.slice(0, 3).map((tech, i) => (
                  <span key={i} className="tech-pill">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/skills" className="btn-primary">
            View All Skills
          </Link>
        </div>
      </div>
    </section>
  );
}