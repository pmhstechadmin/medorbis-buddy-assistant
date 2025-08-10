import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";

const PrivacyPolicy = () => {
  const canonical = `${window.location.origin}/privacy-policy`;
  return (
    <Layout>
      <Helmet>
        <title>Privacy Policy | Medorbis AI Assistant</title>
        <meta name="description" content="Learn how Medorbis AI collects, uses, and protects your personal information." />
        <link rel="canonical" href={canonical} />
      </Helmet>

      <section className="container py-12 md:py-16">
        <article className="prose prose-neutral max-w-3xl">
          <h1>Privacy Policy</h1>
          <p>We value your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use Medorbis AI.</p>

          <h2>Information We Collect</h2>
          <p>We may collect personal information such as your name, email address, and usage data to provide and improve our services.</p>

          <h2>How We Use Information</h2>
          <p>Information is used to maintain and enhance the service, provide support, personalize your experience, and comply with legal obligations.</p>

          <h2>Data Security</h2>
          <p>We implement administrative, technical, and physical safeguards designed to protect your information.</p>

          <h2>Your Rights</h2>
          <p>You may request access, correction, or deletion of your personal data, subject to applicable laws.</p>

          <h2>Contact</h2>
          <p>If you have questions, contact us at support@medorbis.ai.</p>
        </article>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
