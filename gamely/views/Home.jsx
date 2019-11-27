const React = require('react');
const AppLayout = require('./layouts/AppLayout.jsx')

class Index extends React.Component{
  render() {
    return (
      <AppLayout title="Game.ly">
        <div className="container">
              <div className="jumbotron bg-info my-5 height-75">
                <h1 className="display-1 my-5 text-dark">Welcome to Game.ly!</h1>
                <h1 className="my-4 display-4 text-primary">Your table-top library manager.</h1>
                <ul>
                <h1 className="my-2 display-7 text-primary"><strong><small>Maintain your table-top game collection</small></strong></h1>
                <h1 className="my-2 display-7 text-primary"><strong><small>Add Games, Edit Games, Remove Games</small></strong></h1>
                <h1 className="my-2 display-7 text-primary"><strong><small>Coming Soon: Game-Night Selector</small></strong></h1>
                </ul>
              </div> 
        </div>        
      </AppLayout>
    )
  }
}
module.exports= Index ;