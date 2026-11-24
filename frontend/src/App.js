import './App.css';
import {Route,BrowserRouter,Routes} from 'react-router-dom';
import LandingPage from './pages/landing_page';
import LogInPage from './pages/login_page';
import SignUpPage from './pages/signup_page';
import {AuthProvider} from './context/AuthContext';
function App(){
    return(
        <>
        <AuthProvider>
         <BrowserRouter>
            <Routes>
                <Route path='/' element={<LandingPage/>}/>
                <Route path='/login' element={<LogInPage/>}/>
                <Route path='/signup' element={<SignUpPage/>}/>
            </Routes>
         </BrowserRouter>
         </AuthProvider>
        </>
    );
}

export default App;