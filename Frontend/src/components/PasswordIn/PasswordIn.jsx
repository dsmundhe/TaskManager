import React, { useState } from 'react'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
const PasswordIn = ({ value, onChange, placeholder }) => {
  const [isShowPassword, setsshowpassword] = useState(true);
  const toggleHandle = () => {
    setsshowpassword(!isShowPassword);
  }
  return (
    <div className="flex items-center w-full border rounded px-4  py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
      <input type={isShowPassword ? 'password' : 'text'}
        value={value}
        onChange={onChange}
        placeholder={placeholder || 'Password'}
        className='bg-transparent w-full focus:outline-none'
      />
      {!isShowPassword ? <FaRegEye
        size={18}
        className='hover:text-blue-600 cursor-pointer' onClick={toggleHandle} /> :
        <FaRegEyeSlash
          size={18}
          className='hover:text-blue-600 cursor-pointer' onClick={toggleHandle} />}
    </div>
  )
}

export default PasswordIn
