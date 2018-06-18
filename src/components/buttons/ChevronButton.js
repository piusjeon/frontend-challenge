import React, {Component} from 'react'
import styled from "styled-components";
import ChevronRightSVG from '../../images/ChevronRightSVG'

class ChevronButton extends Component {
	render() {
		return (
			<Button type="button" {...this.props}>
				<ChevronRightSVG/>
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

const getChevronRotation = props => {
	switch (props.direction) {
		case 'down':
			return '90deg';
		case 'left':
			return '180deg';
		case 'up':
			return '-90deg';
		case 'right':
		default:
			return '0'
	}
};

const Button = styled.button`
	width: 36px;
	height: 36px;
	padding: 11px;
  border: none;
	background: transparent;
	cursor: pointer;
	svg {
		transform: rotate(${getChevronRotation})
	}
	svg path {
		fill: ${getButtonFillColor};
	}
	&:hover svg path {
		fill: ${getButtonHoverFillColor};
	}
`;

export default ChevronButton

