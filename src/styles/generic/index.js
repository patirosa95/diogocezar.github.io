import { createGlobalStyle } from 'styled-components'

const Generic = createGlobalStyle`
	* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
	}
	html,
	body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    display: flex;
    justify-content: center;
    align-items: center;
	}
`

export default Generic
