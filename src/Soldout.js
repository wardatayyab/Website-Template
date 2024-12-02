
import React, { useEffect, useState } from "react";
// Import the Sidebar component
import All from './All';

function SoldOut() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:3200/list');
      const data = await response.json();
      setProducts(data.slice(10, 22));  // Show only the first 12 products
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const markAsSoldOut = async (productId) => {
    try {
      const response = await fetch(`http://localhost:3200/soldout/${productId}`, { method: 'PUT' });
      const result = await response.json();
      if (result.message === 'Product marked as sold out') {
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product._id === productId ? { ...product, status: 'Sold Out' } : product
          )
        );
      } else {
        alert('Error marking product as sold out');
      }
    } catch (error) {
      console.error('Error marking product as sold out:', error);
    }
  };

  return (
    <>
      <div className="main-container">
        <All />
        {/* Main Content Area */}
        <div className="content">
          <h2 className="title">SoldOut Product</h2>
          <div className="product-list">
            {products.map((product) => (
              <div className="product" key={product._id}>
                <div className="product-info">
                  <img src={product.image} alt={product.title} />
                  <div className="product-details">
                    <h3>{product.title}</h3>
                    <p>Price: ${product.price}</p>
                    <p>Category: {product.category}</p>
                    <p>Status: <span className={product.status === 'Sold Out' ? 'sold-out' : 'available'}>{product.status || 'Available'}</span></p>
                  </div>
                </div>
                {product.status !== 'Sold Out' && (
                  <button className="sold-out-button" onClick={() => markAsSoldOut(product._id)}>
                    Sold Out
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Styling */}
      <style jsx>{`
        .main-container {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        }

        /* Sidebar */
        .sidebar {
          width: 230px;
          background-color: #333;
          color: white;
          padding: 20px;
          box-sizing: border-box;
        }

        .sidebar h3 {
          color: #fff;
          margin-bottom: 15px;
        }

        .sidebar ul {
          list-style: none;
          padding: 0;
        }

        .sidebar ul li {
          color: #bbb;
          padding: 10px 0;
          cursor: pointer;
        }

        .sidebar ul li:hover {
          background-color: #444;
        }

        /* Main Content Area */
        .content {
          width: 75%;
          padding: 20px;
          box-sizing: border-box;
        }

        .title {
          font-size: 2.5rem;
          font-family: 'Georgia, serif';
          font-weight: 700;
          text-align: center;
          margin-bottom: 20px;
        }

        .product-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
          justify-items: center;
          max-height: 550px;
          overflow: auto; /* Allow scrolling */
          scrollbar-width: thin; /* For Firefox */
          scrollbar-color: transparent transparent; /* Hide scrollbar in Firefox */
        }

        .product-list::-webkit-scrollbar {
          width: 0px; /* Hide scrollbar in Chrome/Safari */
          background: transparent;
        }

        .product {
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          width: 90%;
          max-width: 320px;
          transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
          position: relative;
        }

        .product:hover {
          transform: translateY(-10px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
          background-color: #f5f5f5;
        }

        .product-info {
          display: flex;
          align-items: center;
          padding: 20px;
          background-color: #f9f9f9;
          border-bottom: 2px solid #eee;
          transition: background-color 0.3s ease;
        }

        .product-info img {
          width: 100px;
          height: 100px;
          object-fit: cover;
          border-radius: 10px;
          margin-right: 20px;
          transition: transform 0.3s ease;
        }

        .product-info img:hover {
          transform: scale(1.1);
        }

        .product-details {
          text-align: left;
          color: #555;
        }

        .product-details h3 {
          font-size: 1.7rem;
          font-weight: 700;
          margin: 10px 0;
          color: #333;
          text-transform: capitalize;
          letter-spacing: 1px;
        }

        .product-details p {
          font-size: 1.1rem;
          margin: 5px 0;
          color: #777;
        }

        .sold-out-button {
          background: #2C3E50;
          color: #fff;
          font-size: 1.1rem;
          padding: 12px 24px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.3s ease;
          width: 100%;
          margin-top: 10px;
          font-weight: bold;
        }

        .sold-out-button:hover {
          background: #2C3E50;
          transform: translateY(-3px);
        }

        .sold-out {
          color: #333333;
          font-weight: bold;
          font-size: 1.2rem;
        }

        .available {
          color: #333333;
          font-weight: bold;
          font-size: 1.2rem;
        }

        /* Responsive Styles */
        @media (max-width: 900px) {
          .main-container {
            flex-direction: column;
          }

          .sidebar {
            width: 100%;
            margin-bottom: 20px;
          }

          .content {
            width: 100%;
          }
        }

        @media (max-width: 600px) {
          .product-info img {
            width: 80px;
            height: 80px;
          }

          .product-details h3 {
            font-size: 1.4rem;
          }

          .sold-out-button {
            font-size: 1rem;
            padding: 10px 18px;
          }
        }
      `}</style>
    </>
  );
}

export default SoldOut;
