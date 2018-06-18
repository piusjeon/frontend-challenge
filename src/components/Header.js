import React, {Component} from 'react'
import styled from 'styled-components'
import LogoSVG from '../images/LogoSVG'

class Header extends Component {
	render() {
		return (
			<Container>
				<Logo/>
			</Container>
		);
	}
}

const Container = styled.div`
    display: flex;
    align-items: center;
    background-color: #fff;
    height: 70px;
    padding: 0 25px;
`;

const Logo = styled(LogoSVG)`
	background: transparent;
	height: 48px;
	width: 48px;
`;

export default Header
