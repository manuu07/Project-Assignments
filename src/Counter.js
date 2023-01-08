// import React, {useState} from 'react';
// import './counter.css';

// //========================Counter Using Class Component=================================================

// class Counter extends React.Component {
//     constructor() {
//         super();
//         this.state = { 
//             count : 0
//         }
//     }
//     render() {
//         return (
//             <div className='container'>
//              <div>
//              <h1>Counter : {this.state.count}</h1>
//          </div>
//          <div>
//              <button onClick={() => this.setState({count: this.state.count+1})}>Increment +</button>
//              <button onClick={() => this.setState({count:this.state.count-1})}>Decrement -</button>
//          </div>
//          </div>
//         )
//     }
// }



// //========================Counter Using Functional Component=================================================

// // function Counter() {
// //     const [count, setCount] = useState(0)
    
// //     return (
// //         <div className='container'>
// //             <div>
// //             <h1>Counter: {count}</h1>
// //         </div>
// //         <div>
// //             <button onClick ={ (e)=>setCount(count+1)}>Increment +</button>
// //             <button onClick ={(e) => setCount(count-1)}>Decrement -</button>
// //         </div>
// //         </div>
// //     );
// // }


// export default Counter ;


function x(a, callback){
    console.log(a)
}

function hi(b){
    console.log(b)
}

console.log(hi(2))
//console.log(x("Manu", hi))