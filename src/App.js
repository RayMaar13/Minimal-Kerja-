import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import JobVacancy from "./pages/Job Vacancy/JobVacancy";
import { StateContextProvider } from "./context/GlobalContext";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import DataTable from "./pages/Dashboard/DataTable";
import FormData from "./pages/Dashboard/FormData";
import Layout from "./Layout/Layout";
import LoginRoute from "./pages/Login/LoginRoute";
import DashboardRoute from "./pages/Dashboard/DashboardRoute";
import Register from "./pages/Register/Register";
import Profile from "./pages/Dashboard/Profile";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import JobVacancyDetail from "./pages/Job Vacancy Detail/JobVacancyDetail";
import NotFound404 from "./pages/Not Found 404/NotFound404";

function App() {
    return (
    <>
    <BrowserRouter>
    <StateContextProvider>
        <Routes>
            <Route path={"/"} element={<Layout>
                <Home />
            </Layout>} />
            <Route path={"/job-vacancy"} element={<Layout>
                <JobVacancy />
            </Layout>} />
            <Route path={"/job-vacancy/:jobId"} element={<Layout>
                <JobVacancyDetail />
            </Layout>} />
            <Route path={"/login"} element={
            <LoginRoute>
                <Layout>
                    <Login />
                </Layout>
            </LoginRoute>
            } />
            <Route path={"/dashboard"} element={
            <DashboardRoute>
            <Layout>
                <Dashboard />
            </Layout>
            </DashboardRoute>
            } />
            <Route path={"/dashboard/list-job-vacancy"} element={<Layout>
                <DataTable />
            </Layout>} />
            <Route path={"/dashboard/list-job-vacancy/edit/:idData"} element={<Layout>
                <FormData />
            </Layout>} />
            <Route path={"/dashboard/list-job-vacancy/form"} element={
            <Layout>
                <FormData />
            </Layout>
            } />
            <Route path={"/dashboard/profile"} element={
            <Layout>
                <Profile />
            </Layout>
            } />
            <Route path={"/register"} element={
            <Layout>
                <Register />
            </Layout>
            } />
            <Route path={"/dashboard/profile/changePassword"} element={
            <Layout>
                <ChangePassword />
            </Layout>
            } />
            <Route path={"*"} element={
            <Layout>
                <NotFound404 />
            </Layout>
            } />
        </Routes>
    </StateContextProvider>
    </BrowserRouter>
    </>
);
}

export default App;
