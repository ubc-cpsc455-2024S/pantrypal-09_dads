import { Spinner } from "@chakra-ui/react";

const LoadingPage = () => {
  const styles = {
    heroContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      height: '70vh',
      padding: '2rem',
      marginTop: '2rem',
      marginBottom: '1rem'
    },
    heroTitle: {
      fontSize: '3rem',
      fontWeight: 'bold',
      color: '#333',
      margin: '0 0 1rem 0',
    },
    heroSubtitle: {
      fontSize: '1.5rem',
      color: '#666',
      margin: '0 0 2rem 0',
    },
    heroImage: {
      width: '100%',
      maxWidth: '600px',
      margin: '2rem 0',
    }
  };

  return (
    <div style={styles.heroContainer}>
      <h1 style={styles.heroTitle}>
        Simplify Your Cooking, Minimize Food Waste
      </h1>
      <h2 style={styles.heroSubtitle}>
        Loading...
      </h2>
      <Spinner size='xl' />
    </div>
  );
};

export default LoadingPage;
