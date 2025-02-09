import { useContext } from 'react'
import { assets } from '../assets/assets'
import { TrainerContext } from '../context/TrainerContext'
import { AdminContext } from '../context/AdminContext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const { dToken, setDToken } = useContext(TrainerContext)
  const { aToken, setAToken } = useContext(AdminContext)

  const navigate = useNavigate()

  const logout = () => {
    navigate('/')
    dToken && setDToken('')
    dToken && localStorage.removeItem('dToken')
    aToken && setAToken('')
    aToken && localStorage.removeItem('aToken')
  }

  return (
    <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white'>
      <div className='flex items-center gap-2 text-xs'>
        <p className="flex items-center cursor-pointer font-black text-xl text-[#f97000]" onClick={() => navigate("/")}>
                  <img
                    onClick={() => navigate("/")}
                    className="w-16 cursor-pointer"
                    src={assets.logo}
                    alt=""
                  />
                TrainWise
              </p>
        <p className='border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600'>{aToken ? 'Admin' : 'Trainer'}</p>
      </div>
      <button onClick={() => logout()} className='bg-primary text-white text-sm px-10 py-2 rounded-full'>Logout</button>
    </div>
  )
}

export default Navbar;