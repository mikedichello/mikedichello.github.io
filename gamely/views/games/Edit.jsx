const React = require('react');
const AppLayout= require('../layouts/AppLayout.jsx')

class Edit extends React.Component{
  render() {
    return (
      <AppLayout title="Edit Page">
        <h1>EDIT GAME</h1>
      <form action={`/games/${this.props._id}?_method=put`} method="post">
        <p>
          <label>Name:</label>
          <input type="text" value={this.props.name} name="name"/>
        </p>
        <p>
          <label>Description:</label>
          <input type="textarea" value={this.props.description} name="description"/>
        </p>
        <p>
          <label>Image Link:</label>
          <input type="text" value={this.props.img} name="img"/>
        </p>
        <p>
          <label>Minimum Players:</label>
          <input type="number" value={this.props.minPLayers} name="minPlayers"/>
        </p>
        <p>
          <label>Maximum Players:</label>
          <input type="number" value={this.props.maxPlayers} name="maxPlayers"/>
        </p>
        <div class="form-group">
            <label for="complexity">Weight (Complexity):</label>
            <select class="form-control" value={this.props.weight} name="complexity" id="complexity">
                <option>Light</option>
                <option>Medium</option>
                <option>Heavy</option>
            </select>
        </div>
        <p>
          <label>Game Length:</label>
          <input type="number" value={this.props.lengthOfGame} name="lengthOfGame"/>
        </p>
        <p>
          <input type="submit" value="Submit"/>
        </p>
      </form>
      </AppLayout>
    )
  }
}
module.exports= Edit;