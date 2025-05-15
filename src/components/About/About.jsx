import React from "react";
import "./About.css";

const sections = [
  {
    heading: "Inception",
    text: `We are Gray-Nicolls; the iconic cricket brand built on over 150 years of heritage, where tradition meets innovation.

The Gray-Nicolls name came to be in 1942, as two illustrious brands joined forces: HJ Gray and Sons and LJ Nicolls.

Grays was a manufacturer of rackets and cricket bats based in Cambridge and established in 1855. With a rich heritage rooted in craftsmanship and a passion for the sport, the foundation laid in those early years remains the bedrock of our legacy today.`,
    image: "https://www.gray-nicolls.co.uk/cdn/shop/files/Untitled_design_21.jpg?v=1697722272&width=500",
  },
  {
    heading: "Innovation Era",
    text: `Our commitment to innovation led to the development of modern cricket bat designs that revolutionized the game. We introduced new pressing techniques and handle constructions that improved bat performance and player comfort. During this era, we pioneered ideas that were ahead of their time, setting standards that others would follow. Our engineers worked closely with top players to refine every detail, making Gray-Nicolls synonymous with cutting-edge innovation and premium craftsmanship in the cricketing world.`,
    image: "https://www.gray-nicolls.co.uk/cdn/shop/files/Untitled_design_22.jpg?v=1697722503&width=500",
  },
  {
    heading: "International Expansion",
    text: `Gray-Nicolls expanded to global markets in the 1980s, becoming a household name among cricketers worldwide. We established partnerships with distributors and retailers across continents, bringing our equipment to players at every level. Our brand became especially prominent in Australia, South Africa, and the subcontinent, where cricket holds deep cultural significance. This global growth allowed us to engage with diverse playing styles, fueling product development and reinforcing our status as a truly international brand.`,
    image: "https://www.gray-nicolls.co.uk/cdn/shop/files/Untitled_design_23.jpg?v=1697722681&width=500",
  },
  {
    heading: "Legendary Players",
    text: `Icons like Brian Lara, Alastair Cook, and Kane Williamson trusted Gray-Nicolls throughout their careers, forging unforgettable moments in cricket history. Their loyalty to our brand was a testament to our performance and reliability under pressure. These players carried our legacy on the field, inspiring generations of athletes who aspired to greatness. The bats they wielded became symbols of excellence and ambition, and their stories continue to shape how our brand is perceived today.`,
    image: "https://www.gray-nicolls.co.uk/cdn/shop/files/Untitled_design_24.jpg?v=1697723123&width=500",
  },
  {
    heading: "Sustainable Manufacturing",
    text: `We introduced eco-friendly processes, ensuring sustainable wood sourcing and waste reduction in every stage of manufacturing. Our commitment to the environment includes responsible forestry practices, using water-based adhesives, and minimizing plastic packaging. We also invest in energy-efficient technologies across our factories. At Gray-Nicolls, we believe performance should never come at the cost of the planet. Our sustainability initiatives are driven by a vision to leave a positive impact for future generations of cricketers and nature lovers alike.`,
    image: "https://www.gray-nicolls.co.uk/cdn/shop/files/Untitled_design_28.jpg?v=1697790721&width=500",
  },
  {
    heading: "Modern Milestones",
    text: `From T20 to Test matches, Gray-Nicolls bats continue to break records on international stages. Our products have featured in World Cup finals, historic Ashes series, and IPL clashes that drew millions of viewers. We adapt quickly to the game's evolution, crafting lightweight bats for power hitters and balanced designs for classical players. Whether it’s explosive batting or long innings under pressure, our equipment delivers. These milestones reflect our dedication to progress and high performance in every format.`,
    image: "https://www.gray-nicolls.co.uk/cdn/shop/files/Babar_Azam_Test_Match_11.jpg?v=1669121023&width=500",
  },
  {
    heading: "Today & Beyond",
    text: `Looking ahead, we’re merging tradition with technology to redefine performance gear for future generations. With smart sensors, advanced materials, and data-driven designs, the next era of cricket will be more dynamic than ever. Our R&D team continues to push boundaries, fueled by player feedback and cutting-edge research. Yet, we remain grounded in our roots — a brand born from passion and refined by decades of experience. The future of cricket is here, and Gray-Nicolls will lead it.`,
    image: "https://www.gray-nicolls.co.uk/cdn/shop/files/Untitled_design_26.jpg?v=1697723658&width=500",
  },
];

const Section = ({ heading, text, image, reverse }) => (
  <div className={`about-section ${reverse ? "reverse" : ""}`}>
    <div className="about-image">
      <img src={image} alt={heading} />
    </div>
    <div className="about-text">
      <h2>{heading}</h2>
      <p>{text}</p>
    </div>
  </div>
);

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1>GRAY-NICOLLS: OUR HISTORY</h1>
      {sections.map((section, index) => (
        <Section
          key={index}
          heading={section.heading}
          text={section.text}
          image={section.image}
          reverse={index % 2 !== 0}
        />
      ))}
    </div>
  );
};

export default AboutUs;
