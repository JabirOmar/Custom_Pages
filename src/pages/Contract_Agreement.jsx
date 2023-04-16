import React from 'react'

const Contract_Agreement = () => {
  return (
    <section className=' w-[600px] h-fit border p-[30px] border-gray-300 flex flex-col gap-4'>
       <div className=' flex flex-col gap-4 '>
            <h1 className=' text-center font-semibold text-xl'>Contract Agreement Between</h1>
            <h1 className=' text-center font-semibold text-xl'>SRS Bureau of ROAD </h1>
            <h1 className=' text-center font-semibold text-xl'>And</h1>
            <h1 className=' text-center font-semibold text-xl'>Tusaale Advanced Auto cooperative</h1>
            <h1 className=' text-center font-semibold text-xl'>FOR</h1>
            <p className=' text-center bg-slate-400 mb-[30px]'>Bajaj & motor Cycle Maintenance 2581,1288,1289 SM</p>
       </div>

      <p className=' text-end font-semibold'> Maskaram, 2015 Jigjiga</p>

      <h1 className=' font-semibold'> INTRODUCTION</h1>

      <p>This agreement is entered on 12/01/2015E.C at Jigjiga by  SRS Bureau of Road (hereafter in this agreement referred as the Client) and Tusaale Advanced Auto Service Cooperative (hereafter in this agreement referred as the supplier). The ultimate objective of this agreement is to pave ahead for the financial requirement as per the National Public Procurement Agency regulation in order to procurement Vehicle Maintenance.</p>

      <h2 className=' font-semibold ml-[50px] '>1. Scope of the works</h2>

      <p>The Supplier shall procure and deliver the below stipulated spare parts items in  SRS Road Bureau compound within the agreed timeline mentioned Article 4 of this agreement.</p>

      <h2 className=' font-semibold ml-[50px] '>2. Agreement consideration</h2>

      <p>The Bureau shall pay to the Supplier for the fulfilling of this agreement subject to legal Government taxes deduction ETB 23,212.14  (twenty three thousand two hundred twelve birr and fourteen cents  only) Tusaale Advanced Auto Service Cooperative shall provide the Advanced Auto Service Cooperative from 12/01/2015E.C; any price variation over and/or lower should be notified by the supplier to the bureau in written. Similarly, this agreement is not limited only items listed above but also based on the need of the bureau the supplier is responsible to the office cars maintenance.</p>

      <h2 className=' font-semibold ml-[50px] '>3. Payment modalities</h2>

      <p>Up on the   submission of the copy items in the store and issuance of the model 19 the Bureau will pay the total amount stipulated in the model 19.</p>

      <h3 className=' font-semibold ml-[50px] '>4. Inspection and Rejection</h3>

      <p> The Bureau has the right to reject some parts and/or all terms of this agreement provided that it either commits quality defect or mismatches the agreed terms.</p>

      <h3 className=' font-semibold ml-[50px] '>5. Documents Included in This Contract</h3>

      <ul>
        <li>I. This Form of Agreement</li>
        <li>II. Price quoted Performa</li>
      </ul>

      <h3 className=' font-semibold ml-[50px] '>6. Applicable law</h3>

      <p>The contract shall be governed by and construed according to the laws of Federal Democratic Republic of Ethiopia in General and in particular to the Ethiopian Public Procurement Agency document. This agreement shall remain valid until Compilation of Material</p>


      <div className=''>
        <h1 className=' text-center font-semibold my-9'>Signatures</h1>

        <div className=' flex justify-around'>
            <div>
                <p className=' text-center font-semibold'>Client</p>
                <div className=' flex gap-2'>
                    <label>Name:</label>
                    <p>__________________</p>
                </div><br/>
                <div className=' flex gap-2'>
                    <label>Date:</label>
                    <p>___________________</p>
                </div><br/>
                <div className=' flex gap-2'>
                    <label>Signature:</label>
                    <p>_______________</p>
                </div>
            </div>

            <div>
                <p className=' text-center font-semibold'>Supplier</p>
                <div className=' flex gap-2'>
                    <label>Name:</label>
                    <p>__________________</p>
                </div><br/>
                <div className=' flex gap-2'>
                    <label>Date:</label>
                    <p>___________________</p>
                </div><br/>
                <div className=' flex gap-2'>
                    <label>Signature:</label>
                    <p>_______________</p>
                </div>
            </div>
        </div>
      </div>

    </section>
  )
}

export default Contract_Agreement
