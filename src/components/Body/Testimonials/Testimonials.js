import React from "react";
import quotes from "../../../images/quotes.png";
import profile1 from "../../../images/profile1.jpg";
import profile2 from "../../../images/profile2.jpg";
import profile3 from "../../../images/profile3.jpg";

export default function Testimonials() {
  return (
    <section className="testimonials">
      <img src={quotes} alt="quotes" className="quotes" />
      <div className="testimonials_quotes">
        <div className="testimonials_quotes_first">
          <p className="testimonials_quotes_first_text">
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <aside className="founders">
            <div>
              <img src={profile1} alt="First Profile" className="Profile" />
            </div>
            <div className="founders_title">
              <h2>Satish Patel</h2>
              <p> Founder & CEO, Huddle</p>
            </div>
          </aside>
        </div>

        <div className="testimonials_quotes_first">
          <p className="testimonials_quotes_first_text">
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <aside className="founders">
            <div>
              <img src={profile2} alt="First Profile" className="Profile" />
            </div>
            <div className="founders_title">
              <h2>Bruce McKenzie</h2>
              <p> Founder & CEO, Huddle</p>
            </div>
          </aside>
        </div>

        <div className="testimonials_quotes_first">
          <p className="testimonials_quotes_first_text">
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <aside className="founders">
            <div>
              <img src={profile3} alt="First Profile" className="Profile" />
            </div>
            <div className="founders_title">
              <h2>Iva Boyd</h2>
              <p> Founder & CEO, Huddle</p>
            </div>
          </aside>
        </div>

      </div>
    </section>
  );
}
