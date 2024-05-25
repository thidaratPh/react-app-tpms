import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import FirstPage from './pages/FirstPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import SignUp_AdOrPage from './pages/SignUp/SignUp_AdOrPage';
import SignUP_InPage from './pages/SignUp/SignUp_InPage';
import SignUp_UserPage from './pages/SignUp/SignUp_UserPage';
import User_FirstPage from './pages/User/User_FirstPage';
import User_AboutPage from './pages/User/User_AboutPage';

const routers = createBrowserRouter(
  [
    { path: "/", element: <FirstPage /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/signup", element: <SignUpPage /> },
    { path: "/signupAdOr", element: <SignUp_AdOrPage /> },
    { path: "/signupIn", element: <SignUP_InPage /> },
    { path: "/signupUser", element: <SignUp_UserPage /> },
    { path: "/userFirstPage", element: <User_FirstPage /> },
    { path: "/userAboutPage", element: <User_AboutPage /> }
  ]
);

function App() {
  return (
    <RouterProvider router={routers} />
  )
}

export default App
