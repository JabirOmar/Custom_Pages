import React from 'react'
import { NavLink } from 'react-router-dom'

const Buttons = () => {
  return (
    <section className=' w-full h-screen flex flex-col justify-center items-center '>
      <ul className=' flex flex-col gap-2'>
        <NavLink to='/codsi_lacag' className={' border border-gray-300 p-2 rounded-md '}>
            Codsi Lacag
        </NavLink>

        <NavLink to='/contract_agreement' className={' border border-gray-300 p-2 rounded-md '}>
            Contract Agreement
        </NavLink>

        <NavLink to='/shidaalka' className={' border border-gray-300 p-2 rounded-md '}>
            Codsi Shidaal
        </NavLink>

        <NavLink to='/rental_contract' className={' border border-gray-300 p-2 rounded-md '}>
            Rental Contract
        </NavLink>

      </ul>
    </section>
  )
}

export default Buttons
