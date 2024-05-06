import React, {useEffect, useState} from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {ButtonSX, TitluSX} from "../App.styles";
import {AppBar, Box, Button, Menu, MenuItem} from "@mui/material";
import makeStyles from "@material-ui/styles/makeStyles";
import { useHistory, useLocation } from 'react-router-dom';

const useStyles = makeStyles({
    popOverRoot: {
        pointerEvents: "none"
    }
});


export const Appbar = ({ refs }) =>{

    const { acasaRef, serviciiRef, despreRef, proiecteRef, contactRef } = refs;

    const [activeSection, setActiveSection] = useState(useLocation().pathname === '/pagina-proiecte' ? null : 'Acasa'); // Acasa este highlited default si pe cealalta pagina nu se activeaza

    const scrollToRef = (ref) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    }

    let currentlyHovering = false;
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const classes = useStyles();

    function handleClick(event) {
        if (anchorEl !== event.currentTarget) {
            setAnchorEl(event.currentTarget);
        }
    }

    function handleHover() {
        currentlyHovering = true;
    }

    function handleClose() {
        setAnchorEl(null);
    }

    function handleCloseHover() {
        currentlyHovering = false;
        setTimeout(() => {
            if (!currentlyHovering) {
                handleClose();
            }
        }, 10);
    }


    useEffect(() => {
        const handleScroll = () => {
            const sections = [acasaRef, serviciiRef, despreRef, proiecteRef, contactRef];
            const labels = ['Acasa', 'Servicii', 'Despre', 'Proiecte', 'Contact'];

            sections.forEach((section, index) => {
                if (section.current) {
                    const { top } = section.current.getBoundingClientRect();
                    if (top <= 64) {
                        setActiveSection(labels[index]);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);

    }, [acasaRef, serviciiRef, despreRef, proiecteRef, contactRef]);

    const getButtonStyle = (section) => ({
        ...ButtonSX,
        color: activeSection === section ? '#00ADB5' : '#EEEEEE'
    });

    const history = useHistory(); // pt a putea naviga pe pagina proiecte

    const navigateToSection = (ref, section) => {
        if (window.location.pathname === '/') {
            scrollToRef(ref);
        } else {
            history.push('/');
            setTimeout(() => {
                scrollToRef(ref);
            }, 1000);
        }
    }

    return <div>
        <AppBar position="fixed" sx={{backgroundColor: '#222831'}}>
            <Toolbar sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                <Typography
                    component="h1"
                    variant="h6"
                    color="inherit"
                    noWrap
                    sx={TitluSX}
                >
                    Allpro Service SRL
                </Typography>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', flexGrow: 1, justifyContent: { xs: 'center', sm: 'flex-end' } }}>
                    {['Acasa', 'Servicii', 'Despre'].map((section) => (
                        <Button
                            key={section}
                            sx={getButtonStyle(section)}
                            onClick={() => navigateToSection(refs[section.toLowerCase() + 'Ref'])}
                        >
                            {section}
                        </Button>
                    ))}

                    <Button // Hover meniu
                        key="Proiecte"
                        sx={getButtonStyle('Proiecte')}
                        aria-owns={anchorEl ? "simple-menu" : undefined}
                        aria-haspopup="true"
                        onClick={() => navigateToSection(proiecteRef) }
                        onMouseOver={handleClick}
                        onMouseLeave={handleCloseHover}
                    >
                        Proiecte
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            onMouseEnter: handleHover,
                            onMouseLeave: handleCloseHover,
                            style: { pointerEvents: "auto" }
                        }}
                        // getContentAnchorEl={null}
                        // anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
                        PopoverClasses={{
                            root: classes.popOverRoot
                        }}
                        disableScrollLock={true}
                    >
                        <MenuItem onClick={() => {
                            window.location.href = '/pagina-proiecte';
                            handleClose();

                        }}>Galerie Proiecte</MenuItem>
                    </Menu>


                    <Button
                        key="Contact"
                        sx={getButtonStyle('Contact')}
                        onClick={() => navigateToSection(refs.contactRef)}
                    >
                        Contact
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    </div>
}
