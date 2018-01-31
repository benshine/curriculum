const React = require('react')
const ReactDOM = require('react-dom')

class TaskList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="well">
        <h1>TaskList</h1>
        <ul> 
            <li> myTask </li>
            <li> myTask </li>
        </ul>
      </div>
    )
  }
}

module.exports = TaskList