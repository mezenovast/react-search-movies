import React from 'react';
import './Search.css';

class Search extends React.Component {

   state = {
      search: "",
      type: "all"
   }

   handleKey = (event) => {
      if (event.key === 'Enter') {
         this.props.searchMovies(this.state.search, this.state.type)
      }
   }

   handelFilter = (event) => {
      this.setState(() => ({ type: event.target.dataset.type }), () => {
         this.props.searchMovies(this.state.search, this.state.type)
      })
   }

   render() {
      return (
         <>
            <div className="search">
               <input
                  type="search"
                  placeholder="search"
                  value={this.state.search}
                  onChange={e => this.setState({ search: e.target.value })}
                  onKeyDown={this.handleKey}
               />
               <button
                  className="btn"
                  onClick={() => this.props.searchMovies(this.state.search, this.state.type)}
               >Search</button>
            </div>
            <div className="radio">

               <input
                  type="radio"
                  name="type"
                  data-type="all"
                  checked={this.state.type === 'all'}
                  onChange={this.handelFilter}
               />
               <span>All</span>

               <input
                  type="radio"
                  name="type"
                  data-type="movie"
                  checked={this.state.type === 'movie'}
                  onChange={this.handelFilter}
               />
               <span>Movies only</span>
               <input
                  type="radio"
                  name="type"
                  data-type="series"
                  checked={this.state.type === 'series'}
                  onChange={this.handelFilter}
               />
               <span>Series only</span>
               <input
                  type="radio"
                  name="type"
                  data-type="game"
                  checked={this.state.type === 'game'}
                  onChange={this.handelFilter}
               />
               <span>Games only</span>
            </div>
         </>
      )
   }
}

export default Search;