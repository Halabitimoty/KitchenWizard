import registerImg from '@/assets/registerImg.png'
import '../Login/Login.css'
import { FcGoogle } from 'react-icons/fc'
import { BsFacebook, BsTwitter } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Register = () => {
	return (
		<>
			<section className="sm:flex md:flex items-center h-screen w-full">
				<div className=" left-section bg-gradient h-full sm:w-2/4 place-content-center hidden sm:flex ">
					<div className='sm:pt-40'>
						<img src={registerImg} alt="register-bg" />
					</div>
				</div>

				<div className="right-section sm:flex place-content-center h-full sm:w-2/4">
					<div className='sm:w-4/5 text-center sm:pt-10 pt-8 pb-6 sm:pb-0'>
						<h1 className='text-orange-600 text-4xl font-semibold'>Kitchen<span className='text-green-600 text-4xl'>Wizzard</span></h1>

						<h2 className='mt-5 md:mt-8 mb-3 font-bold text-2xl'>Sign Up</h2>

						<form action="">
							<input
								className='login-input'
								type="email"
								placeholder="Email"
							/>
							<br />
							<input
								className='login-input'
								type="text"
								placeholder="First Name"
							/>
							<br />
							<input
								className='login-input'
								type="password"
								placeholder="Password"
							/>
							<br />

							<div>
								<a href='' className='text-cyan-500 hover:text-cyan-500 '>Forget Password?</a>
							</div>

							<button
								className='bg-secondary p-3 w-[70%] rounded-full text-white mt-5'
								type="submit">
								Sign Up
							</button>

						</form>
						<div className='mt-3'>

							<p>Already have an account?
								<Link to="/login"> <span className='text-cyan-500'>Log In</span></Link>
							</p>
						</div>

						<p className='md:mt-8 font-semibold'>Log In With</p>
						<div className='flex justify-center gap-10 mt-5'>
							<a href="#"><FcGoogle size={50} /></a>
							<a href="#"><BsFacebook size={50} className='text-cyan-600' /></a>
							<a href="#"><BsTwitter size={50} className='text-cyan-500' /></a>

						</div>

					</div>
				</div>
			</section>

		</>
	)
}

export default Register