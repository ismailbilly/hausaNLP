"use client"
import { Nanum_Gothic } from 'next/font/google'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
const approval = () => {
    const router = useRouter();
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)
 
  useEffect(() => {
    fetch('/api/application')
      .then((res) => res.json())
      .then((data) => {
        
        setData(data)
        
        setLoading(false)
      })
  }, [])
 
  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>
   const deleteData = (index) => {
       const deletItem = data.data.find((item) => { return item.id === index })
    console.log(deletItem);
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: deletItem.id })
    };
    fetch('/api/application', requestOptions)
        .then(response => response.json())
        .then(data => setData(data));
     console.log('data deleted');
      router.push('/catalogue')
        };
    function addData(index) {
      const findItem = data.data.find((item) => { return item.id === index })
       
     const info = {
    id: Math.random().toString(36).substring(2),
    date:findItem.date,
    email:findItem.email,
    name:findItem.name,
    url:findItem.url,
    huggingface: findItem.huggingFaceUrl
  }
   
    fetch('https://sheetdb.io/api/v1/20by739fmwvty ', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
      body: JSON.stringify(info)
    })
    
  .then((response) => response.json())
      .then((data) => {
        alert('Request submitted')
       console.log(data);
        if (data.created === 1) {
          deleteData(index)
        }
       
         //router.push('/catalogue')
        //navigate('/catalogue')
      } )
  .catch((err) => { alert(err) })
    
  }
     

  return (
      <div>
          <table className="w-full border-collapse border border-gray-300">
              <thead>
                      <tr className="bg-gray-100">
                      <th className="px-4 py-2">SN</th>
                      <th className="px-4 py-2">Date</th>
                          <th className="px-4 py-2">Name</th>
                          <th className="px-4 py-2">Email</th>
                          <th className="px-4 py-2">DataUrl</th>
                      <th className="px-4 py-2">HuggingfaceUrl</th>
                      <th className="px-4 py-2">Status</th>

              </tr>
              </thead>
                       <tbody>  
               {data.data.map((item, index) => {
                   
                 return(       
                    <tr key={item.id}  className={index%2 == 0 ?' bg-white py-16' : "bg-gray-100" } >
                  <td className=" text-center py-8  text-red">{index + 1}</td>
                  <td className=" text-center py-8">{item.date}</td>
                  <td className=" text-center">{item.name}</td>
                  <td className=" text-center">{item.email}</td>
                  <td className=" text-center">{item.url}</td>
                  <td className=" text-center">{item.huggingface}</td>
                    <td className=" text-center">
                                    <button className='px-4 py-1 bg-green-600 rounded-md text-white mr-2' onClick={() => addData(item.id)}>Accept</button>
                                    <button className='px-4 py-1 bg-red-500 rounded-md text-white' onClick={() => deleteData (item.id)}>Decline</button>
                    </td>
              </tr>
              
                 )
       
      })} 
                
         </tbody>         
                  </table>
        </div>
  )
}

export default approval
