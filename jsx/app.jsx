require('../css/main.css')

const React = require('react')
const ReactDOM = require ('react-dom')
const TaskList = require('./task-list.jsx')


ReactDOM.render(
  <TaskList />,
  document.getElementById('content')
)
