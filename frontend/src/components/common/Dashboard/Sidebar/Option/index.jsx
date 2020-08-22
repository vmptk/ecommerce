import React from 'react';

const Option = ({ icon, name }) => {
  return (
    <div className='sidebar-options-item option-effect'>
      <span className={ `option-left-icon icon-${icon}` }></span>
      <p className="option-title-center ">{ name }</p>
      <span className="option-right-icon icon-arrow"></span>
    </div>
  )
}

export default Option;