/* eslint-disable no-unused-vars */
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
// import Wallet from '../../pages/Wallet/Wallet';
import DonorLogin from '../../pages/Login/Donor/Login';
import Layout from '../layout/Layout';
import DonorRegister from '../../pages/Login/Donor/Register';
import Home from '../../pages/Home/Home';
import CenterLogin from '../../pages/Login/Blood Center/Login';
import CenterRegister from '../../pages/Login/Blood Center/Register';
import AuthContext from '../../store/auth-context';
// import SendTokens from '../../pages/SendTokens/SendTokens';
import NotFound from '../../pages/NotFound/NotFound';
import { useContext } from 'react';
import BloodRequests from '../../pages/BloodRequests';
import Donors from '../../pages/Donors';
import Centers from '../../pages/Centers';
import BloodEntry from '../../pages/BloodEntry';

// const ProtectedRoute = ({ isLoggedIn, redirectPath = '/login' }) => {
//   if (!isLoggedIn) {
//     return <Navigate to={redirectPath} replace />;
//   }

//   return <Outlet />;
// };

const ClientRoutes = () => {
  // const authCtx = useContext(AuthContext);

  return (
    <Routes>
      {/* <Route element={<ProtectedRoute isLoggedIn={authCtx.isLoggedIn} />}> */}
        <Route
          path="/"
          exact
          element={
            <Layout>
              <Home/>
            </Layout>
          }
        />
       <Route
          path="/donors"
          exact
          element={
            <Layout>
                <Donors />
            </Layout>
          }
        />
         <Route
          path="/centers"
          exact
          element={
            <Layout>
              <Centers />
            </Layout>
          }
        />
        <Route
          path="/blood-requests"
          exact
          element={
            <Layout>
                <BloodRequests />
            </Layout>
          }
        />
        <Route
          path="/blood-entry"
          exact
          element={
            <Layout>
                <BloodEntry />            
            </Layout>
          }
        /> 
        <Route
          path="*"
          element={
            <Layout>
              <NotFound />
            </Layout>
          }
        />
      {/* </Route> */}
      <Route path="login-donor" element={<DonorLogin />} />
      <Route path="register-donor" element={<DonorRegister />} />
      <Route path="login-center" element={<CenterLogin />} />
      <Route path="register-center" element={<CenterRegister />} />
    </Routes>
  );
};

export default ClientRoutes;