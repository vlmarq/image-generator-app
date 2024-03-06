import './App.css'
import CustomizeButton from './js/components/CustomizeButton/CustomizeButton'
import ActionButton from './js/components/ActionButton/ActionButton'

function App() {
	return (
		<div className="App">
			<h1 className="text-5xl uppercase text-blue-950">Alpaca Generator</h1>
			<h2 className="text-lg uppercase font-bold text-blue-950">
				Accessorize The Alpacas
			</h2>
			<h2 className="text-lg uppercase font-bold text-blue-950">Style</h2>
			<CustomizeButton />
			<ActionButton />
		</div>
	)
}

export default App
