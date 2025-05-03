import mongoose from 'mongoose'

const donorSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  bloodType: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    required: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
    required: true
  },
  height: {
    type: Number, // in cm
    required: true
  },
  weight: {
    type: Number, // in kg
    required: true
  },
  medicalHistory: {
    existingConditions: [String],
    medications: [String],
    allergies: [String],
    previousSurgeries: [String],
    smokingStatus: {
      type: String,
      enum: ['never', 'former', 'current'],
      default: 'never'
    },
    alcoholConsumption: {
      type: String,
      enum: ['none', 'occasional', 'moderate', 'heavy'],
      default: 'none'
    }
  },
  organsDonating: [{
    organ: {
      type: String,
      enum: [
        'kidney', 'liver', 'heart', 'lung', 'pancreas', 
        'intestine', 'cornea', 'tissue', 'bone-marrow', 'skin'
      ],
      required: true
    },
    notes: String
  }],
  emergencyContact: {
    name: String,
    relationship: String,
    phoneNumber: String,
    email: String
  },
  isActive: {
    type: Boolean,
    default: true
  },
  documents: [{
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
  status: {
    type: String,
    enum: ['pending', 'approved', 'inactive', 'matched'],
    default: 'pending'
  },
  consentGiven: {
    type: Boolean,
    default: false
  },
  consentDate: Date
}, { 
  timestamps: true 
})

const Donor = mongoose.model('Donor', donorSchema)

export default Donor