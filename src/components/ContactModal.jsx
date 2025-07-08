import React, { useState, useEffect } from "react";
import InputMask from "react-input-mask";
import "../styles/Modal.css";

export default function ContactModal({ isOpen, onClose }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [carInfo, setCarInfo] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [consent, setConsent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !phone || !carInfo || !consent) {
      setError("Пожалуйста, заполните все поля и дайте согласие.");
      return;
    }

    setError("");
    setSending(true);
    const message = `Заявка с сайта PROCHIP52:\nИмя: ${name}\nТелефон: ${phone}\nАвто: ${carInfo}`;

    try {
      await fetch(`https://api.telegram.org/bot7910736881:AAHc2cy4I4SuD-2tBA5XBHOyKJz5Qax-6Mo/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: "482830790",
          text: message,
        }),
      });
      alert("Заявка отправлена!");
      setName("");
      setPhone("");
      setCarInfo("");
      setConsent(false);
      onClose();
    } catch (err) {
      console.error(err);
      alert("Ошибка при отправке. Попробуйте позже.");
    } finally {
      setSending(false);
    }
  };

 useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Оставить заявку</h2>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <InputMask
            mask="+7 (999) 999-99-99"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          >
            {(inputProps) => <input {...inputProps} type="tel" placeholder="Телефон" />}
          </InputMask>
          <textarea
            placeholder="Марка, модель, объем и мощность"
            value={carInfo}
            onChange={(e) => setCarInfo(e.target.value)}
            required
          />
          

          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit" disabled={sending}>
            {sending ? "Отправка..." : "Отправить"}
          </button>
        </form>
<label className="consent-checkbox">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              required
            />
            <span>
              Я соглашаюсь с <a href="/policy" target="_blank" rel="noreferrer">условиями обработки персональных данных</a>
            </span>
          </label>
      </div>
    </div>
  );
}
