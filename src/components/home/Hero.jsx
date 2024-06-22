import React from 'react';
import { Stack } from '@chakra-ui/react'
import { Button, Link} from '@chakra-ui/react'
import { FaRegKeyboard } from "react-icons/fa6";
import { FaCameraRetro } from "react-icons/fa";
import ImageUpload from "./Camera"

const Hero = () => {
  const styles = {
    heroContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      height: '80vh',
      padding: '2rem',
      marginTop: '5rem',
      marginBottom: '5rem'
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
        {/* <Button leftIcon={<FaCameraRetro />} variant='solid' >
          <Link href="/ingredients">Take a picture</Link>
        </Button> */}
        <ImageUpload goTo = "/ingredients"/>
        <Button leftIcon={<FaRegKeyboard />} variant='outline'>
          <Link href="/ingredients"> Insert ingredients </Link>
        </Button>
      </Stack>
    </div>
    
    </div>
  );
};

export default Hero;
