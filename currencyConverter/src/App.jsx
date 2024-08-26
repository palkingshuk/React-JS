import { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {

	const [amount, setAmount] = useState(parseFloat(0.0))
	const [from, setFrom] = useState("usd")
	const [to, setTo] = useState("inr")
	const [convertedAmount, setconvertedAmount] = useState(parseFloat(0.0))

	const currencyInfo = useCurrencyInfo(from)
	const options = Object.keys(currencyInfo)
	//   console.log(currencyInfo[to])
	// console.log(options[to])
	const swap = () => {
		setFrom(to)
		setTo(from)
		setconvertedAmount(amount)
		setAmount(convertedAmount)
	}

	const convert = () => {
		let num1 = parseFloat(amount * currencyInfo[to])
		setconvertedAmount(num1)
	}

	const BackgroundImage = 'https://images.pexels.com/photos/1480690/pexels-photo-1480690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
	return (
		<div
			className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
			style={{
				backgroundImage: `url('${BackgroundImage}')`,
			}}
		>
			<div className="w-full">
				<div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
					<form
						onSubmit={(e) => {
							e.preventDefault();
							convert()
						}}
					>
						<div className="w-full mb-1">
							<InputBox
								label="From"
								amount={amount}
								currencyOptions={options}
								selectCurrency={from}
								onCurrencyChange={currency => setFrom(currency)}
								onAmountChange={amount => setAmount(amount)}
							/>
						</div>
						<div className="relative w-full h-0.5">
							<button
								type="button"
								className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
								onClick={swap}
							>
								swap
							</button>
						</div>
						<div className="w-full mt-1 mb-4">
							<InputBox
								label="To"
								amount={convertedAmount}
								currencyOptions={options}
								selectCurrency={to}
								onCurrencyChange={currency => setTo(currency)}
								amountDisable
							/>
						</div>
						<button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
							Convert {from.toUpperCase} to {to.toUpperCase}
						</button>
					</form>
				</div>
			</div>
		</div>
	);


}

export default App
