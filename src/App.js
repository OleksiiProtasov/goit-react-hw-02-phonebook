// import moduleName from './Components/input/';
import { Component } from "react";
import Container from "./Components/Container";
import Input from "./Components/input/inputN";

class App extends Component {
  state = {
    contacts: [],
    name: "",
  };

  // handleChangeStats = (name) => {
  //   this.setState((prev) => ({
  //     [name]: prev[name] + 1,
  //   }));
  // };

  // getTotal = () => {
  //   const { good, bad, neutral } = this.state;
  //   return good + bad + neutral;
  // };

  // getPositivePercentage = () => {
  //   const { good } = this.state;
  //   return Math.round((good / this.getTotal()) * 100);
  // };

  render() {
    return (
      <>
        <Container>
          <Input></Input>
        </Container>
      </>
    );
  }
}

export default App;
