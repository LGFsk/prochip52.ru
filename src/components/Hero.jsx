import React from "react";
import "../styles/Hero.css";
import iconSafety from "/assets/icons/sheld-check.svg";
import iconTool from "/assets/icons/tool.svg";
import iconPuzzle from "/assets/icons/puzzle.svg";
import iconrocket from "/assets/icons/rocket.svg";
import iconPrice from "/assets/icons/price.svg";
import iconWatch from "/assets/icons/stopwatch-fast.svg";

const features = [
  { icon: iconSafety, title: "Безопасность и надёжность", text: "Работаем по заводским протоколам и проверенным калибровкам. Все решения подобраны с учётом ресурса двигателя и трансмиссии" },
  { icon: iconTool, title: "Современное оборудование и ПО", text: "Применяется профессиональный софт и оборудование, поддерживающее весь спектр китайских автомобилей" },
  { icon: iconPuzzle, title: "Индивидуальный подход", text: "Подбираем решения под конкретную комплектацию и мотор. Используем лицензионное ПО и наработки опытных разработчиков" },
  { icon: iconrocket, title: "Результат, который ощущается", text: "Реальные улучшения в отклике, тяге и плавности хода. Сотни довольных клиентов подтверждают эффективность чип-тюнинга" },
  { icon: iconPrice, title: "Прозрачные цены", text: "Без навязываний и скрытых доплат. Вы работаете напрямую с официальным представителем без посредников и накруток" },
  { icon: iconWatch, title: "Быстро и чётко", text: "Среднее время процедуры — около 1 часа. В ряде случаев — 30–40 минут. Зависит от модели и типа блока управления" },
];

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">Чип-тюнинг китайских авто в Нижнем Новгороде</h1>
          <p className="hero-subtitle">Безопасно, быстро, результативно</p>

          <div className="hero-grid">
            {features.map((item, index) => (
              <div key={index} className="hero-card">
                <div className="card-icon">
                  <img src={item.icon} alt="" />
                </div>
                <div className="card-text">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
