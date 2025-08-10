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
        <meta name="description" content="Create your Medorbis AI account to start learning smarter." />
        <link rel="canonical" href={canonical} />
      </Helmet>

      <section className="container py-16 md:py-24">
        <div className="max-w-md mx-auto">
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
        </div>
      </section>
    </Layout>
  );
};

export default Register;
