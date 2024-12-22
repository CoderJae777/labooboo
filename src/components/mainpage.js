import React from "react";
import "../styles/mainpage.css";
import Navbar from "./navbar";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import doctor from "../images/doctor.png";

const Dashboard = () => {
  const data = [
    { name: "Group A", value: 2610 },
    { name: "Group B", value: 7390 },
  ];
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [direction, setDirection] = useState(1); // Track animation direction
  const COLORS = ["#bcdfce", "#00C49F"];
  const quotes = [
    "'Drink at least 8-10 glasses of water daily to stay hydrated and support digestion.'",
    "'Aim for 7-9 hours of quality sleep every night to boost your immune system and mental clarity.'",
    "'Exercise for at least 30 minutes a day, like walking, dancing, or yoga, to improve cardiovascular health.'",
    "'Incorporate more leafy greens like spinach, kale, and arugula into your meals for essential nutrients.'",
    "'Take 10 minutes daily to meditate or practice deep breathing to reduce stress and improve focus.'",
    "'Swap out packaged snacks for whole foods like fruits, nuts, and seeds for better energy.'",
    "'Avoid sugary drinks by choosing water, herbal teas, or infused water for a healthier alternative.'",
    "'Stretch regularly, especially after sitting for long periods, to improve flexibility and posture.'",
    "'Plan balanced meals with protein, healthy fats, and complex carbs to maintain steady energy.'",
    "'Spend time outdoors in natural light for a vitamin D boost and mental refreshment.'",
  ];
  const renderCustomLabel = ({ percent, x, y, index }) => (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize={12}
    >
      {`${(percent * 100).toFixed(1)}%`}
    </text>
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1); // Always move forward
      setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 4000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  return (
    <>
    <Navbar />
      <motion.div
        className="dashboard-header"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h1>Hi Alex, Welcome Back!</h1>
      </motion.div>
      <div className="dashboard">
        {" "}
        <motion.div
          className="welcome-message"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img src={doctor} alt="Nutrail Logo" className="doctor"></img>{" "}
          <h3>Nutri-AI Quick Tips</h3>
          <motion.div
            className="quote-carousel"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <AnimatePresence initial={false} custom={direction}>
              <motion.p
                key={quoteIndex}
                initial={{ x: direction * 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -direction * 100, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                {quotes[quoteIndex]}
              </motion.p>
            </AnimatePresence>
          </motion.div>
        </motion.div>{" "}
        <motion.div
          className="daily-activity"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3>Today's Activity</h3>
          <div className="activity-data">
            {" "}
            <PieChart width={400} height={200}>
              <Pie
                data={data}
                cx={215}
                cy={100}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={0}
                dataKey="value"
                label={renderCustomLabel}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
            <div className="steps">
              <h3>7390 / 10,000</h3>
              <span>Steps</span>
            </div>
            <div className="stats">
              <p>5.24 KM</p>
              <p>117 Active Mins</p>
              <p>13 Floors</p>
            </div>
          </div>
        </motion.div>
        <div className="quick-tip">
          {" "}
          <h3>Today's Health Insights</h3>
          <div className="health-stats">
            <div className="health-card heart-rate">
              <h4>85 BPM</h4>
              <span>Heart Rate</span>
            </div>
            <div className="health-card blood-sugar">
              <h4>150 mg/dL</h4>
              <span>Blood Sugar</span>
            </div>
            <div className="health-card blood-pressure">
              <h4>101/80 mmHg</h4>
              <span>Blood Pressure</span>
            </div>
          </div>
        </div>
        <div className="sleep-insights">
          <h3>Sleep Insights</h3>
          <div className="sleep-stats">
            <div>
              <h4>7h 32m</h4>
              <span>Total Sleep</span>
            </div>
            <div>
              <h4>11:00 PM</h4>
              <span>Went to Bed</span>
            </div>
            <div>
              <h4>6:32 AM</h4>
              <span>Woke Up</span>
            </div>
            <div>
              <h4>85%</h4>
              <span>Sleep Efficiency</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
