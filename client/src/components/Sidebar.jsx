import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { sun } from '../assets';
import { navlinks } from '../constants';

const Icon = ({ name, isActive, disabled, handleClick }) => (
  <div className={`w-[95px] h-[48px] rounded-[10px] bg-[#25384a] flex justify-center items-center cursor-pointer font-bold text-white ${isActive && isActive === name ? 'bg-[#2c2f32]' : ''}`} onClick={handleClick}>
    {name}
  </div>
);

const Sidebar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard');

  return (
    <div className="flex justify-between items-center flex-col sticky top-5 h-[9vh]">
      

      <div className="flex-1 flex flex-col justify-between items-center bg-[#030303] rounded-[20px] w-[110px] py-4 mt-12">
        <div className=" font-epilogue flex flex-col justify-center items-center gap-3">
          {navlinks.map((link) => (
            <Icon 
              key={link.name}
              name={link.name}
              isActive={isActive}
              disabled={link.disabled}
              handleClick={() => {
                if(!link.disabled) {
                  setIsActive(link.name);
                  navigate(link.link);
                }
              }}
            />
          ))}
        </div>

        {/* Display sun icon */}
        
      </div>
    </div>
  )
}

export default Sidebar;
