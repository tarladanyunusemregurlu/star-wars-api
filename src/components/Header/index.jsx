import React from 'react';
import SearchInput from '../SearchInput';
import style from "./index.module.css"
const Header = () => {
  return (
    <div className={style.container}>
      <div className={style.title}>Star Wars</div>
      <SearchInput />
    </div>
  );
};

export default Header;
