import './App.scss';
import './styles/style.scss';

import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Spinner from './components/layouts/Spinner';

import HomePage from './pages/Home';
import Explore from './pages/Explore';
import Navigation from './components/layouts/Navigation';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const Notifications = lazy(() => import('./pages/Notifications'));
// const Explore = lazy(() => import('./pages/Explore'));
const PrivateRoute = lazy(() => import('./components/PrivateRoute'));

const Offers = lazy(() => import('./pages/Offers'));
const Category = lazy(() => import('./pages/Category'));
const Profile = lazy(() => import('./pages/Profile'));
const SignIn = lazy(() => import('./pages/SignIn'));
const SignUp = lazy(() => import('./pages/SignUp'));
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'));
const CreateListing = lazy(() => import('./pages/CreateListing'));

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Explore />} />
          <Route path="/offers" element={<OffersPage />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/profile" element={<PrivateRoutePage />}>
            <Route path="/profile" element={<ProfilePage />} />
          </Route>

          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/signIn" element={<SignInPage />} />
          <Route path="/signUp" element={<SignUpPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/create-listing" element={<CreateListingPage />} />

          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="notifications" element={<NotificationsPage />} />
        </Routes>
        <Navigation />
      </Router>

      <ToastContainer />
    </div>
  );
}

const OffersPage = () => (
  <Suspense
    fallback={
      <div>
        <Spinner />
      </div>
    }>
    <Offers />
  </Suspense>
);

const CategoryPage = () => (
  <Suspense
    fallback={
      <div>
        <Spinner />
      </div>
    }>
    <Category />
  </Suspense>
);

const ProfilePage = () => (
  <Suspense
    fallback={
      <div>
        <Spinner />
      </div>
    }>
    <Profile />
  </Suspense>
);

const PrivateRoutePage = () => (
  <Suspense
    fallback={
      <div>
        <Spinner />
      </div>
    }>
    <PrivateRoute />
  </Suspense>
);

const CreateListingPage = () => (
  <Suspense
    fallback={
      <div>
        <Spinner />
      </div>
    }>
    <CreateListing />
  </Suspense>
);

const SignInPage = () => (
  <Suspense
    fallback={
      <div>
        <Spinner />
      </div>
    }>
    <SignIn />
  </Suspense>
);

const SignUpPage = () => (
  <Suspense
    fallback={
      <div>
        <Spinner />
      </div>
    }>
    <SignUp />
  </Suspense>
);

const ForgotPasswordPage = () => (
  <Suspense
    fallback={
      <div>
        <Spinner />
      </div>
    }>
    <ForgotPassword />
  </Suspense>
);

const DashboardPage = () => (
  <Suspense
    fallback={
      <div>
        {' '}
        <Spinner />
      </div>
    }>
    <Dashboard />
  </Suspense>
);

const NotificationsPage = () => (
  <Suspense
    fallback={
      <div>
        {' '}
        <Spinner />
      </div>
    }>
    <Notifications />
  </Suspense>
);
