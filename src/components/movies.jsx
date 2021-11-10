import React,{Component} from "react";
import {getMovies} from "../services/fakeMovieService";
import {getGenres} from "../services/fakeGenreService";
import Pagination from "./common/pagination"
import {paginate} from "./utils/paginate";
import ListGroup from "./common/listGroup";
import MoviesTable from './moviesTable';

import _ from 'lodash';
import {Route} from "react-router-dom";
import MovieForm from "./movieForm";


export default class Movies extends Component{

    state={
        movies:[],
        genres: [],
        pageSize:4,
        currentPage:1,
        selectedItem: null,
        sortColumn: {path:'title',order:'asc'}
    };

    componentDidMount() {
        const genres = [{_id:null,name:'All Genres'},...getGenres()]
        this.setState({movies:getMovies(), genres})
    }

    handleDeleteMovie = movie=>{
        const delMovie = this.state.movies.filter(m => m._id !== movie._id )
        this.setState({movies:delMovie})
    }

    handleLike = movie=>{
        const movies = [...this.state.movies];
        const movieFav = {...movie};
        const index = movies.indexOf(movie);
        movieFav.liked = !movieFav.liked
        movies[index] = movieFav;
        this.setState({movies})
    }

    handlePageChange = page=>{
        this.setState({currentPage:page})
    }

    handleGenreChange = genre=>{

        const selectedItem = ( genre === null ? null : genre._id)
        this.setState({selectedItem,currentPage:1})
    }

    handleSort = sortColumn =>{
        this.setState({sortColumn})
    }


    render() {
        const {movies:allmovies,currentPage,pageSize,genres,selectedItem,sortColumn} = this.state

        const filteredMovies = ( selectedItem === null ? allmovies: allmovies.filter(movie =>  movie.genre._id === selectedItem ))
        const sorted = _.orderBy(filteredMovies,[sortColumn.path],[sortColumn.order]);

        const movies = paginate(sorted,pageSize,currentPage);

        if(allmovies.length === 0)
            return <h3>There are no Movies in the Database</h3>;

        return(
                    <div className="row m-5">

                            <div className="col-md-2">
                                <ListGroup
                                    selectedItem={selectedItem}
                                    items={genres}
                                    onItemSelect={this.handleGenreChange} />
                            </div>
                            <div className="col-md-6">
                                <h4>Showing {filteredMovies.length} in the Database</h4>
                                <MoviesTable
                                    movies={movies}
                                    sortColumn={sortColumn}
                                    onLike={this.handleLike}
                                    onDelete={this.handleDeleteMovie}
                                    onSort={this.handleSort}
                                />

                                <Pagination
                                    itemCount={filteredMovies.length}
                                    pageSize={pageSize}
                                    currentPage={currentPage}
                                    onPageChange={this.handlePageChange} />
                            </div>

                    </div>

        )
    }
}