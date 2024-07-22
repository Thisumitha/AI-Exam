import React from 'react'

export default function Read(props) {

  return (
    <div>

      <div className=" w-21 p-10 border rounded-lg shadow-sm">
        <h1 className="text-xl font-bold mb-10 text-left text-4xl ">{props.qNumber}</h1>

        <div className="mb-16 flex items-center">
          <h2 className="text-lg font-semibold mb-1 text-left text-3xl mr-4">Passage</h2>
          <input
            type="text"
            className="w-full p-2 bg-gray-200 border-b-2 border-black"
            value={props.passage}
            disabled
          />
        </div>

        <div className="mb-16">
          <h2 className="text-lg font-semibold mb-1 text-left text-3xl">Question</h2>
          <input
            type="text"
            className="w-full p-2 border rounded bg-gray-200"
            value={props.question}
            disabled
          />
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-1 text-left text-3xl">Your Answer here</h2>
          <textarea
            placeholder="Enter your answer"
            className="w-full p-2 border rounded bg-gray-200 h-20"
          >{props.answer}</textarea>
        </div>

        <div className="flex justify-center space-x-4">
          <button className="bg-[#55AD9B] text-white py-2 px-4 rounded font-medium text-xl w-36 h-12">Done</button>
          <button className="bg-[#E26188] text-white py-2 px-4 rounded font-medium text-xl w-36 h-12">Later</button>
        </div>
      </div>

    </div>
  )
}


