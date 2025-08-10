import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Layout from "@/components/Layout";
import { toast } from "@/components/ui/use-toast";

const Register = () => {
  const canonical = `${window.location.origin}/register`;

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    toast({ title: "Registered (demo)", description: "No API calls were made." });
  };

  return (
    <Layout>
      <Helmet>
        <title>Register | Medorbis AI Assistant</title>
        <meta name="description" content="Create your Medorbis AI account and start learning smarter with educator‑built guidance." />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content="Register | Medorbis AI Assistant" />
        <meta property="og:description" content="Join Medorbis AI to get structured explanations, exam‑focused insights, and 24/7 support." />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>


      <section className="container py-16 md:py-24">
        <h1 className="sr-only">Create your Medorbis AI account</h1>
        <div className="grid gap-10 md:grid-cols-2 md:gap-12">
          <div className="max-w-md w-full">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Create your account</CardTitle>
              </CardHeader>
              <form onSubmit={onSubmit} noValidate>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full name</Label>
                    <Input id="name" type="text" autoComplete="name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" autoComplete="email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" autoComplete="new-password" required />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col sm:flex-row gap-3 sm:justify-between">
                  <Button type="submit" className="w-full sm:w-auto">Create account</Button>
                  <div className="text-sm text-muted-foreground">
                    Already have an account? <Link to="/login" className="underline">Login</Link>
                  </div>
                </CardFooter>
              </form>
            </Card>
            <div className="mt-4 text-xs text-muted-foreground">By creating an account you agree to our <Link to="/terms" className="underline">Terms</Link> and <Link to="/privacy-policy" className="underline">Privacy Policy</Link>.</div>
          </div>

          <aside className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold">You’re 60 seconds from smarter study</h2>
              <p className="mt-2 text-muted-foreground">Join thousands of medics who learn with educator‑built guidance—clear, structured, and exam‑ready.</p>
              <ul className="mt-4 list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Structured explanations with step‑by‑step reasoning</li>
                <li>High‑yield takeaways to accelerate revision</li>
                <li>24/7 support for fast clarification</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-medium">How to get the most value</h3>
              <ol className="mt-3 list-decimal pl-5 space-y-2 text-muted-foreground">
                <li>Start with a topic you struggle with—ask specific questions.</li>
                <li>Use the follow‑up prompts to test understanding.</li>
                <li>Save key takeaways and revisit before exams/clinics.</li>
              </ol>
            </section>

            <section>
              <h3 className="text-xl font-medium">Plans that fit your goals</h3>
              <p className="mt-2 text-muted-foreground">Flexible options for rotations, exam seasons, or year‑round learning. See full pricing after you register.</p>
              <div className="mt-4 text-sm text-muted-foreground">No spam. Cancel anytime.</div>
            </section>
          </aside>
        </div>
      </section>

    </Layout>
  );
};

export default Register;
