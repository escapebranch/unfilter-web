import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Terms and Conditions - Unfilter',
  description: 'Terms and Conditions for Unfilter Android app and website',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-graphite-950 text-graphite-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-steel-400 hover:text-steel-300 transition-colors mb-8 lg:mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Back to Home</span>
        </Link>

        <div className="mb-12 lg:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            Terms and Conditions
          </h1>
          <p className="text-lg text-graphite-400">Effective Date: March 19, 2026</p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <div className="space-y-8">
            <section>
              <p>
                Welcome to Unfilter! These Terms and Conditions ("Terms") govern your access to and use of the Unfilter Android application (the "App") and the unfilter-web marketing website (the "Website"), developed and maintained by Rakhul ("Developer", "we", "us", or "our").
              </p>
              <p>
                By downloading, accessing, or using Unfilter, you agree to be bound by these Terms. If you do not agree with these Terms, please do not use the App or Website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-graphite-50">1. The Service</h2>
              <p className="text-graphite-300">
                Unfilter is an offline-first utility application designed to analyze installed Android apps to detect framework signatures, surface task-manager signals, and provide local storage analytics. The App operates entirely locally on your device.
              </p>
            </section>

            <section>
              <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-graphite-50">2. Open Source License (MIT License)</h2>
              <p className="text-graphite-300">
                We believe in transparency. The source code for Unfilter is publicly available under the MIT License at <a href="https://github.com/escapebranch/unfilter" className="text-steel-400 hover:text-steel-300">github.com/escapebranch/unfilter</a>.
              </p>
              <p className="text-graphite-300">
                Your Rights: You are free to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, subject to the conditions of the MIT License.
              </p>
              <p className="text-graphite-300">
                The Compiled App: While the source code is MIT-licensed, these Terms govern your use of the compiled App downloaded via official channels (e.g., the Google Play Store) and your interaction with our hosted Website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-graphite-50">3. Privacy and Data</h2>
              <p className="text-graphite-300">
                Your privacy is an absolute priority. As detailed in our Privacy Policy, Unfilter collects zero personal data. The App performs all scanning locally. The only network request made by the App is an anonymous call to the public GitHub API to display the repository's current "Star" count. By using the App, you acknowledge our zero-data practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-graphite-50">4. Acceptable Use</h2>
              <p className="text-graphite-300">You agree to use the App and Website only for lawful purposes. You must not:</p>
              <ul className="list-disc pl-6 space-y-2 text-graphite-300">
                <li>Use the App to facilitate malicious reverse-engineering of third-party applications for illegal purposes or copyright infringement.</li>
                <li>Attempt to disrupt or compromise the integrity of the Website.</li>
                <li>Use the App in any way that violates applicable local, national, or international law.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-graphite-50">5. Third-Party Services</h2>
              <p className="text-graphite-300">The App interacts with the GitHub API to fetch public repository data. Your use of this specific feature is subject to GitHub's standard Terms of Service regarding API usage. We are not responsible for the uptime, accuracy, or availability of this third-party service.</p>
            </section>

            <section>
              <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-graphite-50">6. Intellectual Property</h2>
              <p className="text-graphite-300">While the codebase is open-source under the MIT License, the "Unfilter" name, specific brand logos, and marketing assets displayed on the Website remain the intellectual property of the Developer. You may not use the "Unfilter" brand name to endorse or promote derived products without explicit prior permission.</p>
            </section>

            <section>
              <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-graphite-50">7. Disclaimer of Warranties</h2>
              <p className="text-graphite-300">THE APP AND WEBSITE ARE PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED. To the fullest extent permitted by law, we disclaim all warranties, including but not limited to the warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that:</p>
              <ul className="list-disc pl-6 space-y-2 text-graphite-300">
                <li>The App will accurately detect every framework or correctly identify all app architectures.</li>
                <li>The App will be compatible with all Android devices or OS versions.</li>
                <li>The App or Website will be completely free of bugs, errors, or interruptions.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-graphite-50">8. Limitation of Liability</h2>
              <p className="text-graphite-300">In no event shall the Developer be liable for any direct, indirect, incidental, special, exemplary, or consequential damages (including, but not limited to, device malfunction, data loss, or business interruption) arising out of the use or inability to use the App or Website, even if advised of the possibility of such damage.</p>
            </section>

            <section>
              <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-graphite-50">9. Changes to These Terms</h2>
              <p className="text-graphite-300">We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect by updating the "Effective Date" at the top of this document and updating the repository. Your continued use of the App following the posting of any changes constitutes acceptance of those changes.</p>
            </section>

            <section>
              <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-graphite-50">10. Governing Law and Jurisdiction</h2>
              <p className="text-graphite-300">These Terms shall be governed by and construed in accordance with the laws of India. Any legal action or proceeding arising under these Terms will be brought exclusively in the courts located in Chennai, Tamil Nadu, India, and you hereby irrevocably consent to the personal jurisdiction and venue therein.</p>
            </section>

            <section>
              <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-graphite-50">11. Contact Information</h2>
              <p className="text-graphite-300">If you have any questions about these Terms, please contact us:</p>
              <ul className="list-disc pl-6 space-y-2 text-graphite-300">
                <li>GitHub Issues: <a href="https://github.com/escapebranch/unfilter/issues" className="text-steel-400 hover:text-steel-300">github.com/escapebranch/unfilter/issues</a></li>
                <li>Email: <a href="mailto:escapebranch@protonmail.com" className="text-steel-400 hover:text-steel-300">escapebranch@protonmail.com</a></li>
              </ul>
              <p className="text-graphite-300 mt-4">This project is maintained under the EscapeBranch GitHub organization: <a href="https://github.com/escapebranch" className="text-steel-400 hover:text-steel-300">https://github.com/escapebranch</a></p>
            </section>

            <section className="bg-graphite-900/50 border border-graphite-800 rounded-lg p-6 lg:p-8">
              <p className="text-graphite-300">These Terms are effective as of March 19, 2026.</p>
            </section>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-graphite-800">
          <p className="text-sm text-graphite-500 text-center">These terms apply to the Unfilter App and Website operated by Rakhul.</p>
        </div>
      </div>
    </div>
  );
}
