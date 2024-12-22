import Navbar from "./navbar";
import "../styles/history.css";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from "recharts";

const History = () => {
  const data = [
    {
      name: "Mon",
      recommended_amt: 1200,
      calories: Math.floor(Math.random() * (2000 - 1200 + 1)) + 1200,
      cnt: 490,
    },
    {
      name: "Tue",
      recommended_amt: 1200,
      calories: Math.floor(Math.random() * (2000 - 1200 + 1)) + 1200,
      cnt: 590,
    },
    {
      name: "Wed",
      recommended_amt: 1200,
      calories: Math.floor(Math.random() * (2000 - 1200 + 1)) + 1200,
      cnt: 350,
    },
    {
      name: "Thu",
      recommended_amt: 1200,
      calories: Math.floor(Math.random() * (2000 - 1200 + 1)) + 1200,
      cnt: 480,
    },
    {
      name: "Fri",
      recommended_amt: 1200,
      calories: Math.floor(Math.random() * (2000 - 1200 + 1)) + 1200,
      cnt: 460,
    },
    {
      name: "Sat",
      recommended_amt: 1200,
      calories: Math.floor(Math.random() * (2000 - 1200 + 1)) + 1200,
      cnt: 380,
    },
  ];
  const userHistory = [
    {
      date: "2023-12-20",
      meal: "Breakfast",
      items: [
        "Kaya Toast (Wholemeal)",
        "Soft-Boiled Eggs",
        "Black Coffee (No Sugar)",
      ],
    },
    {
      date: "2023-12-20",
      meal: "Lunch",
      items: ["Sliced Fish Soup (No Milk)", "Brown Rice", "Steamed Vegetables"],
    },
    {
      date: "2023-12-20",
      meal: "Dinner",
      items: ["Grilled Chicken Salad", "Quinoa", "Green Tea (No Sugar)"],
    },
    {
      date: "2023-12-19",
      meal: "Breakfast",
      items: ["Chwee Kueh (Less Oil)", "Fresh Coconut Water"],
    },
  ];

  return (
    <>
      <Navbar />
      <div className="history-page">
        <div className="history-page-left-col">
          {" "}
          <h4>Calorie Intake</h4>
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              width={500}
              height={400}
              data={data}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey="name" scale="band" />
              <YAxis />
              <Tooltip />
              <Legend />
              {/* <Area
                type="monotone"
                dataKey="amt"
                fill="#8884d8"
                stroke="#8884d8"
              /> */}
              <Bar dataKey="calories" barSize={20} fill="#bcdfce" />
              <Line
                type="monotone"
                dataKey="recommended_amt"
                stroke="red"
              />
              {/* <Scatter dataKey="cnt" fill="red" /> */}
            </ComposedChart>
          </ResponsiveContainer>
        </div>{" "}
        <div className="history-page-right-col">
          <div className="history-page-right-col">
            {userHistory.map((entry, index) => (
              <div key={index} className="history-card">
                <h3>{entry.meal}</h3>
                <p>
                  <strong>Date:</strong> {entry.date}
                </p>
                <p>
                  <strong>Items:</strong> {entry.items.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default History;
