import { useContext } from 'react'
import { TrainerContext } from './context/TrainerContext';
import { AdminContext } from './context/AdminContext';
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Admin/Dashboard';
import AllAppointments from './pages/Admin/AllApointments';
import AddTrainer from './pages/Admin/AddTrainer';
import TrainersList from './pages/Admin/TrainersList';
import Login from './pages/Login';
import TrainerAppointments from './pages/Trainer/TrainerAppointments';
import TrainerDashboard from './pages/Trainer/TrainerDashboard';
import TrainerProfile from './pages/Trainer/TrainerProfile';

const App = () => {

  const { dToken } = useContext(TrainerContext)
  const { aToken } = useContext(AdminContext)

  return dToken || aToken ? (
    <div className='bg-[#F8F9FD]'>
      <ToastContainer />
      <Navbar />
      <div className='flex items-start'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<></>} />
          <Route path='/admin-dashboard' element={<Dashboard />} />
          <Route path='/all-appointments' element={<AllAppointments />} />
          <Route path='/add-trainer' element={<AddTrainer />} />
          <Route path='/trainer-list' element={<TrainersList />} />
          <Route path='/trainer-dashboard' element={<TrainerDashboard />} />
          <Route path='/trainer-appointments' element={<TrainerAppointments />} />
          <Route path='/trainer-profile' element={<TrainerProfile />} />
        </Routes>
      </div>
    </div>
  ) : (
    <>
      <ToastContainer />
      <Login />
    </>
  )
}

export default App