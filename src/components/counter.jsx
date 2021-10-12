import React, { Component } from 'react';
class Counter extends React.Component {
    state= {
        count :0, 
        tags : ['tag1', 'tag2', 'tag3']
    };
    style ={
        fontSize : 10,
        fontWeight : 'bold'
    }
    render() {        
        return (
        <React.Fragment>
            <span style ={this.style} className = { this.getBadgeColour()}>{this.formatCount()}</span>
            <button style ={{fontSize :30}} className ='btn btn-secondary btn-sm'>add</button>
            <ul>
                { this.state.tags.map(tag => <li key = {tag}>{tag}</li>)}
            </ul>
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