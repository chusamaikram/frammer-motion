import { Route, Routes } from "react-router-dom"
import LoginPage from "../pages/LoginPage"
import SignupPage from "../pages/SignupPage"
import Landinglayout from "../layouts/LandingLayout"
import AuthLayout from "../layouts/AuthLayout"
import HomePage from "../pages/tickets"
import Analytics from "../pages/analytics"
import Dashboard from "../pages/dashboard"
import Leaderboard from "../pages/leaderboard"
import UserAudit from "../pages/user-audit"
import Settings from "../pages/settings"



const CustomRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Landinglayout />}>
                <Route path="/" element={<Analytics />} />
                <Route path="/tickets" element={<HomePage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route path="/user-audit" element={<UserAudit />} />
                <Route path="/settings" element={<Settings />} />

            </Route>

            <Route path="/auth" element={<AuthLayout />}>
                <Route path="/auth/login" element={<LoginPage />} />
                <Route path="/auth/signup" element={<SignupPage />} />
            </Route>
        </Routes>
    )
}

export default CustomRoutes
