import React from 'react';
import { Card, P, H2 } from './StyledLaunch';

const Launch = props => {
    return(
        <Card>
        <H2>{props.launch.mission_name}</H2>
                <h4>Launch Date:</h4> 
                    <P>{props.launch.launch_date_local}</P>
                <h4>Rocket:</h4> 
                    <P>{props.launch.rocket.rocket_name}</P>
                <h4>Launch Site:</h4> 
                    <P>{props.launch.launch_site.site_name_long}</P>
        </Card>
    )
}

export default Launch;