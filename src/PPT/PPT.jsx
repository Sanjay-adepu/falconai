
import React, { useState ,useEffect} from "react";    
import axios from "axios";    
import Navbar from "../Navbar/Navbar.jsx";    
import {Link} from "react-router-dom";    
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
  { name: "Default", value: "default", color: "#dde6edcd" },
  { name: "Beach", value: "beach", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
  { name: "Mountains", value: "mountains", image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470" },
  { name: "City Lights", value: "city-lights", image: "https://images.unsplash.com/photo-1499346030926-9a72daac6c63" },
  // ... keep your color themes as they are
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
    updatedSlides[slideIndex] = { ...updatedSlides[slideIndex], image: "" }; // Use "" instead of null    
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
    fetchPreviousPPTs(); // Calls API    
}, [slides]); // 🚨 This will cause an infinite loop because `fetchPreviousPPTs` updates state!    
    
    const fetchPreviousPPTs = async () => {    
    try {    
        const response = await axios.get("https://falcon-ai-backend.vercel.app/get-previous-slides");    
        if (response.data && response.data.success) {    
            setPreviousPPTs(response.data.previousSlides || []); // Ensure it's an array    
        } else {    
            console.error("Invalid response structure", response.data);    
            setPreviousPPTs([]);    
        }    
    } catch (error) {    
        console.error("Error fetching previous PPTs:", error);    
        setPreviousPPTs([]); // Prevent breaking state updates    
    }    
};    
    
    
  const loadPreviousPPT = async (ppt) => {    
    try {    
        const response = await axios.get(`https://falcon-ai-backend.vercel.app/get-slides/${ppt.topic}`);    
        if (response.data && response.data.success) {    
            setSlides(response.data.slides || []);    
            setSelectedPPT(ppt.topic);    
            setTopic(ppt.topic);  // ✅ Set the topic input field    
        } else {    
            console.error("Invalid response structure", response.data);    
            setSlides([]);    
        }    
    } catch (error) {    
        console.error("Error loading previous PPT:", error);    
        setSlides([]); // Prevent UI crash    
    }    
};    
    
    
    
const saveSlides = async () => {    
  try {    
    const response = await axios.post(    
      "https://falcon-ai-backend.vercel.app/update-slides",    
      {    
        topic,    
        slides: slides.map((slide) => {
  const selected = themes.find((t) => t.value === selectedTheme);
  const background = selected?.image || selected?.color || "#FFFFFF";

  return {
    title: slide.title,
    content: slide.content,
    theme: background, // Pass image URL or color
    titleColor: titleColor || "#000000",
    contentColor: contentColor || "#000000",
    image: useImages ? slide.image || null : null,
  };
}),
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
    {themes.map((theme) => {
  const isSelected = selectedTheme === theme.value;
  const backgroundStyle = theme.image
    ? { backgroundImage: `url(${theme.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : { backgroundColor: theme.color, color: getContrastTextColor(theme.color) };

  return (
    <button
      key={theme.value}
      className={`theme-button ${isSelected ? "selected" : ""}`}
      style={{
        ...backgroundStyle,
        color: theme.image ? "white" : backgroundStyle.color,
        border: isSelected ? "2px solid black" : "none",
      }}
      onClick={() => setSelectedTheme(theme.value)}
    >
      {theme.name}
    </button>
  );
})}
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
<p class="note"><span id="c"> Note: </span>You can easily edit slide content, including titles, text, and colors. If you don't want an image in a slide, you can remove it — it won't appear in the final PPT.</p>    
         
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
  {slide.image && slide.image.trim() !== "" ? ( // Ensure empty strings don't count    
    <div className="image-wrapper">    
      <img src={slide.image} alt="Slide" className="slide-image" />    
      <button className="remove-image-btn" onClick={() => removeSlideImage(slideIndex)}>    
        ❌    
      </button>    
    </div>    
  ) : (    
   <label className="upload-image-label">    
  ➕  add image    
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
            
         <div class="down">    
        <Downloadppt topic={topic}  />    
        </div>    
            
    
            
          <p id="para" > 🔹You can easily edit the slide content by modifying the title and text within each slide. Additionally, you can personalize the appearance by selecting different themes, adjusting the title and content colors, and even adding or removing images. All changes are applied instantly, making it simple to create visually appealing slides with ease</p>    
  </div>      
</>    
    
);    
};    
    
export default PPT;    
