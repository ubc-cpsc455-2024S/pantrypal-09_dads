import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import { Avatar, AvatarBadge, Tooltip } from "@chakra-ui/react";


const Navbar = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()
  
  //Styles
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

  //Logout Handling
  const handleClick = () => {
    logout()
  }


  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        <Link to="/">
          pantrypal
        </Link>
      </div>
      <ul style={styles.navLinks}>
        {user && (
          <>
            <li style={styles.navItem}>
              Welcome Back, {user.email}
            </li>
            <Tooltip label='Logout'>
              <Avatar style={styles.navItem} size='sm' src="https://cdn-icons-png.flaticon.com/512/5235/5235253.png" onClick={handleClick}>
                <AvatarBadge boxSize='1em' bg='green.500' />
              </Avatar>  
            </Tooltip>
          </>
        )}
        {!user && (
          <>
            <li style={styles.navItem}>
              <Link to="/login">Login</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/signup">Signup</Link>
            </li>
          </>   
        )}
      </ul>
    </nav>
    // <header>
    //   <div className="container">
    //     <Link to="/">
    //       <h1>Workout Buddy</h1>
    //     </Link>
    //     <nav>

    //     </nav>
    //   </div>
    // </header>
  )
}

export default Navbar