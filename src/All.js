import React, { useState } from "react";
import {
  FaUser,
  FaFileInvoice,
  FaTasks,
  FaCalendarAlt,
  FaLock,
  FaList,
  FaBan,
  FaShoppingCart,
  FaUsers,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  return (
    <div style={styles.sidebar}>
      <div style={styles.header}>
        <center>
          <h2 style={{ fontSize: "26px", color: "white", margin: "0", fontFamily: "Georgia, serif" }}>
            Admin Panel
          </h2>
        </center>
      </div>
      <div style={styles.profile}>
        <img src="w.jpg" alt="Profile" style={styles.profileImage} />
        <p style={styles.profileName}>Warda Tayyab</p>
        <p style={styles.profileRole}>Web Developer</p>
      </div>
      <div style={styles.menu}>
        <p style={styles.menuSection}>Pages</p>
        <MenuItem icon={<FaList />} title="Dashboards" to="/" />
        <MenuItem icon={<FaTasks />} title="Add Product" to="/add" />
        <MenuItem icon={<FaFileInvoice />} title="Manage Product" to="/manage" />
        <MenuItem icon={<FaBan />} title="Sold Out" to="/soldout" />
        <MenuItem icon={<FaUsers />} title="Client" to="/client" />
        <MenuItem icon={<FaShoppingCart />} title="Order" to="/order" style={{ marginBottom: '8px' }} />

        {/* Direct Map Links */}
        {/* <MenuItem icon={<FaMapMarkerAlt />} title="Map" to="/map" style={{ marginBottom: '8px' }} /> */}

        {/* Auth Dropdown Menu */}
        <DropdownMenu
          icon={<FaLock />}
          title="Auth"
          items={[]}
          style={styles.dropdownContainer}
        />

        <SalesReportCard />
      </div>
    </div>
  );
};

const MenuItem = ({ icon, title, to, style }) => {
  return (
    <div style={{ ...styles.menuItem, ...style }}>
      <Link to={to} style={styles.link}>
        <span style={styles.icon}>{icon}</span>
        <span style={styles.title}>{title}</span>
      </Link>
    </div>
  );
};

const DropdownMenu = ({ icon, title, items, style }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("user"));
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/signup");
  };

  const signUp = () => {
    navigate("/signup");
  };

  return (
    <div style={style}>
      <div onClick={toggleDropdown} style={styles.link}>
        <span style={styles.icon}>{icon}</span>
        <span style={styles.title}>{title}</span>
      </div>
      {isOpen && (
        <div style={{ ...styles.dropdown, marginTop: "-35px", backgroundColor: "transparent" , marginLeft: "-75px"}}>
          {items.map((item, index) => (
            <Link key={index} to={item.link} style={styles.dropdownItem}>
              {item.label}
            </Link>
          ))}
          {!isLoggedIn ? (
            <button style={styles.dropdownButton} onClick={signUp}>Sign Up</button>
          ) : (
            <button style={styles.dropdownButton} onClick={logout}>Logout</button>
          )}
        </div>
      )}
    </div>
  );
};

const SalesReportCard = () => {
  const handleDownload = () => {
    alert("Your report is being downloaded!");
  };

  return (
    <div style={styles.card}>
      <h2 style={styles.cardTitle}>Weekly Sales Report</h2>
      <p style={styles.cardDescription}>Your weekly sales report is ready for download!</p>
      <button style={styles.cardButton} onClick={handleDownload}>Download</button>
    </div>
  );
};

const styles = {
  sidebar: {
    width: "300px",
    backgroundColor: "#2c3e50",
    color: "#ecf0f1",
    height: "100vh",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    borderRadius: "10px",
    position: "relative",
    overflowY: "scroll",
    scrollbarWidth: "10px",
  },
  header: {
    marginBottom: "20px",
  },
  profile: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginBottom: "20px",
  },
  profileImage: {
    borderRadius: "50%",
    width: "100px",
    height: "100px",
    marginBottom: "8px",
  },
  profileName: {
    fontWeight: "bold",
    fontSize: "16px",
  },
  profileRole: {
    fontSize: "12px",
    color: "#bdc3c7",
  },
  menu: {
    marginTop: "20px",
  },
  menuSection: {
    fontSize: "14px",
    fontWeight: "bold",
    color: "#7f8c8d",
    textTransform: "uppercase",
    marginBottom: "10px",
  },
  menuItem: {
    display: "flex",
    alignItems: "center",
    padding: "10px 0",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  link: {
    textDecoration: "none",
    color: "#ecf0f1",
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  icon: {
    marginRight: "10px",
  },
  title: {
    flexGrow: 1,
  },
  dropdownContainer: {
    marginBottom: "10px",
  },
  dropdown: {
    position: "absolute",
    top: "100%",
    left: "0",
    borderRadius: "5px",
    padding: "10px",
    zIndex: "1000",
    backgroundColor: "transparent", // Transparent background
    width: "100%",
  },
  dropdownItem: {
    display: "block",
    padding: "8px 12px",
    color: "#ecf0f1",
    textDecoration: "none",
    borderRadius: "5px",
    marginBottom: "5px",
    transition: "background-color 0.3s",
  },
  dropdownButton: {
    padding: "8px 12px",
    backgroundColor: "transparent",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    width: "100%",
    textAlign: "center",
    marginTop: "10px",
  },
  card: {
    padding: "20px",
    backgroundColor: "#2B3947",
    color: "#ecf0f1",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    marginTop: "45px",
  },
  cardTitle: {
    fontSize: "20px",
    marginBottom: "10px",
  },
  cardDescription: {
    fontSize: "14px",
    marginBottom: "20px",
    color: "#bdc3c7",
  },
  cardButton: {
    padding: "10px 20px",
    backgroundColor: "#3498db",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
  },
};

export default Sidebar;








