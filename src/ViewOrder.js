import React from 'react';

function ViewOrder({ order, onBack }) {
  return (
    <div style={{
      margin: '20px auto',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '10px',
      maxWidth: '600px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#fff',
    }}>
      <h2 style={{ marginBottom: '20px' }}>Order Details</h2>
      <p><strong>ID:</strong> {order.id}</p>
      <p><strong>Billing Name:</strong> {order.billingName}</p>
      <p><strong>Date:</strong> {order.date}</p>
      <p><strong>Total:</strong> {order.total}</p>
      <p><strong>Payment Status:</strong> {order.paymentStatus}</p>
      <p><strong>Payment Method:</strong> {order.paymentMethod}</p>
      <button
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#34495e',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
        }}
        onClick={onBack}
      >
        Back
      </button>
    </div>
  );
}

export default ViewOrder;
