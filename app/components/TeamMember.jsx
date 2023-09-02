import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md';

const TeamMember = () => {
  return (
    <div>
       {/* heading */}
       <div className="heading">
        <div className='pre-heading'><h3 className='heading-text'>Our</h3>&nbsp;<h3 className='heading-text2'>Team</h3></div>
        {/* <h5 className='heading-text-normal'>View All <MdKeyboardArrowRight className='heading-icon'/></h5> */}
      </div>
      {/* heading */}
      <div className="member-container">
      <div className="member-container2">
        <div className="member-container3">
          <div className="member-image member1"></div>
          <p className="member-name">Eng. Mohamed</p>
          <p className="member-job">Chairman</p>
        </div>
        <div className="member-container3">
          <div className="member-image member2"></div>
          <p className="member-name">Eng. Mustafa</p>
          <p className="member-job">Chief Executive Officer</p>
        </div>
        
      </div>
      <div className="member-container2">
        <div className="member-container3">
          <div className="member-image member3"></div>
          <p className="member-name">Ms. Xie</p>
          <p className="member-job">Vice President &apos;PV&apos;</p>
        </div>
        <div className="member-container3">
          <div className="member-image member4"></div>
          <p className="member-name">Eng. Elfatih</p>
          <p className="member-job">Chief Compliance Officer</p>
        </div>
        
      </div>
      </div>
    </div>
  )
}

export default TeamMember