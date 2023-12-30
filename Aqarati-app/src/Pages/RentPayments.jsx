import React from 'react'
import { Link } from 'react-router-dom'
import Aqar from '../.../../assets/aqar.png'
export default function RentPayments() {
  return (
<>



<div >
     <div className="drawer lg:drawer-open">
            
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  
  <div className="drawer-content items-center justify-center DashboredBG ">
    {/* content here */}

    <div className='flex w-full h-18  items-center justify-center '>
    <div className='bg-white outline outline-[#BBA98D] flex justify-between items-center m-10 rounded-md w-full p-4'>
        
        <div className='flex flex-col' >
            <h1 className='text-[2rem] font-bold  '>شقق المتكاملة</h1>
            <h1>الرياض ، حي الوادي</h1>
        </div>
        <div >
            <img width={150} src={Aqar} alt="" srcset="" />
        </div>

    </div>


    </div>

    <div className='flex w-full h-18  items-center justify-center '>
    <div className='bg-white outline outline-[#BBA98D] flex justify-between items-center m-10 rounded-md w-full p-4'>
        
        <div className='flex flex-col' >
            <h1 className='text-[2rem] font-bold  '>شقة رقم 1 </h1>
            <h1>اسم المستأجر : محمد الشمري</h1>
        </div>
        <div >
            <img width={150} src={Aqar} alt="" srcset="" />
        </div>

    </div>


    </div>
    
    <div className='bg-white outline outline-[#BBA98D] flex flex-col justify-between items-center m-10 rounded-md p-4'>
  <h1 className='text-lg bg-'>سجل الدفعات</h1>
  <div className='flex gap-20'>
    <h1 >القيمة الَّسنوية للإيجار: 30000 ريال</h1>
    <h1 >دورة سداد الايجار: نصف سنوي</h1>
  </div>

    <div dir='rtl' className="overflow-x-auto w-full">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
       
        <th>رقم الدفعة</th>
        <th>تاريخ الدفعة</th>
        <th>اجمالي القيمة</th>
        <th>المدفوع</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th> 
        <td>15000 ريال</td>
        <td>1-6-2023</td>
        <td>تم الدفع</td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>2</th>
        <td>15000 ريال</td>
        <td>1-12-2023</td>
        <td>لم يتم الدفع</td>
      </tr>
      {/* row 3 */}
      
    </tbody>
  </table>
</div>
</div>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    
    <ul className="menu  w-80 min-h-full bg-white text-base-content text-[1.3rem] justify-between">
    
      {/* Sidebar content here */}
        <div>
        <h1>Logo</h1>
      <li className='flex pt-10 '>


        <a>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
        </svg>
            عقاراتي
        </a>
      

        </li>
      <li><a>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
</svg>

        التقارير
        </a></li>

        <li><a>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
</svg>


        الصيانة
        </a></li>


        <li><a>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m6.75 12H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
</svg>


        عرض الطلبات
        </a></li>
        

        <li><a>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>


        الملف الشخصي 
        </a></li>
        </div>

        <div className='flex flex-col gap-4'>
    <button className=' w-72 h-12 rounded-md  bg-[#ffff] outline outline-[#BBA98D] text-black '>
الدعم الفني
    </button>

<Link to='/'>
<button className='bg-[#BE6363] w-72 h-12 rounded-md text-white'>
    تسجيل الخروج
</button>
</Link>


</div>
     
    </ul>
    
  
  </div>
</div>
        </div>


</>
    )
}