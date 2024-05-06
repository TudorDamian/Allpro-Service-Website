import React, {forwardRef} from 'react'
import {BackgroundStyle, BoxInContainerSX, ContainerAcasaSX, SectiuneTitluFontSX, VideoBackground} from "../App.styles";
import {Box, Button, Container} from "@mui/material";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import video from '../imaginiSite/4941457-hd_1920_1080_25fps.mp4';

export const Acasa = forwardRef((props, ref) => {

    const { toRef } = props;

    const scrollToRef = (ref) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div ref={ref} style={BackgroundStyle}>
            <video autoPlay loop muted style={VideoBackground}>
                <source src={video} type="video/mp4" />
            </video>
            <Container
                sx={ContainerAcasaSX}
                maxWidth={false}
            >
                <Box
                    sx={{BoxInContainerSX, gap: 0, textAlign: 'center'}}
                >
                    <Typography component="h2" variant="h3" color="text.primary"
                                style={{SectiuneTitluFontSX, color: 'white', marginBottom: 0}}>
                        Confecții metalice din oțel, inox <br/> si fier forjat
                    </Typography>
                    <Button onClick={() => scrollToRef(toRef)} style={{marginTop: 0}} disableRipple>
                        <KeyboardArrowDownIcon style={{color: 'white', fontSize: '100px'}}/>
                    </Button>
                </Box>
            </Container>
        </div>
    )
})