import React, { useState, useCallback, memo } from 'react';
import { TextField, Button, Typography, Grid, Box, FormHelperText } from '@mui/material';
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
        console.log('Form data:', formData);
        event.target.submit();
    };

    return (
        <Box sx={{ width: '100%', margin: '20px auto' }}>
            <Typography variant="h5" gutterBottom color="text.primary">
                Contactează-ne
            </Typography>
            <form name="contact" data-netlify="true" onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="contact" /> {/* This hidden field is necessary for Netlify */}
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Nume" name="name" value={formData.name} onChange={handleChange} required />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Telefon" name="phone" value={formData.phone} onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Mesaj" name="message" value={formData.message} onChange={handleChange} multiline rows={4} required />
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
