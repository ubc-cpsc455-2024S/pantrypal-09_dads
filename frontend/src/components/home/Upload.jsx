import React, { useState, useRef, useCallback } from 'react';
import { Button } from '@chakra-ui/react';
import { FaCameraRetro, FaWindowClose } from 'react-icons/fa';
import Webcam from 'react-webcam';
import { Link } from 'react-router-dom';
import axios from "axios"


const ImageUpload = (props) => {
    const [preview, setPreview] = useState(null);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [useWebcam, setUseWebcam] = useState(false);
    const [useMode, setUseMode] = useState("None");
    const fileInputRef = useRef(null);
    const webcamRef = useRef(null);
    const [image, setImage] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        const formData = new FormData(); 
        //FILE INFO NAME WILL BE "my-image-file"
        formData.append('my-image-file', file, file.name);
        formData.append('username', 'hubot');
        setImage(formData);
        for (var pair of formData.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
        }
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
                setIsFullScreen(true);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleUpload = () => {
        fileInputRef.current.click();
        setUseMode("Upload");
    };

    const handlePhoto= () => {
        if (window.innerWidth <= 768 || navigator.mediaDevices) {
            setUseWebcam(true);
            setUseMode("Webcam");
        } else {
            alert("Camera not available!")
        }
    };


    const handleReTake = () => {
        setPreview(null);
        setIsFullScreen(false);
        if (useMode == "Webcam") {
            setUseWebcam(true);
        } else {
            fileInputRef.current.click();
        }
    };

    const handleClose = () => {
        setPreview(null);
        setUseWebcam(false)
        setUseMode("None")
        setIsFullScreen(false)
    };

    const handleContinue = async () => {
        console.log("here")
        console.log(image)
        axios.post('http://localhost:3000/image-upload', image)
            .then(res => {
                console.log('Axios response: ', res)
            })
    };

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setPreview(imageSrc);
        setIsFullScreen(true);
        setUseWebcam(false);
    }, [webcamRef]);

    return (
        <div>
            <Button variant='solid' onClick={handleUpload}>
                        Upload Photo </Button>
            <Button leftIcon={<FaCameraRetro />} variant='solid' onClick={handlePhoto}>
                </Button>
            <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />
            {useWebcam && (
                <div style={styles.fullScreenContainer}>
                    <Webcam
                        audio={false}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        style={styles.fullScreenImage}
                    />
                    <Button variant="solid" colorScheme="teal" onClick={capture} style={styles.captureButton}>
                        Capture
                    </Button>
                </div>
            )}
            {isFullScreen && !useWebcam && (
                <div style={styles.fullScreenContainer}>
                    <img src={preview} alt="Preview" style={styles.fullScreenImage} />
                    <div style={styles.buttonContainer}>
                        <Button variant="solid" colorScheme="teal" onClick={handleContinue} style={styles.button}>
                            Continue
                        </Button>
                        <Button variant="solid" colorScheme="red" onClick={handleReTake} style={styles.button}>
                            Re-take
                        </Button>
                        <Button leftIcon={<FaWindowClose/>}variant="solid" colorScheme="red" onClick={handleClose} style={styles.button}>
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};

const styles = {      
    fullScreenContainer: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    border: '5px solid black', // Added black border
    boxSizing: 'border-box', // Ensures the border is included in the element's dimensions
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    }
,
    fullScreenImage: {
        width: 'auto',
        height: 'auto',
        maxHeight: '80vh',
        maxWidth: '80vw',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
    },
    button: {
        minWidth: '100px',
    },
    captureButton: {
        position: 'absolute',
        bottom: 20,
    },
};

export default ImageUpload;