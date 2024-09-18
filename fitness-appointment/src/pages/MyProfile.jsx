import React from 'react'

const MyProfile = () => {
  return (
    <div className="max-w-lg flex flex-col gap-2 text-sm ">
      <LazyLoad>
      <img className="w-36 rounded" src={userData.image} alt="" />
      </LazyLoad>
      
        <input
          type="text"
          value={userData.name}
          className="bg-gray-50 text-3xl font-medium max-w-60 mt-4"
          
        />
      
        <p className="font-medium text-3xl text-neutral-800 mt-4">{userData.name}</p>
      

      <hr className="bg-zinc-400 h-[1px] border-none " />
      <div>
        <p className="text-neutral-500 underline mt-3">CONTACT INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Email id:</p>
          <p className="text-blue-500">{userData.email}</p>
          <p className="font-medium">Phone:</p>
         
            <input
              type="text"
              value={userData.phone}
              className="bg-gray-100 max-w-52 "
              
            />
        
            <p className="text-blue-400">{userData.phone}</p>
          
          <p className="font-medium">Address:</p>
          {isEdit ? (
            <p>
              <input
              className="bg-gray-50"
                
                value={userData.address.line1}
                type="text"
              />
              <br />
              <input
              className="bg-gray-50"
                
                value={}
                type="text"
              />
            </p>
          ) : (
            <p className="text-gray-500">
              
            </p>
          )}
        </div>
      </div>
      <div>
        <p className="text-neutral-500 underline mt-3">BASIC INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Gender:</p>
          
            <select
            className="max-w-20 bg-gray-100"
              
              value={userData.gender}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          
            <p className="text-gray-400">{userData.gender}</p>
          
          <p className="font-medium">Birthday:</p>
          
            <input
            className="max-w-20 bg-gray-100"
              type="date"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, dob: e.target.value }))
              }
              value={}
            />
          
            <p className="text-gray-400">{}</p>
         
        </div>
      </div>

      <div className="mt-10">
        
          <button className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-[#f97000] transition-all" onClick={() => setIsEdit(false)}>Save Information</button>
        
          <button className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-[#f97000] transition-all" onClick={() => setIsEdit(true)}>Edit</button>
        
      </div>
    </div>
  )
}

export default MyProfile;