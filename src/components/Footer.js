import React from 'react';


import {
    
    Box,
    Toolbar,
    IconButton
    

} from '@material-ui/core';

import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


import { makeStyles } from '@material-ui/styles';

import {color} from'./theme'


const theme_primary=color('primary');

//CSS style
const useStyles = makeStyles({
    footer: {
        textAlign: 'center',
        position: 'fixed',
        bottom: '0',
        width: '100%',
        height: '100px',
        justifyContent: 'space-around',
        backgroundColor:theme_primary
        
        },

    display:{

        width: '30%',
        justifyContent: 'space-around'


    }
    
    
  });




const Footer = () => {
  
    const classe = useStyles();
   
    return (
    

   
        <Box  component="footer" className={classe.footer} display="flex">


        <Toolbar  display="flex" className={classe.display}>

    <IconButton  style={{color:'black'}} edge="start"  aria-label="home">
      <InstagramIcon fontSize="Large"/>   
    </IconButton>

    <IconButton style={{color:'black'}} edge="start" aria-label="home">
       <FacebookIcon fontSize="Large" />   
    </IconButton>

    <IconButton style={{color:'black'}} edge="start" aria-label="home">
      <LinkedInIcon fontSize="Large"  />   
    </IconButton>

</Toolbar>
    

</Box>



        

    )
}

export default Footer