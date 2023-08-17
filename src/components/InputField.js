import React from "react";

const InputField = () => {
  return (
    <div>
      <label className="font-semibold text-md">YOUR URL</label>
      <input
        type="url"
        className="w-full border-s py-1 px-3 text-gray-700 rounded-sm"
        placeholder="https://dishaaa.com"
      />
    </div>
  );
};

export default InputField;
