import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
const Hero = () => {
  return <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-white to-data-lightGray">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div className="md:w-1/2" initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.5
        }}>
            <h2 className="text-lg text-data-blue font-medium mb-2">Hello, I'm</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Prasath Vedharethinam
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-700 mb-6">Cloud Consultant</h2>
            <p className="text-gray-600 max-w-lg mb-8">A passionate third-year Information Technology student at Lovely Professional University with expertise in cloud platforms, programming languages and web development.</p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-data-blue hover:bg-data-blue/90">
                <a href="#projects">View My Work</a>
              </Button>
              <Button asChild variant="outline" className="border-data-blue text-data-blue hover:bg-data-blue/10">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </motion.div>
          
          <motion.div className="md:w-1/2 flex justify-center" initial={{
          opacity: 0,
          x: 20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }}>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-white border-4 border-white shadow-xl">
              {/* Actual profile image */}
              <img src="/lovable-uploads/c2705f07-4ab7-4c1a-aec5-dbd3c11c89e8.png" alt="Immanual Joseph Martin" className="w-full h-full object-cover" />
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-data-peach"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-data-purple"></div>
            </div>
          </motion.div>
        </div>
        
        <motion.div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center" initial={{
        opacity: 0,
        y: -10
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.8,
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 0.2
      }}>
          <p className="text-sm text-gray-500 mb-2">Scroll Down</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-data-blue">
            <path d="M12 5v14"></path>
            <path d="m19 12-7 7-7-7"></path>
          </svg>
        </motion.div>
      </div>
    </section>;
};
export default Hero;