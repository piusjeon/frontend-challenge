import React, {Component} from 'react'
import styled from "styled-components";
import PlusSVG from '../../images/PlusSVG'

class AddButton extends Component {
	render() {
		return (
			<Button type="button" {...this.props}>
				<PlusSVG/>
			</Button>
		)
	}
}

const Button = styled.button`
	border-radius: 100%;
  width: 32px;
  height: 32px;
  padding: 9px;
  border: none;
  background-color: var(--color-violet);
  box-shadow: 0 0 16px 0 rgba(56, 30, 66, 0.1);
  cursor: pointer;
`;

export default AddButton