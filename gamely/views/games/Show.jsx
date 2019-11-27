const React = require('react');
const AppLayout= require('../layouts/AppLayout.jsx');

class Show extends React.Component{
  render() {
    return (
    <AppLayout title={`${this.props.name}`}>

    {
        <div className="container">
            <div className="jumbotron border-info my-5">
                <img className="img-thumbnail w-25" src={`${this.props.img}`} alt={`${this.props.name}`}/>
                <h2 className="my-4 disply-2">{this.props.description}</h2>
                <h4 className="my-3">For {this.props.minPlayers} - {this.props.maxPlayers} Players</h4>
                <h4 className="my-3">Game Length: {this.props.lengthOfGame} Minutes</h4>
                <h4 className="my-3">Weight: {this.props.complexity}</h4>
                <div className="d-flex flex-row justify-content-center">
                    <a className="btn btn-lg mx-5 btn-outline-info" href={`/games/edit/${this.props._id}`}>Edit</a>
                    <form action={`/games/${this.props._id}?_method=delete`} method="post">
                    <input className="btn btn-lg mx-5 btn-outline-warning" type="submit" value="Delete" />
                    </form>
                </div>
                
            </div>
        </div>
    }
    </AppLayout>
    )
  }
}
module.exports= Show;