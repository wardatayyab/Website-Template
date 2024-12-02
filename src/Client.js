
import React from 'react';
import All from './All';

function ClientPanel() {
  const clients = [
    { picture: "pro1.jpg", name: "John Doe", company: "TechCorp Ltd.", email: "john.doe@example.com", status: "Active" },
    { picture: "pro2.jpg", name: "Jane Smith", company: "Innovate Solutions", email: "jane.smith@example.com", status: "Inactive" },
    { picture: "pro3.jpg", name: "Michael Brown", company: "Alpha Tech", email: "michael.brown@example.com", status: "Active" },
    { picture: "pro4.jpg", name: "Emily Davis", company: "Beta Industries", email: "emily.davis@example.com", status: "Active" },
    { picture: "pro5.jpg", name: "David Wilson", company: "NextGen Inc.", email: "david.wilson@example.com", status: "Inactive" },
    { picture: "pro1.jpg", name: "Sophia Johnson", company: "FutureWorks", email: "sophia.johnson@example.com", status: "Active" },
    { picture: "pro2.jpg", name: "James Martinez", company: "Skyline Corp.", email: "james.martinez@example.com", status: "Active" },
    { picture: "pro3.jpg", name: "Linda Garcia", company: "Pinnacle Tech", email: "linda.garcia@example.com", status: "Inactive" },
    { picture: "pro4.jpg", name: "Robert Anderson", company: "Crest Innovations", email: "robert.anderson@example.com", status: "Active" },
    { picture: "pro5.jpg", name: "Laura White", company: "Horizon Group", email: "laura.white@example.com", status: "Inactive" },
  ];

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
              Client Information
            </h2>
          </center>
          <div className="profile">
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Company</th>
                  <th>Email</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {clients.slice(0, 10).map((client, index) => (
                  <React.Fragment key={index}>
                    <tr className={index % 2 === 0 ? "row-light" : "row-white"}>
                      <td>
                        <img
                          src={client.picture}
                          alt={client.name}
                          className="client"
                        />
                      </td>
                      <td>{client.name}</td>
                      <td>{client.company}</td>
                      <td>{client.email}</td>
                      <td>
                        <span
                          className={
                            client.status === "Active"
                              ? "status active"
                              : "status inactive"
                          }
                        >
                          {client.status}
                        </span>
                      </td>
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <style jsx>{`
  .admin-container {
    display: flex;
    height: 100vh;
    margin-left: 300px;
    margin-top: -620px;
  }

  .client-content {
    flex: 1;
    padding: 20px;
    overflow-y: auto;
    height: 650px;
    width: calc(100% - 350px);
      scrollbar-width: none; /* Hides scrollbar in Firefox */
  -ms-overflow-style: none;
  }

  .profile {
    text-align: center;
    margin-bottom: 20px;
  }

  table {
    width: 80%;
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
      font-size: 0.9rem;
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






