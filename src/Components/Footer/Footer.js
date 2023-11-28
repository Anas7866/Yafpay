import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='col-md-12 background_new_footer universal_padding'>
        <div className='row py-5'>
            <div className='col-md-8'>
                <div className='row'>
                    <div className='col-md-3'>
                        <img  className='img-fluid' src='/imagess/footerlogo.png' />
                        <p className='footersub_text m-0 p-0 pt-3'>About Us</p>
                        <p className='footersub_text m-0 p-0 pt-3'>Frequent Questions</p>
                        <p className='footersub_text m-0 p-0 pt-3'>Contact Us</p>
                    </div>
                    <div className='col-md-3'>
                    <p className='footersub_text1 m-0 p-0 '>Products</p>
                        <p className='footersub_text m-0 p-0 pt-3'>Money Transfer</p>
                        <p className='footersub_text m-0 p-0 pt-3'>Virtual Cards</p>
                        <p className='footersub_text m-0 p-0 pt-3'>Currency Excahnge</p>
                        <p className='footersub_text m-0 p-0 pt-3'>Foreign Accounts</p>
                    </div>
                    <div className='col-md-3'>
                    <p className='footersub_text1 m-0 p-0 '>Important Links</p>
                        <p className='footersub_text m-0 p-0 pt-3'>Blog</p>
                        <p className='footersub_text m-0 p-0 pt-3'>Money Transfer</p>
                        <p className='footersub_text m-0 p-0 pt-3'>Services</p>
                    </div>
                    <div className='col-md-3'>
                    <p className='footersub_text1 m-0 p-0 '>Legal</p>
                        <p className='footersub_text m-0 p-0 pt-3'><Link className='link_style' href="/Privacypolicy">Privacy Policy</Link></p>
                        <p className='footersub_text m-0 p-0 pt-3'><Link className='link_style' href="/Termsofuse">Terms of Service</Link></p>
                        <p className='footersub_text m-0 p-0 pt-3'><Link className='link_style' href="/Acceptablepolicy">Acceptable Use Policy</Link></p>
                    </div>
                </div>
            </div>
            <div className='col-md-4'>
                <div className='col-md-12'>
                <p className='footersub_text1 m-0 p-0 '>Subscribe Our Newsletter</p>
                </div>
                <div className='row mt-4 pt-4 margin_bottom_bar pb-2'>
                    <div className='col-md-6 col-6 m-auto'>
                    <p className='footersub_text m-0 p-0 pt-3'>Your email address</p>
                    </div>
                    <div className='col-md-6 col-6 text-end'>
                        <img className='img-fluid' src='/imagess/sub.png' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer