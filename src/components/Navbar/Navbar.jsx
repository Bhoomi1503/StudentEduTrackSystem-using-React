import React from 'react'
import './Navbar.css';
import { FaUserFriends } from "react-icons/fa";
import { BsWindowDesktop } from "react-icons/bs";
import { RiSettings6Fill } from "react-icons/ri";
import { TbReport } from "react-icons/tb";
import { FaFileAlt } from "react-icons/fa";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className='con'>
      <div className='logo'>
        <img src="./image.png" alt="Logo image" />
      </div>
      <div className='li1'>
        <FaUserFriends className='icon'/><br/>
        <span className='span'>Student Management</span>
      </div><br/>
      <div className='li2'>
        <BsWindowDesktop className='icon'/><br/>
        <span className='span'>Financial Management</span>
      </div><br/>
      <div className='li3'>
        <RiSettings6Fill className='icon'/><br/>
        <span className='span'>Quality Control</span>
      </div><br/>
      <div className='li3'>
        <TbReport className='icon'/><br/>
        <span className='span'>Report Delivery</span>
      </div><br/>
      <div className='li4'>
        <FaFileAlt className='icon'/><br/>
        <span className='span'>Attendance</span>
      </div><br/>
      <div className='row'>
        <div className='col'>
            <BsFillQuestionCircleFill className='i'/>
        </div>
        <div className='col'>
            <IoSettings className='i'/>
        </div>
        <div className='col'>
            <FiLogOut className='i'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar;