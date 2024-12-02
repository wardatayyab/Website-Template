import React, { useState, useEffect } from "react";
import All from "./All"; // Ensure this is a valid import path
import { Line, PolarArea } from "react-chartjs-2"; // Import necessary chart components
import Calendar from "react-calendar"; // Import Calendar component
import "react-calendar/dist/Calendar.css"; // Import calendar styles
import {
  Chart,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Title,
  ArcElement,
  RadialLinearScale,
} from "chart.js";

// Register chart components
Chart.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Title,
  ArcElement,
  RadialLinearScale
);

function AdminPanel() {
  const [lineChartData, setLineChartData] = useState(null);
  const [statsData, setStatsData] = useState(null);
  const [browserChartData, setBrowserChartData] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      setLineChartData({
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [
          {
            label: "Monthly Sales",
            data: [100, 200, 150, 300, 250, 350, 400],
            borderColor: "#36A2EB",
            tension: 0.3,
          },
        ],
      });

      setStatsData({
        sales: 1230,
        earnings: 4567,
        visitors: 2345,
        orders: 456,
      });

      setBrowserChartData({
        labels: ["Chrome", "Firefox", "Edge", "Other"],
        datasets: [
          {
            data: [4306, 3801, 1689, 3251],
            backgroundColor: [
              "rgba(54, 162, 235, 0.8)",
              "rgba(255, 99, 132, 0.8)",
              "rgba(255, 206, 86, 0.8)",
              "rgba(75, 192, 192, 0.8)",
            ],
            borderColor: [
              "rgba(54, 162, 235, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
            ],
            borderWidth: 2,
            hoverOffset: 4,
          },
        ],
      });
    };

    fetchData();
  }, []);

  return (
    <>
      <All />
      <div className="admin-panel">
        <h2 style={{ fontSize: "2.5rem", color: '#2c3e50', marginBottom: '20px', marginTop: '-30px', fontFamily: 'Georgia, serif', fontWeight: '900', textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)" }}>
          Analytics Dashboard
        </h2>
        <div className="dashboard-row">
          <div className="stats-column">
            {statsData &&
              Object.entries(statsData).map(([key, value], i) => (
                <div key={i} className="stat-box">
                  <h3>{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
                  <p className="stat-value">{value}</p>
                  <p className={`stat-change stat-change-${key.toLowerCase()}`}>
                    {key === "sales" || key === "earnings" || key === "orders" || key === "visitors" ? (
                      <span className="percentage">-3.65%</span>
                    ) : null}
                    <span className="since-last-week"> Last Week</span>
                  </p>
                </div>
              ))}
          </div>

          <div className="chart-column">
            <h3>Monthly Sales</h3>
            {lineChartData && <Line data={lineChartData} />}
          </div>
        </div>

        <div className="additional-row">
          <div className="browser-usage">
            <h3>Browser Usage</h3>
            <div className="chart-wrapper">
              {browserChartData && (
                <PolarArea
                  data={browserChartData}
                  options={{
                    responsive: true,
                    plugins: {
                      tooltip: {
                        callbacks: {
                          label: function (tooltipItem) {
                            const label =
                              browserChartData.labels[tooltipItem.dataIndex];
                            const value =
                              browserChartData.datasets[0].data[
                                tooltipItem.dataIndex
                              ];
                            return `${label}: ${value}`;
                          },
                        },
                      },
                    },
                  }}
                />
              )}
            </div>
          </div>
          <div className="calendar">
            <h3>Calendar</h3>
            <div className="calendar-container">
              <Calendar />
            </div>
          </div>
        </div>

        <style jsx>{`
          .admin-panel {
            font-family: Arial, sans-serif;
            padding: 20px;
            width: 75%;
            margin-left: 300px;
            margin-top: -580px;
            margin-bottom: -580px;
            overflow-y: auto; /* Allows scrolling */
            height: 100vh; /* Ensures the panel height is full viewport */
            scrollbar-width: none; /* Hides the scrollbar in Firefox */
            -ms-overflow-style: none; /* Hides the scrollbar in Internet Explorer */
          }

          .admin-panel::-webkit-scrollbar {
            display: none; /* Hides the scrollbar in Webkit-based browsers */
          }

          h1 {
            text-align: center;
            margin-bottom: 20px;
            font-size: 2rem;
          }

          .dashboard-row,
          .additional-row {
            display: flex;
            gap: 20px;
            margin-bottom: 20px;
          }

          .stats-column {
            display: flex;
            flex-wrap: wrap;
            width: 50%;
            gap: 15px;
          }

          .chart-column {
            width: 50%;
            background: white;
            border-radius: 10px;
            padding: 15px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          }

          .stat-box {
            width: calc(50% - 10px);
            background: white;
            height: 130px;
            padding: 15px;
            border-radius: 10px;
            text-align: left;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          }

          .stat-box h3 {
            font-size: 1rem;
            margin-bottom: 5px;
            color: lightblack;
          }

          .stat-value {
            font-size: 1.2rem;
            color: #3B7DDD;
            font-weight: bold;
          }

          .stat-change {
            font-size: 0.9rem;
            padding: 5px;
            border-radius: 5px;
            color: white;
          }

          .stat-change-sales {
            color: #3b7ddd;
          }

          .stat-change-earnings,
          .stat-change-visitors {
            color: #1cbb8c;
          }

          .stat-change-orders {
            color: #dc3545;
          }

          .percentage {
            font-weight: bold;
            font-size: 1.1rem;
          }

          .since-last-week {
            font-size: 0.9rem;
            color: black;
            font-weight: normal;
            background-color: transparent; /* Transparent background */
          }

          .browser-usage {
            flex: 1;
            background: white;
            padding: 15px;
            border-radius: 10px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            text-align: center;
            max-height: 440px;
          }

          .calendar {
            flex: 1;
            background: white;
            padding: 15px;
            border-radius: 10px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            text-align: center;
          }

          .chart-wrapper {
            width: 300px;
            height: 330px;
            margin: 0 auto;
          }

          .calendar-container {
            flex-grow: 1;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .react-calendar {
            border: none;
            width: 420px;
            height: 300px;
          }

          @media (max-width: 768px) {
            .admin-panel {
              margin-left: 0;
              margin-top: 0;
              margin-bottom: 0;
              width: 100%;
            }

            .dashboard-row,
            .additional-row {
              flex-direction: column;
              align-items: center;
            }

            .stats-column,
            .chart-column {
              width: 100%;
            }

            .browser-usage,
            .calendar {
              width: 100%;
            }

            .stat-box {
              width: 100%;
            }

            .chart-wrapper {
              width: 100%;
            }
          }
        `}</style>
      </div>
    </>
  );
}

export default AdminPanel;
