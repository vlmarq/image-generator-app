import React from 'react'
import './CustomizeButton.css'

function Button() {
	/**
	 * To do:
	 *  - Make color of button change onClick - set State (selected, isSelected)
	 *  - Add props so dynamic
	 */
	return (
		<button class="bg-transparent active:bg-blue-800 text-blue-400 font-semibold active:text-white py-2 px-6 border border-blue-400 rounded-full">
			Button
		</button>
	)
}

export default Button
