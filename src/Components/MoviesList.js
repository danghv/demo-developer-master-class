import React from 'react'
import { fetchMovies } from '../api-funcs'

class Item extends React.Component{
	state = {
		loading: false
	}
	render() {
		const {movie} = this.props
		return (
			<li
				onClick={ async (e) => {
					console.log(movie.id)
					this.setState({loading: true})
					await this.props.handleClick(e, movie.id)
					this.setState({loading: false})
				}}
			>{movie.title} {this.state.loading ? <i className="fas fa-spinner"></i> : null}</li>
		)
	}
}

export default class MoviesList extends React.Component{
	state = {
		movies: [],
		loading: false
	}
	componentDidMount() {
		fetchMovies().then(data => {
			this.setState({movies: data})
		})
	}
	render() {
		return (
			this.props.show ? <ul>
				{this.state.movies.map(movie => {
					return (
						<Item
							key={movie.id}
							movie={movie}
							handleClick={this.props.handleClick}
						/>
					)
				})}
			</ul>
				: null
		)
	}
}