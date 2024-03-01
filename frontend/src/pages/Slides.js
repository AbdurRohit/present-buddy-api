import pptxgen from "pptxgenjs";

export default function Slides(jsonStr) {
  try {
    const slidesData = Object.values(JSON.parse(jsonStr)); 

    let pres = new pptxgen();

    // Slide Master Definition
    let slideMaster = pres.defineSlideMaster({
      title: "Master Slide",
      background: { fill: "F1F1F1" },
      objects: [
        { rect: { x: 0, y: 0.0, w: "100%", h: 0.5, fill: { transparency: 10, color: "003366" } } },
        {
          text: {
            text: "PresentBuzz",
            options: {
              x: 0.5,
              y: 0.0,
              w: 9.0,
              h: 0.6,
              align: "center",
              fontSize: 20,
              color: "FFFFFF",
            },
          },
        },
      ],
    });

    // Create Slides from Data
    slidesData.forEach((slideInfo) => {
      let slide = pres.addSlide({ masterName: "Master Slide" });

      // Heading
      slide.addText(slideInfo.title, {
        x: 1,
        y: 1.2, 
        fontSize: 20,
        bold: true,
        color: "003366",
      });

      // Bullet Points with Dynamic Positioning
      const bulletYStart = 2;  // Initial Y position for the first bullet
      const bulletSpacing = 0.5; // Spacing between bullets

      slideInfo.content.forEach((bulletText, index) => {
        slide.addText(bulletText, {
          x: 1, 
          y: bulletYStart + (index * bulletSpacing), 
          fontSize: 16, 
          color: '003366', 
          bullet: true, 
          indentLevel: 0
        });
      });
    });

    // Generate Presentation File
    pres.writeFile("Presentation.pptx"); 
  } catch (error) {
    console.error("Error generating presentation:", error);
    // You might want to display an error message to the user here
  }
}