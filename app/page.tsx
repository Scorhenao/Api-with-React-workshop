import { log } from 'console'
import { NextPage } from 'next'
import React from 'react'

const getData =  async():Promise<Response>=>{
  const res = await fetch("")
  console.log(res);
  return res
}

const page:NextPage = () =>{
  const data = getData()
  return(
    <div>
      <h1 className="text-3xl">Page 2</h1>
      </div>
  )
}

export default page