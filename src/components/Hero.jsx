import React from "react";
import { ArrowRight, ShieldCheck, Truck } from "lucide-react";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div className="hero-content">
          <span className="eyebrow">New technology collection</span>

          <h1>
            Upgrade your setup with <span>powerful technology</span>
          </h1>

          <p>
            Discover gaming laptops, mechanical keyboards, monitors, audio
            devices, and accessories selected for performance and style.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#products">
              Shop now <ArrowRight size={18} />
            </a>

            <a className="secondary-button" href="#features">
              Learn more
            </a>
          </div>

          <div className="hero-benefits">
            <div>
              <Truck size={20} />
              <span>Fast delivery</span>
            </div>

            <div>
              <ShieldCheck size={20} />
              <span>Secure payment</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card">
            <span className="discount-badge">Save 20%</span>

            <img
              src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=1000&q=80"
              alt="Modern gaming laptop"
            />

            <div className="hero-card-info">
              <div>
                <small>Featured product</small>
                <h3>Nebula Gaming Laptop</h3>
              </div>

              <strong>$1,299</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
