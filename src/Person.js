import React from "react";

const Person = ({ name, age }) => (
  <div>
    <p>
      이름은 {name}고 나이는 {age}야.
    </p>
  </div>
);

// class Person extends React.Component {
//   render() {
//     const { name, age } = this.props;
//     return (
//       <div>
//         <p>
//           이름은 {name}고 나이는 {age}야.
//         </p>
//       </div>
//     );
//   }
// }

export { Person };
