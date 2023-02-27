import React, { useEffect } from "react";
import {
  SectionRatedSpan,
  SectionRatedTitle,
  SectionSearchSpan,
  SectionSearchTitle,
  SectionWalletBtnText,
  SectionWalletSpan,
  SectionWalletTitle,
  tableColumns,
  WelcomeTitle,
} from "../config";

import SearchIcon from "../assets/icons/search-icon.svg";
import MainTable from "../components/MainTable/MainTable";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchCryptos } from "../redux/store/cryptoSlice";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const tableData = useAppSelector((state) => state.cryptos.crypto);

  useEffect(() => {
    dispatch(fetchCryptos());
  }, [dispatch]);

  const finalData = tableData?.data?.map((obj: any) => {
    const objectForTable = {
      rank: obj.rank,
      name: obj.name,
      symbol: obj.symbol,
      price: `${Number(obj.priceUsd).toFixed(2)} $`,
      changePercent: `${Number(obj.changePercent24Hr).toFixed(2)} %`,
    };
    return objectForTable;
  });



  return (
    <main className="crypto-main">
      <div className="container">
        <h1 className="page-title">{WelcomeTitle}</h1>
        <section className="section-wallet">
          <h2 className="section-title">
            <span className="title-span">{SectionWalletSpan}</span>
            {SectionWalletTitle}
          </h2>

          <div className="button-container">
            <button className="section-button">{SectionWalletBtnText}</button>
          </div>
        </section>
        <section className="section-rated">
          <h2 className="section-title ">
            {SectionRatedTitle}
            <span className="title-span">{SectionRatedSpan}</span>
          </h2>
          <MainTable
            tableData={finalData?.slice(0, 3)}
            tableColumns={tableColumns}
          />
        </section>
        <section className="section-search">
          <h2 className="section-title">
            {SectionSearchTitle}
            <span className="title-span">{SectionSearchSpan}</span>
          </h2>
          <div className="button-container--start">
            <div className="input-container">
              <img src={SearchIcon} alt="" />
              <input
                type="text"
                placeholder="ex. Bitcoin.."
                className="search-input"
              />
            </div>
          </div>

          <MainTable tableData={finalData} tableColumns={tableColumns} />
        </section>
      </div>
    </main>
  );
};

export default HomePage;
