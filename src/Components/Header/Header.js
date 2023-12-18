import Link from 'next/link'
import React from 'react'

function Header() {
    return (
        <div className='col-md-12 background_header1 universal_padding'>
            <div className='row pt-4'>
                <div className='col-md-2 col-5'>
                    <Link href="/" className='link_style'>
                        <img className='img-fluid width_gp_l' src='/imagess/logo.webp' />
                    </Link>
                </div>
                <div className='col-md-1 pt-2 col-2'>
                    <Link href="/" className='link_style'>
                        <p className='m-0 p-0 font_header2'>Home</p>
                    </Link>
                </div>
                <div className='col-md-1 pt-2 col-2' >
                      <Link href="/Blogs" className='link_style'>
 <p className='m-0 p-0 font_header2'>Blog</p>
</Link>
                </div>
                <div className='col-md-1 pt-2 col-3'>
                    <p className='m-0 p-0 font_header2'>Help Center</p>
                </div>

            </div>
            <div className='col-md-12 mt-5 pb-5'>
                <div className='row'>
                    <div className='col-md-6 m-auto '>
                        <p className='m-0 p-0 banner1_heading' data-aos="fade-right" data-aos-duration="4000">
                            The future of digital
                            money transfer
                        </p>
                        <p className='m-0 p-0 sub_heading_banner1 pt-3' data-aos="fade-right" data-aos-duration="3000">
                            Open a U.S., U.K. and European bank account for free to receive and make
                            foreign <br /> payments or convert currencies, all in one place
                        </p>
                        <div className='col-md-12 mt-md-5 pt-4'>
                            <img className='img-fluid width_gp' src='/imagess/googleplay.webp' data-aos="fade-right" data-aos-duration="4000" />
                            <img className='img-fluid ps-md-4 ps-2 width_gp' src='/imagess/apple.webp' data-aos="fade-right" data-aos-duration="3000" />
                        </div>
                        <div className='col-md-12 mt-md-3 mt-4'>
                            <div className='row'>
                                <div className='col-md-3 col-4 '>
                                    <img className='img-fluid' data-aos="fade-right" data-aos-duration="4000" src='/imagess/people.webp' />
                                </div>
                                <div className='col-md-9 col-8 m-auto'>
                                    <p className='m-0 p-0' data-aos="fade-left" data-aos-duration="3000"><span className='fivek'>500K+</span><span className='people ps-2'>People already trusted us.</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 mt-md-0 mt-5 text-center'>
                        <img className='img-fluid' data-aos="zoom-in" src='/imagess/banner1.webp' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header