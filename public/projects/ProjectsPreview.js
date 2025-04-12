import Link from 'next/link';
import ProjectCard from './ProjectCard';

export default function ProjectsPreview() {
  const featuredProjects = [
    {
      id: 1,
      title: "Banking System with Transaction Management",
      description: "A secure banking application that manages user accounts, transactions, and loan processing.",
      image: "/projects/banking-system.jpg",
      technologies: ["Java", "Spring Boot", "MongoDB", "Multithreading"],
      demoLink: "https://pluto-banking.netlify.app/",
      githubLink: "https://github.com/PanatiNitesh/banking-system"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8 mt-12">
          {featuredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/projects" className="btn-primary">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}