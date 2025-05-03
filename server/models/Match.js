import mongoose from 'mongoose'

const matchSchema = new mongoose.Schema({
  donor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Donor',
    required: true
  },
  recipient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Recipient',
    required: true
  },
  hospital: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hospital'
  },
  organ: {
    type: String,
    enum: [
      'kidney', 'liver', 'heart', 'lung', 'pancreas', 
      'intestine', 'cornea', 'tissue', 'bone-marrow', 'skin'
    ],
    required: true
  },
  compatibilityScore: {
    type: Number,
    required: true,
    min: 0,
    max: 100
  },
  status: {
    type: String,
    enum: ['potential', 'confirmed', 'in_progress', 'completed', 'failed', 'cancelled'],
    default: 'potential'
  },
  matchDate: {
    type: Date,
    default: Date.now
  },
  confirmationDate: Date,
  scheduledDate: Date,
  completionDate: Date,
  notes: String,
  medicalEvaluation: {
    lastUpdated: Date,
    evaluatedBy: String,
    results: String,
    additionalTests: [String]
  },
  notifications: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    message: String,
    read: {
      type: Boolean,
      default: false
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  }],
  documents: [{
    name: String,
    fileUrl: String,
    uploadDate: {
      type: Date,
      default: Date.now
    },
    uploadedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  }]
}, { 
  timestamps: true 
})

const Match = mongoose.model('Match', matchSchema)

export default Match