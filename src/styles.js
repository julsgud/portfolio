import {css} from 'styled-components';

// Styled Components Media Templates Setup

const sizes = {
	medium: 668,
	large: 800
}

const media = Object.keys(sizes).reduce((accumulator, label) => {
	accumulator[label] = (...args) => css`
		@media (min-width: ${sizes[label]}px) {
			${css(...args)}
		}
	`;
	return accumulator;
}, {});

export default media;