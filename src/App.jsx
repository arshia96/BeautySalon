import './App.css'
import { Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DarkModeProvider from './context/DarkModeContext'
import { Toaster } from "react-hot-toast";
import CustomerDashboard from './pages/CustomerDashboard'
import CustomerReservTime from './pages/CustomerReservTime';
import CustomerLayout from './features/customer/CustomerLayout';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Profile from './pages/Profile';
import EventsCalendar from './features/date/EventsCalendar';
import AllTimes from './features/customer/AllTimes';
import Portfolios from './pages/Portfolios';

const queryClient = new QueryClient();
function App() {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/demo" element={<EventsCalendar />} />
            <Route path="*" element={<NotFound />} />

            {/* Customer Dashboard */}
            <Route path="/customer" element={
                <CustomerLayout />
            }>
              <Route index element={<Navigate to="dashboard" replace />} />
              <Route path="dashboard" element={<CustomerDashboard />} />
              <Route path="reserv-time" element={<CustomerReservTime />} />
              <Route path="profile" element={<Profile />} />
              <Route path="portfolios" element={<Portfolios />} />
              {/*Should Remove For Customers*/} <Route path="times" element={<AllTimes />} />
            </Route>

            {/* Owner Dashboard */}
            <Route path="/owner" element={
                  <CustomerLayout />
              }>
                <Route index element={<Navigate to="dashboard" replace />} />
                <Route path="dashboard" element={<CustomerDashboard />} />
                <Route path="reserv-time" element={<CustomerReservTime />} />
                <Route path="profile" element={<Profile />} />
                <Route path="portfolios" element={<Portfolios />} />
                {/*Should Remove For Customers*/} <Route path="times" element={<AllTimes />} />
            </Route>

          </Routes>
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;