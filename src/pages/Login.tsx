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
        <meta name="description" content="Access your Medorbis AI account to continue your learning journey." />
        <link rel="canonical" href={canonical} />
      </Helmet>

      <section className="container py-16 md:py-24">
        <div className="max-w-md mx-auto">
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
        </div>
      </section>
    </Layout>
  );
};

export default Login;
