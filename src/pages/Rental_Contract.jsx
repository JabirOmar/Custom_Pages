import React from 'react'

const Rental_Contract = () => {
  return (
    <div className='  w-[700px] h-fit p-[30px] flex flex-col border border-gray-300 '>
        <h3 className=' text-lg pb-5 font-semibold '>Equipment Rental Contract Agreement</h3>

        <p>This agreement is made and entered in to 17/07/2015 E.C by between _S R S Road Bureau___ Tel;+251257752429, address Jigjiga City hereinafter referred to as the LESSEE on one part, and HIRSI TRANSPORTATION COMPANY Tel:-_+2519603-81613 address jigjiga City  hereinafter referred to as the LESSOR on the other part.</p> <br/>
        <p className=' font-semibold' >1. THE IDENTITY OF MACHINE</p><br/>

        <p>The LESSOR has agreed to rent LESSEE in working Condition the machine shall be operated by employees of the LESSOR.</p><br></br>

        <p className=' font-semibold' >1. EQUIPMENT TYPE, CAPACITY AND  RENTAL RATE AS FOLLOWS:</p><br></br>

        <table>
            <thead>
                <tr className=' border border-l-black'>
                    <th className=' border border-black text-left pl-1'>Item</th>
                    <th className=' border border-black text-left pl-1'>Equipment Type& Capacity</th>
                    <th className=' border border-black text-left pl-1'>Qty</th>
                    <th className=' border border-black text-left pl-1'>Plate No</th>
                    <th className=' border border-black text-left pl-1'>Duration</th>
                    <th className=' border border-black text-left pl-1'>Daily rental rate in Birr</th>
                </tr>
            </thead>
            <tbody>
                <tr className=' border border-black'>
                    <td className=' border-r border-black pl-1'>1</td>
                    <td className=' border-r border-black pl-1'>Fuel Truck</td>
                    <td className=' border-r border-black pl-1'>1</td>
                    <td className=' border-r border-black pl-1'>S.M 03841</td>
                    <td className=' border-r border-black pl-1'>30</td>
                    <td className=' border-r border-black pl-1'>5000</td>
                </tr>
                <tr className=' border border-black'>
                    <td className=' border-r border-black pl-1'>2</td>
                    <td className=' border-r border-black pl-1'>Fuel Truck</td>
                    <td className=' border-r border-black pl-1'>1</td>
                    <td className=' border-r border-black pl-1'>S.M 03841</td>
                    <td className=' border-r border-black pl-1'>30</td>
                    <td className=' border-r border-black pl-1'>5000</td>
                </tr>
            </tbody>
        </table>
        <br></br>

        <p className=' font-semibold' >RENTAL PERIOD </p><br></br>

        <ul className=' flex flex-col gap-3 pl-10 list-decimal'>
            <li>The rental period shall begin  from the time the Equipment arrives at working site of the LESSEE and shall be valid for at least   (30 days ) and will be renewed for this project or other</li>
            <li>This period can be extended if the two parties have signed a replacement of this by transmitting such notice if intent to the other party 15(fifteen) days before the intended date of termination.</li>
            <li>Where on the duty of this contract the LESSOR remains in possession of the Equipment</li>
            <li>The LESSOR must transport the equipment to and from the LESSEEE site without any delay.</li>
            <li>The LESSOR will make ready submit the equipment with in 7 (seven ) days of the signing of contract</li>
        </ul><br></br>

        <p className=' font-semibold'>2. LOCATION OF WORK SITE</p><br></br>

        <p>For the purpose of this contract the LESSEE’S work site shall be at Somali regional state Erer - Casbuli  Road construction Project the LESSEE remains in possession of the Equipment outside the above specified work site without the authorization of the LESSOR  </p><br></br>

        <p className=' font-semibold '>3. EQUIPMENT WORKING HOURS </p><br></br>
        <div className=' flex'>
            <div>
                <h1>Lessee</h1>
                <label>Name</label>
                <p>Ibrahim Ismaaciil</p>
            </div>
        </div>

        <ul className=' flex flex-col gap-3 pl-10'>
            <li>3.1  if the machine works on public holidays the LESSEE shall pay the agreed rent However, where force Major public holidays, breakdown of the machine and absence or illness of the operator no payment shall be made in this case </li>
            <li>3.2  Idle time, if the machine becomes idle because of the LESSEE fault, the idle time will be effected.  Idle time is 50% (Percent) of the regular working days.</li>
        </ul><br></br>

        <p className=' font-semibold'>4. FUEL AND LUBRICANTS</p><br></br>

        <p>Fuel required for the equipment shall be supplied by the lessee at his own cost </p><br></br>

        <ul className=' flex flex-col gap-3'>
            <li>4.1 Lubricants required for the equipment shall be supplied by the LESSOR at his own cost</li>
        </ul><br></br>

        <p className=' font-semibold'>5. MODE OF PAYMENT</p><br></br>

        <p>Payment of 15 days shall be made in advance and remaining balance, The LESSOR'S request for payment is to be made to the LESSEE in writing, accompanied by a timesheet, jointly signed by the LESSOR’S representative and LESSEE’ S site representative describing the services performed, and upon fulfillment of other obligations stipulated in the contract</p>

        <p className=' font-semibold'>6. DISPUTES</p><br></br>

        <p>Should any dispute arise from this contract the parties shall try to settle them amicably However if the two parties fail to settle their disputes amicably it shall be settled by the Appropriate Ethiopian law & court.</p><br></br>

        <p className=' font-semibold'>7. EFFECTIVE DATES</p><br></br>

        <p>This contract shall come in to force as of the date signed by authorized representatives of the LESSOR and the LESSEE for a period indicated in 2(a) above and as of their respective the seal has been affixed.</p><br></br>

        <p className=' font-semibold text-sm'>I have read and understand the terms and conditions of this rental agreement</p>


        <div className=' flex justify-between mt-[50px]'>
            <div>
                <h1 className=' font-bold text-xl text-center pb-[20px]'>Lessee</h1>
                <div className=' flex gap-2 '>
                    <label className=' font-semibold'>Name:</label> <br/><br/>
                    <p>Ibrahim Ismaaciil</p>
                </div>
                <div className=' flex gap-2 '>
                    <label className=' font-semibold'>Signature:</label> <br/><br/>
                    <p>________________</p>
                </div>
            </div>

            <div>
                <h1 className=' font-bold text-xl text-center pb-[20px]'>Lessor</h1>
                <div className=' flex gap-2 '>
                    <label className=' font-semibold'>Name:</label> <br/><br/>
                    <p>Ibrahim Ismaaciil</p>
                </div>
                <div className=' flex gap-2 '>
                    <label className=' font-semibold'>Signature:</label> <br/><br/>
                    <p>________________</p>
                </div>
            </div>
        </div>

        <span className=' font-semibold'>Witness</span>

        <div className=' flex justify-between mt-[50px] '>
            <div>
                <h1 className=' font-bold text-xl text-center pb-[20px]'>Name</h1>
                <div className=' flex flex-col gap-4'>
                    <p>1. Khalid Yuusuf</p>
                    <p>2. Khalid Yuusuf</p>
                    <p>3. Khalid Yuusuf</p>
                </div>
            </div>

            <div>
                <h1 className=' font-bold text-xl text-center pb-[20px]'>Signature</h1>
                <div className=' flex flex-col gap-4'>
                    <span>________________</span>
                    <span>________________</span>
                    <span>________________</span>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Rental_Contract
