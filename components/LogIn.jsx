import React from 'react'
import { Apple, Facebook, GoogleIcon, Logo } from './common/Icon'
import { Button } from './ui/button'
import Link from 'next/link';

const LogIn = () => {
    return (
        <>
            <div className="min-h-screen bg-mainbg bg-cover bg-no-repeat flex justify-center items-center">
                <div className="max-w-[526px] w-full px-3 sm:px-0">
                    <div className='flex gap-3 items-center justify-center mb-6 sm:mb-7 md:mb-8 lg:mb-10'>
                        <Logo /> <h1 className='text-[40px] text-white font-bold'>CupidAI</h1>
                    </div>
                    <div className=' bg-lightgray rounded-[26px] w-full max-w-[526px] p-5 sm:p-6 md:p-[30px]'>
                        <h2 className='text-white font-medium text-[32px]'>Login</h2>
                        <p className='text-white text-opacity-60 text-base '>We are really happy to see you again</p>
                        <Button className="!text-white my-6 sm:my-7 md:my-8 lg:my-10 py-3 md:py-4 lg:py-[18px] bg-pinkGradient" >Login</Button>
                        <div className='gap-4 md:gap-6 flex items-center'>
                            <span className='w-full h-0.5 bg-dovengray bg-opacity-25'></span>
                            <p className='text-xl text-dovengray !leading-7 font-medium'>OR</p>
                            <span className='w-full h-0.5 bg-dovengray bg-opacity-25'></span>
                        </div>
                        <div className="flex my-6 sm:my-7 md:my-8 lg:my-10 flex-col gap-4">
                            <Button className="!text-white rounded-[40px] h-12 sm:h-14 md:h-[64px] font-normal" ><GoogleIcon /> <span className='ms-2.5 md:ms-4 text-base leading-none'>Continue with Google</span></Button>
                            <Button className="!text-white rounded-[40px] h-12 sm:h-14 md:h-[64px] font-normal" ><Facebook /> <span className='ms-2.5 md:ms-4 text-base leading-none'>Continue with Facebook</span></Button>
                            <Button className="!text-white rounded-[40px] h-12 sm:h-14 md:h-[64px] font-normal" ><Apple /> <span className='ms-2.5 md:ms-4 text-base leading-none'>Continue with Apple</span></Button>
                        </div>
                        <div className='flex justify-center'>
                            <Link className='text-white text-sm font-normal hover:opacity-60 duration-500 hover:before:w-0 before:duration-300 relative before:absolute before:w-full before:h-[1px] before:bg-white before:bottom-[-2px] ' href="/">Forget your password?</Link>
                        </div>
                    </div>
                    <div className=' bg-lightgray rounded-[26px] w-full max-w-[526px] p-5 sm:p-6 md:p-[30px] mt-2.5'>
                        
                        <div className='flex justify-center items-center'>
                            <p className='text-base text-white font-normal'>Don’t have account?</p>
                            <Link className='text-pink text-sm font-normal hover:opacity-60 duration-500 hover:before:w-0 before:duration-300 relative before:absolute before:w-full before:h-[1px] ms-1 before:bg-pink before:bottom-[0px] ' href="/"> Create Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LogIn