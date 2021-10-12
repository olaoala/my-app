 import React, { Component } from 'react';
 import Counter from './counter';
 class Counters extends React.Component { 
     state = {
         counters : [
             {id : 1, value:0},
             {id : 2, value:0},
             {id : 3, value:0},
             {id : 4, value:0},
             {id : 5, value:0},
         ]
     }
     render() { 
         return (<div>
             

             <ul>
                { this.state.counters.map(counter => <li key = {counter}>{counter}</li>)}
            </ul>
         </div>);
     }
 }
  
 export default Counters;