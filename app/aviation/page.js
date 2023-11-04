"use client"
import React, { useRef, useState } from 'react'
import AviationBanner from '../components/AviationBanner'
import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlinePlus } from 'react-icons/ai';
import { sendContactForm } from '../api/send';
import { Footer, Header, WhatsAppButton } from '../components';

const Aviation = () => {
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dropdownValue, setDropdownValue] = useState('Spare parts');
  const [quantity, setQuantity] = useState('');
  const [partNumber, setPartNumber] = useState('');
  const [parts, setParts] = useState('');
  const [part, setPart] = useState('');
  const [condition, setCondition] = useState('');
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [comment, setComment] = useState('');
  const [btnValue, setBtnValue] = useState('send');

  const sectionRef = useRef(null);

  const scrollClick = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // const handleChange = (e) => {
  //   const newValue = e.target.value
  //   if (!newValue.startsWith('+')) {
  //     // Append "+" to the beginning of the value
  //     setCode(`${newValue}`);
  //   }else {
  //     setCode(`+${newValue}`);
  //   }
  // };


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
      partNumber: partNumber,
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
    setPartNumber('');
    setQuantity('');
    setCondition('');
    setPhone('');
    setCode('');
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
    setPartNumber('');
    setQuantity('');
    setCondition('');
    setPhone('');
    setComment('');
  };
  return (
    <div>
      <Header/>
      <AviationBanner/>
      {/* heading */}
      <div className="heading">
        <div className='pre-heading'><h3 className='heading-text'>Aviation</h3>&nbsp;<h3 className='heading-text2'>Spare Parts</h3></div>
        {/* <h5 className='heading-text-normal'>View All <MdKeyboardArrowRight className='heading-icon'/></h5> */}
      </div>
      {/* heading */}
      <div className='text-and-image'>
        <div className='left-text'>
          <p className='left-text-text'>We provide all types of spare parts for aircrafts with all available conditions (Brand NEW, Overhaul, Repaired and As removed).</p>
          <p className='left-text-text'>Spare parts are available rotatable and consumables for wide range of aircraft BOEING, AIRBUS, EMBRAER etc</p>
          <p className='left-text-text'>Connect with our team to get the most suitable parts and deals for you.</p>
          <button className='sec-btn22' onClick={scrollClick}>
            Order Now
          </button>
        </div>
        <div className='right-image'>
          <div className="supplier-image1"></div>
          <div className="supplier-image2"></div>
          <div className="supplier-image3"></div>
        </div>
      </div>
      {/* heading */}
      <div className="heading">
        <div className='pre-heading'><h3 className='heading-text'>Infinity</h3>&nbsp;<h3 className='heading-text2'>Consulting Team</h3></div>
        {/* <h5 className='heading-text-normal'>View All <MdKeyboardArrowRight className='heading-icon'/></h5> */}
      </div>
      {/* heading */}
      <div className='text-and-image'>
        <div className='left-text'>
          <p className='left-text-text'>Infinity Consulting Team is a highly reliable and committed group that strives to discover optimal and effective solutions tailored to your specific needs, ensuring utmost satisfaction.</p>
          <p className='left-text-text2'>Consultation for the following </p>
<p className='left-text-text2'>- Buying, selling aircrafts</p>
<p className='left-text-text2'>- Inspection before buying aircrafts, physical and documentation inspection. </p>
<p className='left-text-text3'>- Set-up of maintenance organization.</p>
          <p className='left-text-text'>Our team operates under the exceptional leadership of Chief Engineer Mohamed Hassanein, who boasts an impressive 30 years of experience in the aviation industry.</p>
          <button className='sec-btn4' onClick={scrollClick}>
            Get Your consult Now
          </button>
        </div>
        <div className='right-image'>
          <div className="consulting-img"></div>
        </div>
      </div>
      <div className='aviation-members'>
        <div className='aviation-member'>
        <div className="member-image member1"></div>
        <div className='member-text'>
        <p className="member-name">Eng. Mohamed</p>
          <p className="member-job member-text1">Chairman</p>
          <p className='member-text2'>Senior Aircraft Maintenance Engineer</p>
          <p className='member-text2'>Aircraft Inspector Boeing, airbus, Embraer </p>
        </div>
        </div>
        <div className='aviation-member'>
        <div className="member-image member4"></div>
        <div className='member-text'>
        <p className="member-name">Eng. Elfatih</p>
          <p className="member-job member-text1">Qatar airways Base maintenance </p>
          <p className='member-text2'>Senior Aircraft Maintenance Engineer</p>
          <p className='member-text2'>Experience on line and base maintenance on A320 F, A330,A340, A350,A380,B737 Max ,B747 -8 F ,B777,B787</p>
        </div>
        </div>
      </div>
      <div className='aviation-form'>
        {/* heading */}
      <div className="heading" ref={sectionRef}>
        <div className='pre-heading'><h3 className='heading-text'>Send Your</h3>&nbsp;<h3 className='heading-text2'>Order</h3></div>
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
        <option value="Spare parts">One Spare Parts</option>
        <option value="Multi parts">Multi Spare Parts</option>
        <option value="Customized order">Customized Order</option>
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
        placeholder="#Part"
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
        placeholder="Write your order of spare parts here with '/' between orders"
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
      />
      </div>
      <div className='form-row-code'>
        <AiOutlinePlus className='plus-form'/>
      <input
        type="number"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Country code"
        className="input-code"
        required
      />
      <div> &nbsp;  &nbsp;  &nbsp; </div>
      <input
        type="number"
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
        style={{ height: '150px' }}
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
      <WhatsAppButton/>
     
    </div>
  )
}

export default Aviation