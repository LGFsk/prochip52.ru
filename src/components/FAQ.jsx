import React from "react";
import faqData from "../pages/faqData";
import "../styles/Faq.css";
import iconQuestion from "/assets/icons/question.svg";

export default function FAQ() {
  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">
          <img src={iconQuestion} alt="?" className="faq-icon" />
          Часто задаваемые вопросы
        </h2>
        <div className="faq-list">
          {faqData.map(({ question, answer }, idx) => (
            <details key={idx} className="faq-item">
              <summary className="faq-question">{question}</summary>
              <p className="faq-answer">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
