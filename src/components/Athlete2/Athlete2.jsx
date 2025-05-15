// import React from "react";
// import "./Athlete2.css";
// import backgroundImage from "../../assets/alas1.jpg"; // Adjust the path as needed

// const AlastairCookSection = () => {
//   return (
//     <section className="alastair-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
//       <div className="overlay">
//         <h2 className="heading">Alastair Cook</h2>
//         <p className="description">
//           "I've been with Gray-Nicolls since I was 14 years old. 25 years of
//           memories, incredible bats and unbeatable service. No other brand can
//           do what Gray-Nicolls do."
//         </p>
//       </div>
//     </section>
//   );
// };

// export default AlastairCookSection;









import React from "react";
import "./Athlete2.css";
import backgroundImage from "../../assets/alas1.jpg";
import AthleteSection from "../Athlete3/Athlete3";
import Footer from "../footer/Footer";

const AlastairCookSection = () => {
  return (
    <>
      <section className="alastair-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="overlay">
          <h2 className="heading">Alastair Cook</h2>
          <p className="description">
            "I've been with Gray-Nicolls since I was 14 years old. 25 years of
            memories, incredible bats and unbeatable service. No other brand can
            do what Gray-Nicolls do."
          </p>
        </div>
      </section>

      {/* New video section - added below */}
      <div className="video-container">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="brand-video"
        >
          <source 
            src="https://www.gray-nicolls.co.uk/cdn/shop/videos/c/vp/f878fca423a64e119415d8dae5de6d40/f878fca423a64e119415d8dae5de6d40.HD-1080p-7.2Mbps-37978660.mp4?v=0" 
            type="video/mp4" 
          />
          Your browser does not support HTML5 video.
        </video>
      </div>
      <AthleteSection/>
{/* <Footer/> */}
    </>
  );
};

export default AlastairCookSection;