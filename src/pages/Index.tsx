import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/medorbis-hero.jpg";

const Index = () => {
  const signupUrl = "https://ai-assistant.medorbis.ai/?ref=medorbis.ai";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Medorbis AI Assistant",
    url: window.location.origin,
    potentialAction: {
      "@type": "SearchAction",
      target: `${window.location.origin}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <Helmet>
        <title>Medorbis AI Assistant | Transform Your Medical Studies</title>
        <meta name="description" content="A 24/7 AI medical assistant built by medical educators. Study smarter with structure and confidence." />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <header className="w-full">
        <nav className="container flex items-center justify-between py-6">
          <div className="font-display text-2xl tracking-tight">Medorbis AI</div>
          <div className="flex items-center gap-3">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#video" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Intro</a>
            <Button asChild>
              <a href={signupUrl} aria-label="Sign up to Medorbis AI">Sign Up</a>
            </Button>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <img src={heroImage} alt="Abstract medical study background for Medorbis AI" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-background/60" />
          </div>

          <div className="container py-24 md:py-32 text-center animate-fade-in">
            <h1 className="font-display text-4xl md:text-6xl font-semibold leading-tight">
              Medorbis AI Assistant
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Not just AI. A learning companion built by medical educators — purpose‑built for how you learn, not just how AI computes.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <Button size="lg" asChild>
                <a href={signupUrl}>Get Started</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#video">Watch Intro</a>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-primary text-primary-foreground">
          <div className="container py-10 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-2xl md:text-3xl font-semibold">Ready to transform your medical studies?</p>
              <p className="text-lg opacity-90">Get started with Medorbis AI today.</p>
            </div>
            <Button size="lg" variant="secondary" asChild>
              <a href={signupUrl}>Sign Up</a>
            </Button>
          </div>
        </section>

        {/* Video */}
        <section id="video" className="container py-16 md:py-20">
          <h2 className="text-center text-2xl md:text-3xl font-semibold mb-8">Watch Our Intro</h2>
          <div className="relative w-full max-w-3xl mx-auto aspect-video overflow-hidden rounded-lg border">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/mEGR8M_CQXo"
              title="MEDORBIS.AI : Your 24/7 AI Medical Assistant – Built by Medics, for Medics!"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </section>

        {/* Features */}
        <section id="features" className="container pb-20">
          <h2 className="text-center text-2xl md:text-3xl font-semibold mb-10">What Makes Us Different</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Built by Medics",
                desc: "Crafted by medical educators who understand exam patterns and clinical reasoning.",
              },
              {
                title: "Structured Learning",
                desc: "Guided explanations, step-by-step breakdowns, and high‑yield insights.",
              },
              {
                title: "Always Available",
                desc: "Your 24/7 study companion to clarify doubts and reinforce concepts instantly.",
              },
            ].map((f) => (
              <article key={f.title} className="rounded-lg border p-6 bg-card text-card-foreground transition-transform hover:scale-[1.02]">
                <h3 className="font-medium text-lg">{f.title}</h3>
                <p className="mt-2 text-muted-foreground text-sm">{f.desc}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container py-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Medorbis AI. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Index;

