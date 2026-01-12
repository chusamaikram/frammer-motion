
import InputField from '../components/Inputfield'
import LoginImg from "../assets/images/login.png"
import logo from "../assets/images/logo.svg"
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const LoginPage = () => {

    const [emailValue, setEmailValue] = useState("");
    const [password, setPassword] = useState("")
    return (
        <>
            <div className='flex items-center justify-end gap-20'>
                <div className='max-w-[353px]'>
                    <h1 className='text-[28px] font-semibold leading-9 text-[#003C51]'>Welcome to the Service Desk Portal</h1>
                    <p className='mt-4 text-[#A0AEC0] text-sm font-semibold leading-5'>Enter your email and password to sign in</p>
                    <form className='mt-9 flex flex-col items-start gap-6 w-full'>
                        <div className='w-full'>
                            <InputField
                                label="Email"
                                type='email'
                                placeholder="Your email address"
                                value={emailValue}
                                setValue={setEmailValue}
                            />

                        </div>
                        <div className='w-full'>
                            <InputField
                                label="password"
                                type='text'
                                placeholder="Your password"
                                value={password}
                                setValue={setPassword}
                            />

                        </div>
                        <div>
                            <label className="inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer" />
                                <div className="relative w-9 h-5 bg-[#087BB3] peer-focus:outline-none peer-focus:ring-0 dark:peer-focus:ring-brand-soft rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand"></div>
                                <span className="select-none ms-3 text-[12px] text-[#2D3748] leading-4.5">Remember me </span>
                            </label>
                        </div>
                        <div className='mt-3 w-full'>
                            <Button variant='primary' type='submit' name="SIGN IN"/>

                        </div>
                    </form>
                    <p className='mt-5.5 text-center text-sm leading-5 text-[#A0AEC0]'>Don't have an account? <Link to="/signup" className='text-[#087BB3]' >Sign up</Link> </p>
                </div>
                <div className='relative rounded-[0_0_0_25px]'>
                    <img className=' object-cover h-auto'
                        src={LoginImg} alt="Dentalook thumbnail" width={662} height={872} />
                    <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src={logo} alt="logo" />
                </div>

            </div>
        </>
    )
}

export default LoginPage
