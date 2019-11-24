const React = require('react');
const AppLayout = require('./layouts/AppLayout.jsx')

class Index extends React.Component{
  render() {
    return (
      <AppLayout title="Table Top Selector Homepage">
      <h2 className="text-info">GAMES</h2>
        
      <p>
        <a href="/restaurants">My Library</a> |
        <a href="/restaurants/new">Add New Game</a>
      </p>
      </AppLayout>

    )
  }
}
module.exports= Index ;