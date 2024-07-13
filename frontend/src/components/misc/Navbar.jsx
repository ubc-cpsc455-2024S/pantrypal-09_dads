import { Avatar, AvatarBadge } from "@chakra-ui/react";
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
      fontSize: '1.75rem',
    },
    navLinks: {
      display: 'flex',
      listStyle: 'none',
    },
    navItem: {
      marginLeft: '0.5rem',
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
        <li style={styles.navItem}><a style={styles.navLink} href="/">Welcome Back, Adi</a></li>
        <Avatar style={styles.navItem} size='sm'>
          <AvatarBadge boxSize='1em' bg='green.500' />
        </Avatar>
      </ul>
    </nav>
  );
};

export default NavBar;
