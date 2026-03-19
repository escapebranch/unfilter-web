import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy - Unfilter',
  description: 'Privacy Policy for Unfilter - Android app stack detection tool',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-graphite-950 text-graphite-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Back Button */}
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-steel-400 hover:text-steel-300 transition-colors mb-8 lg:mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Back to Home</span>
        </Link>

        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-lg text-graphite-400">
            Last Updated: March 19, 2026
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <div className="space-y-12">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-graphite-50">Introduction</h2>
              <p className="text-graphite-300 leading-relaxed mb-4">
                Welcome to Unfilter. We are committed to protecting your privacy and ensuring transparency about how our application works. This Privacy Policy explains our practices regarding data collection, usage, and protection when you use the Unfilter mobile application for Android.
              </p>
              <p className="text-graphite-300 leading-relaxed">
                Unfilter is designed with privacy as a core principle. Our application performs all analysis locally on your device without transmitting your personal data to external servers.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-graphite-50">Information We Collect</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-graphite-100 mt-6">Information We DO NOT Collect</h3>
              <p className="text-graphite-300 leading-relaxed mb-4">
                Unfilter is built with a privacy-first approach. We want to be clear about what we do not collect:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-graphite-300">
                <li>We do not collect, store, or transmit any personal information</li>
                <li>We do not collect your name, email address, or contact information</li>
                <li>We do not track your location or device identifiers</li>
                <li>We do not collect information about your installed applications</li>
                <li>We do not use analytics or tracking services</li>
                <li>We do not share any data with third parties</li>
                <li>We do not use cookies or similar tracking technologies</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-graphite-100 mt-6">Local Device Analysis</h3>
              <p className="text-graphite-300 leading-relaxed">
                Unfilter analyzes applications installed on your Android device entirely locally. This analysis happens on your device and the results are displayed only to you. No information from this analysis is transmitted off your device or stored anywhere except temporarily in your device's memory while the app is running.
              </p>
            </section>

            {/* How We Use Information */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-graphite-50">How We Use Information</h2>
              <p className="text-graphite-300 leading-relaxed mb-4">
                Since Unfilter does not collect any personal information, there is no data for us to use, process, or share. The app functions entirely offline and performs all operations locally on your device.
              </p>
              <p className="text-graphite-300 leading-relaxed">
                The technical analysis performed by Unfilter (such as detecting frameworks, libraries, and technical stacks) is done solely for your benefit and remains on your device. You have complete control over this information.
              </p>
            </section>

            {/* Permissions */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-graphite-50">App Permissions</h2>
              <p className="text-graphite-300 leading-relaxed mb-4">
                Unfilter requires certain Android permissions to function properly. Here's what we request and why:
              </p>
              
              <div className="space-y-4">
                <div className="bg-graphite-900/50 border border-graphite-800 rounded-lg p-4">
                  <h4 className="font-semibold text-graphite-100 mb-2">Query All Packages Permission</h4>
                  <p className="text-graphite-300 text-base">
                    This permission allows Unfilter to see the list of installed applications on your device. This is essential for the core functionality of analyzing app stacks and frameworks. This information is processed locally and never leaves your device.
                  </p>
                </div>

                <div className="bg-graphite-900/50 border border-graphite-800 rounded-lg p-4">
                  <h4 className="font-semibold text-graphite-100 mb-2">Package Usage Stats Permission</h4>
                  <p className="text-graphite-300 text-base">
                    This permission allows Unfilter to access basic information about installed packages, such as installation date and package size. This data is used solely for display purposes within the app and is not collected or transmitted.
                  </p>
                </div>
              </div>

              <p className="text-graphite-300 leading-relaxed mt-4">
                All permissions are used exclusively for the stated purposes and no data accessed through these permissions is ever transmitted off your device.
              </p>
            </section>

            {/* Data Storage */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-graphite-50">Data Storage and Security</h2>
              <p className="text-graphite-300 leading-relaxed mb-4">
                Unfilter may temporarily store analysis results in your device's local cache or memory while the app is running. This data includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-graphite-300 mb-4">
                <li>Framework and library detection results</li>
                <li>App metadata (size, installation date, version)</li>
                <li>User preferences and app settings</li>
              </ul>
              <p className="text-graphite-300 leading-relaxed mb-4">
                All stored data remains on your device and is protected by your device's security measures. You can clear this data at any time by clearing the app's cache or uninstalling the application.
              </p>
              <p className="text-graphite-300 leading-relaxed">
                Since no data is transmitted to external servers, there is no risk of data breaches from our end. Your information is as secure as your device itself.
              </p>
            </section>

            {/* Third-Party Services */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-graphite-50">Third-Party Services</h2>
              <p className="text-graphite-300 leading-relaxed mb-4">
                Unfilter does not integrate with any third-party services, analytics platforms, or advertising networks. The app functions completely independently and does not communicate with external servers.
              </p>
              <p className="text-graphite-300 leading-relaxed">
                We do not use Google Analytics, Firebase Analytics, or any other tracking or analytics services. Your usage of Unfilter is completely private.
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-graphite-50">Children's Privacy</h2>
              <p className="text-graphite-300 leading-relaxed mb-4">
                Unfilter does not knowingly collect any information from anyone, including children under the age of 13. Since our app does not collect any personal data at all, it is safe for users of all ages.
              </p>
              <p className="text-graphite-300 leading-relaxed">
                Parents and guardians can feel confident that Unfilter respects privacy and does not gather, store, or share any information about its users, regardless of age.
              </p>
            </section>

            {/* Open Source */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-graphite-50">Open Source Transparency</h2>
              <p className="text-graphite-300 leading-relaxed mb-4">
                We maintain an open-source version of Unfilter that is fully available under the MIT License. You can review the source, audit the implementation, and contribute on GitHub.
              </p>
              <p className="text-graphite-300 leading-relaxed mb-4">
                Note: the version distributed on the Google Play Store is kept closed-source for business reasons. The open-source repository at
                {' '}
                <a href="https://github.com/escapebranch/unfilter" className="text-steel-400 hover:text-steel-300 transition-colors">
                  github.com/escapebranch/unfilter
                </a>
                {' '}contains the same features as the Play Store release and often receives faster updates and fixes.
              </p>
              <p className="text-graphite-300 leading-relaxed">
                We believe in transparency and invite technical users to examine our implementation to verify that all analysis is performed locally and no data is transmitted off your device.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-graphite-50">Your Rights and Control</h2>
              <p className="text-graphite-300 leading-relaxed mb-4">
                Since Unfilter does not collect any personal data, traditional data rights (such as access, deletion, or portability) are not applicable. However, you maintain complete control over the app:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-graphite-300">
                <li><strong>Uninstall:</strong> You can remove Unfilter from your device at any time, which will delete all locally stored data</li>
                <li><strong>Clear Data:</strong> You can clear the app's cache and data through your Android settings</li>
                <li><strong>Revoke Permissions:</strong> You can revoke any granted permissions through your device's app settings</li>
                <li><strong>Offline Use:</strong> The app works completely offline, giving you full control over when and how it operates</li>
              </ul>
            </section>

            {/* Changes to Privacy Policy */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-graphite-50">Changes to This Privacy Policy</h2>
              <p className="text-graphite-300 leading-relaxed mb-4">
                We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. When we make changes, we will update the "Last Updated" date at the top of this policy.
              </p>
              <p className="text-graphite-300 leading-relaxed mb-4">
                We encourage you to review this Privacy Policy periodically. If we make material changes that affect how we handle data (though given our current no-collection policy, this is unlikely), we will notify users through the app or our website.
              </p>
              <p className="text-graphite-300 leading-relaxed">
                Your continued use of Unfilter after any changes to this Privacy Policy constitutes your acceptance of the updated policy.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-graphite-50">Contact Us</h2>
              <p className="text-graphite-300 leading-relaxed mb-4">
                If you have any questions, concerns, or suggestions regarding this Privacy Policy or our privacy practices, please feel free to contact us:
              </p>
              <div className="bg-graphite-900/50 border border-graphite-800 rounded-lg p-6">
                <p className="text-graphite-300 mb-2">
                  <strong className="text-graphite-100">Project:</strong> Unfilter
                </p>
                <p className="text-graphite-300 mb-2">
                  <strong className="text-graphite-100">Try Open Source:</strong>{' '}
                  <a href="https://github.com/escapebranch/unfilter" className="text-steel-400 hover:text-steel-300 transition-colors">
                    github.com/escapebranch/unfilter
                  </a>
                </p>
                <p className="text-graphite-300">
                  <strong className="text-graphite-100">Email:</strong>{' '}
                  <a href="mailto:escapebranch@protonmail.com" className="text-steel-400 hover:text-steel-300 transition-colors">
                    escapebranch@protonmail.com
                  </a>
                </p>
              </div>
              <p className="text-graphite-300 leading-relaxed mt-4">
                We are committed to addressing any privacy concerns promptly and transparently.
              </p>
            </section>

            {/* Legal Compliance */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-graphite-50">Legal Compliance</h2>
              <p className="text-graphite-300 leading-relaxed mb-4">
                This Privacy Policy is designed to comply with applicable privacy laws and regulations, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-graphite-300">
                <li>General Data Protection Regulation (GDPR) for users in the European Union</li>
                <li>California Consumer Privacy Act (CCPA) for users in California</li>
                <li>Google Play Store privacy requirements</li>
                <li>Other applicable data protection and privacy laws</li>
              </ul>
              <p className="text-graphite-300 leading-relaxed mt-4">
                Given that Unfilter does not collect any personal data, we inherently comply with the strictest privacy standards by design.
              </p>
            </section>

            {/* Summary */}
            <section className="bg-graphite-900/50 border border-graphite-800 rounded-lg p-6 lg:p-8">
              <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-graphite-50">Privacy Policy Summary</h2>
              <p className="text-graphite-300 leading-relaxed mb-4">
                To summarize our commitment to your privacy:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-graphite-300">
                <li><strong>No data collection:</strong> We do not collect any personal information</li>
                <li><strong>Local processing:</strong> All analysis happens on your device</li>
                <li><strong>No tracking:</strong> We do not use analytics or tracking services</li>
                <li><strong>No third parties:</strong> We do not share data with anyone because we don't have any data to share</li>
                <li><strong>Open source:</strong> Our code is publicly available for verification</li>
                <li><strong>Offline first:</strong> The app works completely offline</li>
              </ul>
              <p className="text-graphite-300 leading-relaxed mt-4">
                Unfilter is built on the principle that your privacy is paramount. We believe in transparency, local-first processing, and giving you complete control over your data.
              </p>
            </section>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-graphite-800">
          <p className="text-sm text-graphite-500 text-center">
            This privacy policy is effective as of March 19, 2026 and applies to all users of the Unfilter application.
          </p>
        </div>
      </div>
    </div>
  );
}
