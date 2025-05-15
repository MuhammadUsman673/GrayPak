import React from 'react';
// import './Athlete1.css'; // Import the CSS file

// Import images from assets folder
import athlete1 from '../../assets/z1.webp';
import athlete2 from '../../assets/z2.webp';
import athlete3 from '../../assets/z3.webp';
import athlete4 from '../../assets/z4.webp';
import athlete5 from '../../assets/z5.webp';
import athlete6 from '../../assets/z7.webp';
import athlete7 from '../../assets/z6.webp';
import athlete8 from '../../assets/z8.webp';
import athlete9 from '../../assets/z9.webp';

const AthleteSection = () => {
  // Array of athlete images and captions
  const athleteData = [
    { image: athlete1, caption: "Temmy Beurant" },
    { image: athlete2, caption: "Kane Williamson" },
    { image: athlete3, caption: "Sophia Dunkley" },
    { image: athlete4, caption: "Zak Crawley" },
    { image: athlete5, caption: "Ollie Pop" },
    { image: athlete6, caption: "Joe Root " },
    { image: athlete7, caption: "Saud Shakeel" },
    { image: athlete8, caption: "Kevam Hodge" }
  ];

  return (
    <section className="athlete-section">
      {/* <h2 className="athlete-heading">Gray-Nicolls Athletes</h2>
      <p className="athlete-description">
        Trusted By The Best. Click the athlete image to shop their collection.
      </p> */}
      
      <div className="athlete-grid">
        {/* First two rows with four images each */}
        {[...Array(2)].map((_, rowIndex) => (
          <div key={rowIndex} className="athlete-row">
            {athleteData.slice(rowIndex * 4, rowIndex * 4 + 4).map((athlete, colIndex) => (
              <div key={colIndex} className="athlete-image-container">
                <img src={athlete.image} alt={athlete.caption} className="athlete-image" />
                <p className="athlete-caption">{athlete.caption}</p>
              </div>
            ))}
          </div>
        ))}

        {/* Third row with one centered image */}
        <div className="athlete-single">
          <div className="athlete-image-container">
            <img src={athlete9} alt="Babar Azam" className="athlete-image" />
            <p className="athlete-caption">Josh Da Silva</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AthleteSection;
