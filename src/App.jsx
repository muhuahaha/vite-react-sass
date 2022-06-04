import './App.scss';
import './styles/style.scss';

import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, Link } from 'react-router-dom';

import HomePage from './pages/Home';
import Navigation from './components/layouts/Navigation';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const Notifications = lazy(() => import('./pages/Notifications'));
const Explore = lazy(() => import('./pages/Explore'));
const Offers = lazy(() => import('./pages/Offers'));
const Profile = lazy(() => import('./pages/Profile'));
const SignIn = lazy(() => import('./pages/SignIn'));
const SignUp = lazy(() => import('./pages/SignUp'));
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'));

export default function App() {
  return (
    <div className="App">
      <h1>React Router Code Splitting Demo</h1>

      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/offers" element={<OffersPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/signIn" element={<SignInPage />} />
          <Route path="/signUp" element={<SignUpPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />

          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="notifications" element={<NotificationsPage />} />
        </Routes>
        <Navigation />
      </Router>
    </div>
  );
}

const OffersPage = () => (
  <Suspense fallback={<div>Page is Loading...</div>}>
    <Offers />
  </Suspense>
);

const ProfilePage = () => (
  <Suspense fallback={<div>Page is Loading...</div>}>
    <Profile />
  </Suspense>
);

const SignInPage = () => (
  <Suspense fallback={<div>Page is Loading...</div>}>
    <SignIn />
  </Suspense>
);

const SignUpPage = () => (
  <Suspense fallback={<div>Page is Loading...</div>}>
    <SignUp />
  </Suspense>
);

const ForgotPasswordPage = () => (
  <Suspense fallback={<div>Page is Loading...</div>}>
    <ForgotPassword />
  </Suspense>
);

const DashboardPage = () => (
  <Suspense fallback={<div>Page is Loading...</div>}>
    <Dashboard />
  </Suspense>
);

const NotificationsPage = () => (
  <Suspense fallback={<div>Page is Loading...</div>}>
    <Notifications />
  </Suspense>
);
