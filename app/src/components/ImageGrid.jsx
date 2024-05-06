import React, {useCallback, useState} from 'react';
import {Grid, Box, Modal, IconButton} from '@mui/material';
import {makeStyles} from '@mui/styles'
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import image1 from "../imaginiProiecte/Proiect1.jpg"
import image2 from "../imaginiProiecte/Proiect2.jpg"
import image3 from "../imaginiProiecte/Proiect3.jpg"
import image4 from "../imaginiProiecte/Proiect4.jpg"
import image5 from "../imaginiProiecte/Proiect5.jpg"
import image6 from "../imaginiProiecte/Proiect6.jpg"

import {useInView} from 'react-intersection-observer';
import Zoom from '@mui/material/Zoom';

const useStyles = makeStyles((theme) => ({
    imageItem: {
        position: 'relative',
        '&:hover': {
            opacity: '0.5',
        },
        '&:hover $zoomIcon': {
            display: 'block',
        },
    },
    zoomIcon: {
        display: 'none',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
    modalImage: {
        width: '100%',
        height: 'auto',
        maxHeight: '80vh',
        maxWidth: '80vw',
        objectFit: 'contain',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
}));

const imageStyle = {
    height: '100%',
    width: '100%',
    objectFit: '100% 100%',
    transition: 'opacity 0.3s',
};

const iconButtonStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 2,
    opacity: 0,
    transition: 'opacity 0.3s',
};

const ImageItem = ({ image, index, handleOpen }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.05,
        // rootMargin: '200px 0px',
    });

    // Calculate the delay based on the image's index
    const delay = `${index * 0.2}s`;

    return (
        <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
                onClick={() => handleOpen(image)}
                sx={{
                    width: '100%',
                    height: '350px',
                    overflow: 'hidden',
                    position: 'relative',
                    cursor: 'pointer',
                    '&:hover img': {
                        opacity: 0.5
                    },
                    '&:hover button': {
                        opacity: 1,
                    }
                }}
            >
                <Zoom in={inView} style={{ transitionDelay: inView ? delay : '0s' }}>
                    <img
                        ref={ref}
                        src={image}
                        alt={`Project ${index + 1}`}
                        style={imageStyle}
                        loading="lazy"
                    />
                </Zoom>
                <IconButton sx={iconButtonStyle}>
                    <ZoomInIcon
                        sx={{
                            fontSize: '3rem',
                            color: '#00ADB5'
                        }}
                    />
                </IconButton>
            </Box>
        </Grid>
    );
};

export const ImageGrid = React.memo(() => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [image1, image2, image3, image4, image5, image6];

    const handleOpen = useCallback((image) => {
        setSelectedImage(image);
        setOpen(true);
    }, []);

    const handleClose = useCallback(() => {
        setOpen(false);
    }, []);

    return <div style={{display: 'flex', alignItems: 'center'}}>
        <Grid container spacing={3}>
            {images.map((image, index) => (
                <ImageItem
                    key={index}
                    image={image}
                    index={index}
                    handleOpen={handleOpen}
                />
            ))}
        </Grid>

        <Modal open={open} onClose={handleClose}>
            <Box onClick={handleClose} style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <img
                    src={selectedImage}
                    alt="Enlarged"
                    className={classes.modalImage}
                    onClick={(e) => e.stopPropagation()}
                    style={{width: 'auto', height: 'auto'}}
                />
            </Box>
        </Modal>
    </div>
});