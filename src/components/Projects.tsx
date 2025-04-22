
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

// Project data from the CV
const projects = [
  {
    id: 1,
    title: 'Heart Disease Prediction Web App',
    date: 'Aug 2024 - Nov 2024',
    description: 'A machine learning web application that predicts the risk of heart disease based on medical parameters.',
    technologies: ['Tableau Desktop', 'Excel', 'ML', 'Python', 'Pandas', 'NumPy'],
    points: [
      'Analyzed medical datasets to identify key patterns and risk factors associated with heart disease',
      'Cleaned, preprocessed, and visualized data using Pandas, NumPy',
      'Created interactive dashboards using Tableau to present insights in a user-friendly manner',
      'Conducted testing and validation to improve the reliability of predictions with an accuracy rate of 95%',
      'Collaborated with developers to integrate data-driven insights into the web application'
    ],
    // Using a reliable placeholder image
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
    demoLink: '#',
    repoLink: 'https://github.com/Immanual24'
  },
  {
    id: 2,
    title: 'Nike Sales Dashboard - Data Analysis & Visualization',
    date: 'Aug 2023 - Sept 2023',
    description: 'An interactive dashboard that visualizes Nike sales data, identifying trends and generating insights.',
    technologies: ['Tableau Desktop', 'Excel', 'Python'],
    points: [
      'Created an interactive Tableau dashboard to analyze Nike\'s sales data',
      'Processed 3,360+ transactions to identify key sales trends and insights with an accuracy rate of 99%',
      'Analyzed product and retailer performance to highlight top-selling items',
      'Examined sales channel efficiency, emphasizing in-store vs. online sales',
      'Identified seasonal trends to optimize marketing and inventory planning'
    ],
    // Using a reliable placeholder image
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    demoLink: '#',
    repoLink: 'https://github.com/Immanual24'
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
      {project.image ? (
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
        <div className="text-white font-bold text-xl">
          {project.title.split(' ').slice(0, 2).join(' ')}
        </div>
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
