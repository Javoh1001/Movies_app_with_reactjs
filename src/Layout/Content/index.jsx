import React from 'react'
import {ContentContainer} from './ContentStyle';
import Movies from '../../components/Movies';
import Loader from '../../components/Loader';
import Search from '../../components/Search';


class Content extends React.Component{
    state={
        movies:[]
    }
    componentDidMount(){
        fetch('http://www.omdbapi.com/?apikey=37a3f259&s=panda')
        .then(response => response.json())
        .then(data => this.setState({movies:data.Search}))
    }
    searchMovies = (str)=>{
        fetch(`http://www.omdbapi.com/?apikey=37a3f259&s=${str}`)
        .then(response => response.json())
        .then(data => this.setState({movies:data.Search}))
    }
   render(){
        return (
            <>
            <ContentContainer>
                    <div className="container">
                        <Search searchMovies = {this.searchMovies} />
                        {this.state.movies.length ?  <Movies movies={this.state.movies}/> : <Loader/> }
                       
                    </div>
            </ContentContainer>
            </>
        )
   }
}

export default Content
