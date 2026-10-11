
import React from "react";
import {
  ArrowRight,
  BadgeCheck,
  Headphones,
  ShieldCheck,
  Truck,
} from "lucide-react";

const values = [
  {
    icon: BadgeCheck,
    title: "Quality First",
    description:
      "We focus on reliable technology and carefully selected products for everyday use.",
  },
  {
    icon: Truck,
    title: "Shopping Made Easy",
    description:
      "Our goal is to make discovering your next technology upgrade simple and convenient.",
  },
  {
    icon: ShieldCheck,
    title: "Trust and Transparency",
    description:
      "We believe product information should be clear so you can make informed decisions.",
  },
  {
    icon: Headphones,
    title: "Customer Focus",
    description:
      "We want every visitor to enjoy a smooth and helpful shopping experience.",
  },
];

function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="container about-hero-grid">
          <div className="about-hero-content">
            <span className="eyebrow">GET TO KNOW US</span>

            <h1>
              Technology that moves you <span>forward.</span>
            </h1>

            <p>
              Welcome to TechStore, your destination for discovering
              technology designed for work, gaming, creativity, and everyday
              life.
            </p>

            <a href="/products" className="primary-button">
              Explore products <ArrowRight size={18} />
            </a>
          </div>

          <div className="about-hero-image">
            <img
              src="https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=1100&q=85"
              alt="Modern technology devices arranged on a desk"
            />

            <div className="about-image-caption">
              <span>Discover</span>
              <strong>Your next upgrade</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="about-story">
        <div className="container about-story-grid">
          <div className="about-story-image">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=85"
              alt="People working together with technology"
              loading="lazy"
            />
          </div>

          <div className="about-story-content">
            <span className="eyebrow">OUR STORY</span>

            <h2>Built around your love for technology</h2>

            <p>
              Technology is more than just devices. It helps us learn,
              create, connect, and bring our ideas to life.
            </p>

            <p>
              TechStore brings together a curated collection of laptops,
              accessories, monitors, and audio products in one convenient
              place. Whether you are building a gaming setup or upgrading
              your workspace, we want to help you explore your options.
            </p>

            <a href="/contact" className="about-text-link">
              Get in touch <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <div className="section-heading centered-heading">
            <div>
              <span className="eyebrow">WHAT MATTERS TO US</span>
              <h2>A better technology shopping experience</h2>
            </div>
          </div>

          <div className="about-values-grid">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article className="about-value-card" key={value.title}>
                  <div className="about-value-icon">
                    <Icon size={25} />
                  </div>

                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="container">
          <div className="about-cta-card">
            <span className="eyebrow light-eyebrow">
              YOUR NEXT UPGRADE STARTS HERE
            </span>

            <h2>Find the technology that fits your world.</h2>

            <p>
              Explore our collection and discover your next favourite
              device.
            </p>

            <a href="/products" className="primary-button about-cta-button">
              Browse products <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
