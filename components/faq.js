export default function Faq() {
  return (
    <section className="flex w-11/12 flex-col items-center justify-center lg:w-3/4">
      <div className="faq">
        <h4>What if I have never coded before? Can I still come?</h4>
        <p>
          Yes! Blossom is beginner-friendly, and we’ll be holding workshops to
          get you started building your first coding projects.
        </p>
      </div>
      <div className="faq">
        <h4>Hackathon? What's that?</h4>
        <p>
          A hackathon is a <span>social coding event</span> -- you get a full
          day, mentors and workshops, and lots of food and swag to build
          anything you want. Even if you've never written a line of code before,
          we'd love to have you there!
        </p>
      </div>
      <div className="faq">
        <h4>I have another question!</h4>
        <p>
          You can find us in the #blossom channel on Hack Club Slack, or email
          us at{" "}
          <a href="mailto:sahiti@hackclub.com">
            <span>sahiti@hackclub.com</span>
          </a>
          .
        </p>
      </div>
    </section>
  );
}
