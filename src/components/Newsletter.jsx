import React, { useState } from "react";
import { Send } from "lucide-react";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter your email address.");
      return;
    }

    setMessage("Thank you! You are now subscribed.");
    setEmail("");
  }

  return (
    <section className="newsletter-section" id="contact">
      <div className="container">
        <div className="newsletter-card">
          <div>
            <span className="eyebrow light-eyebrow">Stay updated</span>
            <h2>Get deals and technology news</h2>
            <p>
              Join our newsletter to receive product launches, offers, and
              buying guides.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="newsletter-input">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setMessage("");
                }}
              />

              <button type="submit" aria-label="Subscribe">
                <Send size={19} />
              </button>
            </div>

            {message && <small>{message}</small>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
