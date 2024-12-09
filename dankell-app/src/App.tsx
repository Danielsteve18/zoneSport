import React from "react";
import SweetAlert from "sweetalert2";
import './App.css';


const comics =
  [
    {
      "id": "1",
      "title": "Balón de Fútbol",
      "imageUrl": "src/components/image/descarga (1).jpg"
    }
      ,
    
    {
      "id": "2",
      "title": "Raqueta de Tenis",
      "imageUrl": "src/components/image/raqueta.jpg"
    },
    {
      "id": "3",
      "title": "Zapatos para Correr",
      "imageUrl": "src/components/image/tenis.jpg"
    },
    {
      "id": "4",
      "title": "Guantes de Boxeo",
      "imageUrl": "src/components/image/boxeo.jpg"
    },
    {
      "id": "5",
      "title": "Bicicleta de Montaña",
      "imageUrl": "src/components/image/bi1.jpg"
    },
    {
      "id": "6",
      "title": "Pesas Ajustables",
      "imageUrl": "src/components/image/pesas.jpg"
    },
    {
      "id": "7",
      "title": "Casco para Ciclismo",
      "imageUrl": "src/components/image/casco.jpg"
    },
    {
      "id": "8",
      "title": "Balón de Baloncesto",
      "imageUrl": "src/components/image/ba1.jpg"
    },
    {
      "id": "9",
      "title": "Reloj Deportivo",
      "imageUrl": "src/components/image/reloj.jpg"
    },
    {
      "id": "10",
      "title": "Cuerda para Saltar",
      "imageUrl": "src/components/image/cuerda.jpg"
    }
  ]
  

const App = () => {
  const handleClick = (comicTitle: string) => {
    SweetAlert.fire(`Haz click aqui ${comicTitle}`);
  };
  return (
    <div className="App">
      <h1>ZoneSport</h1>
      <div className="comic-gallery">
        {comics.map((comic) => (
          <div key={comic.id} className="comic-card" onClick={() => handleClick(comic.title)}>
            <img src= {comic.imageUrl} alt={comic.title} className="comic-image" />
            <h2>{comic.title}</h2>
          </div>
        ))}
      </div>
    </div>
  )
};
export default App
