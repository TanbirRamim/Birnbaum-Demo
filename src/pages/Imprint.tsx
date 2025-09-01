import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Imprint = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl font-bold text-primary mb-4">Imprint</h1>
          <p className="text-lg text-muted-foreground">
            Legal Information (Impressum)
          </p>
        </div>

        <div className="space-y-8">
          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Company Information</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <div className="space-y-2">
                <p className="font-semibold text-primary">Gasthof Ritter St. Georg GmbH</p>
                <p className="text-muted-foreground">
                  Hauptstraße 123<br />
                  12345 Musterstadt<br />
                  Bavaria, Germany
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Contact Details</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold text-primary mb-2">Phone</p>
                  <p className="text-muted-foreground">+49 123 456 789</p>
                </div>
                <div>
                  <p className="font-semibold text-primary mb-2">Fax</p>
                  <p className="text-muted-foreground">+49 123 456 790</p>
                </div>
                <div>
                  <p className="font-semibold text-primary mb-2">Email</p>
                  <p className="text-muted-foreground">info@ritter-stgeorg.de</p>
                </div>
                <div>
                  <p className="font-semibold text-primary mb-2">Website</p>
                  <p className="text-muted-foreground">www.ritter-stgeorg.de</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Legal Information</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold text-primary mb-2">Managing Director</p>
                  <p className="text-muted-foreground">Hans Müller</p>
                </div>
                <div>
                  <p className="font-semibold text-primary mb-2">Commercial Register</p>
                  <p className="text-muted-foreground">HRB 12345, Amtsgericht München</p>
                </div>
                <div>
                  <p className="font-semibold text-primary mb-2">VAT ID</p>
                  <p className="text-muted-foreground">DE123456789</p>
                </div>
                <div>
                  <p className="font-semibold text-primary mb-2">Tax Number</p>
                  <p className="text-muted-foreground">123/456/78901</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Professional Regulations</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-primary mb-2">Industry Classification</p>
                  <p className="text-muted-foreground">Hotel and Restaurant Business</p>
                </div>
                <div>
                  <p className="font-semibold text-primary mb-2">Regulatory Authority</p>
                  <p className="text-muted-foreground">
                    Landratsamt Musterstadt<br />
                    Gewerbeaufsichtsamt<br />
                    Musterstraße 456<br />
                    12345 Musterstadt, Germany
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-primary mb-2">Professional Insurance</p>
                  <p className="text-muted-foreground">
                    Allianz Versicherung AG<br />
                    Policy Number: 123456789<br />
                    Coverage: €2,000,000
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Disclaimer</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none space-y-4">
              <div>
                <h4 className="font-semibold text-primary mb-2">Liability for Content</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  The contents of our pages have been created with the utmost care. However, we cannot guarantee 
                  the contents' accuracy, completeness, or topicality. According to statutory provisions, we are 
                  furthermore responsible for our own content on these web pages. In this context, please note 
                  that we are accordingly not under any obligation to monitor merely the transmitted or saved 
                  information of third parties, or investigate circumstances pointing to illegal activity.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-primary mb-2">Liability for Links</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Our offer includes links to external third parties' websites. We have no control over the 
                  contents of those websites, therefore we cannot assume liability for these foreign contents. 
                  In all cases, the provider of information of the linked websites is liable for the contents 
                  and accuracy of the information provided.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-primary mb-2">Copyright</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  The content and works on these pages created by the site operators are subject to German 
                  copyright law. Duplication, processing, distribution, or any form of commercialization of 
                  such material beyond the scope of the copyright law shall require the prior written consent 
                  of its respective author or creator.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Online Dispute Resolution</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                The European Commission provides a platform for online dispute resolution (OS): 
                <a href="https://ec.europa.eu/consumers/odr/" className="text-primary hover:underline ml-1">
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We are not willing or obliged to participate in dispute resolution proceedings before 
                a consumer arbitration board.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Design & Development</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <div className="space-y-2">
                <p className="font-semibold text-primary">Website Design & Development</p>
                <p className="text-muted-foreground text-sm">
                  This website was created as a demo project showcasing modern web development practices 
                  using React, TypeScript, and Tailwind CSS.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Footer Note */}
          <div className="text-center py-8 text-sm text-muted-foreground border-t border-border">
            <p>
              This imprint complies with German legal requirements under §5 TMG (Telemediengesetz) 
              and §55 RStV (Rundfunkstaatsvertrag).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imprint;