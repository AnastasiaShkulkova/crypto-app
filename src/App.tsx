import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import UserTable from "./components/MainTable/MainTable";
import LogInPage from "./pages/AuthPages/LogInPage";
import CruptoPersonalPage from "./pages/CruptoPersonalPage";
import HomePage from "./pages/HomePage";

function App() {
  const tableData = [
    {
      rank: 1,
      name: "Bitcoin",
      sumbol: "BTC",
      price: "24.789",
      changePercent: "3,14%",
    },
    {
      rank: 2,
      name: "Ethereum",
      sumbol: "ETH",
      price: "12.789",
      changePercent: "1,04%",
    },
    {
      rank: 3,
      name: "Tether",
      sumbol: "USDT",
      price: "1.0891",
      changePercent: "0,89%",
    },
  ];

  const user = "Tsimafei Kremko";

  return (
    <div className="App">
      <Header sum={123.15} username={user} />
      <div className="container"></div>
      {/* <LogInPage /> */}
      {/* <CruptoPersonalPage /> */}

      <HomePage />
    </div>
  );
}

export default App;
