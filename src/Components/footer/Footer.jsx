import React from 'react'

function Footer(){
  return (
    < >
      <footer className="py-4 flex justify-between text-gray-600 text-sm bg-gray-100">
        <p className='mt-2 ml-10'>&copy; 2024 virtual Herbal Garden</p>
        <div className="flex mt-2 mr-10">
          <a href="#" className="mr-4">
            About
          </a>
          <a href="#" className="mr-4">
            Contact
          </a>
          <a href="#">Privacy Policy</a>
        </div>
      </footer>
    </>
  )
}

export default Footer
