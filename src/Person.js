import React from "react";

const Person = props => (
  <div>
    <h1>
      이름은 {props.name} 나이는 {props.age}
    </h1>
    <h2>{props.children}</h2>
    {props.myfunc()}
    {console.log(props.st)}
  </div>
);

// class Person extends React.Component {
//   render() {
//     // const { name, age } = this.props;
//     return (
//       <div>
//         <h1>
//           이름은 {this.props.name}고 나이는 {this.props.age}야.
//         </h1>
//         <h2>{this.props.children}</h2>
//       </div>
//     );
//   }
// }

export { Person };
