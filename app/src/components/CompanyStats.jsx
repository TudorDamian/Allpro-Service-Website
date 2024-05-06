import React, {useState, useEffect, useRef} from 'react';
import CountUp from 'react-countup';
import { Grid, Typography, Card, CardContent } from '@mui/material';
import {Center} from "../App.styles";

export const CompanyStats = () => {
    const [yearEstablished, setYearEstablished] = useState(0);
    const [projectsCompleted, setProjectsCompleted] = useState(0);
    const [contractors, setContractors] = useState(0);
    const [awards, setAwards] = useState(0);
    const statsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                // Simulate loading or calculate actual values
                setYearEstablished(2005);
                setProjectsCompleted(500);
                setContractors(1000);
                setAwards(1000);

                observer.disconnect(); // Stop observing after the animation starts
            }
        });

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }
    }, [statsRef]);

    return <div style={{backgroundColor: "#00ADB5"}}>
            <Grid container spacing={2} ref={statsRef}>
                <Grid item xs={12} sm={6} md={6}>
                    <Card style={{backgroundColor: "#00ADB5"}}>
                        <CardContent>
                            <Typography variant="body1" sx={{ color: '#EEEEEE' }}>Established</Typography>
                            <Typography variant="h4" sx={{ color: '#EEEEEE' }}>
                                <CountUp end={yearEstablished} duration={1} />
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Card style={{backgroundColor: "#00ADB5"}}>
                        <CardContent>
                            <Typography variant="body1" sx={{ color: '#EEEEEE' }}>Projects Completed</Typography>
                            <Typography variant="h4" sx={{ color: '#EEEEEE' }}>
                                <CountUp end={projectsCompleted} duration={1} />
                                +
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                {/*<Grid item xs={12} sm={6} md={3}>*/}
                {/*    <Card style={{backgroundColor: "#00ADB5"}}>*/}
                {/*        <CardContent>*/}
                {/*            <Typography variant="body1" sx={{ color: '#EEEEEE' }}>Contractors</Typography>*/}
                {/*            <Typography variant="h4" sx={{ color: '#EEEEEE' }}>*/}
                {/*                <CountUp end={contractors} duration={2} />*/}
                {/*            </Typography>*/}
                {/*        </CardContent>*/}
                {/*    </Card>*/}
                {/*</Grid>*/}
                {/*<Grid item xs={12} sm={6} md={3}>*/}
                {/*    <Card style={{backgroundColor: "#00ADB5"}}>*/}
                {/*        <CardContent>*/}
                {/*            <Typography variant="body1" sx={{ color: '#EEEEEE' }}>Awards</Typography>*/}
                {/*            <Typography variant="h4" sx={{ color: '#EEEEEE' }}>*/}
                {/*                <CountUp end={awards} duration={2} />*/}
                {/*            </Typography>*/}
                {/*        </CardContent>*/}
                {/*    </Card>*/}
                {/*</Grid>*/}
            </Grid>
    </div>
}

export default CompanyStats;
