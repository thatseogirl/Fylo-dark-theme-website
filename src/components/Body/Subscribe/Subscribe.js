import React from "react";

export default function Subscribe() {
  return (
    <div className="subscribe">
      <div className="subscribe_text">
        <h3>Get early access today</h3>
        <p>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
      </div>
      <div className="subscribe_text_cta">
        <input
          type="email"
          name="email"
          className="subscribe_text_cta_input"
          placeholder="example@email.com"
        />
        <button type="submit" className="subscribe_text_cta_input_btn">
          Get Started For Free
        </button>
      </div>
    </div>
  );
}
