import React from 'react'

const App = () => {
  return (
    <div>
      <div className=' flex justify-center items-center my-5'>

     <h1 className='font-bold capitalize text-center border-b-4 border-blue-500 w-1/3'>tailwind css responsive card</h1>
      </div>
      {/* --------cards--------------- */}
      <div className='grid md:grid-cols-3 gap-5 mx-14 my-10'>

      <div className="flex flex-col bg-green-500 rounded-lg shadow-md p-6 w-[350px]">
      <h2 className="text-xl font-bold mb-4">product-1</h2>
      <img className='rounded-md' src="https://images.pexels.com/photos/381228/pexels-photo-381228.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      <p className="flex-grow">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quaerat et, sit voluptatem, consectetur quo repudiandae repellendus rerum ipsam pariatur nesciunt, blanditiis praesentium. Laborum, impedit ad. Quae ad dolore totam.</p>

      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
        Read More
      </button>

      </div>
      <div className="flex flex-col bg-green-500 rounded-lg shadow-md p-6 w-[350px]">
      <h2 className="text-xl font-bold mb-4">product-2</h2>
      <img src="https://images.pexels.com/photos/381228/pexels-photo-381228.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      <p className="flex-grow">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam illo quia sint doloribus eveniet, cumque molestiae adipisci ad est a?</p>

      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
        Read More
      </button>

      </div>
      <div className="flex flex-col bg-green-500 rounded-lg shadow-md p-6 w-[350px]">
      <h2 className="text-xl font-bold mb-4">product-3</h2>
      <img src="https://images.pexels.com/photos/381228/pexels-photo-381228.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      <p className="flex-grow">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam cumque, modi voluptatem nulla reprehenderit dignissimos! Repellat labore error nesciunt fugit.</p>

      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
        Read More
      </button>

      </div>
      </div>
    </div>
  )
}

export default App


