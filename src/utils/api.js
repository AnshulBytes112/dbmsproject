import axios from 'axios'
import { API_URL } from './constants'

// Configure axios defaults
axios.defaults.baseURL = API_URL

// Add a request interceptor to include the token
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

// Add a response interceptor to handle token expiration
axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config
    
    // If the error is 401 and we haven't retried the request yet
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      
      try {
        // Here you would normally refresh the token
        // For now, we'll just redirect to login
        localStorage.removeItem('token')
        window.location.href = '/login'
        return Promise.reject(error)
      } catch (refreshError) {
        localStorage.removeItem('token')
        window.location.href = '/login'
        return Promise.reject(refreshError)
      }
    }
    
    return Promise.reject(error)
  }
)

// Auth API
export const authAPI = {
  login: (credentials) => axios.post('/auth/login', credentials),
  register: (userData) => axios.post('/auth/register', userData),
  getCurrentUser: () => axios.get('/auth/me'),
}

// User API
export const userAPI = {
  updateProfile: (userData) => axios.put('/users/profile', userData),
  getUser: (userId) => axios.get(`/users/${userId}`),
  getUsers: (params) => axios.get('/users', { params }),
}

// Donor API
export const donorAPI = {
  register: (donorData) => axios.post('/donors', donorData),
  getDonorProfile: () => axios.get('/donors/profile'),
  updateDonorProfile: (donorData) => axios.put('/donors/profile', donorData),
  getDonations: () => axios.get('/donors/donations'),
  createDonation: (donationData) => axios.post('/donors/donations', donationData),
}

// Recipient API
export const recipientAPI = {
  register: (recipientData) => axios.post('/recipients', recipientData),
  getRecipientProfile: () => axios.get('/recipients/profile'),
  updateRecipientProfile: (recipientData) => axios.put('/recipients/profile', recipientData),
  getRequests: () => axios.get('/recipients/requests'),
  createRequest: (requestData) => axios.post('/recipients/requests', requestData),
}

// Hospital API
export const hospitalAPI = {
  register: (hospitalData) => axios.post('/hospitals', hospitalData),
  getHospitalProfile: () => axios.get('/hospitals/profile'),
  updateHospitalProfile: (hospitalData) => axios.put('/hospitals/profile', hospitalData),
  getDonors: (params) => axios.get('/hospitals/donors', { params }),
  getRecipients: (params) => axios.get('/hospitals/recipients', { params }),
  getMatches: (params) => axios.get('/hospitals/matches', { params }),
  createMatch: (matchData) => axios.post('/hospitals/matches', matchData),
  updateMatch: (matchId, matchData) => axios.put(`/hospitals/matches/${matchId}`, matchData),
}

// Admin API
export const adminAPI = {
  getDashboardStats: () => axios.get('/admin/stats'),
  getUsers: (params) => axios.get('/admin/users', { params }),
  updateUser: (userId, userData) => axios.put(`/admin/users/${userId}`, userData),
  deleteUser: (userId) => axios.delete(`/admin/users/${userId}`),
  getHospitals: (params) => axios.get('/admin/hospitals', { params }),
  approveHospital: (hospitalId) => axios.put(`/admin/hospitals/${hospitalId}/approve`),
  getSystemLogs: (params) => axios.get('/admin/logs', { params }),
}