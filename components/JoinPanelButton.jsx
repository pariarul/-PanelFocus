"use client";

import { useState } from "react";
import JoinPanelModal from "./JoinPanelModal";

export default function JoinPanelButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="px-5 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
      >
        Join Our Panel
      </button>

      <JoinPanelModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
