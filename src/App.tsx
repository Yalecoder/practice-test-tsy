import React, { useState } from "react";
import Sum from "./component/Sum";
import Fibonacci from "./component/Fibonacci";
import DailyBilling from "./component/Dailybilling";
import MonthlyBilling from "./component/Monthlybilling";
import Invert from "./component/Invert";

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState("sum");

  const renderTabContent = () => {
    switch (activeTab) {
      case "sum":
        return <Sum />;
      case "fibonacci":
        return <Fibonacci />;
      case "dailyBilling":
        return <DailyBilling />;
      case "monthlyBilling":
        return <MonthlyBilling />;
      case "invert":
        return <Invert />;
      default:
        return null;
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <div
        style={{
          position: "absolute",
          bottom: 10,
          width: "98%",
          textAlign: "center",
        }}
      >
        <a href="https://portfolio-ruby-eight-84.vercel.app/" target="_blank">Meu Portfólio</a>
      </div>
      <h1>Resultado:</h1>
      <div style={{ marginBottom: "20px" }}>
        <button
          onClick={() => setActiveTab("sum")}
          style={{
            padding: "10px 20px",
            marginRight: "10px",
            backgroundColor: activeTab === "sum" ? "#007BFF" : "#f0f0f0",
            color: activeTab === "sum" ? "#fff" : "#000",
            border: "none",
            borderColor: "#531CB3",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Soma Incremental
        </button>
        <button
          onClick={() => setActiveTab("fibonacci")}
          style={{
            padding: "10px 20px",
            marginRight: "10px",
            backgroundColor: activeTab === "fibonacci" ? "#007BFF" : "#f0f0f0",
            color: activeTab === "fibonacci" ? "#fff" : "#000",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Fibonacci
        </button>
        <button
          onClick={() => setActiveTab("dailyBilling")}
          style={{
            padding: "10px 20px",
            marginRight: "10px",
            backgroundColor:
              activeTab === "dailyBilling" ? "#007BFF" : "#f0f0f0",
            color: activeTab === "dailyBilling" ? "#fff" : "#000",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Faturamento Diário
        </button>
        <button
          onClick={() => setActiveTab("monthlyBilling")}
          style={{
            padding: "10px 20px",
            marginRight: "10px",
            backgroundColor:
              activeTab === "monthlyBilling" ? "#007BFF" : "#f0f0f0",
            color: activeTab === "monthlyBilling" ? "#fff" : "#000",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Faturamento Mensal
        </button>
        <button
          onClick={() => setActiveTab("invert")}
          style={{
            padding: "10px 20px",
            backgroundColor: activeTab === "invert" ? "#007BFF" : "#f0f0f0",
            color: activeTab === "invert" ? "#fff" : "#000",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Inverter String
        </button>
      </div>
      <div style={{ padding: "10px", borderRadius: "5px" }}>
        {renderTabContent()}
      </div>
    </div>
  );
};

export default App;
