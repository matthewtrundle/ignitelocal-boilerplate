import { Hero } from '@/components/layout/Hero';

export default function TermsOfServicePage() {
  return (
    <>
      <Hero
        title="Terms of Service"
        subtitle="Guidelines for using LocalIgnite.ai services"
        backgroundImage="/images/Hero/bg-teal-bokeh.png"
        useGradient={true}
      />
      
      <section className="py-16">
        <div className="container-xl">
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <h2>Terms of Service</h2>
            <p className="text-black">
              Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
            
            <h3>1. Acceptance of Terms</h3>
            <p className="text-black">
              By accessing or using LocalIgnite.ai services, you agree to be bound by these Terms of Service. 
              If you do not agree to these terms, please do not use our services.
            </p>
            
            <h3>2. Description of Services</h3>
            <p className="text-black">
              LocalIgnite.ai provides AI-powered automation solutions designed for local businesses, 
              including website generation, chatbots, workflow automation, and digital marketing services.
            </p>
            
            <h3>3. User Accounts</h3>
            <p className="text-black">
              Some of our services require you to create an account. You are responsible for maintaining 
              the confidentiality of your account information and for all activities that occur under your account.
            </p>
            
            <h3>4. User Content</h3>
            <p className="text-black">
              You retain ownership of any content you submit to our services. By submitting content, 
              you grant us a worldwide, non-exclusive license to use, reproduce, modify, and display your content 
              solely for the purpose of providing our services to you.
            </p>
            
            <h3>5. Intellectual Property</h3>
            <p className="text-black">
              All content, features, and functionality of our services, including but not limited to text, 
              graphics, logos, and software, are owned by LocalIgnite.ai and are protected by copyright, 
              trademark, and other intellectual property laws.
            </p>
            
            <h3>6. Limitation of Liability</h3>
            <p className="text-black">
              To the maximum extent permitted by law, LocalIgnite.ai shall not be liable for any indirect, 
              incidental, special, consequential, or punitive damages, or any loss of profits or revenues, 
              whether incurred directly or indirectly.
            </p>
            
            <h3>7. Termination</h3>
            <p className="text-black">
              We may terminate or suspend your access to our services at our sole discretion, without notice, 
              for conduct that we believe violates these Terms of Service or is harmful to other users of our services, 
              us, or third parties, or for any other reason.
            </p>
            
            <h3>8. Changes to Terms</h3>
            <p className="text-black">
              We may update these Terms of Service from time to time. We will notify you of any changes by 
              posting the new Terms of Service on this page and updating the "Last Updated" date.
            </p>
            
            <h3>9. Governing Law</h3>
            <p className="text-black">
              These Terms of Service shall be governed by the laws of the State of Texas, without respect to its 
              conflict of laws principles.
            </p>
            
            <h3>10. Contact Us</h3>
            <p className="text-black">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <address className="text-black not-italic">
              <strong>LocalIgnite.ai</strong><br />
              1234 Tech Drive, Suite 500<br />
              Austin, TX 78704<br />
              <a href="mailto:info@localignite.ai">info@localignite.ai</a><br />
              <a href="tel:+15125550123">(512) 555-0123</a>
            </address>
          </div>
        </div>
      </section>
    </>
  );
}
