import trainerModel from "../models/trainerModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import appointmentModel from "../models/appointmentModel.js";

// API for trainer Login 
const loginTrainer = async (req, res) => {

  try {

      const { email, password } = req.body
      const user = await trainerModel.findOne({ email })

      if (!user) {
          return res.json({ success: false, message: "Invalid credentials" })
      }

      const isMatch = await bcrypt.compare(password, user.password)

      if (isMatch) {
          const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
          res.json({ success: true, token })
      } else {
          res.json({ success: false, message: "Invalid credentials" })
      }


  } catch (error) {
      console.log(error)
      res.json({ success: false, message: error.message })
  }
}

// API to get trainer appointments for trainer panel
const appointmentsTrainer = async (req, res) => {
  try {

      const { trainerId } = req.body
      const appointments = await appointmentModel.find({ trainerId })

      res.json({ success: true, appointments })

  } catch (error) {
      console.log(error)
      res.json({ success: false, message: error.message })
  }
}

// API to cancel appointment for trainer panel
const appointmentCancle = async (req, res) => {
  try {

      const { trainerId, appointmentId } = req.body

      const appointmentData = await appointmentModel.findById(appointmentId)
      if (appointmentData && appointmentData.trainerId === trainerId) {
          await appointmentModel.findByIdAndUpdate(appointmentId, { cancelled: true })
          return res.json({ success: true, message: 'Appointment Cancelled' })
      }

      res.json({ success: false, message: 'Appointment Cancelled' })

  } catch (error) {
      console.log(error)
      res.json({ success: false, message: error.message })
  }

}

// API to mark appointment completed for trainer panel
const appointmentComplete = async (req, res) => {
  try {

      const { trainerId, appointmentId } = req.body

      const appointmentData = await appointmentModel.findById(appointmentId)
      if (appointmentData && appointmentData.trainerId === trainerId) {
          await appointmentModel.findByIdAndUpdate(appointmentId, { isCompleted: true })
          return res.json({ success: true, message: 'Appointment Completed' })
      }

      res.json({ success: false, message: 'Appointment Cancelled' })

  } catch (error) {
      console.log(error)
      res.json({ success: false, message: error.message })
  }

}

// API to get all trainers list for Frontend
const trainerList = async (req, res) => {
  try {

      const trainers = await trainerModel.find({}).select(['-password', '-email'])
      res.json({ success: true, trainers })

  } catch (error) {
      console.log(error)
      res.json({ success: false, message: error.message })
  }

}

// API to change trainer availablity for Admin and trainer Panel
const changeAvailablity = async (req, res) => {
  try {

      const { trainerId } = req.body

      const trainerData = await trainerModel.findById(trainerId)
      await trainerModel.findByIdAndUpdate(trainerId, { available: !trainerData.available })
      res.json({ success: true, message: 'Availablity Changed' })

  } catch (error) {
      console.log(error)
      res.json({ success: false, message: error.message })
  }
}

// API to get trainer profile for  trainer Panel
const trainerProfile = async (req, res) => {
  try {

      const { trainerId } = req.body
      const profileData = await trainerModel.findById(trainerId).select('-password')

      res.json({ success: true, profileData })

  } catch (error) {
      console.log(error)
      res.json({ success: false, message: error.message })
  }
}

// API to update trainer profile data from  trainer Panel
const updateTrainerProfile = async (req, res) => {
  try {

      const { trainerId, fees, address, available } = req.body

      await trainerModel.findByIdAndUpdate(trainerId, { fees, address, available })

      res.json({ success: true, message: 'Profile Updated' })

  } catch (error) {
      console.log(error)
      res.json({ success: false, message: error.message })
  }
}

// API to get dashboard data for trainer panel
const trainerDashboard = async (req, res) => {
  try {

      const { trainerId } = req.body

      const appointments = await appointmentModel.find({ trainerId })

      let earnings = 0

      appointments.map((item) => {
          if (item.isCompleted || item.payment) {
              earnings += item.amount
          }
      })

      let patients = []

      appointments.map((item) => {
          if (!patients.includes(item.userId)) {
              patients.push(item.userId)
          }
      })



      const dashData = {
          earnings,
          appointments: appointments.length,
          patients: patients.length,
          latestAppointments: appointments.reverse()
      }

      res.json({ success: true, dashData })

  } catch (error) {
      console.log(error)
      res.json({ success: false, message: error.message })
  }
}

export {
  loginTrainer,
  appointmentsTrainer,
  appointmentCancle,
  trainerList,
  changeAvailablity,
  appointmentComplete,
  trainerDashboard,
  trainerProfile,
  updateTrainerProfile
}