import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex items-center justify-between pl-10 pr-10 h-[100px] w-full text-blue-600
     text-2xl font-bold bg-white rounded-xl border-[5px] border-red-500' >
      

       
      <div>
        <NavLink to={"/"}>
            <div>
              <button 
              class="animate-bounce duration-300 ... text-"  >
                 Dashboard
              </button>
            </div>
          </NavLink>
       
      </div>

      <div>
      <NavLink to={"/addemployee"}>
            <div>
              <button  class="animate-bounce duration-300 ..."  >
                 Add New Students
              </button>
            </div>
          </NavLink>
      
      </div>

      <div>
      <NavLink to={"/addemployee"}>
            <div>
              <button className='inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500'>
                 Add New Subjects
              </button>
            </div>
          </NavLink>
         
      </div>

      <div>
      <NavLink to={"/addemployee"}>
            <div>
              <button className='inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500'>
                Detailed Report Card 
              </button>
            </div>
          </NavLink>
    
      </div>
    </div>
  )
}

export default Navbar
