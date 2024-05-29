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
import User_AboutCoursePage from './pages/User/User_AboutCoursePage';
import Admin_FirstPage from './pages/Admin/Admin_FirstPage';
import Admin_CF_AdOrPage from './pages/Admin/Admin_CF_AdOrPage';
import Admin_CF_InPage from './pages/Admin/Admin_CF_InPage';
import AdOr_FirstPage from './pages/Admin Organization/AdOr_FirstPage';
import AdOr_AboutPage from './pages/Admin Organization/AdOr_AboutPage';
import AdOr_CoursePage from './pages/Admin Organization/AdOr_Course';
import AdOr_AddCoursePage from './pages/Admin Organization/AdOr_AddCoursePage';
import In_FirstPage from './pages/Instructor/In_FirstPage';
import In_AboutPage from './pages/Instructor/In_AboutPage';
import In_CoursePage from './pages/Instructor/In_CoursePage';
import In_AddDocPage from './pages/Instructor/In_AddDocPage';

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
    { path: "/userProfilePage", element: <User_ProfilePage /> },
    { path: "/userAboutCorsePage", element: <User_AboutCoursePage /> },
    { path: "/adminFirstPage", element: <Admin_FirstPage /> },
    { path: "/adminCFAdOr", element: <Admin_CF_AdOrPage /> },
    { path: "/adminCFIn", element: <Admin_CF_InPage /> },
    { path: "/AdOrFirstPage", element: <AdOr_FirstPage /> },
    { path: "/AdOrAboutPage", element: <AdOr_AboutPage /> },
    { path: "/AdOrCoursePage", element: <AdOr_CoursePage /> },
    { path: "/AdOrAddCoursePage", element: <AdOr_AddCoursePage /> },
    { path: "/InFirstPage", element: <In_FirstPage /> },
    { path: "/InAboutPage", element: <In_AboutPage /> },
    { path: "/InCoursePage", element: <In_CoursePage /> },
    { path: "/InAddDocPage", element: <In_AddDocPage /> }
  ]
);

function App() {
  return (
    <RouterProvider router={routers} />
  )
}

export default App
