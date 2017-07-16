import React from 'react'
import { render } from 'react-dom'

const ce = React.createElement

const MyTitle = function(props) {
  return ce('div', null, ce('h1', { style: { color: props.color } }, props.title))
}

const MyFirstComponent = function() {
  return ce(
    'div',
    { id: 'my-first-component' },
    ce(MyTitle, { title: 'Game of Thrones', color: 'cadetblue' }),
    ce(MyTitle, { title: 'Sillicon Valley', color: 'peru' }),
    ce(MyTitle, { title: 'Archer', color: 'lime' }),
    ce(MyTitle, { title: 'The Last Airbender', color: 'slateblue' }),
    ce(MyTitle, { title: 'Firefly', color: 'firebrick' })
  )
}

render(ce(MyFirstComponent), document.getElementById('app'))
