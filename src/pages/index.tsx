import React from 'react';

const ContestPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-blue-50 to-white">
      {/* Hero Section - Added animation and improved styling */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-8 leading-tight">
          Win a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Luxury Prize</span> of Your Choice!
        </h1>
        <p className="text-xl md:text-2xl text-blue-800 mb-8 max-w-3xl mx-auto leading-relaxed">
          Yes, this is real, and yes, it's happening! We're giving away your choice of a Rolex (no, not the cheap ones), 
          a Birkin bag, or a vacation to the destination of your dreams.
        </p>
      </section>

      {/* How to Enter Section - Added cards with hover effects */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">How Do I Enter?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "1. Join Anvara",
              content: (
                <>
                  Sign up for Anvara at{' '}
                  <a
                    href="https://dashboard.anvara.io"
                    className="text-blue-600 hover:text-blue-800 underline transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    dashboard.anvara.io
                  </a>
                  . It's 100% free, no strings attached! Purchasing an activation does not increase your chances of winning. You must work at an ad agency or on a growth/marketing team at a brand.
                </>
              ),
              icon: "🎯"
            },
            {
              title: "2. Call your Friends",
              content: "Ask five of your friends or colleagues to sign up for Anvara. To qualify, your friends must work at an ad agency or on a growth/marketing team at a brand in a relevant role to Anvara. (They can't already have an account).",
              icon: "👥"
            },
            {
              title: "3. Complete the Entry Form",
              content: (
                <>
                  Fill out this{' '}
                  <a
                    href="https://forms.gle/qgUHEV9G2wjXwxa96"
                    className="text-blue-600 hover:text-blue-800 underline transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    quick Google Form
                  </a>
                  {' '}with your info so we can confirm your entry.
                </>
              ),
              icon: "📝"
            },
            {
              title: "4. Good Luck!",
              content: "Cross Your Fingers, Knock on Wood, Wear your lucky socks, wish at 11:11, and steer clear of ladders.",
              icon: "🍀"
            }
          ].map((step, index) => (
            <div key={index} className="bg-white rounded-xl p-8 transform hover:-translate-y-1">
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-blue-800 mb-3">{step.title}</h3>
              <p className="text-gray-700">{step.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Important Dates - Added gradient background and improved styling */}
      <section className="max-w-4xl mx-auto px-4 py-12 my-12">
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">Save the Date</h2>
          <p className="text-xl">
            Join us for our live LinkedIn winner announcement on 12/10/2024.
            <br />
            We'll be revealing the lucky winner at <span className="font-bold">11:11AM ET</span>.
          </p>
        </div>
      </section>

      {/* Official Rules - Improved readability */}
      <section className="max-w-4xl mx-auto px-4 py-8 mb-12">
        <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Anvara Contest Official Rules</h2>
        <div className="bg-white rounded-xl shadow-lg p-8 space-y-6">
          <p className="font-bold text-lg">NO PURCHASE NECESSARY TO ENTER OR WIN. A PURCHASE DOES NOT INCREASE THE CHANCES OF WINNING.</p>
          
          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="font-semibold">1. Sponsor</h3>
              <p>This contest ("Contest") is sponsored by Anvara, Inc. ("Sponsor"), located at 101 MacDougal Street, New York, NY, 10012. By participating in the Contest, each participant agrees to be bound by these Official Rules and the decisions of Sponsor, which are final and binding in all respects.</p>
            </div>

            <div>
              <h3 className="font-semibold">2. Eligibility</h3>
              <p>The Contest is open to legal residents of the United States who are at least eighteen (18) years old at the time of entry. Employees, officers, and directors of Anvara, Inc., and its affiliates, as well as their immediate family members and individuals living in the same household, are not eligible. Void where prohibited by law.</p>
            </div>

            <div>
              <h3 className="font-semibold">3. Contest Period</h3>
              <p>The Contest begins the date of this release and ends on December 8, 2024, at 11:59 PM EST (the "Contest Period"). Entries submitted after the Contest Period will not be considered.</p>
            </div>

            <div>
              <h3 className="font-semibold">4. How to Enter</h3>
              <p>To enter the Contest, participants must complete the following steps during the Contest Period:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Sign up for an Anvara account (no purchase necessary) and be approved as a relevant advertiser.</li>
                <li>Refer five (5) friends to sign up for Anvara, ensuring each referral works at an advertising agency or on a growth or marketing team at a brand (their accounts will be approved if they are relevant to Anvara and denied/will not count otherwise). Each referral may only be referred once, so if your referral already has an account, you will need to refer to another person without an account.</li>
                <li>Complete and submit the designated Google Form with the required entry details.</li>
              </ul>
              <p className="mt-2">Limit: One (1) entry per person. Any attempt to submit additional entries by using multiple identities or other means may result in disqualification.</p>
            </div>

            <div>
              <h3 className="font-semibold">5. Prize</h3>
              <p>One (1) winner will receive their choice of:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>A Rolex watch;</li>
                <li>A Birkin handbag; or</li>
                <li>A luxury vacation package (specific details to be determined at Sponsor's discretion).</li>
              </ul>
              <p className="mt-2">The Approximate Retail Value ("ARV") of the prize is up to $12,369. Prize is non-transferable, non-exchangeable, and cannot be redeemed for cash. Sponsor reserves the right to substitute a prize of equal or greater value in its sole discretion.</p>
            </div>

            <div>
              <h3 className="font-semibold">6. Winner Selection</h3>
              <p>The winner will be selected at random from all eligible entries received during the Contest Period. The drawing will take place on December 10, 2024, and the winner will be announced live during the Sponsor's LinkedIn livestream on that same day. Odds of winning depend on the total number of eligible entries received.</p>
            </div>

            <div>
              <h3 className="font-semibold">7. Notification of Winner</h3>
              <p>The potential winner will be notified during the livestream and will also receive a follow-up email at the address provided in the typeform submission. The potential winner must respond to our contact within three (3) days to confirm eligibility and provide any requested information. Failure to respond within the specified time may result in disqualification, and an alternate winner may be selected.</p>
            </div>

            <div>
              <h3 className="font-semibold">8. Publicity Release</h3>
              <p>Except where prohibited, participation in the Contest constitutes the winner's consent to Sponsor's use of the winner's name, likeness, and entry for promotional purposes in any media without further payment or consideration.</p>
            </div>

            <div>
              <h3 className="font-semibold">9. General Conditions</h3>
              <p>Sponsor reserves the right to disqualify any entrant who tampers with the entry process, violates these Official Rules, or acts in a disruptive or unsportsmanlike manner. Sponsor also reserves the right to cancel, suspend, or modify the Contest if fraud, technical failures, or any other factor impairs the integrity or proper functioning of the Contest, as determined by Sponsor in its sole discretion.</p>
            </div>

            <div>
              <h3 className="font-semibold">10. Limitation of Liability</h3>
              <p>By participating, entrants agree to release, indemnify, and hold harmless Sponsor and its subsidiaries, affiliates, advertising and promotion agencies, and each of their respective officers, directors, employees, and agents from and against any claim or cause of action arising out of participation in the Contest or receipt, use, or misuse of any prize.</p>
            </div>

            <div>
              <h3 className="font-semibold">11. Disputes</h3>
              <p>All issues and questions concerning the construction, validity, interpretation, and enforceability of these Official Rules or the rights and obligations of participants and Sponsor in connection with the Contest shall be governed by, and construed in accordance with, the laws of the State of New York, without giving effect to any choice of law or conflict of law rules.</p>
            </div>

            <div>
              <h3 className="font-semibold">12. Privacy</h3>
              <p>Information collected from entrants is subject to Sponsor's Privacy Policy, which can be found at [Anvara's Privacy Policy URL].</p>
            </div>

            <div>
              <h3 className="font-semibold">13. Sponsor</h3>
              <p>Anvara, Inc.<br />
              101 MacDougal St<br />
              New York, NY 10012</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Added gradient border */}
      <footer className="max-w-4xl mx-auto px-4 py-8 text-center border-t border-gradient-to-r from-blue-500 to-purple-500">
        <h3 className="text-xl font-semibold text-blue-900 mb-4">Contact Information</h3>
        <p className="text-gray-700">
          For any questions about the Contest, please contact:{' '}
          <a href="mailto:info@anvara.com" className="text-blue-600 hover:text-blue-800 transition-colors">
            info@anvara.com
          </a>
        </p>
        <p className="mt-4 text-sm text-gray-600">
          This Contest is in no way sponsored, endorsed, administered by, or associated with LinkedIn or any other third-party platform.
        </p>
      </footer>
    </div>
  );
};

export default ContestPage;
