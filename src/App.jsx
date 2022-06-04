import './App.scss';
import './styles/style.scss';

import { lazy, Suspense } from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';

import HomePage from './pages/Home';
import Navigation from './components/layouts/Navigation';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const Notifications = lazy(() => import('./pages/Notifications'));

export default function App() {
  return (
    <div className="App">
      <h1>React Router Code Splitting Demo</h1>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="notifications" element={<NotificationsPage />} />
        </Route>
      </Routes>
    </div>
  );
}

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
