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
    font-family: 'AGaramondPro';
    font-size: 14px;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    background-color: var(--color-purple);
    color: var(--color-orange);
    height: 100%;
	}
`

export default Generic
