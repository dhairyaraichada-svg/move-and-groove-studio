import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Parent of 8-year-old student",
    quote:
      "My daughter has transformed completely since joining V can Dance. Her confidence, posture, and discipline have improved tremendously. The way she now carries herself on stage is remarkable!",
    rating: 5,
    category: "Parent",
  },
  {
    name: "Rahul Verma",
    role: "Adult Student, 35",
    quote:
      "I never thought I could dance at 35, but V can Dance proved me wrong. The instructor's patience and encouraging approach made me feel comfortable from day one. Now I look forward to every class!",
    rating: 5,
    category: "Adult",
  },
  {
    name: "Ananya Singh",
    role: "Teen Student, 16",
    quote:
      "The best dance studio ever! Learning Bollywood and Hip-Hop here has been the highlight of my week. The choreography is always trendy and the vibes are amazing.",
    rating: 5,
    category: "Teen",
  },
  {
    name: "Meera Krishnan",
    role: "Parent of twins",
    quote:
      "Both my daughters love their classical dance classes. The attention to detail in teaching proper postures and expressions is exceptional. The annual show performances are always a proud moment for us.",
    rating: 5,
    category: "Parent",
  },
  {
    name: "Arun Patel",
    role: "Adult Student, 42",
    quote:
      "The Dance Fitness classes are fantastic! I've lost weight, gained flexibility, and most importantly, I'm having fun while working out. It doesn't feel like exercise at all.",
    rating: 5,
    category: "Adult",
  },
  {
    name: "Kavya Menon",
    role: "Teen Student, 14",
    quote:
      "I was shy and hesitant when I joined, but now I perform on stage with confidence. The contemporary dance classes helped me express emotions I couldn't put into words.",
    rating: 5,
    category: "Teen",
  },
  {
    name: "Sunita Reddy",
    role: "Parent of 6-year-old",
    quote:
      "The way they handle young children is impressive. My son was hyperactive, but dance has helped channel his energy positively. He's more focused now, even in school.",
    rating: 5,
    category: "Parent",
  },
  {
    name: "Deepika Joshi",
    role: "Adult Student, 28",
    quote:
      "Learning Kathak here has been a dream come true. The instructor's knowledge of classical techniques and history makes every class enriching. I feel connected to my culture.",
    rating: 5,
    category: "Adult",
  },
  {
    name: "Arjun Nair",
    role: "Teen Student, 17",
    quote:
      "Hip-Hop classes here are lit! The freestyle sessions and battles have boosted my creativity and confidence. I've even started creating my own choreography now.",
    rating: 5,
    category: "Teen",
  },
];

const categories = ["All", "Parent", "Adult", "Teen"];

import { useState } from "react";

const Testimonials = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTestimonials =
    selectedCategory === "All"
      ? testimonials
      : testimonials.filter((t) => t.category === selectedCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
              Success Stories
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              What Our <span className="gradient-text">Students Say</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Real stories from real dancers. Discover how V can Dance has
              transformed lives through the joy of movement.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 border-b border-border sticky top-20 bg-background/95 backdrop-blur-lg z-40">
        <div className="container-custom">
          <div className="flex gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-primary to-secondary text-white"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category === "All" ? "All Reviews" : `${category}s`}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-8 hover:scale-[1.02] transition-transform relative"
              >
                {/* Quote Icon */}
                <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/20" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-500 fill-yellow-500"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                500+
              </div>
              <p className="text-muted-foreground">Happy Students</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                4.9
              </div>
              <p className="text-muted-foreground">Average Rating</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                95%
              </div>
              <p className="text-muted-foreground">Would Recommend</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                50+
              </div>
              <p className="text-muted-foreground">Shows Performed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Transformation */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="glass-card rounded-3xl p-8 md:p-12">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
                Featured Story
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                A <span className="gradient-text">Transformation</span> Journey
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <blockquote className="text-xl md:text-2xl text-center text-muted-foreground italic leading-relaxed mb-8">
                "When my daughter started at V can Dance three years ago, she
                was extremely shy and lacked confidence. Today, she leads group
                performances and has even won inter-school competitions. The
                transformation is beyond what we could have imagined. Dance gave
                her a voice, and V can Dance gave her the stage to use it."
              </blockquote>
              <div className="text-center">
                <p className="font-semibold text-lg">— Lakshmi Iyer</p>
                <p className="text-muted-foreground">
                  Parent of Aishwarya, Classical Dance Student
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Start Your Own Success Story
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Join the V can Dance family and experience the transformation that
            hundreds of our students have celebrated.
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

export default Testimonials;
