import React from "react";
import SweetAlert from "sweetalert2";
import './App.css';
import Footer from "./components/Footer";


const comics =
[
  {
    "id": "1",
    "title": "Balón de Fútbol",
    "imageUrl": "src/components/image/descarga (1).jpg",
    "price": "$35.99",
    "offer": "20% de descuento",
    "description": "Balón de fútbol duradero, ideal para partidos y entrenamientos en cualquier superficie."
  },
  {
    "id": "2",
    "title": "Raqueta de Tenis",
    "imageUrl": "src/components/image/raqueta.jpg",
    "price": "$79.99",
    "offer": "30% de descuento",
    "description": "Raqueta ligera con diseño ergonómico, perfecta para principiantes y expertos."
  },
  {
    "id": "3",
    "title": "Zapatos para Correr",
    "imageUrl": "src/components/image/tenis.jpg",
    "price": "$89.99",
    "offer": "50% de descuento",
    "description": "Zapatos cómodos y transpirables, diseñados para largas distancias y carreras intensas."
  },
  {
    "id": "4",
    "title": "Guantes de Boxeo",
    "imageUrl": "src/components/image/boxeo.jpg",
    "price": "$49.99",
    "offer": "15% de descuento",
    "description": "Guantes resistentes con acolchado para entrenamientos de boxeo y sparring."
  },
  {
    "id": "5",
    "title": "Bicicleta de Montaña",
    "imageUrl": "src/components/image/bi1.jpg",
    "price": "$599.99",
    "offer": "10% de descuento",
    "description": "Bicicleta con cuadro ligero y suspensión, ideal para todo tipo de terrenos."
  },
  {
    "id": "6",
    "title": "Pesas Ajustables",
    "imageUrl": "src/components/image/pesas.jpg",
    "price": "$129.99",
    "offer": "50% de descuento en la segunda unidad",
    "description": "Pesas ajustables de 2.5 kg a 25 kg, perfectas para entrenar en casa."
  },
  {
    "id": "7",
    "title": "Casco para Ciclismo",
    "imageUrl": "src/components/image/casco.jpg",
    "price": "$49.99",
    "offer": "Precio especial: $39.99",
    "description": "Casco cómodo y ligero, con ventilación y ajuste personalizado para máxima seguridad."
  },
  {
    "id": "8",
    "title": "Balón de Baloncesto",
    "imageUrl": "src/components/image/ba1.jpg",
    "price": "$29.99",
    "offer": "2x1 en balones durante el fin de semana",
    "description": "Balón oficial con gran agarre, ideal para interiores y exteriores."
  },
  {
    "id": "9",
    "title": "Reloj Deportivo",
    "imageUrl": "src/components/image/reloj.jpg",
    "price": "$159.99",
    "offer": "25% de descuento",
    "description": "Reloj inteligente con GPS, resistente al agua y monitoreo de salud."
  },
  {
    "id": "10",
    "title": "Cuerda para Saltar",
    "imageUrl": "src/components/image/cuerda.jpg",
    "price": "$14.99",
    "offer": "2x1 en accesorios de entrenamiento",
    "description": "Cuerda ajustable y ligera, ideal para cardio y ejercicios de resistencia."
  }
];
  

const App = () => {
  const handleClick = (comicTitle: string) => {
    SweetAlert.fire(`Haz click aqui ${comicTitle}`);
  };
  return (
    <>
          <div className="App">
      <h1>ZoneSport</h1>
      <div className="comic-gallery">
        {comics.map((comic) => (
          <div key={comic.id} className="comic-card" onClick={() => handleClick(comic.title)}>
            <img src= {comic.imageUrl} alt={comic.title} className="comic-image" />
            <h2>{comic.title}</h2>
           <div className="descripcion">
              <p><b>Precio:</b> {comic.price}</p>
              <p><b>Oferta: </b>{comic.offer}</p>
              <p><b>Descripción: </b>{comic.description}</p>
           </div>
          </div>
        ))}
      </div>   
    </div>
    <Footer/>
    </>
  )
};
export default App
