import React from "react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import "./Popup.css";

function Popup() {
  // Load ElevenLabs script when component mounts
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
    script.async = true;
    script.type = 'text/javascript';
    
    // Add script to document head
    document.head.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div style={{ width: '400px', height: '600px', padding: '20px' }}>
      <h2 style={{ marginBottom: '20px', fontSize: '18px', textAlign: 'center' }}>
        Web Accessibility Assistant
      </h2>
      {/* ElevenLabs Conversational AI Agent */}
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <elevenlabs-convai agent-id="agent_7301kg3py6evfm2va2xrhtp94jm9"></elevenlabs-convai>
      </div>
    </div>
  )
};

export default Popup;