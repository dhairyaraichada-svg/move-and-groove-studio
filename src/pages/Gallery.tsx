import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";

import heroImage from "@/assets/dance-hero.jpeg";
import classicalImage from "@/assets/dance-classical-1.jpeg";
import kathakImage from "@/assets/dance-kathak.jpeg";
import folkImage from "@/assets/dance-folk.jpeg";
import performanceImage1 from "@/assets/dance-performance-1.jpeg";
import performanceImage2 from "@/assets/dance-performance-2.jpeg";
import stageImage from "@/assets/dance-stage.jpeg";
import studentImage from "@/assets/dance-student-1.jpeg";
import traditionalImage from "@/assets/dance-traditional.jpeg";
import founderImage from "@/assets/dance-founder.jpeg";

const galleryImages = [
  { src: heroImage, category: "Performance", title: "Classical Grace" },
  { src: classicalImage, category: "Classical", title: "Bharatanatyam Pose" },
  { src: kathakImage, category: "Classical", title: "Kathak Elegance" },
  { src: folkImage, category: "Folk", title: "Traditional Dance" },
  { src: performanceImage1, category: "Performance", title: "Stage Performance" },
  { src: performanceImage2, category: "Performance", title: "Annual Show" },
  { src: stageImage, category: "Stage", title: "Live Event" },
  { src: studentImage, category: "Students", title: "Young Dancer" },
  { src: traditionalImage, category: "Classical", title: "Traditional Attire" },
  { src: founderImage, category: "Instructor", title: "Lead Choreographer" },
];

const categories = ["All", "Performance", "Classical", "Folk", "Students", "Stage"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goToPrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(
        lightboxIndex === 0 ? filteredImages.length - 1 : lightboxIndex - 1
      );
    }
  };

  const goToNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(
        lightboxIndex === filteredImages.length - 1 ? 0 : lightboxIndex + 1
      );
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
              Our Moments
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Photo <span className="gradient-text">Gallery</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Capturing the magic of dance - performances, practice sessions, and
              the beautiful journey of our students.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 border-b border-border sticky top-20 bg-background/95 backdrop-blur-lg z-40">
        <div className="container-custom">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-primary to-secondary text-white"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                onClick={() => openLightbox(index)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-2 py-1 rounded-full bg-primary/80 text-white text-xs mb-2">
                    {image.category}
                  </span>
                  <h3 className="text-white font-semibold">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section Placeholder */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Dance <span className="gradient-text">Videos</span>
            </h2>
            <p className="text-muted-foreground">
              Watch our performances and get a glimpse of the V can Dance
              experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((_, index) => (
              <div
                key={index}
                className="aspect-video rounded-2xl bg-muted flex items-center justify-center glass-card"
              >
                <div className="text-center p-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                  <p className="text-muted-foreground">
                    Performance Video {index + 1}
                  </p>
                  <p className="text-sm text-muted-foreground/60">
                    Coming Soon
                  </p>
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
            Want to Be Part of Our Story?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Join V can Dance and create beautiful memories on stage. Your dance
            journey awaits!
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 glow-primary"
          >
            <Link to="/contact">
              Join Us Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={goToPrev}
            className="absolute left-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8 text-white" />
          </button>

          <div className="max-w-5xl max-h-[80vh] px-16">
            <img
              src={filteredImages[lightboxIndex].src}
              alt={filteredImages[lightboxIndex].title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <p className="text-white font-semibold">
                {filteredImages[lightboxIndex].title}
              </p>
              <p className="text-white/60 text-sm">
                {filteredImages[lightboxIndex].category}
              </p>
            </div>
          </div>

          <button
            onClick={goToNext}
            className="absolute right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
