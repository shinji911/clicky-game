import React, { Component } from "react";
import CharCard from "./components/CharCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Info from "./components/Info";
import charArray from "./chars.json";

class App extends Component {
  state = {
    charArray: charArray,
    info: "Click a character to start. Don't click on the same character!",
    score: 0
  };

  resetGame = () => {
    const newCharArray = this.state.charArray.map(char => {
      char.clicked = false;
      return char;
    });
    this.shuffleArray(newCharArray);
    this.setState({ charArray: newCharArray, info: "Ya done messed up! Restarting!", score: 0 })
  };

  charClick = (id, clicked) => {
    if (clicked === true) {
      this.resetGame();
    } else {
      const newCharArray = this.state.charArray.map(char => {
        if (char.id === id) {
          char.clicked = true;
          return char;
        } else {
          return char;
        }
      });
      this.shuffleArray(newCharArray);
      this.setState({ charArray: newCharArray, info: "You managed to Not Fail", score: this.state.score + 1 });
    };
  };

  shuffleArray = array => {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  render() {
    return (
      <Wrapper>
        <Title>
          Clicky Game
          <Info
            score={this.state.score}
            text={this.state.info}
          ></Info>
        </Title>
        {this.state.charArray.map(char => (
          <CharCard
            charClick={this.charClick}
            id={char.id}
            key={char.id}
            clicked={char.clicked}
            name={char.name}
            image={char.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
