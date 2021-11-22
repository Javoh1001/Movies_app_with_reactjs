import React from 'react'
import {ContentContainer} from './ContentStyle';
import Movies from '../../components/Movies';
import Loader from '../../components/Loader';
import Search from '../../components/Search';


class Content extends React.Component{
    state={
        movies:[],
        loading:true
    }
    componentDidMount(){
        fetch('http://www.omdbapi.com/?apikey=37a3f259&s=panda')
        .then(response => response.json())
        .then(data => this.setState({movies:data.Search,loading:false}))
    }
    searchMovies = (str,type ='all')=>{
        this.setState({loading:true})
        fetch(`http://www.omdbapi.com/?apikey=37a3f259&s=${str}${type !== 'all'? `&type=${type}` : ''}`)
        .then(response => response.json())
        .then(data => this.setState({movies:data.Search, loading:false}))
    }
   render(){
        return (
            <>
            <ContentContainer>
                    <div className="container">
                        <Search searchMovies = {this.searchMovies} />
                        {this.state.loading ? <Loader/> : <Movies movies={this.state.movies}/>  }
                       
                    </div>
            </ContentContainer>
            </>
        )
   }
}

export default Content
