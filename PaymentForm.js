import React from 'react';

const PaymentForm = ({
  handlePayment,
  setNumberPlate,
  setParkingSlots,
  handleSubmit,
}) => {
  return (
    <div>
      <h2>Payment Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Payment Method:
          <select onChange={(e) => handlePayment(e.target.value)}>
            <option value="">Select</option>
            <option value="mpesa">M-Pesa</option>
            <option value="cash">Cash</option>
          </select>
        </label>
        <br />
        <label>
          Number Plate:
          <input
            type="text"
            onChange={(e) => setNumberPlate(e.target.value)}
          />
        </label>
        <br />
        <label>
          Parking Slots:
          <input
            type="number"
            onChange={(e) => setParkingSlots(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Pay</button>
      </form>
    </div>
  );
};

export default PaymentForm;
