const React = require('react');
const AppLayout = require('./../layouts/AppLayout.jsx')

class Selector extends React.Component{
  render() {
    return (
      <AppLayout title="Game Selector">
        <div className="container d-flex flex-wrap justify-content-around align-content-around mt-5">
        {this.props.games.map(
          (game, index) => {
              return (
                <div className="col-sm-3">
                    <div className="card border-info bg-info mb-5 align-self-stretch">
                        <div className="card-header">
                            <a className="h2" className="text-light" href={`games/${game._id}`}>{game.name}</a>
                        </div>
                        <div className="card-body d-flex flex-column">
                            <img className="mb-2 rounded-top img-thumbnail rounded mx-auto" src= {`${game.img}`} alt={`image of ${game.name}`}/>
                            <p className="text-dark font-weight-bold m-1">{game.minPlayers} - {game.maxPlayers} Players</p>
                            <p className="text-dark font-weight-bold m-1">Game Length: {game.lengthOfGame} Minutes</p>
                            <p className="text-dark font-weight-bold m-1">Weight: {game.complexity}</p>
                            
                        </div>
                        <div className="card-footer">
                            <a className="btn btn-sm btn-primary btn-block mb-1" href={`/games/edit/${game._id}`}>Edit Game</a>
                            <form action={`/games/${game._id}?_method=delete`} method="POST">
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
module.exports= Selector ;