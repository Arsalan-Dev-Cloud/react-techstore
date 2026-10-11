
import React, { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Send,
  MessageCircle,
  CheckCircle,
} from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    setStatus("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    setStatus(
      "Your message has been validated. This demo has no backend, so your message has not been sent."
    );

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="container contact-hero-content">
          <span className="eyebrow">WE'RE HERE TO HELP</span>

          <h1>
            Let's start a <span>conversation.</span>
          </h1>

          <p>
            Have a question about a product or need help choosing your next
            upgrade? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="contact-main">
        <div className="container contact-layout">
          <div className="contact-info">
            <span className="eyebrow">GET IN TOUCH</span>

            <h2>We'd love to hear from you</h2>

            <p className="contact-info-description">
              Explore the ways you can reach us. We're committed to making
              your TechStore experience helpful and straightforward.
            </p>

            <div className="contact-info-list">
              <article className="contact-info-item">
                <div className="contact-info-icon">
                  <Mail size={22} />
                </div>

                <div>
                  <h3>Email</h3>
                  <p>For general enquiries</p>
                  <span>shaikhmohammadarsalan5@gmail.com</span>
                </div>
              </article>

              <article className="contact-info-item">
                <div className="contact-info-icon">
                  <Phone size={22} />
                </div>

                <div>
                  <h3>Phone</h3>
                  <p>For assistance</p>
                  <span>9960779889</span>
                </div>
              </article>

              <article className="contact-info-item">
                <div className="contact-info-icon">
                  <MapPin size={22} />
                </div>

                <div>
                  <h3>Location</h3>
                  <p>Our business location</p>
                  <span>123 Tech Street, Digital City</span>
                </div>
              </article>

              <article className="contact-info-item">
                <div className="contact-info-icon">
                  <Clock size={22} />
                </div>

                <div>
                  <h3>Availability</h3>
                  <p>Online enquiries</p>
                  <span>Send us a message anytime</span>
                </div>
              </article>
            </div>

            <div className="contact-note">
              <MessageCircle size={22} />

              <p>
                Not sure what you need? Tell us what you're looking for,
                and we'll help you explore your options.
              </p>
            </div>
          </div>

          <div className="contact-form-card">
            <div className="contact-form-heading">
              <h2>Send us a message</h2>
              <p>Fill in the details below.</p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="contact-form-row">
                <div className="contact-field">
                  <label htmlFor="contact-name">Your name</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-email">Email address</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="contact-subject">Subject</label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="How can we help?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-message">Your message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="6"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="contact-submit-button">
                Validate message <Send size={18} />
              </button>

              {status && (
                <div className="contact-form-status" role="status">
                  <CheckCircle size={20} />
                  <p>{status}</p>
                </div>
              )}

              <p className="contact-form-disclaimer">
                This is a frontend-only demo. Messages are not stored or
                delivered.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
