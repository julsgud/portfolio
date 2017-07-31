import {css} from 'styled-components';

// Styled Components Media Templates Setup

const sizes = {
	large: 668
}

const media = Object.keys(sizes).reduce((accumulator, label) => {
	accumulator[label] = (...args) => css`
		@media (min-width: ${sizes[label]/16}em) {
			${css(...args)}
		}
	`;
	return accumulator;
}, {});

export default media;