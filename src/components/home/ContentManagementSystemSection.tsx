import React from 'react'

const ContentManagementSystemSection = () => {
  return (
    <section className='items-center flex justify-center md:py-10'>
        <div className='text-4xl text-center md:text-6xl bg-gradient-to-r from-blue-800 to-purple-300 bg-clip-text pb-10 font-bold'>
            Content Management System. Made Simple.
            <div className='justify-center items-center flex p-10'>
              <video className='rounded-xl md:w-2/3' autoPlay muted loop>
                  <source src="/content/video-4.mp4" type="video/mp4"/>
              </video>
            </div>
        </div>
    </section>
  )
}

export default ContentManagementSystemSection;