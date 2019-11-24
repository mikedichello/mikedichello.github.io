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
            <h1 className="text-center">{this.props.title}</h1>
            <ul className="nav nav-tabs">
                <li className="nav-item-info">
                    <a className="nav-link" data-toggle="tab" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="/games">My Game Library</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="/New">Add New Game</a>
                </li>
            </ul>
          </header>
          <main>
            {this.props.children}
          </main>
          <footer className="text-center">
            <p>
              <a href="/games">My Library</a> |
              <a href="/games/new">Add New Game</a>
            </p>
            <p className="text-muted">©2019 Michael DiChello</p>
          </footer>
        </body>
      </html>

    )
  }
}
module.exports= AppLayout;