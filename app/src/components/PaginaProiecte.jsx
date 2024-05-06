import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import {Center, ContainerSX, SectiuneTitluFontSX, UnderlineTextSX} from "../App.styles";
import {Container, Fade, Zoom} from "@mui/material";
import Typography from "@mui/material/Typography";

export default function TitlebarBelowMasonryImageList() {

    const [images, setImages] = useState([]);

    useEffect(() => {
        function importAll(r) {
            return r.keys().map(r);
        }

        const imageFiles = importAll(require.context('../imaginiProiecte', false, /\.(png|jpe?g|svg)$/));
        setImages(imageFiles);
    }, []);

    return (
        <div style={Center}>
            <Container
                sx={ContainerSX}
                maxWidth={false}
                padding={0}
            >
                <Typography component="h2" variant="h3" color="text.primary" style={SectiuneTitluFontSX}>
                    Proiecte
                </Typography>
                <Box sx={UnderlineTextSX}/>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                    overflowY: 'scroll'
                }}>
                    <ImageList variant="masonry" cols={3} gap={10}>
                        {images.map((image, index) => (
                            <ImageListItem key={image}>
                                <Fade in={true} timeout={1000}>
                                    <img
                                        src={image}
                                        alt={`Image ${index}`}
                                        loading="lazy"
                                        style={{
                                            width: '372px',
                                            height: `${Math.random() * (500 - 300) + 300}px`, // random asa la sanki
                                            // height: 'auto',
                                            objectFit: 'cover',

                                        }}
                                    />
                                </Fade>
                                {/*<ImageListItemBar position="below" title={image.title}/>*/}
                                <ImageListItemBar position="below" title={`Image ${index}`}/>
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Box>
            </Container>
        </div>
    );
}

// const itemData = [
//     {
//         img: './imaginiProiecte/Proiect1.jpg',
//         title: 'Bed',
//         author: 'swabdesign',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
//         title: 'Books',
//         author: 'Pavel Nekoranec',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
//         title: 'Sink',
//         author: 'Charles Deluvio',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
//         title: 'Kitchen',
//         author: 'Christian Mackie',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
//         title: 'Blinds',
//         author: 'Darren Richardson',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
//         title: 'Chairs',
//         author: 'Taylor Simpson',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
//         title: 'Laptop',
//         author: 'Ben Kolde',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
//         title: 'Doors',
//         author: 'Philipp Berndt',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
//         title: 'Coffee',
//         author: 'Jen P.',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
//         title: 'Storage',
//         author: 'Douglas Sheppard',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
//         title: 'Candle',
//         author: 'Fi Bell',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
//         title: 'Coffee table',
//         author: 'Hutomo Abrianto',
//     },
// ];