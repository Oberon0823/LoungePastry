import React from "react";

const Nav = () => {
  const list = ["首頁", "商品一覽", "關於我們", "聯絡我們"];
  return (
    <nav className="main-nav" id="Main-Nav">
      <ul>
        <li>
          <a href="#">{list[0]}</a>
        </li>
        <li>
          <a href="#">{list[1]}</a>
        </li>
        <li>
          <a href="#">{list[2]}</a>
        </li>
        <li>
          <a href="#">{list[3]}</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
