import React from 'react'
import Header from '../components/Header'
import Video from '../components/Video'
import "./home.css"
function Home() {
  return (
    <>
   <Header/>
   <Video/>
   <section>

 
   <div className='card-container'>
    <div className='card'>
      <h2>The Steel Works Series</h2>
      <p>Purpose-led smarter steel thinking, insight and podcasts for people and <br/>
      planet. The Steel Works series captures the latest thought-provoking and <br/>
      behind the scenes content from the people behind our business.
      </p>

      <a href="">Read, Watch, Listen Here</a>
      </div>
      
    <div className='card'>
    <h2>Smarter steels for people and planet</h2>
      <p>Our commitment to making steel integral to a sustainable, low-carbon <br/>
       economy
      </p>

      <a href="">Read more</a>
      </div>

    <div className='card'>
    <h2>ArcelorMittal Multi Part Integration® </h2>
      <p>In a rapidly evolving automotive industry, flexibility wins. ArcelorMittal Multi <br/>
      Part Integration® maximises automotive manufacturers’ ability to adapt <br/>
      through the power of less: less parts, less process, less floor space, less time,<br/>
      less materials, less CO₂ and less assembly cost. Harness the strength of steel <br/>
       and the power of less. 
      </p>

      <a href="">Read more</a>
      </div>

   </div>
   </section>

   <section>

   <div className='info-container'>
      <div className="info-img">
      <img src="/dummy2.jpg" alt="" />
      </div>
      <div className="info-desc">
      <h2>ArcelorMittal reports fourth quarter and full year 2024 results</h2>
      <p>February 6, 2025</p>
      <button class="button-57" role="button"><span class="text">Button 57</span><span>Alternate text</span></button>
  
      <p>Related Links</p>
      <a href="">Access the analyst conference call</a>
      </div>
   </div>
   </section>
    </>
  )
}

export default Home
