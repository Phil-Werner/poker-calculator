import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import club from './images/club.jpg';
import back from './images/back.png';
import aceclub from './images/aceclub.png';
import kingclub from './images/kingclub.png';
import queenclub from './images/queenclub.png';
import * as serviceWorker from './serviceWorker';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

class BottomCard extends React.Component {
  render() {

    if (!this.props.cardChosen) {

      return <img src={back} alt="back" />
    }

    else {

      if (this.props.firstCard === "aceclub") {
        return <img src={aceclub} alt="aceOfClubs" />
      }

      if (this.props.firstCard === "kingclub") {
        return <img src={kingclub} alt="kingOfClubs" />
      }

      if (this.props.firstCard === "queenclub") {
        return <img src={queenclub} alt="queenOfClubs" />
      }

    }

  }
}


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstCardChosen: false,
      firstCard: '',
    };

    this.click = this.click.bind(this);
  }

  click(event, card) {
    event.preventDefault();
    console.log("You clicked on ", card);

    this.setState({firstCardChosen: true, firstCard: card});

    console.log("The first card is chosen: ", this.state.firstCardChosen)

  }


  render() {

    return (
      <div>
        <div className="test">
          testtt!!!
        </div>
        <div className="top-card" id="ace-of-clubs" onClick={(e) => {
          this.click(e, "aceclub")
        }}>
          A<img src={club} alt="club" id="top-club" />
        </div>
        <div className="top-card" id="king-of-clubs" onClick={(e) => {
          this.click(e, "kingclub")
        }}>
          K<img src={club} alt="club" id="top-club" />
        </div>
        <div className="top-card" id="queen-of-clubs" onClick={(e) => {
          this.click(e, "queenclub")
        }}>
          Q<img src={club} alt="club" id="top-club" />
        </div>
        <BottomCard cardChosen={this.state.firstCardChosen} firstCard={this.state.firstCard} />
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
