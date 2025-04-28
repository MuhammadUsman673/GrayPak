import React from 'react';
import './Family1.css'; // Import the CSS file

import f1 from '../../assets/f1.webp';
import f2 from '../../assets/f2.webp';
import f3 from '../../assets/f3.webp';
import f4 from '../../assets/f4.webp';

const ImageGallery = () => {
    const images = [
        { src: f1, alt: 'GEM 2.1', text: 'GEM 2.1' },
        { src: f2, alt: 'Stratos', text: 'Stratos' },
        { src: f3, alt: 'Ventus', text: 'Ventus' },
        { src: f4, alt: 'Classic', text: 'Classic' },
    ];

    return (
        <div className="container">
            <h1>GRAY-NICOLLS FAMILIES 2025</h1>
            <p>Our new collection features new and returning families to set the pulse racing this summer: GEM 2.1, Stratos, Ventus, and Classic.</p>
            
            <div className="image-grid">
                {images.map((image, index) => (
                    <div className="image-item" key={index}>
                        <img src={image.src} alt={image.alt} />
                        <div className="image-caption">{image.text}</div> {/* Caption below the image */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageGallery;
