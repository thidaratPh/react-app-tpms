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
import User_CoursePage from './pages/User/User_CoursePage';
import User_ProfilePage from './pages/User/User_ProfilePage';

const routers = createBrowserRouter(
  [
    { path: "/", element: <FirstPage /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/signup", element: <SignUpPage /> },
    { path: "/signupAdOr", element: <SignUp_AdOrPage /> },
    { path: "/signupIn", element: <SignUP_InPage /> },
    { path: "/signupUser", element: <SignUp_UserPage /> },
    { path: "/userFirstPage", element: <User_FirstPage /> },
    { path: "/userAboutPage", element: <User_AboutPage /> },
    { path: "/userCoursePage", element: <User_CoursePage /> },
    { path: "/userProfilePage", element: <User_ProfilePage /> }
  ]
);

function App() {
  return (
    <RouterProvider router={routers} />
  )
}

export default App
