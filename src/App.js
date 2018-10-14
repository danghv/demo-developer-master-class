import React, { Component } from 'react'
import { fetchMovieDetails, fetchMovies } from './api-funcs'
import MovieDetail from './Components/MovieDetail'
import MoviesList from './Components/MoviesList'

class App extends Component {
	state = {
		isShow: true,
		movieData: [],
		loading: false
	}
	async componentDidMount() {
		await fetchMovies().then(res => {
			console.log(res)
			this.setState({ movies: res })
		})
	}
	render() {
		return (
			<div className="App">
				<MoviesList
					show={this.state.isShow}
					handleClick={async (e, id) => {
						console.log('start fetching...')
						this.setState({loading: true})
						await fetchMovieDetails(id).then(res => {
							console.log('res...', res)
							this.setState({isShow: false, movieData: res})
						})
						console.log('stop fetching...')
						this.setState({loading: false})
				}}
					loading={this.state.loading}
				/>
				<MovieDetail
					show={!this.state.isShow}
					movieData={this.state.movieData}
					handleClickBack={() => {
						console.log('clicked')
						this.setState({isShow: true})
					}}/>
			</div>
		)
	}
}
export default App

