import React from 'react'
import pic2 from '../images/pic2.jpg'
import pic3 from '../images/pic3.jpg'
import pic4 from '../images/pic4.jpg'
import './Services.css'
const Services = () => {
  return (
    <div>
        <h2>Services</h2>
        <div className='services_card1'>
            <img src={pic2} alt='gynacology picture 2'width='450px'/>
            <div className='description1'>
            <h3>Menstrual Disorders</h3>
            <p>Menstrual disorders are a class of problems affecting a woman’s monthly menstrual cycle. Menstrual disorders include any or more than one of the following:</p>
            <ul>
                <li>Dysmenorrhea (painful periods)</li>
                <li>Irregular periods or missed periods</li>
                <li>Heavy periods</li>
            </ul>
        </div>
        </div>
        <div className='services_card1'>
            <div className='description2'>
            <h3>Ultrasound of pregnancy</h3>
            <p>An ultrasound is a type of technology that uses sound waves to create images. During pregnancy, a transducer (or wand) is placed in your vagina or on top of your belly. It emits sound waves that bounce off of your baby’s tissues, fluids and bones. 
            The transducer then picks up these echos and translates them into the image of your baby that you see on the screen.</p>

<p>Early in pregnancy, ultrasounds are used to confirm the fetal heartbeat and the baby’s position in your uterus. Later, ultrasounds screen for fetal growth and placenta location, as well as a baby's general health and anatomy. 

Toward the end of pregnancy, ultrasounds can be useful for checking the length of your cervix (if there is any suspicion that you may be in preterm labor) as well as verifying that your baby is in a heads-down position before labor.</p>
        </div>
        <img src={pic3} alt='gynacology picture 3'width='500px'/>
        </div>

        <div className='services_card1'>
            <img src={pic4} alt='gynacology picture 3'width='450px'/>
            <div className='description1'>
            <h3>Services and During pregnancy support</h3>
           <p></p>
           
        </div>
        </div>    
    </div>
  )
}

export default Services