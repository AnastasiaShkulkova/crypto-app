import React from 'react'
import Header from '../components/Header/Header'
import { CryptoPageTitle } from '../config';

const CruptoPersonalPage = () => {

    const user = 'Tsimafei Kremko'

  return (
    <>
      <Header sum={123.15} username={user} />
      <div className="container">
        <h1 className="page-title">{CryptoPageTitle}</h1>
      </div>
    </>
  );
}

export default CruptoPersonalPage