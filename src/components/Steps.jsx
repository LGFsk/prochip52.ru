
import React from "react";

import '../styles/Steps.css';

import iconHandshake from "/assets/icons/handshake.svg";
import iconLocation from "/assets/icons/location.svg";
import iconDiagnostics from "/assets/icons/diagnostics.svg";
import iconChip from "/assets/icons/chip.svg";
import iconCheck from "/assets/icons/check.svg";

const steps = [
  {
    icon: iconHandshake,
    title: "Согласование",
    text: "Уточнение модели автомобиля, согласование объёма работ и стоимости. Запись на удобное время",
  },
  {
    icon: iconLocation,
    title: "Ваш визит",
    text: "Вы приезжаете по записи, уточняем технические детали и готовим к диагностике",
  },
  {
    icon: iconDiagnostics,
    title: "Диагностика",
    text: "Проверка технического состояния, считывание заводской прошивки, фиксация параметров ЭБУ",
  },
  {
    icon: iconChip,
    title: "Чип-Тюнинг",
    text: "Производим настройку прошивки с учётом особенностей мотора и КПП. Используем проверенное и лицензированное П",
  },
  {
    icon: iconCheck,
    title: "Проверка",
    text: "Контроль работы после прошивки, проверка на ошибки, тестирование в реальных условиях",
  },
  {
    icon: iconCheck,
    title: "Завершение",
    text: "Консультация, передача рекомендаций, ответы на вопросы. Сохраняем оригинал прошивки — возможен откат",
  },
];

export default function Steps() {
  return (
    <section id="steps" className="steps-section">
      <div className="container">
        <h2 className="steps-title">🔧 Как проходит процедура?</h2>
        <div className="steps-grid">
          {steps.map((step, idx) => (
            <div key={idx} className="step-card">
              <img src={step.icon} alt="" className="step-icon" />
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
