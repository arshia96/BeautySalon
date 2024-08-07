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
import Auth from './pages/Auth';
import PageLayout from './ui/PageLayout';
import WhoWeAre from './pages/page/WhoWeAre';
import MeetOurTeam from './pages/page/MeetOurTeam';


const queryClient = new QueryClient();
function App() {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/p" element={
                <PageLayout />
            }>
              <Route path="who-we-are" element={<WhoWeAre />} />
              <Route path="meet-our-team" element={<MeetOurTeam />} />
            </Route>

            <Route path="/demo" element={<EventsCalendar />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/auth" element={<Auth />} />


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