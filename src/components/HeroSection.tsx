import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import andrewHeadshot from '@/assets/andrew-headshot.jpg';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      {/* Background particles/decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-20 h-20 border border-primary/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 border border-primary/20 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <div className="animate-fade-in-left space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Andrew Sherif{' '}
                <span className="text-gradient">Shokry</span>
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium">
                Aspiring Full Stack Developer
              </h2>
              <h3 className="text-lg md:text-xl text-primary font-medium">
                Front-End & AI Enthusiast
              </h3>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Crafting intuitive web experiences and innovative solutions with a creative edge. 
              Passionate about building complete, user-friendly web solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-all duration-300 hover:scale-105"
              >
                View My Work
                <ArrowDown className="ml-2 w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
              >
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://github.com/AndrewSherif0"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/andrew-sherif-a93781306/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:Andrewsherif2013@gmail.com"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right column - Photo */}
          <div className="animate-fade-in-right flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl transform rotate-6"></div>
              <img
                src={andrewHeadshot}
                alt="Andrew Sherif Shokry"
                className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;