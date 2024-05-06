import React, {useState, useEffect, useRef, forwardRef} from 'react';
import {
    BoxInContainerSX,
    Center,
    ContainerSX,
    DescriereSectiuneSX,
    SectiuneTitluFontSX,
    UnderlineTextSX
} from "../App.styles";
import {Box, Collapse, Container, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import backgroundImage from "../imaginiSite/welding-7104637_1920.jpg";
import {createTheme, ThemeProvider} from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiContainer: {
            styleOverrides: {
                root: {
                    '@media (min-width:600px)': {
                        paddingTop: '0 !important',
                        paddingBottom: '0 !important',
                    },
                    '@media (min-width:0px)': {
                        paddingTop: '0 !important',
                        paddingBottom: '0 !important',
                    },
                },
            },
        },
    },
});

export const Despre = forwardRef((props, ref) => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(sectionRef.current);
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.2, // Adjust this threshold as needed
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <div ref={ref} style={{...Center, height: '800px'}}>
                <Container
                    sx={{
                        ...ContainerSX,
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundAttachment: 'fixed',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        height: 'auto',
                        backgroundPosition: '170px -20%',
                    }}
                    maxWidth={false}
                    disableGutters={true}
                >
                    {/*<Box*/}
                    {/*    sx={BoxInContainerSX}*/}
                    {/*>*/}

                    <Grid container>
                        <Grid item xs={12} md={6}
                              sx={{textAlign: "justify", backgroundColor: '#EEEEEE', height: '800px'}}>
                            <Box ref={sectionRef}>
                                <Box paddingLeft={"50%"} paddingRight={"5%"} width='100%'
                                     style={{
                                         transform: isVisible ? 'translateX(0)' : 'translateX(-100%)',
                                         transition: 'transform 1s ease',
                                     }}
                                >
                                    <Typography component="h2" variant="h3" color="text.primary"
                                                style={{...SectiuneTitluFontSX, position: 'relative', left: '-2px'}}>
                                        Despre
                                    </Typography>
                                    <Box sx={{
                                        width: '100px',
                                        height: '5px',
                                        backgroundColor: '#00ADB5',
                                        position: 'relative',
                                        // // left: '20%',
                                        // // si si cu linia asta ma razboiesc aici
                                        // transform: 'translateX(-50%)',
                                        marginTop: '8px'
                                    }}/>
                                    <br/>
                                    <Typography variant="body1" color="text.secondary" style={DescriereSectiuneSX}>
                                        Compania a fost fondată în 2005 cu scopul de a oferi servicii de confecții
                                        metalice de precizie pentru o varietate de industrii.
                                        De-a lungul anilor, am câștigat o reputație solidă pentru calitatea muncii
                                        noastre, profesionalismul și satisfacția clienților.<br/>
                                        Suntem o echipă de profesioniști dedicați care sunt pasionați de ceea ce fac. Ne
                                        mândrim cu munca noastră de calitate și cu satisfacția clienților.
                                    </Typography>
                                    <br/>
                                    <Typography variant="body1" color="text.secondary" style={DescriereSectiuneSX}>
                                        Misiunea noastră este de a oferi clienților noștri soluții de confecții metalice
                                        de înaltă calitate care depășesc așteptările lor.
                                        Ne străduim să fim parteneri de încredere pentru clienții noștri, oferindu-le
                                        consultanță specializată, soluții personalizate și un serviciu impecabil.
                                    </Typography>
                                    <br/>
                                    <Typography variant="body1" color="text.secondary" style={DescriereSectiuneSX}>
                                        Valorile noastre:
                                        <ul>
                                            <li>Calitate</li>
                                            <li>Fiabilitate</li>
                                            <li>Inovație</li>
                                            <li>Parteneriat</li>
                                            <li>Satisfacția clienților</li>
                                        </ul>
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            {/*      sx={{*/}
                            {/*          backgroundImage: `url(${backgroundImage})`,*/}
                            {/*          backgroundAttachment: 'fixed',*/}
                            {/*          backgroundSize: 'cover', // This will make the image as large as possible while maintaining its aspect ratio*/}
                            {/*          backgroundRepeat: 'no-repeat', // This will prevent the image from repeating*/}
                            {/*          // backgroundPosition: 'center -100%',*/}
                            {/*          // paddingTop: '60%',*/}
                            {/*          // objectFit: 'cover',*/}
                            {/*          // backgroundRepeat: 'no-repeat',*/}
                            {/*          // width: '100px',*/}
                            {/*          height: '700px'*/}
                            {/*}}>*/}
                            {/*<img src={backgroundImage} alt="Despre"*/}
                            {/*     style={{backgroundImage: `url(${backgroundImage})`,*/}
                            {/*         backgroundAttachment: 'fixed',*/}
                            {/*         backgroundSize: 'cover', // This will make the image as large as possible while maintaining its aspect ratio*/}
                            {/*         backgroundRepeat: 'no-repeat', // This will prevent the image from repeating*/}
                            {/*         backgroundPosition: 'center',*/}
                            {/*         // objectFit: 'cover',*/}
                            {/*         width: '100%',*/}
                            {/*         // height: 'auto'*/}
                            {/*/!*}}/>*!/ // nu merge backgroundAttachement: fixed la img*/}
                        </Grid>
                    </Grid>
                    {/*</Box>*/}
                </Container>
            </div>
        </ThemeProvider>
    )
})