import Link from 'next/link'
import React, { useState } from 'react'
import { TiThMenu } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { FaAngleRight } from "react-icons/fa6";

function MobileHeader() {
    const [onopen, setOnopen] = useState(false)

    const openclosefunc = () => {
        setOnopen(!onopen)
    }

    return (
        <div className='row pt-4 '>
            <div className='col-md-2 col-5 m-auto'>
                <Link href="/" className='link_style'>
                    <img className='img-fluid width_gp_l' src='/imagess/logo.webp' />
                </Link>
            </div>
            <div className='col-md-10 col-7 text-end'>
                <button className='btn btn-primary background_color_mob_h pt-1' onClick={openclosefunc}><TiThMenu /></button>
            </div>

            {/* body .................................................................................... */}
            {onopen ?
                <div className='col-md-12 px-0 meu_position_w'>
                    <Link href="/" className='link_style'>
                    <div className='row pt-4 px-3 pb-2 ' >
                        
                            <div className='col-md-2 col-5 m-auto'>

                                <img className='img-fluid width_gp_l' src='/imagess/logo.webp' />

                            </div>
                            <div className='col-md-10 col-7 text-end'>
                                <button className='btn btn-primary background_color_mob_h pt-1' onClick={openclosefunc}><RxCross2 /></button>
                            </div>
                       
                    </div>
                    </Link>
                    <hr />
                    <div className='col-md-12 pt-2 px-3 pb-1'>
                    <Link href="/" className='link_style'>
                        <div className='row'>
                            
                                <div className='col-md-6 col-6'>

                                    <p className='m-0 p-0 font_header2n'>Home</p>

                                </div>
                                <div className='col-md-6 text-end col-6'>
                                    <FaAngleRight />
                                </div>
                           
                        </div>
                        </Link>
                    </div>
                    <hr />
                    <div className='col-md-12 pt-2 px-3 pb-1' >
                    <Link href="/Blogs" className='link_style'>
                        <div className='row'>
                           
                                <div className='col-md-6 col-6'>

                                    <p className='m-0 p-0 font_header2n'>Blog</p>

                                </div>
                                <div className='col-md-6 text-end col-6'>
                                    <FaAngleRight />
                                </div>
                           
                        </div>
                        </Link>
                    </div>
                    <hr />
                    <div className='col-md-12 pt-2 px-3 pb-1'>
                        <Link href="/" className='link_style'>
                            <div className='row'>

                                <div className='col-md-6 col-6'>

                                    <p className='m-0 p-0 font_header2n'>Help Center</p>

                                </div>
                                <div className='col-md-6 text-end col-6'>
                                    <FaAngleRight />
                                </div>

                            </div>
                        </Link>
                    </div>
                    <hr />
                </div>
                : null}

        </div>
    )
}

export default MobileHeader