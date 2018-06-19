import React, {Component} from 'react'
import styled from 'styled-components'
import PropTypes from "prop-types";
import {Link} from "react-router-dom"

class Breadcrumbs extends Component {
	static propTypes = {
		breadcrumbs: PropTypes.arrayOf(
			PropTypes.shape({
				name: PropTypes.string.isRequired,
				target: PropTypes.string,
				isCurrent: PropTypes.bool
			})
		)
	};

	get breadcrumbs() {
		return this.props.breadcrumbs || []
	}

	render() {
		return (
			<Container>
				{ this.breadcrumbs.map( (breadcrumb, index) =>
						<Breadcrumb key={index*2} {...breadcrumb}>
							{ !!breadcrumb.target
								?
								<BreadcrumbLink to={breadcrumb.target}>{breadcrumb.name}</BreadcrumbLink>
								:
								<span>{breadcrumb.name}</span>
							}
						</Breadcrumb>
					)
					.reduce((jsx, elem) => {
						return jsx === null ? [elem] : [...jsx,
							<Separator key={jsx.length}> / </Separator>
						, elem]
					}, null)
				}
			</Container>
		);
	}
}

const getBreadcrumbColor = (breadcrumb) => {
	if (breadcrumb.isCurrent)
		return 'var(--color-grey)';
	else
		return 'var(--color-light-grey)';
};

const getBreadcrumbFontWeight = (breadcrumb) => {
	if (breadcrumb.isCurrent)
		return '500';
	else
		return 'normal';
};

const Container = styled.ul`
	background: none;
	margin: 0;
	padding: 0;
`;

const Breadcrumb = styled.li`
	list-style: none;
	float:left;
  font-size: 13px;
  letter-spacing: 0.7px;
	margin: 0;
	padding: 0;
  color: ${getBreadcrumbColor};
  font-weight: ${getBreadcrumbFontWeight}
`;

const BreadcrumbLink = styled(Link)`
	color: inherit;
	text-decoration: none;
	&:hover {
		text-decoration: underline;
	}
`;

const Separator = styled.li`
	list-style: none;
	float:left;
  font-size: 13px;
  letter-spacing: 0.7px;
  margin: 0 10px;
	padding: 0;
  color: #cccccc;
`;

export default Breadcrumbs
