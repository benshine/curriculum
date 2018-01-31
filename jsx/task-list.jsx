const React = require('react')
const ReactDOM = require('react-dom')
const thingy = [
  { done:false, title:"Do stuff" },
  { done:true, title:"Do moar stuff"},
  { done:false, title:"blah"}
];

class TaskList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="well">
        <h1>TaskList</h1>
        <ul> 
          <li> "yay" {thingy[0].title}</li>
            { 
              thingy.map((task, index) => { 
               return <li key={index}>  {task.title} </li>
              })
            }
        </ul>
      </div>
    )
  }
}

module.exports = TaskList