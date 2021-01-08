import './App.css';
import Navbar from './components/Navbar'
import HomeBody from './components/HomeBody';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer'
import Competence from './components/Competence'

import CssBaseline from '@material-ui/core/CssBaseline';
import {Route, Switch} from 'react-router-dom';


function App() {
  return (
    <>
      <CssBaseline>

        <div className="page-content">

        

          <Navbar/>

        <div className="content">
          <Switch>

            <Route path="/" exact component={HomeBody} />
            <Route path="/resume" component={Resume} />
            <Route path="/competence" component={Competence} />
            <Route path="/contact" component={Contact} />
            
          </Switch>
        </div>          

          <Footer/>

          </div>
      </CssBaseline>

    </>
   
    
  );
}

export default App;
