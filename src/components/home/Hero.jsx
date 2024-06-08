import React from 'react';
import { Stack } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { FaRegKeyboard } from "react-icons/fa6";
import { FaCameraRetro } from "react-icons/fa";

const Hero = () => {
  const styles = {
    heroContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      height: '100vh',
      padding: '2rem',
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
        Discover recipes based on what's in your fridge. No more wasted food, just delicious meals.
      </h2>
      <img
        style={styles.heroImage}
        src="/open_fridge.jpeg"
        alt="PantryPals"
      />

    <div className='buttonsContainer'>
      <Stack direction='column' spacing={4}>
        <Button leftIcon={<FaCameraRetro />} variant='solid'>
          Take a picture
        </Button>
        <Button leftIcon={<FaRegKeyboard />} variant='outline'>
          Insert ingredients
        </Button>
      </Stack>
    </div>
    
    </div>
  );
};

export default Hero;
