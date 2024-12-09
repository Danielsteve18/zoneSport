import React from 'react';

// Definir un tipo para los props del componente ComicCard
interface ComicCardProps {
    title: string;
    image: string;
}

// Mostrará una tarjeta animada con titulo e imagen
const ComicCard: React.FC<ComicCardProps> = ({title, image}) => {
    return (
        <div className="comic-card">
            <img src={image} alt={title} className="comic-image"/>
            <h2>{title}</h2>
        </div>
    );
};

export default ComicCard;