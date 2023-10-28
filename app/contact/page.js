"use client"
import React, { useState } from 'react'
import AviationBanner from '../components/AviationBanner'
import { HiOutlineMail } from 'react-icons/hi';
import { sendContactForm } from '../api/send';
import { POST } from '../api/contact/route';
import { Footer, Header, WhatsAppButton } from '../components';

const Contact = () => {
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dropdownValue, setDropdownValue] = useState('Customized order');
  const [quantity, setQuantity] = useState('');
  const [partNumber, setPartNumber] = useState('');
  const [part, setPart] = useState('');
  const [parts, setParts] = useState('');
  const [condition, setCondition] = useState('');
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
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
      partNumber: partNumber,
      part: part,
      parts: parts,
      condition: condition,
      phone: phone,
      code: code,
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
    setPartNumber('');
    setCondition('');
    setPhone('');
    setCode('');
    setComment('');
    setBtnValue('send');
  }

  const onOldSubmit = async(e) => {
    const values = {
      company: company,
      firstName: firstName,
      lastName: lastName,
      email: email,
      dropdownValue: dropdownValue,
      quantity: quantity,
      part: part,
      condition: condition,
      phone: phone,
      comment: comment
    }
    
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
    setPartNumber('');
    setCondition('');
    setPhone('');
    setComment('');
  };
  return (
    <div>
      <Header/>
      
      <div className='aviation-form2'>
        {/* heading */}
      <div className="heading">
        <div className='pre-heading'><h3 className='heading-text'>Contact</h3>&nbsp;<h3 className='heading-text2'>Us</h3></div>
        {/* <h5 className='heading-text-normal'>View All <MdKeyboardArrowRight className='heading-icon'/></h5> */}
      </div>
      {/* heading */}
      <div className='text-and-image'>
        <div className='left-text-form'>
          <p className='left-logo'></p>
          <p className='left-title'>Our Team is Available 24/7</p>
          <p className='left-text-text'>Whether you require expert advice or reliable spare parts, our aviation company is your trusted partner in the aerospace industry. </p>
          {/* <button className='sec-btn4'>
            Get Your consult Now
          </button> */}
          <div className="footer-contact"><HiOutlineMail className='footer-contact-icon'/>&nbsp;Email</div>
          <div className="footer-contact-sub sub-pad">sales@infinitycoltd.com</div>
          <p className="footer-contact-sub2">Please fill out the form and our team will contact you shortly.</p>
        </div>
        <div className='right-form'>
        <form className="form" onSubmit={onNewSubmit}>
        <select
        value={dropdownValue}
        onChange={(e) => setDropdownValue(e.target.value)}
        className="select"
      >
        <option value="Customized order">Customized Order</option>
        <option value="Spare parts">One Spare Parts</option>
        <option value="Multi parts">Multi Spare Parts</option>
        <option value="Consulting">Consulting</option>
        <option value="Maintenance">Maintenance</option>
        <option value="Inspection">Inspection</option>
        <option value="Other">Others</option>
      </select>
      
      <input
        type="text"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        placeholder="Company"
        className="input"
      />
      
      <div className='form-row'>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="First Name"
        className="input"
      />
      <div> &nbsp;  &nbsp;  &nbsp; </div>
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="last Name"
        className="input"
      />
      </div>
    
    
        
  
      <div className='form-row conditional-field '>
      <input
        type="text"
        value={part}
        onChange={(e) => setPart(e.target.value)}
        placeholder="Part Description"
        className="input"
      />
      <div> &nbsp;  &nbsp;  &nbsp; </div>
      <input
        type="text"
        value={partNumber}
        onChange={(e) => setPartNumber(e.target.value)}
        placeholder="Part Number"
        className="input"
      />
      </div>
   
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        placeholder="Quantity"
        className="input conditional-field "
      />
      <input
        type="text"
        value={condition}
        onChange={(e) => setCondition(e.target.value)}
        placeholder="Condition"
        className="input conditional-field "
      />
      <textarea
        type="text"
        value={parts}
        onChange={(e) => setParts(e.target.value)}
        placeholder="Write your order of spare parts with there part number and quantity here with '/' between orders"
        className="input conditional-field2"
        style={{ height: '250px' }}
      />

  
      {/* {dropdownValue === 'spare' && (
      <input
        type="text"
        value={condition}
        onChange={(e) => setCondition(e.target.value)}
        placeholder="Condition"
        className="input"
      />

      )} */}
      
      <div className='form-row'>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="input"
        required
      />
      </div>
      <div className='form-row'>
      <input
        type="tel"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="+(Country code)"
        className="input-code"
        required
      />
      <div> &nbsp;  &nbsp;  &nbsp; </div>
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone number"
        className="input"
        required
      />
      </div>
    
      <textarea
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Comment, Questions and messages"
        className="input"
        style={{ height: '250px' }}
      />
    
      <button type="submit" className="button">Send</button>
      <p className='sentM'>Your message was sent successfully!</p>
      <style jsx>{`
        .conditional-field {
          display: ${dropdownValue === 'Spare parts' ? 'flex' : 'none'};
        }
        .conditional-field2 {
          display: ${dropdownValue === 'Multi parts' ? 'flex' : 'none'};
        }
        .button {
          display: ${btnValue === 'send' ? 'block' : 'none'};
        }
        .sentM {
          display: ${btnValue === 'NOTsend' ? 'block' : 'none'};
        }
      `}</style>
    </form>
        </div>
      </div>
      </div>
      <Footer/>
      <WhatsAppButton />
     
    </div>
  )
}

export default Contact