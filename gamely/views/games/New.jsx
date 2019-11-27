const React = require('react');
const AppLayout= require('../layouts/AppLayout.jsx')

class Edit extends React.Component{
  render() {
    return (
      <AppLayout title="Add New Game">
        <h1>NEW GAME</h1>
      <form action={`/games`} method="post">
        <p>
          <label>Name:</label>
          <input type="text" value="Name" name="name"/>
        </p>
        <p>
          <label>Description:</label>
          <input type="textarea" value="Description" name="description"/>
        </p>
        <p>
          <label>Image Link:</label>
          <input type="text" value="INSERT URL HERE" name="img"/>
        </p>
        <p>
          <label>Minimum Players:</label>
          <input type="number" value="1" name="minPlayers"/>
        </p>
        <p>
          <label>Maximum Players:</label>
          <input type="number" value="1" name="maxPlayers"/>
        </p>
        <div class="form-group">
            <label for="complexity">Weight (Complexity):</label>
            <select class="form-control" value="Light" name="complexity" id="complexity">
                <option>Light</option>
                <option>Medium</option>
                <option>Heavy</option>
            </select>
        </div>
        <p>
          <label>Game Length (In Minutes):</label>
          <input type="number" value="Length in Minutes" name="lengthOfGame"/>
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