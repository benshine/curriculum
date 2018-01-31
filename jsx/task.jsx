const React = require('react')
const ReactDOM = require('react-dom')


class Task extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      
          <li> "yay" {this.props.title} </li>
           /* { 
              thingy.map((task, index) =>  
               <li key={index}>  
               <input type="checkbox" { (task.done) ? "checked" :"nope"}  >
               </input> 
               </li>
              )*/

           
    )
  }
}

module.exports = Task