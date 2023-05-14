import React from 'react';
import QRCode from 'qrcode.react';

const QRCodeGenerator = ({ numberPlate }) => {
  return (
    <div>
      <h2>QR Code Generator</h2>
      {numberPlate && (
        <div>
          <p>Number Plate: {numberPlate}</p>
          <QRCode value={numberPlate} />
        </div>
      )}
    </div>
  );
};

export default QRCodeGenerator;
