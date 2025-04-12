import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export default function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">About Me</h2>
        
        <div className="max-w-3xl">
          <p className="text-gray-700 mb-6">
            I'm a passionate developer with expertise in web development and programming. My journey in tech has equipped me with
            a diverse skill set spanning both frontend and backend technologies, allowing me to build complete web applications 
            from the ground up.
          </p>
          
          <p className="text-gray-700 mb-8">
            During my internship at JB Portals, I worked on real-world projects that honed my skills in full-stack development.
            I thrive on solving complex problems and creating elegant, user-friendly solutions.
          </p>
          
          <Link href="/about" className="inline-flex items-center text-primary font-medium hover:underline">
            Learn more about me
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}