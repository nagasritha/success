import { Component } from 'react'
import Navbar from '../Navbar'
import './index.css'

class Home extends Component{
render(){
    return (
   <div>
    <div id='section1'>
    <div className='blue-container'>
    <div className='first'>
        <h1 className='first-title'>WEBSITE GRAPHICS MARKETING APPLICATION</h1>
        <p className='first-para'>Digital IT Sollutions for Transforming and innovating Businesses.</p>
        <button type='button' className='first-but'>View Portfolio <span>&gt;</span></button>
    </div>
    </div>
    </div>
    <div id='section2'>
    <div className='flex'>
            <div className='first'>
               <h1 className='part2-heading'>Why to take your business Online?</h1>
               <p className='part2-para'>The Internet may be a deep-sea expecting to be explored. 
                You can get all you want if you dive in. If you're taking your business online,
                 it has certain benefits. It improves your brand image, your business is often available to consumers 24/7,
                  the start-up cost is extremely less, it reduces operation cost, you'll work from anywhere around the world,
                   but most significantly, the web was made for Business.</p>
                   <p className='part-2-bolder'>In todays market, is it required-</p>
                   <ul className='align-left'>
                    <li className='type'>To beat the Competition.</li>
                    <li className='type'>To Gain Leverage in the Market.</li>
                    <li className='type'>To get exposure and expansion.</li>
                   </ul>
                   <button type='button' className='first-but'>Request A Quote <span>&gt;</span></button>
            </div>
            <div className='align'>
               <img src='https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690305573/part-2_ourncr.png' alt='part2' className='right-align'/>
            </div>
      </div>
    </div>
    <Navbar/>
   </div>
 )
}
}

export default Home    