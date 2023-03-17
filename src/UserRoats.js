import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from 'modules/PrivateRoute/PrivateRoute';
import PublicRoute from 'modules/PablicRoute/PublicRoute';
import PhonebookAuth from 'modules/Phonebook/NavBarAuth/PhonebookAuth';

const LoginPage = lazy(() => import("./modules/Pages/LoginPage/LoginPage"));
const RegisterPage = lazy(() => import("./modules/Pages/RegisterPage/RegisterPage"));
const Phonebook = lazy(() => import("./modules/Phonebook/Phonebook"));
const NotFound = lazy(() => import("./modules/Pages/NotFound/NotFound"));



const UserRoutes = () => {
    return (
        <Suspense fallback={<p>...loading</p>}>
            <Routes>
                <Route element={<PrivateRoute />}>
                    <Route path="/" element={<Phonebook />} />
                </Route>
                <Route path='/PhonebookAuth' element={<PhonebookAuth />} />
                <Route element={<PublicRoute />}>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />

                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    )
}

export default UserRoutes;