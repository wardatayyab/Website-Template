
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate, useParams } from 'react-router-dom';

// const EditProduct = () => {
//   const { id } = useParams(); // Get product id from URL params
//   const [product, setProduct] = useState({
//     title: '',
//     description: '',
//     price: '',
//     category: '',
//     image: '',
//   });
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3200/product/${id}`);
//         setProduct(response.data); // Set the fetched product details
//       } catch (error) {
//         console.error('Error fetching product:', error);
//         alert('Product not found');
//       }
//     };
//     fetchProduct();
//   }, [id]);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       await axios.put(`http://localhost:3200/update/${id}`, product);
//       alert('Product updated successfully');
//       navigate('/manage'); // Redirect back to manage products
//     } catch (error) {
//       console.error('Error updating product:', error);
//       alert('Failed to update product');
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProduct((prevProduct) => ({
//       ...prevProduct,
//       [name]: value,
//     }));
//   };

//   // Inline styles
//   const styles = {
//     container: {
//       maxWidth: '600px',  // Reduced the max-width of the container
//       margin: '50px auto',
//       padding: '30px',
//       backgroundColor: '#fff',
//       borderRadius: '8px',
//       boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//       fontFamily: 'Arial, sans-serif',
//     },
//     heading: {
//       textAlign: 'center',
//       fontSize: '2rem',
//       marginBottom: '30px',
//       color: '#333',
//     },
//     form: {
//       display: 'flex',
//       flexDirection: 'column',
//     },
//     formGroup: {
//       marginBottom: '20px',
//     },
//     label: {
//       fontSize: '1rem',
//       fontWeight: 'bold',
//       color: '#555',
//       marginBottom: '8px',
//       display: 'inline-block',
//     },
//     input: {
//       width: '100%',  // Keep width 100% but with smaller container
//       maxWidth: '450px',  // Reduced the width of the input fields
//       padding: '10px',
//       fontSize: '1rem',
//       border: '1px solid #ccc',
//       borderRadius: '4px',
//       transition: 'all 0.3s ease',
//       marginBottom: '15px', // Optional: add some space between inputs
//     },
//     inputFocus: {
//       borderColor: '#007bff',
//       outline: 'none',
//     },
//     submitButton: {
//       backgroundColor: '#007bff',
//       color: 'white',
//       padding: '12px 20px',
//       fontSize: '1rem',
//       border: 'none',
//       borderRadius: '4px',
//       cursor: 'pointer',
//       transition: 'background-color 0.3s ease',
//       marginTop: '20px',
//     },
//     submitButtonHover: {
//       backgroundColor: '#0056b3',
//     },
//     '@media (max-width: 600px)': {
//       container: {
//         margin: '20px',
//         padding: '20px',
//       },
//       form: {
//         padding: '10px',
//       },
//       input: {
//         fontSize: '0.9rem',
//         padding: '8px',
//       },
//       submitButton: {
//         fontSize: '0.9rem',
//         padding: '10px 15px',
//       },
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.heading}>Edit Product</h2>
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <div style={styles.formGroup}>
//           <label style={styles.label}>Title:</label>
//           <input
//             type="text"
//             name="title"
//             value={product.title}
//             onChange={handleChange}
//             style={styles.input}
//           />
//         </div>
//         <div style={styles.formGroup}>
//           <label style={styles.label}>Description:</label>
//           <textarea
//             name="description"
//             value={product.description}
//             onChange={handleChange}
//             style={styles.input}
//           />
//         </div>
//         <div style={styles.formGroup}>
//           <label style={styles.label}>Price:</label>
//           <input
//             type="number"
//             name="price"
//             value={product.price}
//             onChange={handleChange}
//             style={styles.input}
//           />
//         </div>
//         <div style={styles.formGroup}>
//           <label style={styles.label}>Category:</label>
//           <input
//             type="text"
//             name="category"
//             value={product.category}
//             onChange={handleChange}
//             style={styles.input}
//           />
//         </div>
//         <div style={styles.formGroup}>
//           <label style={styles.label}>Image URL:</label>
//           <input
//             type="text"
//             name="image"
//             value={product.image}
//             onChange={handleChange}
//             style={styles.input}
//           />
//         </div>
//         <button
//           type="submit"
//           style={{ ...styles.submitButton, ':hover': styles.submitButtonHover }}
//         >
//           Update Product
//         </button>
//       </form>
//     </div>
//   );
// };

// export default EditProduct;




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditProduct = () => {
  const { id } = useParams(); // Get product id from URL params
  const [product, setProduct] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    image: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:3200/product/${id}`);
        setProduct(response.data); // Set the fetched product details
      } catch (error) {
        console.error('Error fetching product:', error);
        alert('Product not found');
      }
    };
    fetchProduct();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:3200/update/${id}`, product);
      alert('Product updated successfully');
      navigate('/manage'); // Redirect back to manage products
    } catch (error) {
      console.error('Error updating product:', error);
      alert('Failed to update product');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  // Inline styles for form
  const styles = {
    container: {
      maxWidth: '500px',
      background: 'linear-gradient(0deg, rgb(255, 255, 255) 0%, rgb(244, 247, 251) 100%)',
      borderRadius: '40px',
      padding: '25px 35px',
      border: '5px solid rgb(255, 255, 255)',
      boxShadow: 'rgba(133, 189, 215, 0.8784313725) 0px 30px 30px -20px',
      margin: '20px auto',
    },
    heading: {
      textAlign: 'center',
      fontWeight: '900',
      fontSize: '30px',
      color: 'rgb(16, 137, 211)',
    },
    form: {
      marginTop: '20px',
    },
    formGroup: {
      marginBottom: '20px',
    },
    input: {
      width: '100%',
      background: 'white',
      border: 'none',
      padding: '15px 20px',
      borderRadius: '20px',
      marginTop: '15px',
      boxShadow: '#cff0ff 0px 10px 10px -5px',
      borderInline: '2px solid transparent',
    },
    inputFocus: {
      outline: 'none',
      borderInline: '2px solid #12B1D1',
    },
    submitButton: {
      display: 'block',
      width: '60%',
      fontWeight: 'bold',
      background: 'linear-gradient(45deg, rgb(16, 137, 211) 0%, rgb(18, 177, 209) 100%)',
      color: 'white',
      paddingBlock: '15px',
      margin: '20px auto',
      borderRadius: '20px',
      boxShadow: 'rgba(133, 189, 215, 0.8784313725) 0px 20px 10px -15px',
      border: 'none',
      transition: 'all 0.2s ease-in-out',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Edit Product</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Title:</label>
          <input
            type="text"
            name="title"
            value={product.title}
            onChange={handleChange}
            style={styles.input}
            placeholder="Title"
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Description:</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            style={styles.input}
            placeholder="Description"
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Price:</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            style={styles.input}
            placeholder="Price"
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Category:</label>
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleChange}
            style={styles.input}
            placeholder="Category"
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Image URL:</label>
          <input
            type="text"
            name="image"
            value={product.image}
            onChange={handleChange}
            style={styles.input}
            placeholder="Image URL"
          />
        </div>
        <button
          type="submit"
          style={styles.submitButton}
          onMouseOver={(e) => e.target.style.transform = 'scale(1.03)'}
          onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          onMouseDown={(e) => e.target.style.transform = 'scale(0.95)'}
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default EditProduct;

