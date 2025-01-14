import Navbar from "./navbar";
import "../styles/history.css";

import chwee_kueh from "../images/Chwee_kueh.png";
import greek_chicken_salad from "../images/greek-chicken-salad.png";
import fish_soup from "../images/fish-soup.png";
import kaya_toast from "../images/kaya-toast.png";
import fried_rice from "../images/fried_rice.png";

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
    { name: "Mon", recommended_amt: 1800, calories: 1950 },
    { name: "Tue", recommended_amt: 1800, calories: 1870 },
    { name: "Wed", recommended_amt: 1800, calories: 2000 },
    { name: "Thu", recommended_amt: 1800, calories: 1750 },
    { name: "Fri", recommended_amt: 1800, calories: 1820 },
    { name: "Sat", recommended_amt: 1800, calories: 1900 },
    { name: "Sun", recommended_amt: 1800, calories: 1850 },
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
      img: kaya_toast,
    },
    {
      date: "2023-12-20",
      meal: "Lunch",
      items: ["Sliced Fish Soup (No Milk)", "Brown Rice", "Steamed Vegetables"],
      img: fish_soup,
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
              <Line type="monotone" dataKey="recommended_amt" stroke="red" />
              {/* <Scatter dataKey="cnt" fill="red" /> */}
            </ComposedChart>
          </ResponsiveContainer>
        </div>{" "}
        <div className="history-page-right-col">
          <div className="history-page-right-col">
            <div className="food-card">
              {" "}
              <img src={kaya_toast} alt="Kaya Toast" />
              <h4>Breakfast: Kaya Toast</h4>
              <p>2023-12-20</p>
              <p>Calories: 250</p>
            </div>
            <div className="food-card">
              <img src={fish_soup} alt="Fish Soup" />
              <h4>
                Lunch: <br></br>Fish Soup
              </h4>
              <p>2023-12-20</p>
              <p>Calories: 400</p>{" "}
            </div>{" "}
            <div className="food-card">
              {" "}
              <img src={fried_rice} alt="Fried Rice" />
              <h4>
                Dinner: <br></br>Fried Rice
              </h4>
              <p>2023-12-20</p>
              <p>Calories: 500</p>
            </div>{" "}
            <div className="food-card">
              {" "}
              <img src={greek_chicken_salad} alt="greek-chicken-salad" />
              <h4>Dinner: Salad</h4>
              <p>2023-12-20</p>
              <p>Calories: 500</p>
            </div>
            {/* {userHistory.map((entry, index) => (
              <div key={index} className="history-card">
                <h3>{entry.meal}</h3>
                <p>
                  <strong>Date:</strong> {entry.date}
                </p>
                <p>
                  <strong>Items:</strong> {entry.items.join(", ")}
                </p>
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default History;
