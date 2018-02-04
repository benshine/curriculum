const React = require('react')
const ReactDOM = require('react-dom')


class Task extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
        <div>
          <li>
          <input type="checkbox"  checked={this.props.done} >
          </input>
            {this.props.title}
    </li>


</div>
           
    )
  }
}

module.exports = Task