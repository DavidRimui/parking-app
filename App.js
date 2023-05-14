import React, { useState } from 'react';
import QRCode from 'qrcode.react';

function App() {
  const [plateNumber, setPlateNumber] = useState('');

  const generateQRCode = () => {
    if (plateNumber.trim() === '') {
      return; // Skip generating QR code if the plate number is empty
    }
  };

  return (
    <div>
      <label>Enter Plate Number:</label>
      <input type="text" value={plateNumber} onChange={(e) => setPlateNumber(e.target.value)} />
      <button onClick={generateQRCode}>Generate QR Code</button>
      {plateNumber.trim() !== '' && <QRCode value={plateNumber} />}
    </div>
  );
}

export default App;
