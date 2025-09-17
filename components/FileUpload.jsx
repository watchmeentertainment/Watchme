"use client";

import { useState } from "react";

export default function FileUpload() {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) return alert("Select a file first!");
    alert(`File "${file.name}" ready to upload!`);
    // Later: add actual upload API here
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <input type="file" onChange={handleChange} />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={handleUpload}
      >
        Upload
      </button>
      {file && <p>Selected file: {file.name}</p>}
    </div>
  );
}

