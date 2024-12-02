import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import axios from 'axios';
import All from './All';
import { useNavigate } from 'react-router-dom';

const ManageProducts = () => {
  const [products, setProducts] = useState([]); 
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(9);
  const [totalProducts, setTotalProducts] = useState(0);
  const navigate = useNavigate();

  const fetchProductList = async () => {
    try {
      const response = await axios.get('http://localhost:3200/list');
      setProducts(response.data); 
      setTotalProducts(response.data.length); 
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:3200/delete/${productId}`);
      alert('Product deleted successfully');
      fetchProductList(); 
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('Failed to delete product');
    }
  };

  const handleEditProduct = (productId) => {
    navigate(`/edit/${productId}`);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(totalProducts / productsPerPage);

  useEffect(() => {
    fetchProductList(); 
  }, []);

  return (
    <>
      <All />
      <div className="admin-container">
        <div className="content">
        <h2 style={{ fontSize: "2.5rem", fontFamily: 'Georgia, serif', fontWeight: '700', textAlign: 'center', marginLeft: '-20px' ,textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)"}}>MANAGE PRODUCT</h2>
          <br />
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentProducts.map((product) => (
                <tr key={product._id}>
                  <td><img src={product.image} alt={product.title} width="100px" height="120px" /></td>
                  <td>{product.title}</td>
                  <td>{product.price}</td>
                  <td>{product.category}</td>
                  <td>
                    <div className="action-icons">
                      <FaEdit 
                        style={{ cursor: 'pointer', marginRight: '10px' }} 
                        onClick={() => handleEditProduct(product._id)} 
                      />
                      <FaTrashAlt 
                        style={{ cursor: 'pointer', marginRight: '10px' }} 
                        onClick={() => handleDeleteProduct(product._id)} 
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="pagination">
            <button 
              onClick={() => handlePageChange(currentPage - 1)} 
              disabled={currentPage === 1}
            >
              Prev
            </button>
            <span>{currentPage} / {totalPages}</span>
            <button 
              onClick={() => handlePageChange(currentPage + 1)} 
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>

        {/* CSS for Admin Panel and Manage Products */}
        <style jsx>{`
          .admin-container {
            display: flex;
            min-height: 100vh;
            animation: fadeIn 1s ease-out;
            margin-top: -600px;
            margin-left: 380px;
            width: 850px;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          .content {
            flex: 1;
            padding: 20px;
            background-color: transparent;
            overflow-y: scroll;
            height: 100vh;
            display: block;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }

          .content::-webkit-scrollbar {
            display: none;
          }

          .content h2 {
            font-size: 24px;
            color: #2c3e50;
            text-align: center;
            font-family: 'Georgia, serif';
            font-weight: 700;
            margin-left: -20px;
            text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
          }

          .content table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
          }

          .content table th,
          .content table td {
            padding: 10px;
            text-align: left;
            border-bottom: 1px solid #ccc;
          }

          .content table th {
            background-color: #34495e;
            color: #ecf0f1;
          }

          .pagination {
            margin-top: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .pagination button {
            padding: 5px 15px;
            background-color: #34495e;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin: 0 10px;
          }

          .pagination button:disabled {
            background-color: #bdc3c7;
          }

          .pagination button:hover {
            background-color: #1abc9c;
          }

          .pagination span {
            font-size: 16px;
            color: #34495e;
          }

          .action-icons {
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }

          /* Responsive Styles */
          @media (max-width: 768px) {
            .admin-container {
              margin-left: 0;
              width: 100%;
              margin-top: 0;
            }

            .content {
              padding: 10px;
            }

            .content h2 {
              font-size: 2rem;
              text-align: center;
            }

            .content table {
              font-size: 14px;
            }

            .pagination {
              flex-direction: column;
            }

            .pagination button {
              margin: 5px 0;
            }

            .action-icons {
              flex-direction: column;
              align-items: flex-start;
            }

            .action-icons svg {
              margin-right: 0;
              margin-bottom: 5px;
            }
          }

          @media (max-width: 480px) {
            .content table td,
            .content table th {
              font-size: 12px;
            }

            .content table img {
              width: 80px;
              height: 100px;
            }

            .pagination {
              font-size: 12px;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default ManageProducts;
