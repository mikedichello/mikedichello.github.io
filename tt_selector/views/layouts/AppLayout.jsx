const React = require('react');

class AppLayout extends React.Component{
  render() {
    return (
      <html>
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width" />
          <title>{this.props.title}</title>
          <link  href="/css/normalize.css" rel="stylesheet"/>
          <link href="/css/bootstrap.css" rel="preload" as="style" />
          <link href="/css/bootstrap.css" rel="stylesheet" /> 
        </head>
        <body>
          <header>
            <h1>{this.props.title}</h1>
            <ul className="nav nav-tabs">
                <li className="nav-item-info">
                    <a className="nav-link active" data-toggle="tab" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="/games/Library">My Game Library</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="/New">Add New Game</a>
                </li>
            </ul>
          </header>
          <main>
            {this.props.children}
          </main>
          <footer>
            <h4></h4>
          </footer>
        </body>
      </html>

    )
  }
}
module.exports= AppLayout;