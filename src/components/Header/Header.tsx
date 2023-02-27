import React from "react";
import Logo from "../../assets/logo/crypto-logo.svg";
import UserAvatar from "../../assets/icons/icon-user.png";
import { ILinkProps } from "../../interfaces/components/Header";

const Header: React.FC<ILinkProps> = ({ sum, username }: ILinkProps) => {
  const userAvatar = username?.split(" ");
  console.log("userAvatar", userAvatar);
  const finalSrting = userAvatar?.map(str => str.slice(0, 1)).join('');
  console.log("finalSrting", finalSrting);

  return (
    <header className="crypto-header">
      <div className="container">
        <div className="wrapper">
          <img src={Logo} alt="#" />
          <div className="header-links">
            <a href="/" className="link-item">
              Home
            </a>
            <a href="/" className="link-item">
              My wallet
            </a>
            <a href="/" className="link-item">
              {sum}
            </a>
            {/* <a href="/" className="link-item"> */}
            {/* <img className="item-image" src={UserAvatar} alt="#" /> */}
            {/* </a> */}
            <div className="userAvatar">{finalSrting}</div>
            <span className="color">{username}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
