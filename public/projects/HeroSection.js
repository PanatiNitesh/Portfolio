import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-white py-20">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Hi, I'm <span className="text-primary">Nitesh Reddy</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-gray-600 mb-6">
            Full Stack Developer
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            I'm passionate about building modern web applications and crafting exceptional user experiences.
            With expertise in both frontend and backend technologies, I create robust, scalable solutions.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/projects" className="btn-primary">
              View My Work
            </Link>
            <Link href="/contact" className="btn-outline">
              Get In Touch
            </Link>
          </div>
        </div>
        
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white shadow-xl">
            <Image
              src="/profile-image.jpg"
              alt="Nitesh Reddy"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}