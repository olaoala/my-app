import React, { Component } from 'react';
class Counter extends React.Component {
    state= {
        count :0, 
        tags : []
    };

    // constructor(){
    //     super()
    //    this.handleIncrement = this.handleIncrement.bind(this)
    //     console.log('we are in a constructor', this)
    // }
    style ={
        fontSize : 10,
        fontWeight : 'bold'
    }
    // renderTags(){
    //     if (this.state.tags.length === 0)
    //         return 'there are no tags!'
    //         return <ul>
    //         { this.state.tags.map(tag => <li key = {tag}>{tag}</li>)}
    //     </ul>
        
    // }
    handleIncrement = e =>{ // use arrow functions instead of creating a constructor
        console.log (  e); 
        this.setState({count : this.state.count + 1})
    }
    doHandleIncrement =() =>{
        this.handleIncrement ({id : 1})
    }
    render() {        
        return (
        <React.Fragment>
            <span style ={this.style} className = { this.getBadgeColour()}>{this.formatCount()}</span>
            <button onClick = {this.doHandleIncrement} style ={{fontSize :30}} className ='btn btn-secondary btn-sm'>add</button>
            <ul>
                { this.state.tags.map(tag => <li key = {tag}>{tag}</li>)}
            </ul>
            {/* {this.state.tags.length ===0 && "please craete a new tag!"}
            {this.renderTags()} */}
        </React.Fragment>
        );
    }

    getBadgeColour() {
        let classes = 'badge m-2 badge-';
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {count} = this.state  //this is just selecting the count attribute in the state object
        return count === 0 ? 'zero' : count  
        // you can also return a jsx format like below
        return count === 0 ? <h2>Empty</h2> : count 
    }

}


 
export default Counter;