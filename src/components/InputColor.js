import React, { useState } from "react";
import { ChromePicker, SketchPicker } from "react-color";

const InputColor = () => {
  const [color, setColor] = useState("#054080");
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const handleChange = (color) => setColor(color.hex);
  return (
    <div>
      <label className="font-semibold text-md">Color</label>
      <div className="flex items-center gap-2">
        <div
          onClick={() => setDisplayColorPicker(!displayColorPicker)}
          style={{ backgroundColor: color }}
          className="w-10 h-8 cursor-pointer border-4"
        ></div>
        <span>{color}</span>
      </div>
      {displayColorPicker && ( // Use curly braces here
        <div className="absolute mt-2">
          <ChromePicker color={color} onChange={handleChange} />
        </div>
      )}
    </div>
  );
};

export default InputColor;
