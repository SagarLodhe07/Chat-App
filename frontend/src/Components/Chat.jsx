import React from 'react'

const Chat = () => {
  return (
    <>
    <div className=' flex hover:bg-sky-300 items-center gap-2 rounded p-2 py-1 cursor-pointer'>
        <div className='avatar online'>
            <div className='w-12 rounded-full'>
                <img src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxLzI3OS1wYWkxNTc5LW5hbS1qb2IxNTI5LnBuZw.png" alt="Avatar" />
            </div>
        </div>

    <div className='flex flex-1 flex-col'>
        <div className='flex justify-between gap-3'>
            <p className='font-semibold text-md'>Jon Doe</p>
            <span>😂</span>
        </div>
    </div>

    </div>
    </>
  )
}

export default Chat