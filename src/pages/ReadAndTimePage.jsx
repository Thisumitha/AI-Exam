import React from 'react'
import Timer from '../components/Timer/Timer'
import HomeRead from '../Home/HomeRead'

export default function ReadAndTimePage() {
  return (
    <div>
      
      <div className="flex flex-col md:flex-row mt-20">
      <div className="w-full md:w-3/4 p-4">
       <HomeRead/>
      </div>
      <div className="w-full md:w-1/4 p-4">
        <Timer/>
      </div>
    </div>

    </div>
  )
}

