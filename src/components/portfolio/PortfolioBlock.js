import React from 'react';
import IconLink from "./IconLink";
import { Box } from "@mui/material";

function PortfolioBlock(props) {
    const { image, live, source, title, tech } = props;
    return (
        <Box display={ 'flex' } flexDirection={ 'column' } justifyContent={ 'center' } alignItems={ 'center' }>
            <Box component={ 'img' } src={ image } alt={ 'mockup' }/>
            <h1 style={ { fontSize: '2rem' } }>{ title }</h1>
            <Box className={ 'portfolio' } display={ 'flex' } flexDirection={ 'row' } gap={ '0.5rem' }
                 alignItems={ 'center' } fontSize={ '1.5rem' } py={ '2rem' }>
                <Box p={ 1 } border={ '2px solid black' } borderRadius={ '25px' }>
                    <IconLink link={ live } title={ 'Live Demo' } icon={ 'fa fa-safari' }/>
                </Box>
                <Box p={ 1 } border={ '2px solid black' } borderRadius={ '25px' }>
                    <IconLink link={ source } title={ 'Source Code' } icon={ 'fa fa-code' }/>
                </Box>
            </Box>
            <p style={ { padding: '0 3rem 1rem 3rem', fontSize: '1rem', textAlign: 'center' } }>Technology used: { tech }</p>
        </Box>
    );
}

export default PortfolioBlock;