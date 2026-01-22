import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Users, Star } from "lucide-react";

import classicalImage from "@/assets/dance-classical-1.jpeg";
import kathakImage from "@/assets/dance-kathak.jpeg";
import folkImage from "@/assets/dance-folk.jpeg";
import performanceImage from "@/assets/dance-performance-1.jpeg";
import stageImage from "@/assets/dance-stage.jpeg";
import traditionalImage from "@/assets/dance-traditional.jpeg";
import studentImage from "@/assets/dance-student-1.jpeg";

const danceClasses = [
  {
    id: "classical",
    name: "Classical Dance",
    tagline: "Master the Art of Tradition",
    description:
      "Dive deep into the rich heritage of Indian classical dance forms. Learn foundational techniques, intricate hand gestures (mudras), expressive facial movements (abhinaya), and rhythmic footwork. Our classical dance training builds grace, discipline, and a strong connection to cultural roots.",
    image: classicalImage,
    features: [
      "Bharatanatyam & Kathak foundations",
      "Traditional expressions (Abhinaya)",
      "Rhythmic patterns & footwork",
      "Cultural storytelling through dance",
    ],
    ageGroups: "Kids (6+), Teens, Adults",
    levels: "Beginner to Advanced",
    duration: "60-90 minutes",
  },
  {
    id: "semi-classical",
    name: "Semi-Classical Dance",
    tagline: "Where Tradition Meets Modernity",
    description:
      "Experience the beautiful blend of classical grace with contemporary movements. Semi-classical dance offers the elegance of traditional forms with the freedom of modern expression, perfect for those who want to explore beyond pure classical while honoring its roots.",
    image: kathakImage,
    features: [
      "Fusion of classical & modern",
      "Graceful fluid movements",
      "Versatile performance style",
      "Creative choreography",
    ],
    ageGroups: "Kids (8+), Teens, Adults",
    levels: "Beginner to Intermediate",
    duration: "60 minutes",
  },
  {
    id: "bollywood",
    name: "Bollywood Dance",
    tagline: "Feel the Filmy Magic",
    description:
      "Bring the energy of Indian cinema to life! Our Bollywood dance classes feature high-energy choreography from popular songs, expressive movements, and the pure joy of dancing to your favorite Hindi film tracks. Perfect for those who love dramatic expressions and catchy beats.",
    image: performanceImage,
    features: [
      "Popular song choreography",
      "High-energy routines",
      "Expressive filmy style",
      "Performance-ready moves",
    ],
    ageGroups: "Kids (5+), Teens, Adults",
    levels: "All Levels Welcome",
    duration: "45-60 minutes",
  },
  {
    id: "hiphop",
    name: "Hip-Hop Dance",
    tagline: "Own the Streets",
    description:
      "Get groovy with our street-style hip-hop classes! Learn popping, locking, breaking, and contemporary hip-hop choreography. This class builds rhythm, confidence, and the ability to freestyle with swagger. Perfect for those who love urban dance culture.",
    image: stageImage,
    features: [
      "Street style fundamentals",
      "Popping & locking techniques",
      "Freestyle skills",
      "Contemporary choreography",
    ],
    ageGroups: "Kids (7+), Teens, Adults",
    levels: "Beginner to Advanced",
    duration: "60 minutes",
  },
  {
    id: "contemporary",
    name: "Contemporary Dance",
    tagline: "Dance Your Story",
    description:
      "Express your deepest emotions through fluid, storytelling movements. Contemporary dance combines elements of ballet, modern, and jazz to create a powerful form of self-expression. Develop body awareness, emotional connection, and the ability to convey narratives through movement.",
    image: folkImage,
    features: [
      "Emotional expression",
      "Fluid movement techniques",
      "Floor work & lifts",
      "Improvisation skills",
    ],
    ageGroups: "Teens (12+), Adults",
    levels: "Beginner to Intermediate",
    duration: "60 minutes",
  },
  {
    id: "freestyle",
    name: "Freestyle Dance",
    tagline: "Be Your Own Choreographer",
    description:
      "Unleash your creativity with freestyle dance! Learn to hear music, interpret beats, and create your own movements on the spot. This class focuses on musicality, personal style development, and the confidence to dance without choreographed steps.",
    image: traditionalImage,
    features: [
      "Musical interpretation",
      "Personal style development",
      "Improvisation techniques",
      "Confidence building",
    ],
    ageGroups: "Kids (8+), Teens, Adults",
    levels: "All Levels",
    duration: "45-60 minutes",
  },
  {
    id: "dance-fitness",
    name: "Dance Fitness / Zumba",
    tagline: "Workout That Feels Like a Party",
    description:
      "Get fit while having fun! Our dance fitness classes combine energetic dance moves with cardio workouts. Set to upbeat music from around the world, these classes are perfect for those who want to stay healthy while enjoying the joy of dance. No dance experience needed!",
    image: studentImage,
    features: [
      "Fun cardio workout",
      "No experience needed",
      "High-energy music mix",
      "Full-body toning",
    ],
    ageGroups: "Teens (14+), Adults",
    levels: "All Fitness Levels",
    duration: "45-60 minutes",
  },
];

const Classes = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
              7 Unique Styles
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Our Dance <span className="gradient-text">Classes</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              From classical traditions to modern street styles, find the perfect
              dance form that speaks to your soul. Classes for all ages and skill
              levels.
            </p>
          </div>
        </div>
      </section>

      {/* Classes List */}
      <section className="section-padding">
        <div className="container-custom space-y-24">
          {danceClasses.map((danceClass, index) => (
            <div
              key={danceClass.id}
              id={danceClass.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img
                    src={danceClass.image}
                    alt={danceClass.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div
                  className={`absolute -bottom-4 ${
                    index % 2 === 1 ? "-left-4" : "-right-4"
                  } w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-2xl -z-10`}
                />
              </div>

              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-3">
                    {danceClass.tagline}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-display font-bold">
                    {danceClass.name}
                  </h2>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {danceClass.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {danceClass.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Star className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Info Cards */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="glass-card rounded-lg p-4 text-center">
                    <Users className="w-5 h-5 text-primary mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground">
                      {danceClass.ageGroups}
                    </p>
                  </div>
                  <div className="glass-card rounded-lg p-4 text-center">
                    <Star className="w-5 h-5 text-secondary mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground">
                      {danceClass.levels}
                    </p>
                  </div>
                  <div className="glass-card rounded-lg p-4 text-center">
                    <Clock className="w-5 h-5 text-accent mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground">
                      {danceClass.duration}
                    </p>
                  </div>
                </div>

                <Button
                  asChild
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                >
                  <Link to="/contact">
                    Join This Class
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Not Sure Which Style to Choose?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Book a free trial class and let us help you discover the perfect
            dance style for you. Try any class before committing!
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

export default Classes;
