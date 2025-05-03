import mongoose from 'mongoose'

const recipientSchema = new mongoose.Schema({
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
    diagnosisHistory: String,
    additionalNotes: String
  },
  organsNeeded: [{
    organ: {
      type: String,
      enum: [
        'kidney', 'liver', 'heart', 'lung', 'pancreas', 
        'intestine', 'cornea', 'tissue', 'bone-marrow', 'skin'
      ],
      required: true
    },
    urgency: {
      type: String,
      enum: ['low', 'medium', 'high', 'critical'],
      default: 'medium'
    },
    diagnosisDate: Date,
    notes: String
  }],
  hospital: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hospital'
  },
  primaryPhysician: {
    name: String,
    phoneNumber: String,
    email: String,
    hospital: String
  },
  emergencyContact: {
    name: String,
    relationship: String,
    phoneNumber: String,
    email: String
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
    enum: ['pending', 'active', 'matched', 'transplanted', 'inactive'],
    default: 'pending'
  },
  waitingSince: {
    type: Date,
    default: Date.now
  },
  consentGiven: {
    type: Boolean,
    default: false
  },
  consentDate: Date,
  insuranceInfo: {
    provider: String,
    policyNumber: String,
    groupNumber: String,
    coverageDetails: String
  }
}, { 
  timestamps: true 
})

const Recipient = mongoose.model('Recipient', recipientSchema)

export default Recipient