import './App.css';
import {Route,BrowserRouter,Routes} from 'react-router-dom';
import LandingPage from './pages/landing_page';
function App(){
    return(
        <>
         <BrowserRouter>
            <Routes>
                <Route path='/' element={<LandingPage />}/>
            </Routes>
         </BrowserRouter>
        </>
    );
}

export default App;