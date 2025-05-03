// API URL - change this based on your environment
export const API_URL = 'http://localhost:5000/api'

// Blood types
export const BLOOD_TYPES = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']

// Organs available for donation
export const ORGANS = [
  { id: 'kidney', name: 'Kidney' },
  { id: 'liver', name: 'Liver' },
  { id: 'heart', name: 'Heart' },
  { id: 'lung', name: 'Lung' },
  { id: 'pancreas', name: 'Pancreas' },
  { id: 'intestine', name: 'Intestine' },
  { id: 'cornea', name: 'Cornea' },
  { id: 'tissue', name: 'Tissue' },
  { id: 'bone-marrow', name: 'Bone Marrow' },
  { id: 'skin', name: 'Skin' },
]

// User roles
export const USER_ROLES = {
  DONOR: 'donor',
  RECIPIENT: 'recipient',
  HOSPITAL: 'hospital',
  ADMIN: 'admin',
}

// Donation status
export const DONATION_STATUS = {
  PENDING: 'pending',
  APPROVED: 'approved',
  IN_PROGRESS: 'in_progress',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled',
}

// Match status
export const MATCH_STATUS = {
  POTENTIAL: 'potential',
  CONFIRMED: 'confirmed',
  IN_PROGRESS: 'in_progress',
  COMPLETED: 'completed',
  FAILED: 'failed',
}

// Route paths
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  DONOR_REGISTER: '/donor/register',
  RECIPIENT_REGISTER: '/recipient/register',
  DONOR_DASHBOARD: '/dashboard/donor',
  RECIPIENT_DASHBOARD: '/dashboard/recipient',
  HOSPITAL_DASHBOARD: '/dashboard/hospital',
  ADMIN_DASHBOARD: '/dashboard/admin',
}