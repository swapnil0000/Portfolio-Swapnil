import { Box, Button, Container, TextField, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useState } from 'react'
import "../Home/icons.css"
import contact from "../Contact/contacts.jpg"

const Contact = () => {
    const theme = useTheme();
    const isMobileView = useMediaQuery(theme.breakpoints.down('md'));
    const [contactDetails, setContactDetails] = useState({
        name: '',
        fromEmail: '',
        mobileNo: '',
        message: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setContactDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Validate form fields
        const validationErrors = validateForm(contactDetails);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        // Form submitted successfully
        alert('Form submitted successfully!');
        // Clear form data
        resetForm();
    };

    const validateForm = (data) => {
        const errors = {};

        // Validate name
        if (!data.name.trim()) {
            errors.name = 'Name is required';
        }

        // Validate email
        if (!data.fromEmail.trim()) {
            errors.fromEmail = 'Email is required';
        } else if (!isValidEmail(data.fromEmail)) {
            errors.fromEmail = 'Invalid email address';
        }

        // Validate mobile number
        if (!data.mobileNo.trim()) {
            errors.mobileNo = 'Mobile number is required';
        }

        // Validate message
        if (!data.message.trim()) {
            errors.message = 'Message is required';
        }

        return errors;
    };

    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const resetForm = () => {
        setContactDetails({
            name: '',
            fromEmail: '',
            mobileNo: '',
            message: ''
        });
        setErrors({});
    };

    return (
        <Container sx={{ display: 'flex', flexDirection: 'column', marginTop: '80px' }}>
            <Typography sx={{ color: 'white', fontSize: '50px', textAlign: 'center' }}>Contact Me</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly' }}>

                <Box sx={{ display: 'flex', flexDirection: isMobileView ? "column" : 'row', alignItems: 'center', justifyContent: 'space-around', width: '100%' }}>
                    <Box>
                        <img style={{ width: isMobileView ? "200px" : "300px", borderRadius: '10px' }} src={contact} />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography sx={{ color: 'cornsilk', fontWeight: '600', fontSize: '18px', marginBottom: '10px', fontFamily: 'sans-serif', marginTop: '20px' }}>Fill the form I will contact you!</Typography>
                        {['name', 'fromEmail', 'mobileNo', 'message'].map((field) => (
                            <TextField
                                key={field}
                                style={{ width: isMobileView ? "300px" : "300px", borderRadius: '3px', marginBottom: '20px', color: 'black', backgroundColor: 'whitesmoke' }}
                                name={field}
                                placeholder={field === 'fromEmail' ? "Email" : field === 'mobileNo' ? "Mobile No" : field.charAt(0).toUpperCase() + field.slice(1)}
                                value={contactDetails[field]}
                                onChange={handleChange}
                                error={Boolean(errors[field])}
                                helperText={errors[field]}
                                focused={false} // Disable the focused state
                            />
                        ))}
                        <Button onClick={handleSubmit} variant='contained' sx={{ backgroundColor: '', color: 'white' }}>Submit</Button>
                    </Box>
                </Box>
                <Box>
                    <Box>
                        <Typography sx={{ color: 'white', fontSize: isMobileView ? "20px" : "30px", textAlign: 'center', marginTop: '60px' }}>Contact with social Media</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginTop: '20px', marginBottom: '50px', gap: isMobileView ? "30px" : "100px" }}>
                    <a href="https://github.com/swapnil0000" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <i className="fab fa-github icon" style={{ fontSize: isMobileView ? "40px" : "80px", color: 'white', transition: 'transform 0.2s' }}></i>
                    </a>
                    <a href="https://www.instagram.com/spixxels?igsh=NXdxaDh3YzZsZmQw" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <i className="fab fa-instagram icon" style={{ fontSize: isMobileView ? "40px" : "80px", color: 'white', transition: 'transform 0.2s' }}></i>
                    </a>
                    <a href="https://www.linkedin.com/in/swapnil-srivastav-917560183/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <i className="fab fa-linkedin icon" style={{ fontSize: isMobileView ? "40px" : "80px", color: 'white', transition: 'transform 0.2s' }}></i>
                    </a>
                    <a href="https://twitter.com/Swapnil01266706" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <i className="fab fa-twitter icon" style={{ fontSize: isMobileView ? "40px" : "80px", color: 'white', transition: 'transform 0.2s' }}></i>
                    </a>
                    <a href="https://www.reddit.com/u/PieceSerious5333/s/Oy766bgdFS" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <i className="fab fa-reddit icon" style={{ fontSize: isMobileView ? "40px" : "80px", color: 'white', transition: 'transform 0.2s' }}></i>
                    </a>
                </Box>
                
                </Box>
            </Box>
        </Container>
    );
}

export default Contact;
