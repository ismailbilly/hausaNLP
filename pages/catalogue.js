import React, { useEffect, useState } from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { FilterMatchMode } from 'primereact/api'
import { InputText } from 'primereact/inputtext'
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";  
import Navigation from './components/Navigation'
import Link from 'next/link'
  
const catalogue = () => {
  const [data, setData] = useState('')
  const [filters, setFilters] = useState({
    global :{value:null, matchMode: FilterMatchMode.CONTAINS}
  })
  useEffect(() => {
    fetch('https://sheetdb.io/api/v1/20by739fmwvty')
      .then((respone) => respone.json())
      .then(res => {
        setData(res.reverse())
    })
  }, [])
  // const dataset = [{
  //   id: "s3jn2zudkdg",
  //   date: "2023-8-30",
  //   email: "musty@gmail.com",
  //   name: "musty",
  //   url: "musty",
  //   huggingface: "musty"
  // },
  // {
  //   "id": "i6c1hzksoh",
  //   "date": "2023-8-30",
  //   "email": "onboard@gmail.com",
  //   "name": "gert",
  //   "url": "teadr",
  //   "huggingface": "fdf"
  //   },
  //   {
  //   "id": "i6c1hzksoh",
  //   "date": "2023-8-30",
  //   "email": "onboard@gmail.com",
  //   "name": "gert",
  //   "url": "teadr",
  //   "huggingface": "fdf"
  //   },
  //     {
  //   "id": "i6c1hzksoh",
  //   "date": "2023-8-30",
  //   "email": "onboard@gmail.com",
  //   "name": "gert",
  //   "url": "teadr",
  //   "huggingface": "fdf"
  //   },
  //       {
  //   "id": "i6c1hzksoh",
  //   "date": "2023-8-30",
  //   "email": "onboard@gmail.com",
  //   "name": "gert",
  //   "url": "teadr",
  //   "huggingface": "fdf"
  //   },
  //         {
  //   "id": "i6c1hzksoh",
  //   "date": "2023-8-30",
  //   "email": "onboard@gmail.com",
  //   "name": "gert",
  //   "url": "teadr",
  //   "huggingface": "fdf"
  //   },
  //           {
  //   "id": "i6c1hzksoh",
  //   "date": "2023-8-30",
  //   "email": "onboard@gmail.com",
  //   "name": "gert",
  //   "url": "teadr",
  //   "huggingface": "fdf"
  // },
  // ]
  
  return (
    <div>
      {/* <Navigation/> */}
          <div className=''>
         <div className='bg-gradient-to-b from-teal-200 to-blue-600 text-white h-6'></div> 
        <div className='col-span-7 px-4 bg-[#F3F4F6'>
          <div className='flex justify-center items-center my-6 relative' >
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-[#0f0fe5] font-medium  text-4xl'>OUR COMPREHENSIVE DATASET</span>
            <Link href="/" className='absolute right-16 bg-gradient-to-r from-teal-500 to-[#0f0fe5] text-white px-4 py-2 rounded-lg'>Home</Link>
          </div>
          
          {/* <div className="pr-8 flex justify-end items-center py-6 bg-gray-100">
            
         </div> */}
          <span className="p-input-icon-left mb-5 ">
            <i className="pi pi-search" />
            <InputText
             
              placeholder="Search"
            onInput={(e) => {
              setFilters({
                 global :{value:e.target.value, matchMode: FilterMatchMode.CONTAINS}
              })
                
            }} />
   
          </span>
          <DataTable value={data} paginator rows={5} filters={filters} >
            <Column field='date' header='DATE' sortable />
            <Column field='name' header='NAME' />
            <Column field='url' header='DATASET LINK' />
            <Column field='huggingface' header='HUGGINGFACE-LINK' />
             
          </DataTable>
        </div>
      </div>
      <div className=' w-full bg-gradient-to-b from-teal-200 to-blue-600 text-white h-6 absolute bottom-0'></div> 
    </div>
  )
  
}

export default catalogue