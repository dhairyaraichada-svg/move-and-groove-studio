import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Target, Star, Users, Award, Music, ArrowRight } from "lucide-react";

import founderImage from "@/assets/dance-founder.jpeg";
import performanceImage from "@/assets/dance-performance-1.jpeg";
import stageImage from "@/assets/dance-stage.jpeg";

const values = [
  {
    icon: Heart,
    title: "Passion",
    description: "We believe dance is an expression of the soul. Our passion for dance drives everything we do.",
  },
  {
    icon: Target,
    title: "Discipline",
    description: "Through consistent practice and dedication, we help students develop focus and discipline.",
  },
  {
    icon: Star,
    title: "Creativity",
    description: "We encourage creative expression and help each student find their unique dance voice.",
  },
  {
    icon: Users,
    title: "Inclusivity",
    description: "Dance is for everyone. We welcome students of all ages, backgrounds, and skill levels.",
  },
];

const milestones = [
  { year: "2014", title: "Founded", description: "V can Dance was born from a vision to make dance accessible to everyone." },
  { year: "2016", title: "First Annual Show", description: "Our students performed their first grand annual showcase." },
  { year: "2018", title: "Expanded Classes", description: "Added Hip-Hop, Contemporary, and Dance Fitness to our offerings." },
  { year: "2020", title: "Online Classes", description: "Launched virtual classes to continue teaching during the pandemic." },
  { year: "2023", title: "500+ Students", description: "Celebrated training over 500 happy dancers across all age groups." },
];

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={stageImage}
            alt="Dance performance"
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
              Our Story
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              About <span className="gradient-text">V can Dance</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Where passion meets discipline and fun. We're on a mission to make
              dance accessible, enjoyable, and transformative for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                The <span className="gradient-text">V can Dance</span> Story
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                V can Dance was founded with a simple yet powerful belief: everyone
                can dance. What started as a small studio with a handful of
                students has grown into a vibrant community of dancers across all
                age groups.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our founder's journey began with classical dance training at a
                young age, followed by years of learning and performing various
                dance forms. This diverse background inspired the vision for V can
                Dance - a studio that celebrates all forms of dance while staying
                rooted in tradition.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we offer seven different dance styles and have trained
                hundreds of students who have discovered confidence, creativity,
                and joy through dance. Our stage performances, workshops, and
                events continue to spread the magic of dance to new audiences.
              </p>
              <Button asChild className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                <Link to="/instructor">
                  Meet Our Instructor
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img
                  src={founderImage}
                  alt="V can Dance founder"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gradient-to-br from-primary to-secondary rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="glass-card rounded-2xl p-8 md:p-12">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To create a world where every individual, regardless of age or
                background, can experience the transformative power of dance. We
                envision V can Dance as a space where passion meets discipline,
                where creativity flourishes, and where every student discovers
                their inner dancer.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 md:p-12">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide high-quality dance education that builds confidence,
                discipline, creativity, and fitness. We are committed to offering
                a welcoming, inclusive environment where students of all skill
                levels can learn, grow, and express themselves through the art of
                dance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
              What We Stand For
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              Our Core <span className="gradient-text">Values</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="glass-card rounded-2xl p-8 text-center hover:scale-[1.02] transition-transform"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="section-padding bg-gradient-to-b from-card to-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              Our <span className="gradient-text">Journey</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                    {milestone.year}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-gradient-to-b from-primary to-transparent mt-4" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Join Our Dance Family
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Be part of a community that celebrates movement, creativity, and
            self-expression. Start your dance journey with us today!
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 glow-primary"
          >
            <Link to="/contact">
              Book a Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
