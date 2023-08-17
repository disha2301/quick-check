import React from "react";

const qrCode = () => {
  return (
    <div className="bg-gray-100 rounded-r-md flex flex-col items-center justify-center">
      <div>
        <img
          src="https://raw.githubusercontent.com/nating/react-native-custom-qr-codes/HEAD/assets/qr-code-3.png"
          alt="qr code"
        />
        <button>Download</button>
      </div>
    </div>
  );
};

export default qrCode;
