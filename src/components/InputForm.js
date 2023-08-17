import React from "react";
import InputField from "./InputField";
import InputColor from "./InputColor";

const InputForm = () => {
  return (
    <div className="col-span-2 p-6 grid gap-4">
      <InputField />
      <InputColor />
    </div>
  );
};

export default InputForm;
