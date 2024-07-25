const Hero = () => {
  const styles = {
    heroContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      height: '70vh',
      padding: '2rem',
      marginTop: '10%',
      marginBottom: '10%'
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
    }
  };

  return (
    <div style={styles.heroContainer}>
      <h1 style={styles.heroTitle}>
        Simplify Your Cooking, Minimize Food Waste
      </h1>
      <h2 style={styles.heroSubtitle}>
        Discover recipes based on what's in your fridge. No more wasted food, just delicious meals.
      </h2>
      <img
        style={styles.heroImage}
        src="/open_fridge.jpeg"
        alt="PantryPals"
      />
    </div>
  );
};

export default Hero;
