import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";

const Terms = () => {
  const canonical = `${window.location.origin}/terms`;
  return (
    <Layout>
      <Helmet>
        <title>Terms and Conditions | Medorbis AI Assistant</title>
        <meta name="description" content="Review the terms and conditions governing your use of Medorbis AI." />
        <link rel="canonical" href={canonical} />
      </Helmet>

      <section className="container py-12 md:py-16">
        <article className="prose prose-neutral max-w-3xl">
          <h1>Terms and Conditions</h1>
          <p>These Terms and Conditions ("Terms") govern your use of Medorbis AI. By accessing or using our service, you agree to be bound by these Terms.</p>

          <h2>Use of Service</h2>
          <p>You agree to use the service only for lawful purposes and in accordance with these Terms.</p>

          <h2>Accounts</h2>
          <p>You are responsible for maintaining the confidentiality of your account and password and for all activities under your account.</p>

          <h2>Intellectual Property</h2>
          <p>All content and materials provided through the service are the property of Medorbis AI or its licensors.</p>

          <h2>Termination</h2>
          <p>We may suspend or terminate access to the service for any reason, including violations of these Terms.</p>

          <h2>Changes</h2>
          <p>We may update these Terms from time to time. Continued use of the service constitutes acceptance of the updated Terms.</p>
        </article>
      </section>
    </Layout>
  );
};

export default Terms;
