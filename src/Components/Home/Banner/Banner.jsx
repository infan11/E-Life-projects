import image from '../../../assets/banner/iamge2.jpg'
import '../Banner/banner.css'
const Banner = () => {
    return (
        <div>
            <div className="hero  " style={{backgroundImage: 'url(https://i.ibb.co/54xXztD/Simple-Shiny.jpg)'}}>

            <div className='  md:px-5 mr-28 lg:px-28  grid md:grid-cols-2 '>
              <div className='mt-36'>
                   <h2 className='md:text-2xl lg:text-5xl font-bold  text-white font-mono'>WELCOME TO  SMILE SHOP</h2>
                   <div className=' mt-2   '>
                    <h2  className='md:text-2xl lg:text-5xl  font-mono font-bold text-yellow-300'>RAMADAN OFFER </h2>
                    
                    <p className='md:text-2xl lg:text-5xl font-extrabold italic text-green-500' >30% OFF</p>
                    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
  <div className="flex flex-col">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":15}}></span>
    </span>
    days
  </div> 
  <div className="flex flex-col">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":10}}></span>
    </span>
    hours
  </div> 
  <div className="flex flex-col">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":24}}></span>
    </span>
    min
  </div> 
  <div className="flex flex-col">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":50}}></span>
    </span>
    sec
  </div>
</div>
                   </div>
                   <button className='mt-3 mb-6 btn-outline btn text-yellow-400 font-bold md:w-32 lg:w-60'>SHOP NOW</button>
              </div>
              <div>
                <img  className='shop md:block hidden'  src={image} alt="" />
              </div>
            </div>
</div>
        <div className='-top-10 relative'>
        <div className='bg-white md:w-64 lg:w-[1000px]  p-10 top-12   mx-auto rounded-xl'>
          <div className=''>
          AVAIABLE PRODUCT
          <br />

          <marquee><p>tt</p>
          TO DO : IMAGE AND PRODUCT NAME
          </marquee>
          </div>
          </div>
        </div>

        </div>
    );
};

export default Banner;