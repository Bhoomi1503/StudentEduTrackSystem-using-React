import './Home.css';
import React, { useState } from 'react'
import { FaUserAlt } from "react-icons/fa";
import { SlNotebook } from "react-icons/sl";
import { FaPerson } from "react-icons/fa6";
import { FaBookReader } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFileBarGraphFill } from "react-icons/bs";
import { CiHospital1 } from "react-icons/ci";
import { FaUserTie } from "react-icons/fa";
import { HiMiniUserGroup } from "react-icons/hi2";

function Home() {
  const[value1,setValue1]=useState(10);
  const[value2,setValue2]=useState(15);
  const[value3,setValue3]=useState(23);
  const increasevalue1 = () => {
    setValue1(value1=>value1 + 1);
  };
  const increasevalue2 =() =>{
    setValue2(value2=>value2 + 1);
  }
  const increasevalue3 =() =>{
    setValue3(value3=>value3 + 1);
  }


  return (
    <div className='home'>
    <div className="top">
      <h1>STUDENT MANAGEMENT</h1>
    </div>
    <div className="section">
      <div className="cont1">
        <div><FaUserAlt className='icon'/></div>
        <div onClick={increasevalue1}>
        <h2>{value1}</h2>
        <p>Regular Student</p>
        </div>
      </div>
      <div className="cont2">
        <div><FaUserTie className='icon'/></div>
        <div onClick={increasevalue2}>
        <h2>{value2}</h2>
        <p>Medical Student</p>
        </div>
      </div>
      <div className="cont3">
        <div><HiMiniUserGroup className='icon'/></div>
        <div onClick={increasevalue3}>
        <h2>{value3}</h2>
        <p>Gov Quota Student</p>
        </div>
      </div>
    </div>
      <div className='center'>
        <h1 className='menu'>Menu</h1>
        <div>
          <div className='row01'>
              <div className='col01'>
                <FaUserAlt className='icon01'/>
                <h3>Regular Enrollment</h3>
              </div>
              <div className='col01'>
                <SlNotebook className='icon01'/>
                <h3>Remedical Enrollment</h3>
              </div>
              <div className='col01'>
                <FaPerson className='icon01'/>
                <h3>Regular Enrollment</h3>
              </div>
          </div>
          <div className='row02'>
            <div className='col02'>
              <FaBookReader className='icon01'/>
              <h3>Club Management</h3>
            </div>
            <div className='col02'>
              <MdEmail className='icon01'/>
              <h3>Classroom Management</h3>
            </div>
            <div className='col02'>
              <BsFileBarGraphFill className='icon01'/>
              <h3>SMS/EMAIL</h3>
            </div>
          </div>
          <div>
            <CiHospital1 className='icon01'/>
            <h3>Attendence</h3>
          </div>
        </div>
      </div>
  </div>

  );
}

export default Home
