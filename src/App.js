// import moduleName from './Components/input/';
import { Component } from "react";
import shortid from "shortid";

import Container from "./Components/Container";
import Input from "./Components/input/input";
import PhoneList from "./Components/Phonebook";

class App extends Component {
  state = {
    contacts: [],
    name: "",
    number: "",
    filter: "",
    id: shortid.generate(),
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
          <PhoneList></PhoneList>
        </Container>
      </>
    );
  }
}

export default App;
