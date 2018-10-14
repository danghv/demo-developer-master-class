import React from 'react'

export default class MovieDetail extends React.Component{
	render() {
		return (
			this.props.show ? <div>
				<h2>danghv</h2>
				<h1>{this.props.movieData.studio}</h1>
				<h1>{this.props.movieData.title}</h1>
				<button
					onClick={this.props.handleClickBack}
				>Back to the list</button>
			</div>
				: null
		)
	}
}