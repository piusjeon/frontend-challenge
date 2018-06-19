import React, {Component} from 'react'
import styled from "styled-components";
import CrossSVG from '../../images/CrossSVG'

class CrossButton extends Component {
	render() {
		return (
			<Button {...this.props}>
				<CrossSVG/>
			</Button>
		)
	}
}

const getButtonFillColor = props => {
	switch (props.color) {
		case 'grey':
		default:
			return 'var(--color-light-grey)';
	}
};

const getButtonHoverFillColor = props => {
	switch (props.color) {
		case 'grey':
		default:
			return 'var(--color-grey)';
	}
};

const Button = styled.button`
	width: 32px;
	height: 32px;
	padding: 9px;
  border: none;
	background: transparent;
	cursor: pointer;
	svg path {
		fill: ${getButtonFillColor};
	}
	&:hover svg path {
		fill: ${getButtonHoverFillColor};
	}
`;

export default CrossButton

