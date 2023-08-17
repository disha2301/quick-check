import React from "react";
import InputForm from "./components/InputForm";
import qrCode from "./components/qrCode";

function App() {
  return (
    <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-screen pt-36 px-2">
      <div className="container mx-auto max-w-4xl bg-white rounded-md shadow">
        <div className="md:grid md:grid-cols-3">
          <InputForm />
          <qrCode />
        </div>
      </div>
    </div>
  );
}

export default App;
