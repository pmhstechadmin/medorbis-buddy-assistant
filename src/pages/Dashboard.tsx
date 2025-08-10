import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const canonical = `${window.location.origin}/dashboard`;
  return (
    <Layout>
      <Helmet>
        <title>Dashboard | Medorbis AI Assistant</title>
        <meta name="description" content="Your Medorbis AI dashboard overview." />
        <link rel="canonical" href={canonical} />
      </Helmet>

      <section className="container py-12 md:py-16">
        <div className="max-w-4xl">
          <h1 className="text-3xl font-semibold">Welcome back</h1>
          <p className="mt-2 text-muted-foreground">This is your dashboard. Connect your study goals and jump back into learning.</p>
          <div className="mt-6 flex gap-3">
            <Button>New Session</Button>
            <Button variant="outline">View Progress</Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Dashboard;
