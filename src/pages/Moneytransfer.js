import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import LanguageHeader from '@/Components/LanguageHeader/LanguageHeader'
import Footer from '@/Components/Footer/Footer'
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from 'react'
import Header from '@/Components/Header/Header'
import LoaderUniversal from '@/Components/LoaderUniversal/LoaderUniversal'
import Link from 'next/link'

function Moneytransfer() {
    useEffect(() => {
        setTimeout(function () {
        }, 6000);
        Aos.init({
            duration: 2000,
            easing: 'ease',
        });
    }, []);
    return (
        <>
            <Head>
                <title>YafPay</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main >
                <LoaderUniversal>
                    <LanguageHeader />
                    <div className='col-md-12 background_color_universal'>
                        <div className='col-md-12 background_header1 universal_padding'>
                            <div className='row pt-4'>
                                <div className='col-md-2 col-5'>
                                    <Link href="/">
                                        <img className='img-fluid width_gp_l' src='/imagess/logo.png' />
                                    </Link>
                                </div>
                                <div className='col-md-1 pt-2 col-2'>
                                    <p className='m-0 p-0 font_header2'>Home</p>
                                </div>
                                <div className='col-md-1 pt-2 col-2' >
                                    <p className='m-0 p-0 font_header2'>Blog</p>
                                </div>
                                <div className='col-md-1 pt-2 col-3'>
                                    <p className='m-0 p-0 font_header2'>Help Center</p>
                                </div>

                            </div>
                            <div className='col-md-12 mt-5 pb-5'>
                                <div className='row'>
                                    <div className='col-md-6 m-auto '>
                                        <p className='m-0 p-0 banner1_heading' data-aos="fade-right" data-aos-duration="4000">
                                            Easily and quickly
                                            transfer money to
                                            anyone
                                        </p>
                                        <p className='m-0 p-0 sub_heading_banner1 pt-3' data-aos="fade-right" data-aos-duration="3000">
                                            Send money online from Africa to the UK and other European countries<br />
                                            with ease.
                                        </p>
                                        <div className='col-md-12 mt-md-5 pt-4'>
                                            <img className='img-fluid width_gp' src='/imagess/googleplay.png' data-aos="fade-right" data-aos-duration="4000" />
                                            <img className='img-fluid ps-md-4 ps-2 width_gp' src='/imagess/apple.png' data-aos="fade-right" data-aos-duration="3000" />
                                        </div>
                                        <div className='col-md-12 mt-md-3 mt-4'>
                                            <div className='row'>
                                                <div className='col-md-3 col-4 '>
                                                    <img className='img-fluid' data-aos="fade-right" data-aos-duration="4000" src='/imagess/people.png' />
                                                </div>
                                                <div className='col-md-9 col-8 m-auto'>
                                                    <p className='m-0 p-0' data-aos="fade-left" data-aos-duration="3000"><span className='fivek'>500K+</span><span className='people ps-2'>People already trusted us.</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-6 mt-md-0 mt-5 text-center'>
                                        <img className='img-fluid' data-aos="zoom-in" src='/imagess/banner-m1.png' />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-12  background_header2 pt-5 mt-5 '>
                            <div className='col-md-12  text-center'>
                                <p className='font_GBP' data-aos="zoom-in-up" data-aos-duration="4000">Send and receive money easily from anywhere<br />
                                    in the world</p>
                            </div>
                            <div className='col-md-12 universal_padding pb-5'>
                                <div className='row mt-5 pt-4  pb-5' >
                                    <div className='col-md-6'>
                                        <div className='col-md-12'>
                                            <img className='img-fluid' src='/imagess/banner-m2.png' />
                                        </div>
                                    </div>
                                    <div className='col-md-6 m-auto '>
                                        <div className='col-md-12 text-start mt-md-0 mt-5'>
                                            <p className='font_GBP' data-aos="zoom-in-up" data-aos-duration="4000">Transfer & Deposite Money Anytime,<br />
                                                Anywhere In The World.</p>
                                        </div>
                                        <div className='col-md-12 text-start'>
                                            <p className='m-0 p-0 subb_head' data-aos="fade-left" data-aos-duration="3000">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor
                                                incididunt ut labore et dolore magna aliqua.</p>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <div className='row mt-3'>
                                                        <div className='col-md-2 col-1 '>
                                                            <img className='img-fluid' src='/imagess/check.png' data-aos="fade-right" data-aos-duration="4000" />
                                                        </div>
                                                        <div className='col-md-10 ps-0 col-11 pt-1'>
                                                            <p className='m-0 p-0 subb_head ' data-aos="fade-right" data-aos-duration="3000">
                                                                Powerful Mobile & Online App
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className='row mt-3'>
                                                        <div className='col-md-2 col-1 '>
                                                            <img className='img-fluid' src='/imagess/check.png' data-aos="fade-right" data-aos-duration="4000" />
                                                        </div>
                                                        <div className='col-md-10 ps-0 col-11 pt-1'>
                                                            <p className='m-0 p-0 subb_head' data-aos="fade-right" data-aos-duration="3000">
                                                                Commitment Free
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className='row mt-3'>
                                                        <div className='col-md-2 col-1 '>
                                                            <img className='img-fluid' src='/imagess/check.png' data-aos="fade-right" data-aos-duration="4000" />
                                                        </div>
                                                        <div className='col-md-10 ps-0 col-11 pt-1'>
                                                            <p className='m-0 p-0 subb_head' data-aos="fade-right" data-aos-duration="3000" >
                                                                Full Data Privacy Compliance.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className='row mt-3'>
                                                        <div className='col-md-2 col-1 '>
                                                            <img className='img-fluid' src='/imagess/check.png' data-aos="fade-right" data-aos-duration="4000" />
                                                        </div>
                                                        <div className='col-md-10 ps-0 col-11 pt-1'>
                                                            <p className='m-0 p-0 subb_head ' data-aos="fade-right" data-aos-duration="3000">
                                                                Powerful Mobile & Online App
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className='row mt-3'>
                                                        <div className='col-md-2 col-1 '>
                                                            <img className='img-fluid' src='/imagess/check.png' data-aos="fade-right" data-aos-duration="4000" />
                                                        </div>
                                                        <div className='col-md-10 ps-0 col-11 pt-1'>
                                                            <p className='m-0 p-0 subb_head' data-aos="fade-right" data-aos-duration="3000">
                                                                Commitment Free
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className='row mt-3'>
                                                        <div className='col-md-2 col-1 '>
                                                            <img className='img-fluid' src='/imagess/check.png' data-aos="fade-right" data-aos-duration="4000" />
                                                        </div>
                                                        <div className='col-md-10 ps-0 col-11 pt-1'>
                                                            <p className='m-0 p-0 subb_head' data-aos="fade-right" data-aos-duration="3000" >
                                                                Full Data Privacy Compliance.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='col-md-12 background_blue py-5  universal_padding' >
                            <p className='m-0 p-0 text_banner4' data-aos="zoom-in-up" data-aos-duration="4000">How to open a free foreign bank account</p>
                            <div className='row mt-5 px-3 px-md-0'>
                                <div className='col-md-4 mt-md-0 mt-3'>
                                    <div className='row'>
                                        <div className='col-md-1 col-1 px-0'>
                                            <img className='img-fluid'
                                                data-aos="fade-right" data-aos-duration="4000"
                                                src='/imagess/one.png' />
                                        </div>
                                        <div className='col-md-11 col-11'>
                                            <p className='m-0 p-0 register_text' data-aos="fade-right" data-aos-duration="4000" >Register in minutes</p>
                                            <p className='m-0 p-0 reg_text_1' data-aos="fade-right" data-aos-duration="3000" >
                                                Sign up online, or in our app with your<br />
                                                email address
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-4 mt-md-0 mt-3'>
                                    <div className='row'>
                                        <div className='col-md-1 col-1 px-0'>
                                            <img className='img-fluid'
                                                data-aos="fade-right" data-aos-duration="4000"
                                                src='/imagess/one.png' />
                                        </div>
                                        <div className='col-md-11 col-11'>
                                            <p className='m-0 p-0 register_text' data-aos="fade-right" data-aos-duration="4000" >Complete KYC verifications</p>
                                            <p className='m-0 p-0 reg_text_1' data-aos="fade-right" data-aos-duration="3000" >
                                                Verify your identity using your government-<br />
                                                issued ID
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-4 mt-md-0 mt-3'>
                                    <div className='row'>
                                        <div className='col-md-1 col-1 px-0'>
                                            <img className='img-fluid'
                                                data-aos="fade-right" data-aos-duration="4000"
                                                src='/imagess/one.png' />
                                        </div>
                                        <div className='col-md-11 col-11'>
                                            <p className='m-0 p-0 register_text' data-aos="fade-right" data-aos-duration="4000" >Get your virtual account</p>
                                            <p className='m-0 p-0 reg_text_1' data-aos="fade-right" data-aos-duration="3000" >
                                                Share your account details to get paid, or spend<br />
                                                around the world with your debit card.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-12 mt-5 px-2 px-md-0'>
                                <img className='img-fluid' data-aos="fade-right" data-aos-duration="3000" src='/imagess/register.png' />
                            </div>
                        </div>
                        <div className='col-md-12  background_header3 pt-5  '>
                            <div className='row universal_padding'>
                                <div className='col-md-6'>
                                    <img className='img-fluid' data-aos="fade-right" data-aos-duration="4000" src='/imagess/girls.png' />
                                </div>
                                <div className='col-md-6 m-md-auto mt-5 ps-4 px-md-0'>
                                    <div className='col-md-12  text-start'>
                                        <p className='font_GBP mb-0' data-aos="zoom-in-up" data-aos-duration="4000">A Fully Integrated Suite Of Every Product Payments</p>
                                        <p className='p_text_currency' data-aos="zoom-in-left" data-aos-duration="4000">
                                            There are many variations of passages of Lorem Ipsum amet avoilble but majority
                                            have suffered alteration in some form, by injected humur or randomise words which
                                            don't sure amet sit dolor quras alto lorem.
                                        </p>
                                    </div>
                                    <div className='row mt-4'>
                                        <div className='col-md-6'>
                                            <div className='col-md-12'>
                                                <img className='img-fluid' src='/imagess/kl.png' />
                                                <p className='m-0 p-0 split'>Split The Necessities</p>
                                                <p className='p_text_currency' data-aos="zoom-in-left" data-aos-duration="4000">
                                                    There are many variations of passages of Lorem Ipsum amet avoilble but majority
                                                    have suffered alteration in some form.
                                                </p>
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className='col-md-12'>
                                                <img className='img-fluid' src='/imagess/ip.png' />
                                                <p className='m-0 p-0 split'>Pay For Business</p>
                                                <p className='p_text_currency' data-aos="zoom-in-left" data-aos-duration="4000">
                                                    There are many variations of passages of Lorem Ipsum amet avoilble but majority
                                                    have suffered alteration in some form.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-12 position_new pe-0'>
                                    <img className='img-fluid wisth_circle' src='/imagess/side.png' />
                                </div>
                            </div>


                        </div>
                        <div className='col-md-12 background_header_linear_22 '>
                            <div className='text-center col-md-12'>
                            <p className='font_GBP custom-distance-top' data-aos="zoom-in-up" data-aos-duration="4000">Resources to Help You Learn About YAFPAY</p>
                            </div>
                            <div className='col-md-12 universal_padding mt-5 mb-5 pb-5'>
                                <div className='row'>
                                    <div className='col-md-4 mt-4 mt-md-0'>
                                        <div className='col-md-12 px-md-3'>
                                            <div className='col-md-12 '>
                                                <img className='img-fluid w-100' src='/imagess/banner-v3.png' />
                                                <div className='row px-4 neg_mar_top'>
                                                    <div className='col-md-6 col-6'>
                                                        <p className='m-0 p-0 font_in_cards'><img className='img-fluid' src='/imagess/profile.png' /> Muhammad Usman</p>
                                                    </div>
                                                    <div className='col-md-4 col-4 text-end'>
                                                        <p className='m-0 p-0 font_in_cards'>2nd Feb 2023</p>
                                                    </div>
                                                    <div className='col-md-2 col-2 text-end'>
                                                        <p className='m-0 p-0 font_in_cards'><img className='img-fluid' src='/imagess/comments.png' /> 23</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-12 mt-2 pe-md-5'>
                                                <p className='m-0 p-0 font_cards pe-md-5'>Building a Positive Workplace
                                                    Culture: A Foundation for Success</p>
                                                <p className='m-0 p-0 font_cards_para pe-md-5'>Have you ever been asked what your favorite thing
                                                    about working at your company is? Depending on
                                                    where you work, there are a few possible reasons.</p>
                                            </div>
                                            <div className='col-md-12'>
                                                <img className='img-fluid' src='/imagess/readmore.png' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-4 mt-4 mt-md-0'>
                                        <div className='col-md-12 px-md-3'>
                                            <div className='col-md-12 '>
                                                <img className='img-fluid w-100' src='/imagess/banner-v3.png' />
                                                <div className='row px-4 neg_mar_top'>
                                                    <div className='col-md-6 col-6'>
                                                        <p className='m-0 p-0 font_in_cards'><img className='img-fluid' src='/imagess/profile.png' /> Muhammad Usman</p>
                                                    </div>
                                                    <div className='col-md-4 col-4 text-end'>
                                                        <p className='m-0 p-0 font_in_cards'>2nd Feb 2023</p>
                                                    </div>
                                                    <div className='col-md-2 col-2 text-end'>
                                                        <p className='m-0 p-0 font_in_cards'><img className='img-fluid' src='/imagess/comments.png' /> 23</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-12 mt-2 pe-md-5'>
                                                <p className='m-0 p-0 font_cards pe-md-5'>Building a Positive Workplace
                                                    Culture: A Foundation for Success</p>
                                                <p className='m-0 p-0 font_cards_para pe-md-5'>Have you ever been asked what your favorite thing
                                                    about working at your company is? Depending on
                                                    where you work, there are a few possible reasons.</p>
                                            </div>
                                            <div className='col-md-12'>
                                                <img className='img-fluid' src='/imagess/readmore.png' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-4 mt-4 mt-md-0'>
                                        <div className='col-md-12 px-md-3'>
                                            <div className='col-md-12 '>
                                                <img className='img-fluid w-100' src='/imagess/banner-v3.png' />
                                                <div className='row px-4 neg_mar_top'>
                                                    <div className='col-md-6 col-6'>
                                                        <p className='m-0 p-0 font_in_cards'><img className='img-fluid' src='/imagess/profile.png' /> Muhammad Usman</p>
                                                    </div>
                                                    <div className='col-md-4 col-4 text-end'>
                                                        <p className='m-0 p-0 font_in_cards'>2nd Feb 2023</p>
                                                    </div>
                                                    <div className='col-md-2 col-2 text-end'>
                                                        <p className='m-0 p-0 font_in_cards'><img className='img-fluid' src='/imagess/comments.png' /> 23</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-12 mt-2 pe-md-5'>
                                                <p className='m-0 p-0 font_cards pe-md-5'>Building a Positive Workplace
                                                    Culture: A Foundation for Success</p>
                                                <p className='m-0 p-0 font_cards_para pe-md-5'>Have you ever been asked what your favorite thing
                                                    about working at your company is? Depending on
                                                    where you work, there are a few possible reasons.</p>
                                            </div>
                                            <div className='col-md-12'>
                                                <img className='img-fluid' src='/imagess/readmore.png' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-12  background_header3 pt-5  px-md-5  pb-md-0 pb-5'>
                            <div className='row universal_padding'>
                                <div className='col-md-6 px-md-4'>
                                    <img className='img-fluid' src='/imagess/b4.png' data-aos="fade-right" data-aos-duration="6000" />
                                </div>
                                <div className='col-md-6 m-auto'>
                                    <p className='text_section5 mt-md-0 mt-5' data-aos="fade-left" data-aos-duration="5000">
                                        Download our App to get all kinds of
                                        banking benefits from anywhere
                                    </p>
                                    <div className='col-md-12  pt-4' data-aos="fade-left" data-aos-duration="3000">
                                        <img className='img-fluid width_gp' src='/imagess/googleplay.png' />
                                        <img className='img-fluid ps-md-4 width_gp ps-2' src='/imagess/apple.png' />
                                    </div>
                                </div>

                            </div>


                        </div>
                        <Footer />
                    </div>
                </LoaderUniversal>
            </main>
        </>
    )
}

export default Moneytransfer