import React from "react";
import {
  BadgeCheck,
  Headphones,
  PackageCheck,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: PackageCheck,
    title: "Fast delivery",
    description: "Quick and carefully packed delivery for every order.",
  },
  {
    icon: BadgeCheck,
    title: "Quality products",
    description: "Reliable devices selected from trusted technology brands.",
  },
  {
    icon: Headphones,
    title: "Customer support",
    description: "Helpful assistance before and after your purchase.",
  },
  {
    icon: ShieldCheck,
    title: "Secure payment",
    description: "Protected checkout with safe payment processing.",
  },
];

function Features() {
  return (
    <section className="features-section" id="features">
      <div className="container">
        <div className="section-heading centered-heading">
          <div>
            <span className="eyebrow">Why choose us?</span>
            <h2>A better way to shop for technology</h2>
          </div>
        </div>

        <div className="features-grid">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article className="feature-card" key={feature.title}>
                <div className="feature-icon">
                  <Icon size={26} />
                </div>

                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;
