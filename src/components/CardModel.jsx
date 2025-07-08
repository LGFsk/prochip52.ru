import React, { useState, useEffect } from "react";
export default function CardModel({ isOpen, onClose, model }) {
  const engineKeys = Object.keys(model.options);
  const hasMultipleEngines = engineKeys.length > 1;
  const [selectedEngine, setSelectedEngine] = useState(engineKeys[0]);
  const [selectedRemap, setSelectedRemap] = useState(Object.keys(model.options[selectedEngine])[0]);
  const [selectedSpeedOption, setSelectedSpeedOption] = useState("Нет");
  const [price, setPrice] = useState(model.options[selectedEngine][selectedRemap].price);

  // ✅ Функция для выделения ключевых слов
  const highlightText = (text) => {
    const highlights = [
      "1.5t \\(Bosch MED17 до 2021 г\\.в\\.\\)",
      "1.5t \\(Bosch MG1 c 2021 г\\.в\\.\\)",
      "1.5t 2WD",
      "1.5t 4WD",
      "1.5t",
      "2.0t",
      "2.0d",
      "3.0t",
      "Мощность:",
      "Крутящий момент:",
      "0-100 км/ч:"
    ];
    const regex = new RegExp(`(${highlights.join("|")})`, "g");
    return text.split(regex).map((part, i) => {
      if (regex.test(part)) {
        return <strong key={i}>{part}</strong>;
      }
      return <span key={i}>{part}</span>;
    });
  };


  useEffect(() => {
    const handleEsc = (e) => { if (e.key === "Escape") onClose(); };
    if (isOpen) document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  useEffect(() => {
    let base = model.options[selectedEngine][selectedRemap].price;
    if (model.speedLimitOptions && selectedSpeedOption !== "Нет") {
      base += Number(selectedSpeedOption);
    }
    setPrice(base);
  }, [selectedEngine, selectedRemap, selectedSpeedOption]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Вы выбрали ${model.name}: ${selectedEngine}, ${selectedRemap}${selectedSpeedOption !== "Нет" ? `, снятие ограничения ${selectedSpeedOption}р` : ""} — ${price} р.`);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-body model-detail">
          {/* Левая сторона */}
          <div className="model-image-wrapper">
            <img
              src={model.image}
              alt={model.name}
              className="model-detail-image"
            />
          </div>

          {/* Правая сторона */}
          <div className="model-info">
            <h2 style={{ fontWeight: "bold", marginBottom: "0rem" }}>{model.name}</h2>
            <p className="price" style={{ color: "red", fontWeight: "bold", fontSize: "1.5rem", marginBottom: "0.5rem" }}>{price} р.</p>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {hasMultipleEngines && (
                <label>
                  Выберите двигатель:
                  <select value={selectedEngine} onChange={(e) => {
                    setSelectedEngine(e.target.value);
                    const firstRemap = Object.keys(model.options[e.target.value])[0];
                    setSelectedRemap(firstRemap);
                  }}>
                    {engineKeys.map(engine => (
                      <option key={engine} value={engine}>{engine}</option>
                    ))}
                  </select>
                </label>
              )}

              <label>
                Прошивка:
                <select value={selectedRemap} onChange={(e) => setSelectedRemap(e.target.value)}>
                  {Object.keys(model.options[selectedEngine]).map(remap => (
                    <option key={remap} value={remap}>{remap}</option>
                  ))}
                </select>
              </label>

              {model.speedLimitOptions && (
                <label>
                  Снятие ограничения скорости:
                  <select value={selectedSpeedOption} onChange={(e) => setSelectedSpeedOption(e.target.value)}>
                    {model.speedLimitOptions.map((option, idx) => (
                      <option key={idx} value={option}>
                        {option === "Нет" ? "Нет" : `Да (+${option} р.)`}
                      </option>
                    ))}
                  </select>
                </label>
              )}

              <button
                type="submit"
                style={{
                  padding: "10px",
                  backgroundColor: "#facc15",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontWeight: "bold"
                }}
              >
                Отправить заявку
              </button>
            </form>

            {/* Статичное описание модели */}
            <div className="compact-description">
            {model.modelDescription.split("\n").map((line, i) => {
  const arrowIndex = line.indexOf("->");
  if (arrowIndex !== -1) {
    const before = line.substring(0, arrowIndex + 2); // включая '->'
    const after = line.substring(arrowIndex + 2).trim();
    return (
      <p key={i}>
        {highlightText(before)}
        {" "}
        <strong style={{ color: "red" }}>{after}</strong>
      </p>
    );
  } else {
    return <p key={i}>{highlightText(line)}</p>;
  }
})}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
