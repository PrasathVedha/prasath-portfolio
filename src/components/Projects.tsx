import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const AnimatedCloud = () => (
  <svg
    viewBox="0 0 140 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full object-contain"
  >
    <g>
      <motion.ellipse
        cx="70"
        cy="45"
        rx="35"
        ry="18"
        fill="#fff"
        initial={{ x: -30 }}
        animate={{ x: [ -30, 30, -30 ] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut"
        }}
        style={{ filter: 'drop-shadow(0px 6px 8px rgba(120,120,140,0.08))' }}
      />
      <ellipse cx="53" cy="38" rx="18" ry="13" fill="#fff" />
      <ellipse cx="89" cy="40" rx="15" ry="10" fill="#fff" />
      <ellipse cx="77" cy="33" rx="11" ry="7" fill="#fff" />
    </g>
  </svg>
);

const projects = [
  {
    id: 1,
    title: 'AWS Storage',
    date: 'March 2025',
    description: 'A simple web application that allows users to upload files to secure cloud storage and download them.',
    technologies: ['AWS S3', 'HTML'],
    points: [
      'Developed a web application for secure file storage',
      'Enabled interaction with AWS S3 cloud storage services',
      'Implemented dynamic web page for data uploading and retrieval'
    ],
    image: <AnimatedCloud />
  },
  {
    id: 2,
    title: 'Sudoku Solver',
    date: 'July 2024',
    description: 'A Python program using backtracking algorithm to solve Sudoku puzzles.',
    technologies: ['Python', 'Backtracking Algorithm'],
    points: [
      'Developed a powerful Python program for solving Sudoku puzzles',
      'Implemented backtracking algorithm for puzzle solving',
      'Handles any standard Sudoku puzzle efficiently',
      'Demonstrated strong algorithmic problem-solving skills'
    ],
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b'
  },
  {
    id: 3,
    title: 'Sports Website',
    date: 'November 2022',
    description: 'A dynamic sports e-commerce website showcasing diverse sporting equipment.',
    technologies: ['HTML', 'CSS'],
    points: [
      'Designed and developed a dynamic sports e-commerce website',
      'Provided smooth navigation and interactive interface',
      'Optimized for dynamic user experience',
      'Incorporated responsive design for mobile compatibility'
    ],
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211'
  }
];

const ProjectCard = ({ project, index }: { project: any, index: number }) => (
  <motion.div
    className="data-card overflow-hidden card-hover"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <div className="h-48 bg-gradient-to-r from-data-blue to-data-purple flex items-center justify-center relative overflow-hidden">
      {typeof project.image === 'string' ? (
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
          onError={(e) => {
            console.error(`Failed to load image for ${project.title}:`, project.image);
            const target = e.target as HTMLImageElement;
            target.onerror = null; // Prevent infinite loop
            target.src = 'https://images.unsplash.com/photo-1518770660439-4636190af475'; // Alternative fallback
          }}
        />
      ) : (
        project.image // Render JSX animated SVG if provided
      )}
    </div>
    
    <div className="p-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-medium">{project.title}</h3>
        <span className="text-sm text-gray-500">{project.date}</span>
      </div>
      
      <p className="text-gray-600 mb-4">{project.description}</p>
      
      <div className="mb-4">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Key Achievements:</h4>
        <ul className="list-disc pl-5 space-y-1 text-gray-600">
          {project.points.slice(0, 3).map((point: string, i: number) => (
            <li key={i} className="text-sm">{point}</li>
          ))}
        </ul>
      </div>
      
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Technologies:</h4>
        <div className="flex flex-wrap">
          {project.technologies.map((tech: string, i: number) => (
            <span 
              key={i} 
              className="skill-badge"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <div className="flex space-x-3">
        <Button asChild size="sm" variant="outline" className="border-data-blue text-data-blue hover:bg-data-blue/10">
          <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
        </Button>
        <Button asChild size="sm" className="bg-data-blue hover:bg-data-blue/90">
          <a href={project.repoLink} target="_blank" rel="noopener noreferrer">GitHub</a>
        </Button>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-data-lightGray">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Projects</h2>
          <div className="section-subtitle">
            Here are some of my recent data analysis projects
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-gray-600 mb-6">
            Want to see more of my projects? Visit my GitHub for additional work.
          </p>
          <Button asChild className="bg-primary hover:bg-primary/90">
            <a 
              href="https://github.com/Immanual24" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <svg
                className="mr-2 h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              View GitHub Profile
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
