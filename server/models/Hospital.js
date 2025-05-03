import mongoose from 'mongoose'

const hospitalSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  licenseNumber: {
    type: String,
    required: true,
    unique: true
  },
  accreditations: [String],
  specialties: [String],
  contactInfo: {
    email: String,
    phone: String,
    fax: String,
    website: String
  },
  address: {
    street: String,
    city: String,
    state: String,
    zipCode: String,
    country: String,
    coordinates: {
      latitude: Number,
      longitude: Number
    }
  },
  facilityType: {
    type: String,
    enum: ['general', 'specialized', 'university', 'community', 'private', 'other'],
    default: 'general'
  },
  transplantCenter: {
    type: Boolean,
    default: false
  },
  organTransplants: [{
    organ: {
      type: String,
      enum: [
        'kidney', 'liver', 'heart', 'lung', 'pancreas', 
        'intestine', 'cornea', 'tissue', 'bone-marrow', 'skin'
      ]
    },
    isActive: {
      type: Boolean,
      default: true
    },
    successRate: Number,
    annualTransplants: Number
  }],
  staff: [{
    name: String,
    role: String,
    specialty: String,
    email: String,
    phone: String
  }],
  verificationDocuments: [{
    name: String,
    fileUrl: String,
    uploadDate: {
      type: Date,
      default: Date.now
    },
    verified: {
      type: Boolean,
      default: false
    }
  }],
  isVerified: {
    type: Boolean,
    default: false
  },
  status: {
    type: String,
    enum: ['pending', 'active', 'suspended', 'inactive'],
    default: 'pending'
  },
  rating: {
    average: {
      type: Number,
      default: 0
    },
    count: {
      type: Number,
      default: 0
    }
  }
}, { 
  timestamps: true 
})

const Hospital = mongoose.model('Hospital', hospitalSchema)

export default Hospital