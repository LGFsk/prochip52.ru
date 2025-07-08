import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CardModel from "../components/CardModel";
import ContactModal from '../components/ContactModal';
import "../styles/BrandPage.css";


const brandModels = {
// Определение моделей для Haval
  haval: [
    {
      name: "HAVAL DARGO",
      price: "от 12 000р.",
      image: "/assets/brands/haval/Dargo.svg",
      options: {
        "2.0t": {
          "ДВС+РКПП": { price: 22000 },
          "ДВС": { price: 15000 },
          "РКПП": { price: 12000 }   
        }
      },
      //speedLimitOptions: ["Нет", 7500],
      modelDescription: `
STAGE 1
2.0t
Мощность: 192 лс -> 250 лс (+58 лс)
Крутящий момент: 320 нм -> 420 нм (+100 нм)
0-100 км/ч: 7.2 сек`
    },
    {
      name: "HAVAL F7/F7X",
      price: "от 12 000р.",
      image: "/assets/brands/haval/F7.svg",
      options: {
        "2.0t": {
          "ДВС+РКПП": { price: 22000 },
          "ДВС": { price: 15000 },
          "РКПП": { price: 12000 }        
        },
        "1.5t (Bosch MED17 до 2021 г.в.)": {
          "ДВС+РКПП": { price: 22000 },
          "ДВС": { price: 15000 },
          "РКПП": { price: 12000 }  
        },
	"1.5t (Bosch MG1 c 2021 г.в.)": {
          "ДВС+РКПП": { price: 22000 },
          "ДВС": { price: 15000 },
          "РКПП": { price: 12000 }  
        }        
      },
      //speedLimitOptions: ["Нет", 7500],
      modelDescription: `
STAGE 1
1.5t (Bosch MED17 до 2021 г.в.)
Мощность:150 лс -> 183 лс (+33 лс)
Крутящий момент:280 нм -> 315 нм (+35 нм)

1.5t (Bosch MG1 c 2021 г.в.)
Мощность:150 лс -> 181 лс (+31 лс)
Крутящий момент:280 нм -> 300 нм (+20 нм)

2.0t
Мощность: 190 лс -> 232 лс (+42 лс)
Крутящий момент: 340 нм -> 454 нм (+114 нм)
`
    },
    {
      name: "HAVAL F7/F7X New (Monster)",
      price: "от 12 000р.",
      image: "/assets/brands/haval/F7New.svg",
      options: {
        "2.0t": {
          "ДВС+РКПП": { price: 25000 },
          "ДВС": { price: 18000 },
          "РКПП": { price: 12000 }
        },
        "1.5t": {
          "ДВС+РКПП": { price: 25000 },
          "ДВС": { price: 16500 },
          "РКПП": { price: 12000 }
        }
      },
      modelDescription: `
STAGE 1
2.0t
Мощность: 192 лс -> 250 лс (+58 лс)
Крутящий момент: 320 нм -> 420 нм (+100 нм)

1.5t
Мощность: 150 лс -> 180 лс (+30 лс)
Крутящий момент: 230 нм -> 290 нм (+60 нм)
`
    },
    {
      name: "HAVAL H2",
      price: "10 000р.",
      image: "/assets/brands/haval/H2.svg",
      options: {
        "1.5t": {
          "ДВС": { price: 10000 }
        }
      },
      modelDescription: `
STAGE 1
1.5t
Мощность: 150 лс -> 173 лс (+23 лс)
Крутящий момент: 210 нм -> 242 нм (+32 нм)
`
    },
    {
      name: "HAVAL H3",
      price: "от 12 000р.",
      image: "/assets/brands/haval/H3.svg",
      options: {
        "1.5t 143 л.с. (2WD)": {
          "ДВС+РКПП": { price: 22000 },
          "ДВС": { price: 15000 },
          "РКПП": { price: 12000 }
        },
        "1.5t 177 л.с. (4WD)": {
          "ДВС+РКПП": { price: 22000 },
          "ДВС": { price: 15000 },
          "РКПП": { price: 12000 }
        }
      },
      modelDescription: `
STAGE 1
1.5t 2WD
Мощность: 143 лс -> 163 лс (+20 лс)
Крутящий момент: 210 нм -> 252 нм (+42 нм)

1.5t 4WD
Мощность: 177 лс -> 197 лс (+20 лс)
Крутящий момент: 270 нм -> 320 нм (+50 нм)
`
    },
    {
      name: "HAVAL H5",
      price: "10 000р.",
      image: "/assets/brands/haval/H5.svg",
      options: {
        "2.0t": {
          "ДВС": { price: 10000 }
        }
      },
      modelDescription: `
STAGE 1
2.0t
Мощность: 150 лс -> 180 лс (+30 лс)
Крутящий момент: 250 нм -> 300 нм (+50 нм)
`
    },
    {
      name: "HAVAL H5 2024",
      price: "20 000р.",
      image: "/assets/brands/haval/H5_2024.svg",
      options: {
        "2.0t": {
          "200 лс (+56 лс)": { price: 20000 }
        }
      },
      speedLimitOptions: ["Нет", 5000],
      modelDescription: `
Stage1
2.0t
Мощность: 200 лс -> 256 лс (+56 лс)
Крутящий момент: 380 нм -> 480 нм (+95 нм)
`
    },
    {
      name: "HAVAL H6/H6 COUPE",
      price: "10 000р.",
      image: "/assets/brands/haval/H6_COUPE.svg",
      options: {
        "1.5t": {
          "ДВС": { price: 10000 }
        },
        "2.0t": {
          "ДВС": { price: 10000 }
        }
      },
      modelDescription: `
STAGE 1
1.5t
Мощность: 143 лс -> 166 лс (+23 лс)
Крутящий момент: 202 нм -> 234 нм (+32 нм)

2.0t
Мощность: 190 лс -> 219 лс (+29 лс)
Крутящий момент: 310 нм -> 357 нм (+47 нм)
`
    },
    {
      name: "HAVAL H6 GEN 3",
      price: "от 12 000р.",
      image: "/assets/brands/haval/H6_gen_3.svg",
      options: {
        "2.0t": {
          "ДВС+РКПП": { price: 22000 },
          "ДВС": { price: 15000 },
          "РКПП": { price: 12000 }   
        }
      },
      //speedLimitOptions: ["Нет", 7500],
      modelDescription: `
STAGE 1

2.0t
Мощность: 192 лс -> 250 лс (+58 лс)
Крутящий момент: 320 нм -> 420 нм (+100 нм)`
    },
    {
      name: "HAVAL H7",
      price: "от 18 000р.",
      image: "/assets/brands/haval/H7.svg",
      options: {
        "2.0t": {
          "ДВС+РКПП": { price: 25000 },
          "ДВС": { price: 18000 },
          "РКПП": { price: 12000 }   
        }
      },
      //speedLimitOptions: ["Нет", 7500],
      modelDescription: `
STAGE 1

2.0t
Мощность: 192 лс -> 250 лс (+58 лс)
Крутящий момент: 320 нм -> 420 нм (+100 нм)`
    },
    {
      name: "HAVAL H9 2017-2024",
      price: "20 000р.",
      image: "/assets/brands/haval/H9_17_24.svg",
      options: {
        "2.0d 190 л.с.": {
          "ДВС": { price: 20000 }
        },
        "2.0t 245 л.с.": {
          "ДВС": { price: 20000 }
        },
        "2.0t 218 л.с.": {
          "ДВС": { price: 20000 }
        }
      },
      modelDescription: `
STAGE 1
2.0d
Мощность: 190 лс -> 230 лс (+40 лс)
Крутящий момент: 420 нм -> 500 нм (+80 нм)

2.0t
Мощность: 245 лс -> 281 лс (+36 лс)
Крутящий момент: 350 нм -> 402 нм (+52 нм)

2.0t (с 2021 г.в.)
Мощность: 218 лс -> 268 лс (+50 лс)
Крутящий момент: 380 нм -> 487 нм (+107 нм)
`
    },
    {
      name: "HAVAL H9 2024",
      price: "20 000р.",
      image: "/assets/brands/haval/H9_24.svg",
      options: {
        "2.0t": {
          "ДВС": { price: 20000 }
        }
      },
      //speedLimitOptions: ["Нет", 7500],
      modelDescription: `
STAGE 1

2.0t
Мощность: 218 лс -> 268 лс (+50 лс)
Крутящий момент: 380 нм -> 487 нм (+107 нм)`
    },
    {
      name: "HAVAL JOLION",
      price: "от 12 000р.",
      image: "/assets/brands/haval/Jolion.svg",
      options: {
        "1.5t 143 л.с. (2WD)": {
          "ДВС+РКПП": { price: 22000 },
          "ДВС": { price: 15000 },
          "РКПП": { price: 12000 }
        },
        "1.5t 150 л.с. (4WD)": {
          "ДВС+РКПП": { price: 22000 },
          "ДВС": { price: 15000 },
          "РКПП": { price: 12000 }
        }
      },
      modelDescription: `
STAGE 1
1.5t 2WD
Мощность: 143 лс -> 165 лс (+22 лс)
Крутящий момент: 210 нм -> 259 нм (+49 нм)

1.5t 4WD
Мощность: 150 лс -> 180 лс (+30 лс)
Крутящий момент: 230 нм -> 290 нм (+60 нм)
`
    },
    {
      name: "HAVAL M6",
      price: "от 12 000р.",
      image: "/assets/brands/haval/M6.svg",
      options: {
        "1.5t": {
          "ДВС+РКПП": { price: 22000 },
          "ДВС": { price: 15000 },
          "РКПП": { price: 12000 }
        }
      },
      modelDescription: `
STAGE 1
1.5t
Мощность: 143 лс -> 172 лс (+29 лс)
Крутящий момент: 210 нм -> 260 нм (+50 нм)
`
    }  ],


// Определение моделей для Wey
  wey: [
    {
      name: "WEY Cofee 01",
      price: "25 000р.",
      image: "/assets/brands/wey/Wey_01.svg",
      options: {
        "2.0t": {
          "ДВС": { price: 25000 }
        }
      },
      //speedLimitOptions: ["Нет", 7500],
      modelDescription: `
CТОК ЕВРОПА
2.0t
Мощность: 421 лс -> 476 лс (+55 лс)
Крутящий момент: 847 нм -> 880 нм (+33 нм)

STAGE 1
2.0t
Мощность: 421 лс -> 517 лс (+96 лс)
Крутящий момент: 847 нм -> 900 нм (+53 нм)
0-100 км/ч: 4.7сек`
    },
    {
      name: "WEY 05",
      price: "25 000р.",
      image: "/assets/brands/wey/Wey_05.svg",
      options: {
        "2.0t": {
          "ДВС": { price: 25000 }
        }
      },
      //speedLimitOptions: ["Нет", 7500],
      modelDescription: `
CТОК ЕВРОПА
2.0t
Мощность: 421 лс -> 476 лс (+55 лс)
Крутящий момент: 847 нм -> 880 нм (+33 нм)

STAGE 1
2.0t
Мощность: 421 лс -> 517 лс (+96 лс)
Крутящий момент: 847 нм -> 900 нм (+53 нм)
0-100 км/ч: 4.7сек`
    },
    {
      name: "WEY 07",
      price: "25 000р.",
      image: "/assets/brands/wey/Wey_07.svg",
      options: {
        "1.5t": {
          "ДВС": { price: 25000 }
        }
      },
      //speedLimitOptions: ["Нет", 7500],
      modelDescription: `
STAGE 1
1.5t
Мощность: 517 лс -> 550 лс (+33 лс)
Крутящий момент: 930 нм -> 970 нм (+40 нм)
`
    }
  ]
};




export default function BrandPage() {
  const { brandName } = useParams();
  const key = brandName.toLowerCase();
  const models = brandModels[key] || [];
  const [modalOpen, setModalOpen] = useState(false);           // общая заявка
  const [selectedModel, setSelectedModel] = useState(null);    // заявка по модели

  const handleModelClick = (model) => {
    setSelectedModel(model);
    setModalOpen(true);
  };

  return (
    <>
      <Header />
      <main className="brand-page">
        <h1>Модели {brandName.charAt(0).toUpperCase() + brandName.slice(1)}</h1>
        {models.length ? (
          <div className="models-grid">
            {models.map((model) => (
              <div key={model.name} className="model-card">
                <img
                  src={model.image}
                  alt={model.name}
                  className="model-image"
                  onClick={() => handleModelClick(model)}
                />
                <h3>{model.name}</h3>
                <p>{model.price}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>Модели для {brandName} пока не найдены.</p>
        )}
      </main>

      {selectedModel && (
        <CardModel
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          model={selectedModel}
        />
      )}

      <Footer />
    </>
  );
}
