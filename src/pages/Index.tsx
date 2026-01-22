import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Music, Award } from "lucide-react";

// Import images
import heroImage from "@/assets/dance-hero.jpeg";
import classicalImage from "@/assets/dance-classical-1.jpeg";
import kathakImage from "@/assets/dance-kathak.jpeg";
import folkImage from "@/assets/dance-folk.jpeg";
import performanceImage from "@/assets/dance-performance-1.jpeg";
import stageImage from "@/assets/dance-stage.jpeg";

const danceStyles = [
  {
    name: "Classical Dance",
    description: "Master the foundational techniques, expressions, and rhythm of traditional Indian dance forms.",
    image: classicalImage,
  },
  {
    name: "Semi-Classical",
    description: "Blend classical grace with modern movements for a unique dance expression.",
    image: kathakImage,
  },
  {
    name: "Bollywood",
    description: "High-energy, expressive, filmy style dance with popular choreography.",
    image: performanceImage,
  },
  {
    name: "Hip-Hop",
    description: "Street style, freestyle, grooves, and contemporary choreography.",
    image: stageImage,
  },
  {
    name: "Contemporary",
    description: "Fluid movements, storytelling, and emotional expression through dance.",
    image: folkImage,
  },
  {
    name: "Dance Fitness",
    description: "Fun workouts through dance - Zumba-style classes for all fitness levels.",
    image: performanceImage,
  },
];

const stats = [
  { icon: Users, value: "500+", label: "Happy Students" },
  { icon: Music, value: "7+", label: "Dance Styles" },
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: Star, value: "50+", label: "Shows Performed" },
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Parent",
    quote: "My daughter has transformed completely. Her confidence and grace have improved tremendously since joining V can Dance!",
  },
  {
    name: "Rahul Verma",
    role: "Adult Student",
    quote: "I never thought I could dance at 35, but V can Dance proved me wrong. Amazing instructors and welcoming environment!",
  },
  {
    name: "Ananya Singh",
    role: "Teen Student",
    quote: "The best dance studio ever! Learning Bollywood and Hip-Hop here has been the highlight of my week.",
  },
];

const Index = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Dance performance"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="container-custom relative z-10">
          <div className="max-w-3xl animate-slide-up">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
              Welcome to V can Dance
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
              Feel the Beat.{" "}
              <span className="gradient-text">Own the Move.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              Discover the dancer within you at our vibrant studio. From classical
              to hip-hop, we offer dance classes for all ages and skill levels.
              Dance is for everyone!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg px-8 glow-primary"
              >
                <Link to="/classes">
                  Join a Class
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-8 border-primary/50 hover:bg-primary/10"
              >
                <Link to="/contact">Book a Free Trial</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <stat.icon className="w-10 h-10 mx-auto mb-4 text-primary" />
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dance Styles Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
              Our Classes
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Explore Our <span className="gradient-text">Dance Styles</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From traditional classical forms to modern hip-hop, we offer a
              diverse range of dance styles for kids, teens, and adults.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {danceStyles.map((style, index) => (
              <Link
                key={style.name}
                to="/classes"
                className="group glass-card rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={style.image}
                    alt={style.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {style.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {style.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary/50 hover:bg-primary/10"
            >
              <Link to="/classes">
                View All Classes
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Age Groups */}
      <section className="section-padding bg-gradient-to-b from-card to-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Classes for <span className="gradient-text">Every Age</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Whether you're 5 or 50, there's a perfect class waiting for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Kids (5-12)",
                description:
                  "Fun, engaging classes that build coordination, confidence, and creativity through age-appropriate choreography.",
                color: "from-pink-500 to-rose-500",
              },
              {
                title: "Teens (13-18)",
                description:
                  "Dynamic classes featuring trending choreography, self-expression, and performance opportunities.",
                color: "from-purple-500 to-violet-500",
              },
              {
                title: "Adults (18+)",
                description:
                  "From beginners to advanced, enjoy dance as fitness, art, or a creative outlet. Never too late to start!",
                color: "from-blue-500 to-cyan-500",
              },
            ].map((group, index) => (
              <div
                key={group.title}
                className="glass-card rounded-2xl p-8 text-center hover:scale-[1.02] transition-transform"
              >
                <div
                  className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br ${group.color} flex items-center justify-center`}
                >
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{group.title}</h3>
                <p className="text-muted-foreground">{group.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              What Our <span className="gradient-text">Students Say</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="glass-card rounded-2xl p-8"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-500 fill-yellow-500"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary/50 hover:bg-primary/10"
            >
              <Link to="/testimonials">
                Read More Stories
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Ready to Start Your{" "}
            <span className="gradient-text">Dance Journey?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-lg">
            Book a free trial class and discover why hundreds of students love
            dancing with us. Your first step towards becoming a confident dancer
            starts here!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg px-8 glow-primary"
            >
              <Link to="/contact">
                Book Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 border-foreground/20 hover:bg-foreground/5"
            >
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
