import { Building2, Calendar, MapPin, CheckCircle } from 'lucide-react';

const ExperienceSection = () => {
  const experience = {
    role: 'Software Department Intern',
    company: 'National Steel Fabrication (NSF)',
    location: 'October City, Egypt',
    duration: '14 July to 4 August 2022 (3 weeks)',
    keyLearnings: [
      'Successfully completed an intensive 3-week training program',
      'Gained practical knowledge in Database Fundamentals, including relational models and basic SQL',
      'Learned about software lifecycle processes in an industrial environment',
      'Participated in hands-on tasks and team-based learning activities'
    ]
  };

  const education = {
    degree: 'B.Sc. in Computer Science and Artificial Intelligence',
    university: 'Helwan University, Faculty of Computers and Artificial Intelligence',
    duration: '2021 - 2025',
    status: 'Expected Graduation'
  };

  return (
    <section id="experience" className="py-20 section-separator">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Experience & <span className="text-gradient">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div className="animate-fade-in-left">
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
              <Building2 className="w-6 h-6 text-primary" />
              Professional Experience
            </h3>
            
            <div className="project-card p-6">
              <div className="mb-4">
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  {experience.role}
                </h4>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-primary" />
                    <span className="font-medium text-foreground">{experience.company}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{experience.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{experience.duration}</span>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-semibold text-foreground mb-3">Key Learnings:</h5>
                <div className="space-y-3">
                  {experience.keyLearnings.map((learning, index) => (
                    <div 
                      key={index} 
                      className="flex items-start gap-3"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">
                        {learning}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="animate-fade-in-right">
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
              <Calendar className="w-6 h-6 text-primary" />
              Education
            </h3>
            
            <div className="project-card p-6">
              <div className="mb-4">
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  {education.degree}
                </h4>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-primary" />
                    <span className="font-medium text-foreground">{education.university}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{education.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-green-400 font-medium">{education.status}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-secondary/50 rounded-lg">
                <h5 className="font-semibold text-foreground mb-2">Focus Areas:</h5>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Computer Science',
                    'Artificial Intelligence',
                    'Software Engineering',
                    'Database Systems',
                    'Web Development'
                  ].map((area) => (
                    <span
                      key={area}
                      className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Visualization */}
        <div className="mt-16 animate-fade-in-up">
          <h3 className="text-xl font-semibold text-foreground text-center mb-8">Journey Timeline</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-3">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground">2021</h4>
              <p className="text-sm text-muted-foreground">Started University</p>
            </div>
            
            <div className="hidden md:block w-12 h-px bg-gradient-to-r from-primary to-accent"></div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-3">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground">2022</h4>
              <p className="text-sm text-muted-foreground">NSF Internship</p>
            </div>
            
            <div className="hidden md:block w-12 h-px bg-gradient-to-r from-primary to-accent"></div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-3">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground">2025</h4>
              <p className="text-sm text-muted-foreground">Expected Graduation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;