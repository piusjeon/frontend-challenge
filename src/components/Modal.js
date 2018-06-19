import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styled, {keyframes} from 'styled-components'
import CrossButton from './buttons/CrossButton'

class Modal extends Component {
	static propTypes = {
		onCloseRequest: PropTypes.func.isRequired
	};

	_modalNode = null;

	constructor() {
		super();

		this.handleKeyUp = this.handleKeyUp.bind(this);
		this.handleOutsideClick = this.handleOutsideClick.bind(this);
	}

	componentDidMount() {
		window.addEventListener('keyup', this.handleKeyUp, false);
		document.addEventListener('click', this.handleOutsideClick, false);
	}

	componentWillUnmount() {
		window.removeEventListener('keyup', this.handleKeyUp, false);
		document.removeEventListener('click', this.handleOutsideClick, false);
	}

	get onCloseRequest() {
		return this.props.onCloseRequest
	}

	set modalNode(node) {
		this._modalNode = node;
	}

	get modalNode() {
		return this._modalNode
	}

	handleKeyUp(e) {
		const keys = {
			27: () => {
				e.preventDefault();
				this.onCloseRequest();
				window.removeEventListener('keyup', this.handleKeyUp, false);
			},
		};

		if (keys[e.keyCode]) { keys[e.keyCode](); }
	}

	handleOutsideClick(e) {
		if (!!this.modalNode && !this.modalNode.contains(e.target)) {
			this.onCloseRequest();
		}
	}

	render() {
		return (
			<Overlay>
				<div ref={node => (this.modalNode = node)}>
				<ModalWindow>
					<ModalContent>

						{this.props.children}

					</ModalContent>
					<CloseButton onClick={this.onCloseRequest}/>
				</ModalWindow>
				</div>
			</Overlay>
		)
	}
}

const openModalKeyFrames = keyframes`
  0% {
    opacity: 0; display: none;
  }
  1% {
    opacity: 0; display: flex;
  }
  100% {
    opacity: 1;
  }
`;


const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  padding: 1rem;
  background-color: rgba(37, 13, 46, 0.4);
  z-index: 9999;
  opacity: 1;
  overflow-x: hidden;
  overflow-y: auto;
  animation: ${openModalKeyFrames} .5s ease;
`;

const ModalWindow = styled.div`
  position: relative;
  width: 514px;
  background-color: #fff;
  box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.2);
  padding: 32px 50px 18px;
`;

const ModalContent = styled.div`
	text-align: center;
`;

const CloseButton = styled(CrossButton)`
  position: absolute;
  top: 0;
  right: 0;
`;

export default Modal