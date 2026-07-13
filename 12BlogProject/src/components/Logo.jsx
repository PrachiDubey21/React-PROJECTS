import React from 'react'

function Logo({ width = '100px' }) {
  return (
    <div style={{ width }} className="flex items-center">
      <img
        src="https://i.pinimg.com/1200x/fd/63/86/fd6386bd036e7f956d7d8711c8e5f456.jpg"
        alt="Logo"
        className="h-10 w-10 object-cover rounded-full "
      />
    </div>
  )
}

export default Logo