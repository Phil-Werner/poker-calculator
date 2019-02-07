import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import club from './images/club.jpg';
import back from './images/back.png';
import kingClub from './images/kingClub.png';
import * as serviceWorker from './serviceWorker';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

class BottomCard extends React.Component {
  render() {

    if (!this.props.cardChosen) {

      return <img src={back} />
    }

    else {

      return <img src={kingClub} />
    }
  }
}


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstCardChosen: false,
    };

    this.click = this.click.bind(this);
  }

  click(event, rank, suit) {
    event.preventDefault();
    console.log("You clicked on the",rank, "of", suit, "s");

    this.setState({firstCardChosen: true});

    console.log("The first card is chosen: ", this.state.firstCardChosen)

  }


  render() {

    return (
      <div>
        <div>
          <Welcome name="Sara" />
          <Welcome name="Cahal" />
          <Welcome name="Edite" />
        </div>
        <div className="test">
          testtt!!!
        </div>
        <div className="top-card" id="ace-of-clubs" onClick={(e) => {
          this.click(e, "A", "club")
        }}>
          A<img src={club} alt="club" id="top-club" />
        </div>
        <div className="top-card" id="king-of-clubs" onClick={(e) => {
          this.click(e, "K", "club")
        }}>
          K<img src={club} alt="club" id="top-club" />
        </div>
        <div className="top-card" id="queen-of-clubs" onClick={(e) => {
          this.click(e, "Q", "club")
        }}>
          Q<img src={club} alt="club" id="top-club" />
        </div>
        <BottomCard cardChosen={this.state.firstCardChosen} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
