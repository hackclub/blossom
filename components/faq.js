export default function Faq() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-7/10">
        <div className="collapse-plus collapse">
          <input type="radio" name="my-accordion-1" checked />
          <div className="collapse-title text-xl font-medium">
            What if I've never coded before? Can I still come?
          </div>
          <div className="collapse-content">
            <p>
              Yes! Blossom is beginner-friendly, and we’ll be holding workshops
              to get you started building your first coding projects.
            </p>
          </div>
        </div>
        <div className="collapse-plus collapse">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Hackathon? What's that?
          </div>
          <div className="collapse-content">
            <p>
              A hackathon is a social coding event -- you get a full day,
              mentors and workshops, and lots of food and swag to build anything
              you want. Even if you've never written a line of code before, we'd
              love to have you there!
            </p>
          </div>
        </div>
        <div className="collapse-plus collapse">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            I have another question!
          </div>
          <div className="collapse-content">
            <p>
              You can find us in the #blossom channel on Hack Club Slack, or
              email us at{" "}
              <a href="mailto:sahiti@hackclub.com">
                <span>sahiti@hackclub.com</span>
              </a>{" "}
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
