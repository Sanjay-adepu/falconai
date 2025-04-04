import React, { useState } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar.jsx";
import { FaHistory } from "react-icons/fa";
import Downloadppt from "../Downloadppt/Downloadppt.jsx";
import "./PPT.css";

const PIXABAY_API_KEY = "49526041-48ed9dcb53d53a70abf899002"; // Your Pixabay API Key
const PIXABAY_API_URL = "https://pixabay.com/api/";

// Function to determine text color based on background brightness
const getContrastTextColor = (bgColor) => {
const hex = bgColor.replace("#", "");
const r = parseInt(hex.substring(0, 2), 16);
const g = parseInt(hex.substring(2, 4), 16);
const b = parseInt(hex.substring(4, 6), 16);

const brightness = (r * 299 + g * 587 + b * 114) / 1000;
return brightness < 128 ? "white" : "black";
};

const themes = [
  // Default Theme
  { name: "Default", value: "default", color: "#dde6edcd" },
  { name: "Midnight Blue", value: "midnight-blue", color: "#191970" },
  { name: "Rust Red", value: "rust-red", color: "#B7410E" },
    { name: "Olive Green", value: "olive-green", color: "#556B2F" },
  { name: "Classic Burgundy", value: "classic-burgundy", color: "#800020" },
  { "name": "Pearl White", "value": "pearl-white", "color": "#FAF3E0" },
  { "name": "Almond Cream", "value": "almond-cream", "color": "#F4E1C6" },
  { "name": "Misty Rose", "value": "misty-rose", "color": "#FFE4E1" },
  { "name": "Vanilla Blush", "value": "vanilla-blush", "color": "#F3E5AB" },
  { "name": "Pale Sand", "value": "pale-sand", "color": "#EAD8C0" },
  { "name": "Honeydew", "value": "honeydew", "color": "#F0FFF0" },
  { "name": "Powder Blue", "value": "powder-blue", "color": "#B0E0E6" },
  { "name": "Frosted Mint", "value": "frosted-mint", "color": "#E0F2F1" },
  { "name": "Seashell Pink", "value": "seashell-pink", "color": "#FFF5EE" },
  { "name": "Dewdrop Green", "value": "dewdrop-green", "color": "#D5F5E3" },
  { "name": "Linen Beige", "value": "linen-beige", "color": "#FAF0E6" },
  { "name": "Soft Lavender", "value": "soft-lavender", "color": "#E6E6FA" },
  { "name": "Blush Peach", "value": "blush-peach", "color": "#FAD7A0" },
  { "name": "Snowfall Gray", "value": "snowfall-gray", "color": "#F5F5F5" },
  { "name": "Angel Blue", "value": "angel-blue", "color": "#CFE2F3" },
  { "name": "Baby Lilac", "value": "baby-lilac", "color": "#D8BFD8" },
  { "name": "Celestial White", "value": "celestial-white", "color": "#FDFEFE" },
  { "name": "Pale Sky", "value": "pale-sky", "color": "#D6EAF8" },
  { "name": "Cotton Cream", "value": "cotton-cream", "color": "#FFFDD0" },
  { "name": "Sunbeam Yellow", "value": "sunbeam-yellow", "color": "#FFFACD" },
  { "name": "Serene Aqua", "value": "serene-aqua", "color": "#D1F2EB" },
  { "name": "Vanilla Latte", "value": "vanilla-latte", "color": "#F3E5D8" },
  { "name": "Pearly Pink", "value": "pearly-pink", "color": "#FFE5EC" },
  { "name": "Crystal Sky", "value": "crystal-sky", "color": "#E3F2FD" },
  { "name": "Soft Butter", "value": "soft-butter", "color": "#FDF5E6" },
  { "name": "Whisper Blue", "value": "whisper-blue", "color": "#E0FFFF" },
  { "name": "Pale Lilac", "value": "pale-lilac", "color": "#E6E6FA" },
  // Light & Soft Tones
  { name: "Ivory White", value: "ivory", color: "#F8F9FA" },
  { name: "Cloud Gray", value: "cloud-gray", color: "#EAEAEA" },
  { name: "Champagne Beige", value: "champagne", color: "#F7E7CE" },
  { name: "Sky Mist", value: "sky-mist", color: "#E3F2FD" },
  { name: "Lavender Haze", value: "lavender", color: "#E6E6FA" },
  { name: "Powder Blue", value: "powder-blue", color: "#B0E0E6" },
  { name: "Pearl White", value: "pearl-white", color: "#FAFAFA" },
  { name: "Mint Cream", value: "mint-cream", color: "#F5FFFA" },
  { name: "Pale Rose", value: "pale-rose", color: "#FFE4E1" },
  { name: "Vanilla Yellow", value: "vanilla", color: "#FFF8DC" },
  { name: "Baby Blue", value: "baby-blue", color: "#ADD8E6" },
  { name: "Silk Peach", value: "silk-peach", color: "#FFDAB9" },
  { name: "Ash Gray", value: "ash-gray", color: "#B2BEB5" },
  { name: "Light Cyan", value: "light-cyan", color: "#E0FFFF" },
  { name: "Snow White", value: "snow-white", color: "#FFFAFA" },

  // Medium & Elegant Tones
  { name: "Steel Blue", value: "steel-blue", color: "#4682B4" },
  { name: "Teal Green", value: "teal-green", color: "#008080" },
  { name: "Slate Gray", value: "slate-gray", color: "#708090" },
  { name: "Sapphire Blue", value: "sapphire-blue", color: "#0F52BA" },
  { name: "Emerald Green", value: "emerald-green", color: "#50C878" },
  { name: "Charcoal Black", value: "charcoal-black", color: "#333333" },
  { name: "Oxford Blue", value: "oxford-blue", color: "#002147" },
  { name: "Deep Maroon", value: "deep-maroon", color: "#800000" },
  { name: "Copper Brown", value: "copper-brown", color: "#B87333" },
  { name: "Platinum Gray", value: "platinum-gray", color: "#E5E4E2" },
  { name: "Royal Indigo", value: "royal-indigo", color: "#4B0082" },
  { name: "Burnt Orange", value: "burnt-orange", color: "#CC5500" },
  { name: "Graphite Gray", value: "graphite-gray", color: "#474A51" },
  { name: "Warm Taupe", value: "warm-taupe", color: "#D2B48C" },
];

const PPT = () => {
const [topic, setTopic] = useState("");
const [slideCount, setSlideCount] = useState(6);
    const [previousPPTs, setPreviousPPTs] = useState([]);
    const [selectedPPT, setSelectedPPT] = useState(null);
const [slides, setSlides] = useState([]);
const [imageCache, setImageCache] = useState({});
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");
const [selectedTheme, setSelectedTheme] = useState("default");
const [titleColor, setTitleColor] = useState("");  
const [contentColor, setContentColor] = useState("");
const [useImages, setUseImages] = useState(true); // Default to images enabled

const removeSlideImage = (slideIndex) => {
setSlides((prevSlides) => {
const updatedSlides = [...prevSlides];
updatedSlides[slideIndex] = { ...updatedSlides[slideIndex], image: null };
return updatedSlides;
});
};

const handleImageUpload = (event, slideIndex) => {
const file = event.target.files[0];
if (file) {
const reader = new FileReader();
reader.onload = (e) => {
setSlides((prevSlides) => {
const updatedSlides = [...prevSlides];
updatedSlides[slideIndex] = { ...updatedSlides[slideIndex], image: e.target.result };
return updatedSlides;
});
};
reader.readAsDataURL(file);
}
};


useEffect(() => {
        fetchPreviousPPTs();
    }, []);

    const fetchPreviousPPTs = async () => {
        try {
            const response = await axios.get("https://falcon-ai-backend.vercel.app/get-previous-slides");
            if (response.data.success) {
                setPreviousPPTs(response.data.previousSlides);
            }
        } catch (error) {
            console.error("Error fetching previous PPTs:", error.message);
        }
    };


  const loadPreviousPPT = async (ppt) => {
        try {
            const response = await axios.get(`https://falcon-ai-backend.vercel.app/get-slides/${ppt.topic}`);
            if (response.data.success) {
                setSlides(response.data.slides);
                setSelectedPPT(ppt.topic);
            }
        } catch (error) {
            console.error("Error loading previous PPT:", error.message);
        }
    };




const saveSlides = async () => {
  try {
    const response = await axios.post(
      "https://falcon-ai-backend.vercel.app/update-slides",
      {
        topic,
        slides: slides.map((slide) => ({
          title: slide.title,
          content: slide.content,
          theme: themes.find((t) => t.value === selectedTheme)?.color || "#FFFFFF",
          titleColor: titleColor || "#000000",
          contentColor: contentColor || "#000000",
          image: useImages ? slide.image || null : null, // Include image only if useImages is true
        })),
        useImages, // Send the flag to the backend
      }
    );

    if (response.data.success) {
      alert("Slides saved successfully!");
    }
  } catch (error) {
    console.error("Error saving slides:", error);
    alert("Failed to save slides.");
  }
};
    




const generateSlides = async () => {
if (!topic.trim()) {
setError("⚠️ Please enter a valid topic.");
return;
}
setError("");
setLoading(true);
setSlides([]);

try {  
  const response = await axios.post(  
    "https://falcon-ai-backend.vercel.app/generate-ppt",  
    { topic, slidesCount: slideCount }  
  );  

  const formattedSlides = response.data.slides.map((slide) => ({  
    title: slide.title.replace(/\*\*/g, "").trim(),  
    content: slide.content.map((point) =>  
      point.replace(/[\*\*]/g, "").replace(/[`\\/]/g, "")  
    ),  
    image: null,  
  }));  

  if (formattedSlides.length > 0) {  
    formattedSlides[0] = {  
      title: `📌 Topic: ${topic}`,  
      content: ["Presented by: AI-Powered PPT Maker"],  
      image: null,  
    };  
  }  

  setSlides(formattedSlides);  
  fetchImages(topic, formattedSlides);  
} catch (err) {  
  console.error("Error generating slides:", err);  
  setError("❌ Failed to generate slides. Please try again.");  
} finally {  
  setLoading(false);  
}

};



const fetchImages = async (query, slidesData) => {
  if (imageCache[query]) {
    updateSlidesWithImages(slidesData, imageCache[query]);
    return;
  }

  try {
    const response = await axios.get(PIXABAY_API_URL, {
      params: {
        key: PIXABAY_API_KEY,
        q: query,
        image_type: "photo",
        per_page: slidesData.length,
      },
    });

    const images = response.data.hits.map((hit) => hit.largeImageURL);

    setImageCache((prevCache) => ({ ...prevCache, [query]: images }));
    updateSlidesWithImages(slidesData, images);
  } catch (error) {
    console.error("Error fetching images:", error);
  }
};

const updateSlidesWithImages = (slidesData, images) => {
const updatedSlides = slidesData.map((slide, index) => ({
...slide,
image: images[index] || null,
}));

setSlides(updatedSlides);

};

return (
<>
<Navbar />
<div className="dashboard-container">

<h1>📊 AI-Powered PPT Maker</h1>
<p className="subtext">Generate professional presentations instantly!</p>

   <div className="previous-ppts">
                    <FaHistory size={30} title="Previous PPTs" />
                    <select onChange={(e) => loadPreviousPPT(JSON.parse(e.target.value))}>
                        <option value="">Select Previous PPT</option>
                        {previousPPTs.map((ppt, index) => (
                            <option key={index} value={JSON.stringify(ppt)}>
                                {ppt.topic}
                            </option>
                        ))}
                    </select>
                </div>

<div className="input-section">  
      <input  
        type="text"  
        placeholder="Enter topic..."  
        value={topic}  
        onChange={(e) => setTopic(e.target.value)}  
      />  
      <input  
        type="number"  
        placeholder="Slide count"  
        value={slideCount}  
        min={1}  
        max={20}  
        onChange={(e) => setSlideCount(Number(e.target.value))}  
      />  
      <button onClick={generateSlides} disabled={loading}>  
        {loading ? <span className="loading-spinner"></span> : "Generate Slides"}  
      </button>  
    </div>  

    {error && <p className="error-message">{error}</p>}  

    {/* Horizontal Theme Selector */}  
{/* Horizontal Theme Selector */}
<div className="horizontal-theme-selector" id="theme-selector-container">
  <div className="theme-buttons-wrapper">
    {themes.map((theme) => (
      <button
        key={theme.value}
        className={`theme-button ${selectedTheme === theme.value ? 'selected' : ''}`}
        style={{
          backgroundColor: theme.color,
          color: getContrastTextColor(theme.color),
        }}
        onClick={() => setSelectedTheme(theme.value)}
      >
        {theme.name}
      </button>
    ))}
  </div>
</div>

<div className="color-picker">
  <label>Title Color : </label>
  <input
    type="color"
    value={titleColor}
    onChange={(e) => setTitleColor(e.target.value)}
  />
</div>

<div className="color-picker1">
  <label>Content Color : </label>
  <input
    type="color"
    value={contentColor}
    onChange={(e) => setContentColor(e.target.value)}
  />
</div>
<div className="toggle-container">
  <label htmlFor="imageToggle" className="toggle-label">
    Include Images:
  </label>
  <div className="toggle-wrapper">
    <input
      type="checkbox"
      id="imageToggle"
      checked={useImages}
      onChange={() => setUseImages((prev) => !prev)}
      className="toggle-checkbox"
    />
    <label htmlFor="imageToggle" className="toggle-slider"></label>
  </div>
</div>

    {slides.length > 0 && (  
      <>  
        <h2>📝 Your Presentation:</h2>  
<p class="note">Note: You can easily edit slide content, including titles, text, and colors.</p>
     
        <div className="slide-grid">  
{slides.map((slide, slideIndex) => {
  const theme = themes.find((t) => t.value === selectedTheme);
  const bgColor = theme?.color || "#fff";
  const textColor = getContrastTextColor(bgColor);

  return (
    <div
      key={slideIndex}
      className="slide-box"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className="slide-content-container">
        <h3
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) => {
            const updatedSlides = [...slides];
            updatedSlides[slideIndex].title = e.target.innerText;
            setSlides(updatedSlides);
          }}
          style={{ color: titleColor || textColor }}
        >
          {slide.title}
        </h3>

        <ul className="slide-content">
          {slide.content.map((point, pointIndex) => (
            <li
              key={pointIndex}
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => {
                const updatedSlides = [...slides];
                updatedSlides[slideIndex].content[pointIndex] = e.target.innerText;
                setSlides(updatedSlides);
              }}
              style={{ color: contentColor || textColor }}
            >
             🔹 {point}
            </li>
          ))}
        </ul>
      </div>

      {/* Conditionally Show Image Section */}
      {useImages && (
        <div className="image-container">
          {slide.image ? (
            <div className="image-wrapper">
              <img src={slide.image} alt="Slide" className="slide-image" />
              <button className="remove-image-btn" onClick={() => removeSlideImage(slideIndex)}>
                ❌
              </button>
            </div>
          ) : (
            <label className="upload-image-label">
              ➕
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload(e, slideIndex)}
                className="hidden-file-input"
              />
            </label>
          )}
        </div>
      )}
    </div>
  );
})}
    </div>  
          </>  
        )} 
        <div class="new">
          
        <button onClick={saveSlides} className="save-button">💾 Save Slides</button>
        </div>
        <p><span id="r">🔹Note </span>: Save the slides before download the ppt</p>

        <Downloadppt topic={topic}  />
          <p id="para" >You can easily edit the slide content by modifying the title and text within each slide. Additionally, you can personalize the appearance by selecting different themes, adjusting the title and content colors, and even adding or removing images. All changes are applied instantly, making it simple to create visually appealing slides with ease</p>
  </div>  
</>

);
};

export default PPT;
