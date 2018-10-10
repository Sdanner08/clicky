import React, { Component } from 'react';
import './App.css';

//importing local files
import Wrapper from './components/Wrapper'
import Nav from './components/Nav'
import Title from './components/Title'
import doctor from './doctor.json'
import ImgCard from './components/ImgCard'

class App extends Component {
  state = {
      message: "Click an image to begin!",
      topScore: 0,
      curScore: 0,
      doctor: doctor,
      unselectedDoctor: doctor
  }

  componentDidMount() {
  }

  shuffleArray = array => {
      for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
  }

  selectDoctor = doctor => {
      const findDoctor = this.state.unselectedDoctor.find(item => item.doctor === doctor);

      if(findDoctor === undefined) {
          // failure to select a new doctor
          this.setState({ 
              message: "You guessed incorrectly!",
              topScore: (this.state.curScore > this.state.topScore) ? this.state.curScore : this.state.topScore,
              curScore: 0,
              doctor: doctor,
              unselectedDoctor: doctor
          });
      }
      else {
          // success to select a new doctor
          const newDoctor = this.state.unselectedDoctor.filter(item => item.doctor !== doctor);
          
          this.setState({ 
              message: "You guessed correctly!",
              curScore: this.state.curScore + 1,
              doctor: doctor,
              unselectedDoctor: newDoctor
          });
      }

      this.shuffleArray(doctor);
  };

  render() {
      return (
          <Wrapper>
              <Nav
                  message={this.state.message}
                  curScore={this.state.curScore}
                  topScore={this.state.topScore}
              />
              <Title />
              {
                  this.state.doctor.map(doctor => (
                      <ImgCard
                          doctor={doctor.doctor}
                          image={doctor.image}
                          selectDoctor={this.selectDoctor} 
                          curScore={this.state.curScore}
                      />
                  ))
              }
          </Wrapper>
      );
  }
}

export default App;
