import React, { Component } from 'react'

 class SearchBar extends Component {
     state={
         term:''
     }
     onInputHandler=(event)=>{
         this.setState({
             term:event.target.value 
         })
     }

    onFormSubmitHandle=(event)=>{
        event.preventDefault()

        this.props.onFormSubmit(this.state.term)
      }
    render() {
        return (
            <div className="search-bar ui segment">
            <form onSubmit={this.onFormSubmitHandle.bind(this)} className="ui form">
                <div className="field">
                <label>Search Video</label>
                <input type="text" value={this.state.term} onChange={this.onInputHandler} />
                </div>
                
            </form>
            
            </div>
        )
    }
}
export default SearchBar


