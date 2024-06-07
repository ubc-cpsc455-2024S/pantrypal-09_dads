import React from 'react';

const NavBar = () => {
  const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '',
      padding: '0.5rem 1rem',
    },
    logo: {
      fontSize: '1.5rem',
    },
    navLinks: {
      display: 'flex',
      listStyle: 'none',
    },
    navItem: {
      marginLeft: '1.5rem',
    },
    navLink: {
      textDecoration: 'none',
      fontSize: '1rem',
    },
    navLinkHover: {
      color: '#ddd',
    },
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>pantrypal</div>
      <ul style={styles.navLinks}>
        <li style={styles.navItem}><a style={styles.navLink} href="#home">Home</a></li>
        <li style={styles.navItem}><a style={styles.navLink} href="#about">About</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
