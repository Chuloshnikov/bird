import Image from 'next/image';

const EcommerceSection = () => {
  return (
    <section className='flex p-10 flex-col md:flex-row md:justify-evenly'>
        <div className='flex-col md:flex-row gap-6 md:px-10 flex'>
          <div className='md:w-2/3 w-full'>
            <video className='rounded-xl' autoPlay muted loop>
              <source src="/content/video-3.mp4" type="video/mp4"/>
            </video>
          </div>
          <div className='flex-col border p-4 rounded-xl md:w-2/5'>
              <h3 className='text-4xl flex justify-center text-center md:text-6xl bg-gradient-to-l from-yellow-300 to-blue-300 bg-clip-text font-bold text-transparent'>
                     Fully Customizable eCommerce
              </h3>
              <div className='md:px-20 space-y-6 flex-col items-center justify-center'>
                  <div className='text-lg pt-10 flex gap-4'>
                      <Image
                      src="/assets/icon-store.png"
                      width={70}
                      height={70}
                      alt="store icon"
                      className='object-contain h-20 w-20 items-center justify-center flex'
                      />
                      <p>
                        Choose from a veriety of store templates to get started. And customize your store to fit your brand
                      </p>
                  </div>

                  <div className='flex flex-col'>
                    <div className='text-lg flex items-center gap-5'>
                      <Image
                      src="/assets/icon-product.png"
                      width={70}
                      height={70}
                      alt="product icon"
                      className='object-contain h-20 w-20 items-center justify-center flex'
                      />
                      <p>
                        Add unlimited products and variations. And manage your inventory with ease.
                      </p>
                    </div>
                  </div>

                  
                  <div className="flex-col">
                        <div className="text-lg flex items-center gap-5" >
                            <Image
                            src="/assets/icon-analytics.png"
                            width={70} 
                            height={70}
                            alt="analytics icon"
                            className='object-contain h-20 w-20 items-center justify-center flex'
                            />
                            <div>
                            Gain valuable insights into your customers and products with
                            our analytics tools.

                            </div>
                    </div>
                  </div>
                  <div className="flex-col">
                        <div className="text-lg flex items-center gap-5" >
                            <Image
                            src="/assets/icon-shield.png"
                            width={70} 
                            height={70}
                             alt="shield icon"
                            className='object-contain h-20 w-20 items-center justify-center flex'
                            />
                            <div>
                            Best in class security to protect your data and your customers.

                            </div>
                      </div>
                      </div>
                </div>
          </div>
        </div>
    </section>
  )
}

export default EcommerceSection;