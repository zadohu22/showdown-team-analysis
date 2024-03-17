import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [confirmPassword, setConfirmPassword] = useState<string>('');

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const response = await fetch('http://localhost:3000/create-user', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
				body: JSON.stringify({
					email,
					password,
				}),
			});
			const data = await response.json();
			console.log(data);
		} catch (error) {
			console.error('Error:', error);
		}
	};

	const handleShowAll = async () => {
		try {
			const response = await fetch('http://localhost:3000/get-all-users');

			const data = await response.json();
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className='w-full h-full flex flex-col justify-center items-center text-black relative'>
			<h1 className='absolute top-8 text-2xl'>Sign up for an account</h1>
			<form className='flex flex-col gap-4' onSubmit={handleSubmit}>
				<input
					className='input input-bordered'
					type='email'
					placeholder='Email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					className='input input-bordered'
					type='password'
					placeholder='Password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<input
					className='input input-bordered'
					type='password'
					placeholder='Confirm Password'
					value={confirmPassword}
					onChange={(e) => setConfirmPassword(e.target.value)}
				/>
				<button className='btn' type='submit'>
					Signup
				</button>
			</form>
			<div className='flex flex-col justify-center items-center'>
				<p>Already have an account?</p>
				<p
					className='cursor-pointer text-blue-800'
					onClick={() => navigate('/login')}
				>
					Login
				</p>
			</div>
			<button onClick={handleShowAll}>Show all users</button>
		</div>
	);
};

export default Signup;
