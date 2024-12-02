import React, { useState } from 'react';
import axios from 'axios';
import All from './All';
import { Link, useNavigate } from 'react-router-dom';

function AddProduct() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate(); // Hook to navigate between pages

  const handleSubmitProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('category', category);

    if (image) {
      formData.append('image', image);
    }

    try {
      await axios.post('http://localhost:3200/create', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('Product added successfully!');
      // Clear the form after successful submission
      setTitle('');
      setPrice('');
      setDescription('');
      setCategory('');
      setImage(null);
    } catch (error) {
      console.error('Error submitting product:', error);
      alert('Failed to submit product');
    }
  };

  const handleLogout = () => {
    alert("Logged out successfully");
    navigate("/login"); // Navigate to the login page after logout
  };

  return (
    <>
      <All />
      <div className="admin-container">
        <div className="content">
          <div className="header">
            <h2>ADD PRODUCT</h2>
          </div>
          <div className="form-card">
            <form onSubmit={handleSubmitProduct}>
              <label htmlFor="title">Product Title:</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <label htmlFor="price">Price:</label>
              <input
                type="number"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
              <label htmlFor="category">Category:</label>
              <input
                type="text"
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              />
              <label htmlFor="image">Product Image:</label>
              <input
                type="file"
                id="image"
                onChange={(e) => setImage(e.target.files[0])}
              />
              <center>
                <br />
                <button type="submit">Submit</button>
              </center>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .admin-container {
          display: flex;
          min-height: 100vh;
          margin-top: -590px;
          margin-left: 200px;
        }

        .content {
          flex: 1;
          padding: 20px;
          // background-color: #ecf0f1;
          height: 100vh;
          overflow-y: auto;
        }

        .content::-webkit-scrollbar {
          display: none;
        }

        .header {
          text-align: center;
          margin-bottom: 20px;
        }

        .header h2 {
          font-family: 'Georgia, serif';
          font-size: 2.5rem;
          font-weight: 900;
          text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
        }

        .form-card {
          width: 470px;
          height: 670px;
          margin: 0 auto;
          padding: 20px;
          border-radius: 30px;
          background: #e0e0e0;
          box-shadow: 15px 15px 30px #bebebe, -15px -15px 30px #ffffff;
        }

        .form-card form {
          display: flex;
          flex-direction: column;
        }

        .form-card label {
          margin: 10px 0 5px;
          color: #2c3e50;
        }

        .form-card input,
        .form-card textarea {
          padding: 10px;
          margin: 10px 0;
          border-radius: 5px;
          border: 1px solid #ccc;
          font-size: 16px;
        }

        .form-card button {
          padding: 10px;
          width: 180px;
          background-color: #34495e;
          color: #fff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .form-card input[type="file"] {
          padding: 5px;
        }

        /* Responsive Design */
        @media (max-width: 850px) {
          .admin-container {
            flex-direction: column;
            margin-left: 0;
            margin-top: 0;
          }

          .form-card {
            width: 90%;
            height: auto;
            padding: 15px;
          }

          .header h2 {
            font-size: 2rem;
          }

          .form-card button {
            width: 100%;
          }
        }

        @media (max-width: 480px) {
          .header h2 {
            font-size: 1.5rem;
          }

          .form-card {
            width: 100%;
            height: auto;
            padding: 10px;
          }

          .form-card button {
            width: 100%;
            font-size: 14px;
          }

          .form-card input,
          .form-card textarea {
            font-size: 14px;
          }
        }
      `}</style>
    </>
  );
}

export default AddProduct;