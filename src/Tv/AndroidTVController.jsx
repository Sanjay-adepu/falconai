// src/Tv/AndroidTVController.jsx

import React from "react";

const blogs = [
  {
    title: "How AI is Transforming Presentation Design",
    content: `Artificial Intelligence (AI) is fundamentally reshaping how we create, deliver, and perceive presentations. In the past, making a high-quality presentation required time, design skills, and familiarity with tools like PowerPoint or Google Slides. With the emergence of AI tools like FalconAI, creating a presentation is now faster, smarter, and more efficient than ever.

**Introduction to AI in Design**
AI is not just automating repetitive tasks—it’s becoming a creative partner. FalconAI leverages natural language processing and design algorithms to convert a simple idea into a compelling presentation, complete with visuals, text hierarchy, and slide transitions.

**Smart Templates and Design Suggestions**
Instead of users picking from static templates, AI can generate layouts based on content. For example, FalconAI analyzes text input to determine the appropriate visual layout—like timelines, comparison charts, or bullet lists.

**Data Visualization with Zero Effort**
Users can input raw data, and AI generates charts and graphs in real time. This removes the barrier for non-designers or non-technical users who struggle with tools like Excel or Tableau.

**Voice and Gesture Controls**
AI can also integrate with interfaces like voice or gestures, letting users build or edit slides without touching a keyboard.

**Conclusion**
FalconAI is leading the charge by democratizing access to professional-grade presentations. AI doesn’t just make slides faster—it empowers users to focus on message and storytelling while the system handles the visuals.

Stay tuned for our next blog on "The Future of Real-Time Collaboration in AI-powered Tools".`
  },
  {
    title: "The Future of Real-Time Collaboration in AI-powered Tools",
    content: `Real-time collaboration is becoming an essential feature in digital tools, and AI is making it smarter. FalconAI is working on real-time co-authoring features that let multiple people design, edit, and generate slides together—whether they are in the same room or on opposite ends of the world.

**AI-Powered Role Assignment**
FalconAI can identify collaborators’ strengths based on their input and assign roles dynamically—like one person writing content while another focuses on design layout.

**Smart Suggestions and Conflict Resolution**
AI detects when users are editing the same slide and offers suggestions to merge or reconcile changes. It acts like a neutral editor, improving collaboration without friction.

**Cloud-Based Sync**
Built on top of cloud-native architecture, FalconAI ensures zero-lag updates, version control, and secure access so users can collaborate in real-time from anywhere.

With these advancements, FalconAI is not just a tool—it’s a shared workspace that feels like having an AI teammate.

Next blog: “From Prompt to Presentation: How FalconAI Converts Ideas to Slides Instantly.”`
  }
];

const AndroidTVController = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">FalconAI Blogs</h1>
      <div className="space-y-8">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-white p-4 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
            <p className="whitespace-pre-line text-gray-700">{blog.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AndroidTVController;