const React = require('react');
const AppLayout = require('./../layouts/AppLayout.jsx')

class Index extends React.Component{
  render() {
    return (
      <AppLayout title="My Library">
        <div className="container d-flex flex-wrap justify-content-around">
        {this.props.games.map(
          (game, index) => {
              return (
                <div className="col-sm-3">
                    <div className="card h-100 bg-info mb-4">
                        <div className="card-header">
                            <a className="h2" className="text-light" href={`/${game._id}`}>{game.name}</a>
                        </div>
                        <div className="card-body">
                            <img className="card-img-top mb-2" src= {`${game.img}`} alt={`image of ${game.name}`}/>
                            <p className="text-dark font-weight-bold m-1">{game.minPlayers} - {game.maxPlayers} Players</p>
                            <p className="text-dark font-weight-bold m-1">Game Length: {game.lengthOfGame} Minutes</p>
                            <p className="text-dark font-weight-bold m-1">Weight: {game.complexity}</p>
                            
                        </div>
                        <div className="card-footer">
                            <a className="btn btn-sm btn-primary btn-block mb-1" href={`/edit/${this.props._id}`}>Edit Game</a>
                            <form action={`/${this.props._id}?_method=delete`} method="POST">
                                <input className='btn btn-sm btn-block btn-danger' type="submit" value="Remove From Library" />
                            </form>
                        </div>
                    </div>
                </div>
              )}
        )}
        </div>
      </AppLayout>

    )
  }
}
module.exports= Index ;