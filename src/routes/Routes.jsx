import { createBrowserRouter } from "react-router-dom";
import { Helmet } from "react-helmet";

import Register from "../pages/Register";
import Login from "../pages/Login";

import ForgetPassword from "../pages/ForgetPassword";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/Home/Home";
import Profile from "../pages/Profile";

import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "../pages/UpdateProfile";
import ErrorPage from "../pages/ErrorPage";
import JobDetails from "../pages/jobDetails/JobDetails";
import JobApply from "../pages/jobApply/JobApply";
import MyAppliedJob from "../pages/myAppliedJob/MyAppliedJob";
import Addjob from "../pages/addjob/Addjob";
import AllJobs from "../pages/AllJob/AllJobs";
import MyJobPost from "../pages/MyJobPost/MyJobPost";
import EditJobPost from "../pages/MyJobPost/EditJobPost";
import ViewJobApplication from "../pages/viewJobApplication/ViewJobApplication";


const router = createBrowserRouter([    
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: (
                    <>
                        <Helmet>
                            <title>Job Seeker - Home</title>
                        </Helmet>
                        <Home />
                    </>
                ),
            },
            
           
            {
                path: "/register",
                element: (
                    <>
                        <Helmet>
                            <title>Job Seeker - Register</title>
                        </Helmet>
                        <Register />
                    </>
                ),
            },
           
            {
                path: "/",
                element: (
                    <>
                        <Helmet>
                            <title>Job Seeker - All Reviews</title>
                        </Helmet>
                      
                    </>
                ),
               
            },
            {
                path: "",
                element: (
                    <>
                        <Helmet>
                            <title>Job Seeker - Review Details</title>
                        </Helmet>
                        
                    </>
                ),
               
            },
           
            {
                path: "/jobDetails/:id",
                element: (
                    <>
                        <Helmet>
                            <title>Job Seeker - Job Details</title>
                        </Helmet>
                        <PrivateRoute>
                          <JobDetails></JobDetails>
                        </PrivateRoute>
                    </>
                ),
            },
           
            {
                path: "/addJob",
                element: (
                    <>
                        <Helmet>
                            <title>Job Seeker - Add Job</title>
                        </Helmet>
                        <PrivateRoute>
                          <Addjob></Addjob>
                        </PrivateRoute>
                    </>
                ),
            },
           
            {
                path: "/jobApply/:id",
                element: (
                    <>
                        <Helmet>
                            <title>Job Seeker - Apply Job</title>
                        </Helmet>
                        <PrivateRoute>
                          <JobApply></JobApply>
                        </PrivateRoute>
                    </>
                ),
            },
            {
                path: "/applied-job",
                element: (
                    <>
                        <Helmet>
                            <title>Job Seeker - Applied Job</title>
                        </Helmet>
                        <PrivateRoute>
                          <MyAppliedJob></MyAppliedJob>
                        </PrivateRoute>
                    </>
                ),
            },
            {
                path: "/",
                element: (
                    <>
                        <Helmet>
                            <title>Job Seeker - My Review</title>
                        </Helmet>
                        <PrivateRoute>
                           {/* write a component  */}
                        </PrivateRoute>
                    </>
                ),
            },
            {
                path: "/",
                element: (
                    <>
                        <Helmet>
                            <title>Job Seeker - Game WatchList</title>
                        </Helmet>
                        <PrivateRoute>
                            {/* write a component  */}
                        </PrivateRoute>
                    </>
                ),
            },
           
         
            {
                path: "/login",
                element: (
                    <>
                        <Helmet>
                            <title>Job Seeker - Login</title>
                        </Helmet>
                        <Login />
                    </>
                ),
            },
            {
                path: "/allJob",
                element: (
                    <>
                        <Helmet>
                            <title>Job Seeker - All Job</title>
                        </Helmet>
                        <AllJobs></AllJobs>
                    </>
                ),
            },
            {
                path: "/forgot-password",
                element: (
                    <>
                        <Helmet>
                            <title>Job Seeker - Forgot Password</title>
                        </Helmet>
                        <ForgetPassword />
                    </>
                ),
            },
            {
                path: "/my-profile",
                element: (
                    <>
                        <Helmet>
                            <title>Job Seeker - My Profile</title>
                        </Helmet>
                        <PrivateRoute>
                            <Profile />
                        </PrivateRoute>
                    </>
                ),
            },
            {
                path: "/myJobPost",
                element: (
                    <>
                        <Helmet>
                            <title>Job Seeker - My Posted Job</title>
                        </Helmet>
                        <PrivateRoute>
                           <MyJobPost></MyJobPost>
                        </PrivateRoute>
                    </>
                ),
            },
            {
                path: "/edit-job-post/:id",
                element: (
                    <>
                        <Helmet>
                            <title>Job Seeker - My Posted Job</title>
                        </Helmet>
                        <PrivateRoute>
                          <EditJobPost></EditJobPost>
                        </PrivateRoute>
                    </>
                ),
            },
            {
                path: "viewJobApplication/:jobId",
                element: (
                    <>
                        <Helmet>
                            <title>Job Seeker - View Job Application</title>
                        </Helmet>
                        <PrivateRoute>
                         <ViewJobApplication></ViewJobApplication>
                        </PrivateRoute>
                    </>
                ),
            },
            {
                path: "/update-profile",
                element: (
                    <>
                        <Helmet>
                            <title>Job Seeker - Update Profile</title>
                        </Helmet>
                        <PrivateRoute>
                            <UpdateProfile />
                        </PrivateRoute>
                    </>
                ),
            },
           
           
        ],
    },
    {
        path: "*",
        element: (
            <>
                <Helmet>
                    <title>Job Seeker - Error</title>
                </Helmet>
                <ErrorPage />
            </>
        ),
    },
    
  
]);

export default router;