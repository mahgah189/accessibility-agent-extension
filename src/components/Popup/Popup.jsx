import React from "react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import "./Popup.css";
import "@elevenlabs/convai-widget-embed";

function Popup() {
  return (
    <div style={{ width: 360, height: 600 }}>
      <elevenlabs-convai agent-id="agent_7301kg3py6evfm2va2xrhtp94jm9"></elevenlabs-convai>
    </div>
  );
};

export default Popup;