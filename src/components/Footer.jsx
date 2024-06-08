import React from 'react';

const Footer = () => {
  const styles = {
    footerContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
    },
    footerLeft: {
      display: 'flex',
      flexDirection: 'column',
    },
    footerRight: {
      display: 'flex',
      gap: '1rem',
    },
    footerLink: {
      textDecoration: 'none',
      fontSize: '1rem',
    },
    footerText: {
      margin: 0,
    },
  };

  return (
    <footer style={styles.footerContainer}>
      <div style={styles.footerLeft}>
        <p style={styles.footerText}>© 2024 PantryPals. All rights reserved.</p>
      </div>
      <div style={styles.footerRight}>
        <a href="#terms" style={styles.footerLink}>Terms of Service</a>
        <a href="#privacy" style={styles.footerLink}>Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
