import SignupImg from "../assets/images/signup.png";
import logo from "../assets/images/logo.svg";
import InputField from "../components/Inputfield";
import { useState } from "react";
import Button from "../components/Button";
import { Link } from "react-router";

export default function SignupPage() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <><section className="p-6">
            <div
                className="bg-cover rounded-2xl w-full h-[520px] bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${SignupImg})` }} >
                <div className="pt-14 ms-14">
                    <img src={logo} alt="Logo" width={200} height={42} />
                </div>
                <div className="mt-12 flex flex-col items-center justify-center gap-2.5 mx-auto text-white">
                    <h1 className="text-[32px] font-bold text-center leading-10.5">Welcome</h1>
                    <p className="max-w-[333px] text-center text-sm leading-5 ">We are in Dentalook one big family seeking to the perfect life that anyone can get</p>
                </div>
            </div>
            <div className="max-w-[452px] w-full flex items-center justify-center mx-auto bg-white rounded-2xl shadow-[0_7px_23px_0_rgba(0,0,0,0.05)] px-[51px] py-[45px] -mt-43 ">
                <form className="flex flex-col items-start gap-6 w-full">
                    <div className="w-full">
                        <InputField
                            label="Name"
                            placeholder="Your full name"
                            value={name}
                            setValue={setName}

                        />
                    </div>
                    <div className="w-full">
                        <InputField
                            label="Email"
                            type="email"
                            placeholder="Your email address"
                            value={email}
                            setValue={setEmail}

                        />
                    </div>
                    <div className="w-full">
                        <InputField
                            label="Password"
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
                    <div className="w-full mt-3">
                        <Button type="submit" variant="primary" name="SIGN UP" />
                    </div>
                    <p className=' mx-auto text-center text-sm leading-5 text-[#A0AEC0]'>Already have an account? <Link to="/auth/login" className='text-[#087BB3]' >Login</Link> </p>

                </form>

            </div>
        </section>
        </>
    );
}
