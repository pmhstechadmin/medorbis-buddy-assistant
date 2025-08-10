import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";

const RefundPolicy = () => {
  const canonical = `${window.location.origin}/refund-policy`;
  return (
    <Layout>
      <Helmet>
        <title>Refund Policy | Medorbis AI Assistant</title>
        <meta name="description" content="Understand Medorbis AI's refund policy and eligibility criteria." />
        <link rel="canonical" href={canonical} />
      </Helmet>

      <section className="container py-12 md:py-16">
        <article className="prose prose-neutral max-w-3xl">
          <h1>Refund Policy</h1>
          <p>We aim to ensure satisfaction with Medorbis AI. This policy outlines the conditions under which refunds may be issued.</p>

          <h2>Eligibility</h2>
          <p>Refunds may be granted within a specified period subject to review and compliance with usage terms.</p>

          <h2>Process</h2>
          <p>To request a refund, contact support@medorbis.ai with your account details and reason for the request.</p>

          <h2>Exceptions</h2>
          <p>Certain purchases may be non-refundable as permitted by law and stated at the time of purchase.</p>
        </article>
      </section>
    </Layout>
  );
};

export default RefundPolicy;
