import React from 'react';
import {Typography, Grid, Box} from '@mui/material';
import PlaceIcon from "@mui/icons-material/Place";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import {DescriereSectiuneSX} from "../App.styles";

const DateContact = () => {
    return (
        <Box sx={{ width: '100%', margin: '20px auto' }}>
            <Typography gutterBottom variant="h5" color="text.primary" style={DescriereSectiuneSX}>
                Date Contact
            </Typography>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Typography color="text.secondary" style={DescriereSectiuneSX}>Allpro Service SRL</Typography>
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', gap: 1}}>
                    <PlaceIcon fontSize={"small"}/>
                    <Typography color="text.secondary" style={DescriereSectiuneSX}>Strada Oașului 363,
                        <br/>
                        Cluj-Napoca 400645
                    </Typography>
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', gap: 1}}>
                    <LocalPhoneIcon fontSize={"small"}/>
                    {/*sa nu uit sa adaug chestie d aia ce dai click si deschide telefonu sa suni*/}
                    <Typography color="text.secondary" style={DescriereSectiuneSX}>Telefon: 0744624840</Typography>
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', gap: 1}}>
                    <MailOutlineIcon fontSize={"small"}/>
                    <Typography color="text.secondary" style={DescriereSectiuneSX}>Email: </Typography>
                    <a color="text.secondary" style={DescriereSectiuneSX} href={"mailto:#"}>allproservice@gmail.com</a>
                </Grid>
            </Grid>
        </Box>
    );
};

export default DateContact;