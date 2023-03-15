import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const LoginPage = lazy(() => import("./modules/Pages/LoginPage/LoginPage"));
const RegisterPage = lazy(() => import("./modules/Pages/RegisterPage/RegisterPage"));
const Phonebook = lazy(() => import("./modules/Phonebook/Phonebook"));
const NotFound = lazy(() => import("./modules/Pages/NotFound/NotFound"));



const UserRoutes = () => {
    return (
        <Suspense fallback={<p>...loading</p>}>
            <Routes>
                <Route path="/" element={<Phonebook />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    )
}

export default UserRoutes;