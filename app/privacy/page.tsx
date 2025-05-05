import { Hero } from '@/components/layout/Hero';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Hero
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your information"
        backgroundImage="/images/Hero/bg-teal-bokeh.png"
        useGradient={true}
      />
      
      <section className="py-16">
        <div className="container-xl">
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <h2>Privacy Policy</h2>
            <p className="text-black">
              Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
            
            <h3>1. Introduction</h3>
            <p className="text-black">
              At LocalIgnite.ai, we respect your privacy and are committed to protecting your personal data. 
              This privacy policy explains how we collect, use, and safeguard your information when you visit our website
              or use our services.
            </p>
            
            <h3>2. Information We Collect</h3>
            <p className="text-black">
              We may collect several types of information from and about users of our website, including:
            </p>
            <ul>
              <li className="text-black">Personal identifiers such as name, email address, and phone number</li>
              <li className="text-black">Business information such as company name and job title</li>
              <li className="text-black">Technical data such as IP address, browser type, and device information</li>
              <li className="text-black">Usage data about how you interact with our website and services</li>
            </ul>
            
            <h3>3. How We Use Your Information</h3>
            <p className="text-black">
              We use the information we collect to:
            </p>
            <ul>
              <li className="text-black">Provide, maintain, and improve our services</li>
              <li className="text-black">Process transactions and send related information</li>
              <li className="text-black">Respond to your requests, questions, and comments</li>
              <li className="text-black">Send you technical notices, updates, and security alerts</li>
              <li className="text-black">Monitor and analyze trends, usage, and activities</li>
            </ul>
            
            <h3>4. Data Security</h3>
            <p className="text-black">
              We implement appropriate security measures to protect your personal information. 
              However, no method of transmission over the Internet or electronic storage is 100% secure.
            </p>
            
            <h3>5. Your Rights</h3>
            <p className="text-black">
              Depending on your location, you may have rights regarding your personal data, 
              such as the right to access, correct, or delete your personal information.
            </p>
            
            <h3>6. Changes to This Privacy Policy</h3>
            <p className="text-black">
              We may update our privacy policy from time to time. We will notify you of any changes 
              by posting the new privacy policy on this page and updating the "Last Updated" date.
            </p>
            
            <h3>7. Contact Us</h3>
            <p className="text-black">
              If you have any questions about this privacy policy, please contact us at:
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
