import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, BookOpen, Trophy, Heart, Star } from "lucide-react";

import founderImage from "@/assets/dance-founder.jpeg";
import performanceImage from "@/assets/dance-performance-1.jpeg";
import classicalImage from "@/assets/dance-classical-1.jpeg";
import kathakImage from "@/assets/dance-kathak.jpeg";

const achievements = [
  "Trained in Bharatanatyam, Kathak, and Folk dance forms",
  "10+ years of teaching experience",
  "Choreographed 50+ stage performances",
  "Certified dance fitness instructor",
  "Guest artist at cultural festivals",
  "Trained 500+ students across all age groups",
];

const expertise = [
  {
    style: "Classical Dance",
    years: "15+ years",
    description: "Specialized in Bharatanatyam and Kathak with rigorous training under renowned gurus.",
  },
  {
    style: "Semi-Classical",
    years: "12+ years",
    description: "Expertise in fusion choreography blending traditional and contemporary movements.",
  },
  {
    style: "Bollywood & Folk",
    years: "10+ years",
    description: "Dynamic choreography for films, events, and cultural programs.",
  },
  {
    style: "Contemporary & Freestyle",
    years: "8+ years",
    description: "Modern dance expression with focus on emotional storytelling.",
  },
];

const Instructor = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-background" />

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative animate-fade-in">
              <div className="aspect-[3/4] max-w-md mx-auto rounded-2xl overflow-hidden">
                <img
                  src={founderImage}
                  alt="Founder and Lead Instructor"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-secondary to-accent rounded-2xl -z-10" />
            </div>

            {/* Content */}
            <div className="space-y-6 animate-slide-up">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium">
                Meet Your Instructor
              </span>
              <h1 className="text-4xl md:text-5xl font-display font-bold">
                Founder & Lead <span className="gradient-text">Choreographer</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With over a decade of experience in diverse dance forms, our
                founder brings passion, expertise, and a unique teaching approach
                to V can Dance. Her journey from a young classical dancer to a
                celebrated choreographer inspires every student who walks through
                our doors.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Trained under renowned masters and having performed at prestigious
                venues across the country, she founded V can Dance with a simple
                belief: dance is for everyone. Her teaching philosophy combines
                technical excellence with creative freedom, helping each student
                discover their unique dance expression.
              </p>
              <div className="flex gap-4">
                <Button
                  asChild
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                >
                  <Link to="/contact">
                    Train With Me
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-primary/50">
                  <Link to="/gallery">View Performances</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
              Credentials
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              Achievements & <span className="gradient-text">Qualifications</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-6 flex items-start gap-4 hover:scale-[1.02] transition-transform"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                  <Trophy className="w-5 h-5 text-primary" />
                </div>
                <p className="text-foreground">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              Dance <span className="gradient-text">Expertise</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertise.map((item, index) => (
              <div
                key={item.style}
                className="glass-card rounded-2xl p-8 hover:scale-[1.02] transition-transform"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">{item.style}</h3>
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm">
                    {item.years}
                  </span>
                </div>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="section-padding bg-gradient-to-b from-card to-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium">
                Philosophy
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Teaching <span className="gradient-text">Approach</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                "I believe every student is unique, with their own rhythm and
                style waiting to be discovered. My role as a teacher is not just
                to impart techniques, but to help each dancer find their
                authentic voice through movement."
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Heart className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Patient & Encouraging</h4>
                    <p className="text-muted-foreground text-sm">
                      Every student learns at their own pace. I create a
                      supportive environment where mistakes are stepping stones.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <BookOpen className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Technique + Expression</h4>
                    <p className="text-muted-foreground text-sm">
                      Strong foundations paired with creative freedom. Both are
                      essential for a complete dancer.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Star className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Individual Attention</h4>
                    <p className="text-muted-foreground text-sm">
                      Small batch sizes ensure every student gets personalized
                      feedback and guidance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img
                  src={classicalImage}
                  alt="Dance performance"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] rounded-2xl overflow-hidden mt-8">
                <img
                  src={kathakImage}
                  alt="Dance pose"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready to Learn From the Best?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Join V can Dance and experience personalized training that will
            transform your dance journey. Book a free trial class today!
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

export default Instructor;
