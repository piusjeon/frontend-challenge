import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import styled from 'styled-components'
import PulsePlot from './PulsePlot'

const mapState = (state, ownProps) => ({
    pulse: state.pulses.entities[ownProps.pulseId]
});

const mapDispatch = {};

class PulseListItem extends Component {
    static propTypes = {
        pulseId: PropTypes.string.isRequired,
        pulse: PropTypes.object
    };

    /**
     * @returns {Object}
     */
    get pulse() {
        return this.props.pulse
    }

    /**
     * @returns {string}
     */
    get type() {
        return this.pulse ? this.pulse.attributes.type.replace(/_/g, ' ') : ''
    }

    render() {
        return !!this.pulse && (
            <Container>
                <Header title={this.type}>
                    <ColorCode/> <span>{this.type}</span>
                </Header>
                <PlotContainer>
                    <PulsePlot pulse={this.pulse}/>
                </PlotContainer>
            </Container>
        )
    }
}

const Container = styled.div`
	position: relative;
	display: block;
	width: 325px;
  background-color: white;
  border: solid 1px #faf7fc;
  box-shadow: 0 1px 16px 0 rgba(56, 30, 66, 0.03);
  overflow: hidden;
  margin: 16px;
`;

const Header = styled.div`
	text-transform: uppercase;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 10px 15px;
  width: 100%;
  font-size: 13px;
  letter-spacing: 0.7px;
  color: var(--color-grey);
`;

const ColorCode = styled.span`
	display: inline-block;
	width:  10px;
	height: 10px;
	background: var(--color-violet);
	border-radius: 100%;
	margin-right: 5px;
  box-shadow: 0 1px 4px 0 rgba(35, 30, 33, 0.1);
  border: solid 1px white;
	box-sizing: initial;
`;

const PlotContainer = styled.div`
	padding: 0 15px 15px;
`;


export default connect(mapState, mapDispatch)(PulseListItem)