import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Layout from "@/components/Layout";
import { toast } from "@/components/ui/use-toast";

const Login = () => {
  const canonical = `${window.location.origin}/login`;

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    toast({ title: "Logged in (demo)", description: "No API calls were made." });
  };

  return (
    <Layout>
      <Helmet>
        <title>Login | Medorbis AI Assistant</title>
        <meta name="description" content="Sign in to Medorbis AI to continue structured, high‑yield learning built by medical educators." />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content="Login | Medorbis AI Assistant" />
        <meta property="og:description" content="Access your Medorbis AI dashboard and continue learning smarter." />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>


      <section className="container py-16 md:py-24">
        <h1 className="sr-only">Login to Medorbis AI</h1>
        <div className="grid gap-10 md:grid-cols-2 md:gap-12">
          <div className="max-w-md w-full">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Login</CardTitle>
              </CardHeader>
              <form onSubmit={onSubmit} noValidate>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" autoComplete="email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" autoComplete="current-password" required />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col sm:flex-row gap-3 sm:justify-between">
                  <Button type="submit" className="w-full sm:w-auto">Login</Button>
                  <div className="text-sm text-muted-foreground">
                    No account? <Link to="/register" className="underline">Register</Link>
                  </div>
                </CardFooter>
              </form>
            </Card>
            <div className="mt-4 text-xs text-muted-foreground">By continuing you agree to our <Link to="/terms" className="underline">Terms</Link> and <Link to="/privacy-policy" className="underline">Privacy Policy</Link>.</div>
          </div>

          <aside className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold">Why Medorbis AI</h2>
              <p className="mt-2 text-muted-foreground">Purpose‑built by medical educators to help you study faster with structure, clarity, and confidence.</p>
              <ul className="mt-4 list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Step‑by‑step explanations aligned with exam patterns</li>
                <li>High‑yield summaries and clinical reasoning tips</li>
                <li>Always available to clarify doubts in seconds</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-medium">How it works</h3>
              <ol className="mt-3 list-decimal pl-5 space-y-2 text-muted-foreground">
                <li>Ask any medical question or paste a vignette.</li>
                <li>Get structured, educator‑reviewed reasoning and memory hooks.</li>
                <li>Reinforce with targeted follow‑ups and quick recaps.</li>
              </ol>
            </section>

            <section>
              <h3 className="text-xl font-medium">What you’ll get</h3>
              <ul className="mt-3 list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Clarity on difficult topics</li>
                <li>Faster revision with concise takeaways</li>
                <li>Confidence going into exams and clinics</li>
              </ul>
              <div className="mt-4 flex gap-3">
                <Button asChild>
                  <Link to="/register">Create account</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/refund-policy">Refund policy</Link>
                </Button>
              </div>
            </section>
          </aside>
        </div>
      </section>

    </Layout>
  );
};

export default Login;
