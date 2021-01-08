import { createMuiTheme } from '@material-ui/core/styles';

const color=(color)=>{return (color==='primary' ? '#fff' : '#ffc400');};


const theme_build = createMuiTheme({
    palette: {
      primary: {
  
        main: color('primary'),
      },
      secondary: {
  
        main: color('secondary'),
      },
    },
  });


export  {theme_build, color}
