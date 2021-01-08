import React from 'react'

import { ThemeProvider } from '@material-ui/styles';

import {theme_build} from'./theme'

import {

    AppBar,
    Toolbar,
    IconButton,
    Box,
    ListItem,
    List

} from '@material-ui/core';

import {

    Home

} from '@material-ui/icons';

import {

    makeStyles

} from '@material-ui/styles';

import {
Link

} from 'react-router-dom';


//CSS style
const useStyles = makeStyles({
    navbarDisplayFlex: {
      display: `flex`,
      justifyContent: `space-between`,
      height: '100%'
    },

    Navheight:{

        height: '75px',
        position:'absolute', 
        top:'0',
        width:'100%'
    }
    
  });


const navItems = [

{
    listText: 'Home',
    path:'/'
},

{
    listText: 'CV',
    path:'/resume'
},

{
    listText: 'Compétence',
    path:'/competence'
},

{
    listText: 'Contact',
    path:'/contact'
}




];

const Navbar = () => {
    const classe = useStyles();
    const theme_color=theme_build;
    return (


<ThemeProvider theme={theme_color}>
<Box component="nav" className={classe.Navheight}>
    <AppBar  color='primary' position="static" style={{height: '100%', width:'100%'}}>

            <Toolbar className={classe.navbarDisplayFlex}>
            
            <IconButton color="inherit" edge="start"  aria-label="home" component={Link} to='/'>
                <Home  fontSize="large"   />
            </IconButton>

            <List  component="nav" aria-labelledby="main navigation" className={classe.navbarDisplayFlex}>
                {navItems.map(({ listText, path }) => (
                
                    <ListItem component={Link} to={path} button style={{ textDecoration: 'none', fontWeight:'bold', marginRight:'20px'}}>{listText}</ListItem>         
                    
                ))}

            </List>
            
        </Toolbar>

    </AppBar>
</Box>
</ThemeProvider>

    
    )
}

export default Navbar
