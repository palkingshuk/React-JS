import { useState, useCallback, useEffect, useRef} from 'react'
import './index.css'
function App() {
	const [length, setLength] = useState(8)
	const [numberAllowed, setNumberAllowed] = useState(false)
	const [charsAllowed, setCharsAllowed] = useState(false)
	const [password, setPassword] = useState("")

	// useRef hook for referencing values
	const passRef = useRef(null)

	// useCallback hook for memoization
	const passwordGenerator = useCallback(() => {
		let pass = ""
		let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
		if (numberAllowed) str += "0123456789"
		if (charsAllowed) str += "!@#$%^&*(){}|:<>?[]\;,./+-_="

		for (let i = 0; i < length; i++) {
			// const element = array[i];
			pass += str[Math.floor(Math.random() * str.length)]

		}

		setPassword(pass)

	}, [length, numberAllowed, charsAllowed,setPassword])
 
	const copyPasswordToClip = useCallback(()=>{
		window.navigator.clipboard.writeText(password)
		passRef.current?.select()
		alert("Password copied successfully at clipboard !!!")
	},[length,charsAllowed,numberAllowed,setPassword])


	// useEffect Hook for sideeffect
	useEffect(()=>{
		passwordGenerator()
	},[length,charsAllowed,numberAllowed])


	return (

		<div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
			<h1 className='text-white text-center my-3'>Password generator</h1>
			<div className="flex shadow rounded-lg overflow-hidden mb-4">
				<input
					type="text"
					value={password}
					className="outline-none w-full py-1 px-3"
					placeholder="Password"
					readOnly
					ref={passRef}
				/>
				<button
					className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
					onClick={copyPasswordToClip}
				>copy</button>

			</div>
			<div className='flex text-sm gap-x-2'>
				<div className='flex items-center gap-x-1'>
					<input
						type="range"
						min={8}
						max={100}
						value={length}
						className='cursor-pointer'
						onChange={(e) => setLength(e.target.value)}
					/>
					<label>Length: {length}</label>
				</div>
				<div className="flex items-center gap-x-1">
					<input
						type="checkbox"
						defaultChecked={numberAllowed}
						id="numberInput"
						onChange={()=>{
							setNumberAllowed(prev => !prev)
						}}
					/>
					<label htmlFor="numberInput">Numbers</label>
				</div>
				<div className="flex items-center gap-x-1">
					<input
						type="checkbox"
						defaultChecked={charsAllowed}
						id="characterInput"
						onChange={()=>{
							setCharsAllowed(prev => !prev)
						}}
					/>
					<label htmlFor="characterInput">Characters</label>
				</div>
			</div>
		</div>

	)
}

export default App
