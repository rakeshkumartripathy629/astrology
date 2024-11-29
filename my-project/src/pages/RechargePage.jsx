import React, { useState } from "react";

const RechargeFlow = () => {
  const [balance, setBalance] = useState(0); // Initial balance
  const [rechargeAmount, setRechargeAmount] = useState({ amount: 0, extra: 0 }); // Amount selected for recharge
  const [isRechargeModalOpen, setIsRechargeModalOpen] = useState(false); // Modal state
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false); // Payment modal state

  const rechargeOptions = [
    { amount: 25, extra: 25 },
    { amount: 50, extra: 50 },
    { amount: 100, extra: 100 },
    { amount: 200, extra: 100 },
    { amount: 500, extra: 250 },
    { amount: 1000, extra: 50 },
    { amount: 2000, extra: 200 },
    { amount: 3000, extra: 300 },
    { amount: 4000, extra: 480 },
    { amount: 8000, extra: 960 },
    { amount: 15000, extra: 2250 },
    { amount: 20000, extra: 3000 },
  ];

  // Function to open recharge modal
  const openRechargeModal = () => {
    setIsRechargeModalOpen(true);
  };

  // Function to close recharge modal
  const closeRechargeModal = () => {
    setIsRechargeModalOpen(false);
  };

  // Function to open payment modal
  const openPaymentModal = () => {
    setIsPaymentModalOpen(true);
    setIsRechargeModalOpen(false); // Close recharge modal when opening payment modal
  };

  // Function to close payment modal
  const closePaymentModal = () => {
    setIsPaymentModalOpen(false);
  };

  // Handle recharge amount selection
  const handleRechargeSelect = (amount, extra) => {
    setRechargeAmount({ amount, extra });
    openPaymentModal(); // Open payment modal after selecting recharge
  };

  // Handle recharge submission (update balance)
  const handleRechargeSubmit = () => {
    // Update the balance with selected amount + extra
    setBalance(balance + rechargeAmount.amount + rechargeAmount.extra);
    closePaymentModal(); // Close the payment modal after recharge is done
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Recharge Your Wallet</h1>

      {/* Available Balance and Recharge Button */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-lg font-semibold">Available Balance:</h2>
          <p className="text-2xl text-yellow-500">₹ {balance}</p>
        </div>
        <button
          onClick={openRechargeModal}
          className="bg-yellow-500 text-white px-6 py-3 rounded-md"
        >
          Recharge
        </button>
      </div>

      {/* Recharge Modal */}
      {isRechargeModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-2xl font-semibold mb-4">Add Money to Wallet</h2>
            <div className="mb-4">
              <p className="text-lg font-medium">Available Balance: ₹ {balance}</p>
            </div>
            <h3 className="text-xl font-semibold mb-4">Popular Recharge Options</h3>
            <div className="grid grid-cols-2 gap-4">
              {rechargeOptions.map((option) => (
                <button
                  key={option.amount}
                  onClick={() => handleRechargeSelect(option.amount, option.extra)}
                  className="bg-gray-100 p-4 rounded-lg hover:bg-gray-200"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">₹ {option.amount}</span>
                    <span className="text-sm text-gray-500">+ ₹ {option.extra} Extra</span>
                  </div>
                </button>
              ))}
            </div>
            <button
              onClick={closeRechargeModal}
              className="mt-4 bg-red-500 text-white px-6 py-3 rounded-md w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Payment Details Modal */}
      {isPaymentModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-2xl font-semibold mb-4">Payment Details</h2>
            <div className="mb-4">
              <p className="text-lg font-medium">Recharge Amount: ₹ {rechargeAmount.amount}</p>
              <p className="text-lg font-medium">GST @18%: ₹ {(rechargeAmount.amount * 0.18).toFixed(2)}</p>
              <p className="text-lg font-medium">Total Amount: ₹ {(rechargeAmount.amount * 1.18).toFixed(2)}</p>
            </div>
            <div className="mb-4">
              <p className="text-sm text-gray-500">100% Extra: ₹ {rechargeAmount.extra}</p>
            </div>
            <h3 className="text-lg font-semibold mb-4">Payment Methods</h3>
            <div className="space-y-4">
              <button className="bg-blue-500 text-white w-full py-2 rounded-md">Credit/Debit Card</button>
              <button className="bg-blue-500 text-white w-full py-2 rounded-md">Net Banking</button>
              <button className="bg-blue-500 text-white w-full py-2 rounded-md">Other Wallets</button>
            </div>
            <button
              onClick={handleRechargeSubmit}
              className="mt-4 bg-green-500 text-white px-6 py-3 rounded-md w-full"
            >
              Submit Recharge
            </button>
            <button
              onClick={closePaymentModal}
              className="mt-4 bg-red-500 text-white px-6 py-3 rounded-md w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RechargeFlow;
