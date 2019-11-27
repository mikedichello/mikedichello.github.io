const React = require('react');
const AppLayout = require('./../layouts/AppLayout.jsx')

class Index extends React.Component{
  render() {
    return (
      <AppLayout title="My Library">
        <div className="container d-flex flex-wrap justify-content-around mt-5">
        {this.props.games.map(
          (game, index) => {
              return (
                <div className="col-sm-3" style={{maxHeight: 700 + 'px'}}>
                    <div className="card border-info bg-info h-100" >
                        <div className="card-header">
                            <a className="h2" className="text-light" href={`games/${game._id}`}>{game.name}</a>
                        </div>
                        <div className="card-body d-flex flex-column">
                            <img className="mb-2 rounded-top img-thumbnail rounded mx-auto" src= {`${game.img}`} alt={`image of ${game.name}`}/>
                            <p className="text-dark font-weight-bold">{game.minPlayers} - {game.maxPlayers} Players</p>
                            <p className="text-dark font-weight-bold">Game Length: {game.lengthOfGame} Minutes</p>
                            <p className="text-dark font-weight-bold">Weight: {game.complexity}</p>
                            
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
module.exports= Index ;