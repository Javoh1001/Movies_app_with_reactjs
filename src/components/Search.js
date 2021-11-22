import React from 'react'

class Search extends React.Component{
    state = {
        search:'',
    }
    handleKey = (e)=>{
        if(e.key === 'Enter'){
            this.props.searchMovies(this.state.search)
        }
    }
   render(){
        return (
            <>
            <div class="row">
                <div className="col s12 btn_search">
                    <div className="input-field inline ">
                        <input value={this.state.search} placeholder="Search" id="email_inline" type="email" class="validate" onChange={(e)=>this.setState({search:e.target.value})} onKeyDown = {this.handleKey} />
                    </div>
                    <button type="submit" onClick={()=> this.props.searchMovies(this.state.search)} className="btn search_btn">Search</button>
                </div>
            </div>
            </>
        )
   }
}

export default Search
