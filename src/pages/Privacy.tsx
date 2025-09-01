import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Privacy = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl font-bold text-primary mb-4">Privacy Policy</h1>
          <p className="text-lg text-muted-foreground">
            Last updated: January 2024
          </p>
        </div>

        <div className="space-y-8">
          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">1. Data Controller</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                Gasthof Ritter St. Georg<br />
                Hauptstraße 123<br />
                12345 Musterstadt<br />
                Bavaria, Germany<br />
                Email: privacy@ritter-stgeorg.de<br />
                Phone: +49 123 456 789
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">2. Data Collection and Usage</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none space-y-4">
              <div>
                <h4 className="font-semibold text-primary mb-2">Personal Information We Collect:</h4>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Name and contact information (email, phone, address)</li>
                  <li>Booking and reservation details</li>
                  <li>Payment information (processed securely through our payment partners)</li>
                  <li>Communication preferences</li>
                  <li>Special requests and dietary requirements</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-primary mb-2">How We Use Your Information:</h4>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Process bookings and reservations</li>
                  <li>Provide customer service and support</li>
                  <li>Send booking confirmations and updates</li>
                  <li>Improve our services and website functionality</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">3. Legal Basis for Processing</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p className="text-muted-foreground">
                We process your personal data based on:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground mt-2">
                <li><strong>Contract Performance:</strong> To fulfill our services and reservations</li>
                <li><strong>Legitimate Interest:</strong> To improve our services and prevent fraud</li>
                <li><strong>Legal Obligation:</strong> To comply with tax, accounting, and other legal requirements</li>
                <li><strong>Consent:</strong> For marketing communications (where applicable)</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">4. Data Sharing</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p className="text-muted-foreground mb-4">
                We do not sell your personal information. We may share your data with:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Payment processors for secure transaction handling</li>
                <li>Service providers who assist with our operations</li>
                <li>Legal authorities when required by law</li>
                <li>Business partners for joint services (with your consent)</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">5. Your Rights Under GDPR</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p className="text-muted-foreground mb-4">
                As a data subject in the EU, you have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Rectification:</strong> Correct inaccurate personal data</li>
                <li><strong>Erasure:</strong> Request deletion of your personal data</li>
                <li><strong>Portability:</strong> Receive your data in a structured format</li>
                <li><strong>Restriction:</strong> Limit how we process your data</li>
                <li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
                <li><strong>Withdraw Consent:</strong> For processing based on consent</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                To exercise these rights, contact us at privacy@ritter-stgeorg.de
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">6. Data Security</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p className="text-muted-foreground">
                We implement appropriate technical and organizational measures to protect your personal data 
                against unauthorized access, alteration, disclosure, or destruction. This includes:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground mt-2">
                <li>SSL encryption for data transmission</li>
                <li>Secure data storage systems</li>
                <li>Regular security assessments</li>
                <li>Staff training on data protection</li>
                <li>Limited access to personal data on a need-to-know basis</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">7. Cookies and Tracking</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p className="text-muted-foreground mb-4">
                Our website uses cookies to:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Improve website functionality and user experience</li>
                <li>Provide relevant content and advertisements</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                You can manage your cookie preferences through your browser settings.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">8. Data Retention</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p className="text-muted-foreground">
                We retain your personal data only as long as necessary for the purposes outlined in this policy:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground mt-2">
                <li>Booking data: 10 years for accounting and legal purposes</li>
                <li>Marketing data: Until you withdraw consent</li>
                <li>Website analytics: 26 months maximum</li>
                <li>Customer service records: 3 years after last contact</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">9. Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy or our data practices, please contact:
              </p>
              <div className="mt-4 p-4 bg-primary/5 rounded-lg">
                <p className="text-primary font-semibold">Data Protection Officer</p>
                <p className="text-muted-foreground">
                  Email: privacy@ritter-stgeorg.de<br />
                  Phone: +49 123 456 789<br />
                  Address: Gasthof Ritter St. Georg, Hauptstraße 123, 12345 Musterstadt, Germany
                </p>
              </div>
              <p className="text-muted-foreground mt-4">
                You also have the right to lodge a complaint with your local data protection authority.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">10. Policy Updates</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time to reflect changes in our practices 
                or legal requirements. We will notify you of significant changes by email or through 
                prominent notice on our website. The "Last updated" date at the top of this policy 
                indicates when the most recent changes were made.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Privacy;