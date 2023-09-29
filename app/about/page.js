"use client"
import React, {useState} from 'react'
import { WorldLocations, Statistics, TeamMember, Footer, Header, WhatsAppButton } from '../components'
import { HiOutlineMail } from 'react-icons/hi';
import { sendContactForm } from '../api/send';

const About = () => {
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dropdownValue, setDropdownValue] = useState('Other');
  const [quantity, setQuantity] = useState('');
  const [part, setPart] = useState('');
  const [parts, setParts] = useState('');
  const [condition, setCondition] = useState('');
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');
  const [btnValue, setBtnValue] = useState('send');

  const onNewSubmit = async(e) => {
    setBtnValue('NOTsend');
    e.preventDefault();
    const data = {
      email: email,
      company: company,
      firstName: firstName,
      lastName: lastName,
      subject: dropdownValue,
      quantity: quantity,
      part: part,
      parts: parts,
      condition: condition,
      phone: phone,
      comment: comment
    }
    await sendContactForm(data)
    setCompany('');
    setEmail('');
    setFirstName('');
    setLastName('');
    setDropdownValue('');
    setPart('');
    setParts('');
    setQuantity('');
    setCondition('');
    setPhone('');
    setComment('');
    setBtnValue('send');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
   
    // Reset form fields
    setCompany('');
    setEmail('');
    setFirstName('');
    setLastName('');
    setDropdownValue('');
    setPart('');
    setQuantity('');
    setCondition('');
    setPhone('');
    setComment('');
  };
  return (
    <div>
      <Header/>
        {/* heading */}
      <div className="heading about">
        <div className='pre-heading'><h3 className='heading-text'>Who</h3>&nbsp;<h3 className='heading-text2'>Are We?</h3></div>
        {/* <h5 className='heading-text-normal'>View All <MdKeyboardArrowRight className='heading-icon'/></h5> */}
      </div>
      {/* heading */}
      <div className='text-and-image'>
        <div className='left-text'>
          <p className='left-text-text'>Our company was established since 2020, and we specialize in providing high-quality parts sourced from famous suppliers for various aircraft models.</p>
          <p className='left-text-text'>Our extensive network allows us to offer a wide range of components, ensuring that you can find the perfect fit for your aviation needs.</p>
          <p className='left-text-text'>Additionally, we take pride in offering consulting services to assist you in making informed decisions regarding your aircraft maintenance and upgrades.</p>
          <p className='left-text-text'>As part of our commitment to excellence, we also manufacture all aviation accessories and uniforms for pilots, cabin crew  and engineers. We also manufacture high quality aircraft models with different sizes and provide office decorations for airlines and travel agencies.</p>
        </div>
        <div className='right-about-image'>
          <div className="about-img"></div>
        </div>
      </div>
      <Statistics/>
      <div className="world-wide-image"></div>
      <WorldLocations/>
      <TeamMember/>
      <Footer/>
      <WhatsAppButton/>
    </div>
  )
}

export default About