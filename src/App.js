import './App.css'
import CustomizeButton from './js/components/CustomizeButton/CustomizeButton'
import ActionButton from './js/components/ActionButton/ActionButton'

const accessorizeOptions = [
	'Hair',
	'Ears',
	'Eyes',
	'Mouth',
	'Neck',
	'Leg',
	'Accessories',
	'Background',
]
const styleOptions = ['Default', 'Curls', 'Short', 'Bang', 'Elegant', 'Quiff']

function App() {
	return (
		<div className="App">
			<h1 className="text-5xl uppercase text-blue-950">Alpaca Generator</h1>
			<div className="flex flex-row">
				<div>
					<img src="" alt="" />
					<div>
						<ActionButton />
						<ActionButton />
					</div>
				</div>
				<div>
					<div>
						<h2 className="text-lg uppercase font-bold text-blue-950">
							Accessorize The Alpacas
						</h2>
						{/* Render rendering React elements */}

						{accessorizeOptions.map((accessory) => {
							return <CustomizeButton />
						})}
					</div>
					<h2 className="text-lg uppercase font-bold text-blue-950">Style</h2>
					{styleOptions.map((style) => {
						return <CustomizeButton />
					})}
				</div>
			</div>
		</div>
	)
}

export default App
