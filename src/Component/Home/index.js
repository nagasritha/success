import { Component } from 'react'
import Navbar from '../Navbar'
import './index.css'

const Cards=(props)=>{
    const {itemDetails}=props
    const {url,h1,li,p,classValue} = itemDetails
    return <div className={`card tilt-card ${classValue} display`}>
      <img src={url} alt={h1} className='display sizediff'/>
      <h1>{h1}</h1>
      <div className='onLine'>
        {li.map(item=>(
        <div className='onLine'>
          <p className='bold'>{item}</p>
          <hr className='bar'/>
        </div>))}
        </div>
      <p className='hide'>{p}</p>
    </div>

  }

const cardList=[
    {url:'https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690347293/step1_iujeon.png',
     h1:'Web Development',
     li:['PHP', 'HTML5' ,'REACT' ,'WORDPRESS'],
     p:'Creating and Maintaining a website to provide the best looking and efficiently working websites for a seamless user experience.',
     classValue:'card1 bgcolor1'
  },{url:'https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690350542/step2_uwwctw.png',
  h1:'App development',
  li:['PWA','REACT NATIVE','KOTLINE'],
  p:'Creation of Software Applications that run on a mobile device. They utilize a network connection to work with remote computing resources.',
  classValue:'bgcolor2'},
  {
    url:'https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690351069/step3_xhchgs.png',
    h1:'Graphic Designing',
    li:['BRAND','LOGO','BANNER','VC'],
    p:'The creation of styles through the method of communication and problem-solving through the utilization of typography, photography, illustrations, and lots more.',
    classValue:'bgcolor3'
  },
  {url:'https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690352301/mike_rtbh06.png',
     h1:'Digital Marketing',
    li:['PPC','SMM','AD CREATE','B2BLEAD'],
    p:'Use of the Internet and Digital Technologies/ Media to promote/ sell people, products, businesses, etc.',
    classValue:'bgcolor4'
  },
  {
    url:'https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690351052/STEP4_z4pcqm.png',
    h1:'SEO',
    li:['ONPAGE','BACLKLINE','ANALYTICS'],
    p:'The process of increasing and improving the quality and quantity of traffic to a website via search engines',
    classValue:'bgcolor5'
  }
  ]
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
      <div className='overLapingelement'>
        <p className='para-line'>Need <span className='spanedColor'>'Solutions to all your business Complications?'</span></p>
        <button type='button' className='third-but'>Get in Touch</button>
      </div>
      <div className='addPadding color-blue align-center'>
           <p className='firAni'>WE ARE INNOVATIVE SOLLUTION PROVIDERS</p>
           <h1 className='first-title'>Top rated-IT Solutions Company</h1>
           <p className='color-white'>WEBINGO® is a renowned end-to-end IT company in India that 
            provides ultimate IT solutions and has provided consultancy to 
            numerous start-ups across India, making a name as one of the best 
            IT consulting companies in Kolkata. WEBINGO provides Innovative IT 
            Solutions at minimal Investments at the best price and excellent Customer Service.</p>
      </div>
      <div className='cardsContainer'>
        <div className='card card1'>
            <h1 className='first-title'>Integrated Services</h1>
            <p className='color-white'>We have worked over the years to Integrate all the services 
                in one place so that you don’t have to go door-to-door for 
                the best quality of service.</p>
        </div>
        {cardList.map(item=><Cards itemDetails={item} key={item.h1}/>)}
      </div>
    </div>
    <Navbar/>
   </div>
 )
}
}

export default Home    