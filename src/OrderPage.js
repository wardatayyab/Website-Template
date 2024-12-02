import React,{useState} from 'react';
import All from './All';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faPaypal, faMoneyBillWave, faUniversity } from '@fortawesome/free-solid-svg-icons';
import { faPaypal as fabPaypal } from '@fortawesome/free-brands-svg-icons';

function ClientPanel() {
  const [selectedOrder, setSelectedOrder] = useState(null); 
  const orders = [
    { id: '#001', billingName: 'John Doe', date: '2024-11-01', total: '$150', paymentStatus: 'Paid', paymentMethod: 'Credit Card' },
    { id: '#002', billingName: 'Jane Smith', date: '2024-11-02', total: '$200', paymentStatus: 'Pending', paymentMethod: 'PayPal' },
    { id: '#003', billingName: 'Michael Brown', date: '2024-11-03', total: '$100', paymentStatus: 'Paid', paymentMethod: 'Debit Card' },
    { id: '#004', billingName: 'Emily Davis', date: '2024-11-04', total: '$250', paymentStatus: 'Failed', paymentMethod: 'Credit Card' },
    { id: '#005', billingName: 'David Wilson', date: '2024-11-05', total: '$180', paymentStatus: 'Paid', paymentMethod: 'Cash' },
    { id: '#006', billingName: 'Sophia Johnson', date: '2024-11-06', total: '$220', paymentStatus: 'Pending', paymentMethod: 'Bank Transfer' },
    { id: '#007', billingName: 'James Martinez', date: '2024-11-07', total: '$300', paymentStatus: 'Paid', paymentMethod: 'PayPal' },
    { id: '#008', billingName: 'Linda Garcia', date: '2024-11-08', total: '$120', paymentStatus: 'Pending', paymentMethod: 'Credit Card' },
    { id: '#009', billingName: 'Robert Anderson', date: '2024-11-09', total: '$170', paymentStatus: 'Failed', paymentMethod: 'Debit Card' },
    { id: '#010', billingName: 'Laura White', date: '2024-11-10', total: '$190', paymentStatus: 'Paid', paymentMethod: 'Credit Card' },
    { id: '#011', billingName: 'Chris Williams', date: '2024-11-11', total: '$160', paymentStatus: 'Pending', paymentMethod: 'PayPal' },
    { id: '#012', billingName: 'Angela Thompson', date: '2024-11-12', total: '$210', paymentStatus: 'Paid', paymentMethod: 'Bank Transfer' },
    { id: '#013', billingName: 'Henry Johnson', date: '2024-11-13', total: '$180', paymentStatus: 'Failed', paymentMethod: 'Cash' },
    { id: '#014', billingName: 'Nancy White', date: '2024-11-14', total: '$130', paymentStatus: 'Paid', paymentMethod: 'Debit Card' },
    { id: '#015', billingName: 'Michael Green', date: '2024-11-15', total: '$140', paymentStatus: 'Pending', paymentMethod: 'Credit Card' },
  ];
  const getPaymentIcon = (method) => {
    switch (method) {
      case 'Credit Card':
        return (
          <div style={{ display: 'flex', alignItems: 'left' }}>
            <FontAwesomeIcon icon={faCreditCard} style={{ fontSize: '16px', color: '#34495e', marginRight: '8px' }} />
            <span>Credit Card</span>
          </div>
        );
      case 'PayPal':
        return (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <FontAwesomeIcon icon={fabPaypal} style={{ fontSize: '16px', color: '#34495e', marginRight: '8px' }} />
            <span>PayPal</span>
          </div>
        );
      case 'Debit Card':
        return (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <FontAwesomeIcon icon={faCreditCard} style={{ fontSize: '16px', color: '#34495e', marginRight: '8px' }} />
            <span>Debit Card</span>
          </div>
        );
      case 'Cash':
        return (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <FontAwesomeIcon icon={faMoneyBillWave} style={{ fontSize: '16px', color: '#34495e', marginRight: '8px' }} />
            <span>Cash</span>
          </div>
        );
      case 'Bank Transfer':
        return (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <FontAwesomeIcon icon={faUniversity} style={{ fontSize: '16px', color: '#34495e', marginRight: '8px' }} />
            <span>Bank Transfer</span>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <All />
      <div className="admin-container">
        <div className="client-content">
          <center>
            <h2
              style={{
                fontSize: "2.5rem",
                color: "#2c3e50",
                marginBottom: "25px",
                marginTop: "20px",
                textAlign: "center",
                fontFamily: "Georgia, serif",
                fontWeight: "900",
                textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
              }}
            >
              Order
            </h2>
          </center>
          <div className="profile">
          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
          <thead>
            <tr>
              <th style={{ textAlign: 'left', padding: '12px', borderBottom: '2px solid #ddd', color: 'white', backgroundColor: '#34495E' }}>ID</th>
              <th style={{ textAlign: 'left', padding: '12px', borderBottom: '2px solid #ddd', color: 'white', backgroundColor: '#34495E' }}>Billing Name</th>
              <th style={{ textAlign: 'left', padding: '12px', borderBottom: '2px solid #ddd', color: 'white', backgroundColor: '#34495E' }}>Date</th>
              <th style={{ textAlign: 'left', padding: '12px', borderBottom: '2px solid #ddd', color: 'white', backgroundColor: '#34495E' }}>Total</th>
              <th style={{ textAlign: 'left', padding: '12px', borderBottom: '2px solid #ddd', color: 'white', backgroundColor: '#34495E' }}>Payment Status</th>
              <th style={{ textAlign: 'left', padding: '12px', borderBottom: '2px solid #ddd', color: 'white', backgroundColor: '#34495E' }}>Payment Method</th>
              <th style={{ textAlign: 'left', padding: '12px', borderBottom: '2px solid #ddd', color: 'white', backgroundColor: '#34495E' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '12px' }}>{order.id}</td>
                <td style={{ padding: '12px' }}>{order.billingName}</td>
                <td style={{ padding: '12px' }}>{order.date}</td>
                <td style={{ padding: '12px' }}>{order.total}</td>
                <td style={{ padding: '12px' }}>
                  <span
                    style={{
                      display: 'inline-block',
                      padding: '1px 13px',
                      borderRadius: '5px',
                      color: order.paymentStatus === 'Paid' ? '#1CBB8C' : order.paymentStatus === 'Failed' ? '#E74C3C' : '#F39C12',
                      backgroundColor: order.paymentStatus === 'Paid' ? '#ECF9F2' : order.paymentStatus === 'Failed' ? '#F9ECEC' : '#FFF3CD',
                      fontSize: '12px',
                    }}
                  >
                    {order.paymentStatus}
                  </span>
                </td>
                <td style={{ padding: '12px' }}>{getPaymentIcon(order.paymentMethod)}</td>
                <td>
                  <button
                    style={{ padding: '6px 12px', backgroundColor: '#34495e', color: '#fff', border: 'none', borderRadius: '5px' }}
                    onClick={() => setSelectedOrder(order)} // Set selected order
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
          </div>
        </div>

        <style jsx>{`
          .admin-container {
            display: flex;
            min-height: 100vh;
            margin-left: 310px;
            margin-top: -630px;

        }

          .client-content {
            flex: 1;
            padding: 20px;
            overflow-y: auto;
            max-height: 650px;
            width: calc(100% - 350px);
             scrollbar-width: none; 
  -ms-overflow-style: none;
          }

          .profile {
            text-align: center;
            margin-bottom: 20px;
          }

          table {
            width: 50%;
            margin: 0 auto;
            border-collapse: collapse;
            border: 1px solid #ddd;
            border-radius: 8px;
            overflow: hidden;
          }

          th, td {
            text-align: left;
            padding: 12px 15px;
            border-bottom: 1px solid #ddd;
          }

          th {
            background-color: #34495e;
            color: #fff;
          }

          td {
            color: #34495e;
          }

          .client {
            width: 45px;
            height: 45px;
            border-radius: 50%;
          }

          .status {
            display: inline-block;
            padding: 3px 6px;
            border-radius: 5px;
            font-weight: bold;
            color: #fff;
          }

          .status.active {
            background-color: #1abc9c;
          }

          .status.inactive {
            background-color: #e74c3c;
          }

          .row-light {
            background-color: #f9f9f9;
          }

          .row-white {
            background-color: #fff;
          }

          /* Responsive Styles */
          @media (max-width: 768px) {
            .admin-container {
              margin-left: 0;
              margin-top: 0;
              flex-direction: column;
            }

            .client-content {
              width: 100%;
              max-height: unset;
            }

            table {
              width: 100%;
            }

            th, td {
              font-size: 0.9rem;
              padding: 10px 8px;
            }

            .client {
              width: 50px; /* Increased size */
              height: 50px; /* Increased size */
            }
          }

          @media (max-width: 480px) {
            table {
              display: block;
              width: 100%;
              border : none;
            }

            thead {
              display: none;
            }

          tbody tr {
  display: flex;
  flex-direction: column;
  width: 270px;
  // border: 1px solid #ddd;
  margin-bottom: 10px;
  margin-left: 5px;
  background-color: #f9f9f9; /* Change this to your preferred background color */
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adding the box shadow */
}


            td {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 10px;
              font-size: 1.0rem;
              font-weight : 500;
              border-bottom: none;
            }

            td img.client {
              width: 60px; /* Larger size for small screens */
              height: 60px;
            }

            td:last-child {
              border-bottom: 0;
            }

            .status {
              font-size: 0.8rem;
            }
          }
        `}</style>
      </div>
    </>
  );
}

export default ClientPanel;








