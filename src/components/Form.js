import React from "react";

const Form = props => (
    <form onSubmit={props.getWeather}>
        <input type="text" name="city" placeholder="City..."></input>
        <input type="text" name="country" placeholder="Country..."></input>
        {/* <input type="submit" value="Get Weather"></input> */}
        <button>Get Weather</button>
    </form>
);
export default Form;




// class Form extends React.Component {
//     render(){
//         return (
//             <form onSubmit={this.props.getWeather}>
//                 <input type="text" name="city" placeholder="City..."></input>
//                 <input type="text" name="country" placeholder="Country..."></input>
//                 <input type="submit" value="Get Weather"></input>
//             </form>
//         );
//     }
// };