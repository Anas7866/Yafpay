import React from 'react'
import { FaAngleDown } from "react-icons/fa";

function LanguageHeader() {
  return (
    <div className='col-md-12 px-3 pt-2 pb-3 background_header_1'>
        <div className='col-md-12 text-end'>
            English <FaAngleDown />
        </div>
    </div>
  )
}

export default LanguageHeader