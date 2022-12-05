import React from 'react';
import styles from './Header.module.css';

const Header = () => (
  <div className={styles.Header} onClick={() => window.scroll(0,0)}>
    <span>📽️ Entertainment Hub 📽️</span>
  </div>
);


export default Header;
