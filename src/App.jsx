import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'

// Layouts
import MainLayout from './layouts/MainLayout'
import DashboardLayout from './layouts/DashboardLayout'

// Pages
import Home from './pages/Home'
import LoadingSpinner from './components/common/LoadingSpinner'
import ProtectedRoute from './components/auth/ProtectedRoute'
import NotFound from './pages/NotFound'

// Lazy-loaded components
const About = lazy(() => import('./pages/About.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
const Education = lazy(() => import('./pages/Education.jsx'))

const Login = lazy(() => import('./pages/auth/Login.jsx'))
const Register = lazy(() => import('./pages/auth/Register.jsx'))

const DonorRegistration = lazy(() => import('./pages/donor/DonorRegistration.jsx'))
const DonorDashboard = lazy(() => import('./pages/donor/DonorDashboard.jsx'))
const DonorProfile = lazy(() => import('./pages/donor/DonorProfile.jsx'))

const RecipientRegistration = lazy(() => import('./pages/recipient/RecipientRegistration.jsx'))
const RecipientDashboard = lazy(() => import('./pages/recipient/RecipientDashboard.jsx'))
const RecipientProfile = lazy(() => import('./pages/recipient/RecipientProfile.jsx'))

const HospitalDashboard = lazy(() => import('./pages/hospital/HospitalDashboard.jsx'))
const HospitalProfile = lazy(() => import('./pages/hospital/HospitalProfile.jsx'))

const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard.jsx'))

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="education" element={<Education />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="donor/register" element={<DonorRegistration />} />
          <Route path="recipient/register" element={<RecipientRegistration />} />
        </Route>
        
        {/* Protected routes */}
        <Route path="/dashboard" element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
          {/* Donor routes */}
          <Route path="donor" element={<DonorDashboard />} />
          <Route path="donor/profile" element={<DonorProfile />} />
          
          {/* Recipient routes */}
          <Route path="recipient" element={<RecipientDashboard />} />
          <Route path="recipient/profile" element={<RecipientProfile />} />
          
          {/* Hospital routes */}
          <Route path="hospital" element={<HospitalDashboard />} />
          <Route path="hospital/profile" element={<HospitalProfile />} />
          
          {/* Admin routes */}
          <Route path="admin" element={<AdminDashboard />} />
        </Route>
        
        {/* 404 Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}

export default App