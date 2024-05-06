import React, {useState, useCallback, memo} from 'react';
import {TextField, Button, Typography, Grid, Box, FormHelperText} from '@mui/material';
import {DescriereSectiuneSX} from "../App.styles";
import _ from 'lodash';

const ContactForm = memo(() => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = useCallback(_.debounce((event) => {
        setFormData(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }));
    }, 300), []); // Debounce input handler

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic (sending data to your backend or similar)
        console.log('Form data:', formData);
    };

    const textFieldProps = {
        sx: {
            '& .MuiOutlinedInput-root': {
                '&:hover fieldset': {
                    borderColor: '#222831',
                },
                '&.Mui-focused fieldset': {
                    borderColor: '#00ADB5',
                },
            },
            '& .MuiFormLabel-root': {
                color: '#222831',
                '&.Mui-focused': {
                    color: '#00ADB5',
                },
            },
        },
    };

    return (
        <Box sx={{ width: '100%', margin: '20px auto' }}> {/* Adjust width as needed */}
            <Typography variant="h5" gutterBottom color="text.primary" style={DescriereSectiuneSX}>
                Contactează-ne
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            {...textFieldProps}
                            fullWidth
                            label="Nume"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            {...textFieldProps}
                            fullWidth
                            label="Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            {...textFieldProps}
                            fullWidth
                            label="Telefon"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            {...textFieldProps}
                            fullWidth
                            label="Mesaj"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            multiline
                            rows={4}
                            required
                        />
                        <FormHelperText>* - Câmpuri obligatorii</FormHelperText>
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" style={{backgroundColor: '#00ADB5', color: '#EEEEEE'}}>
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
});

export default ContactForm;