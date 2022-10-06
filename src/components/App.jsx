import { Component } from 'react';
// import { User } from "./User/User";
import { Feedback } from "./Feedback";
// import { users } from "data/users"
// import { Section } from "./Section/Section";
// import { Button } from './Button';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 1,
  };

  
  countGoodFeedback = (e) => {
    this.setState((prevState) => {
      const keys = Object.keys(prevState)
      const element = keys.filter(key => key === e.target.name)
      return {
        [e.target.name]: prevState[element] + 1,
      };
    })
  }


  // userDelete = (userId) => {
  //   this.setState(prevState => ({
  //     users: prevState.users.filter(user => user.id !== userId)
  //   }))
  // }

  // clickHandler = () => {
  //   this.setState({ isListShown: true });
  // };

  // userDelete = (userId) => {
  //   this.setState(prevState => ({
  //     users: prevState.users.filter(user => user.id !== userId)
  //   }))
  // }

  // changeJobStatus = (userId) => {
  //   this.setState(prevState => ({
  //     users: prevState.users.map(user => {

  //       if (user.id === userId) {
  //         return {
  //           ...user,
  //           hasjob: !user.hasjob,
  //         }
  //       }
  //       return user

  //     }),
  //   }));
  // }

  render() {
    
    return (
      <>
        
         <Feedback options={this.state} countGoodFeedback={ this.countGoodFeedback } />
        
        
      </>
    );
  }
}