import React from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";

class UserForm extends React.Component {
  constructor() {
    super();

    this.state = {
      step: 1,
      firstName: "",
      lastName: "",
      email: "",
      occupation: "",
      city: "",
      bio: ""
    };
  }

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Previous Step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  handleChange = input => e => {
    this.setState({
      [input]: e.target.value
    });
  };

  render() {
    const {
      step,
      firstName,
      lastName,
      email,
      occupation,
      city,
      bio
    } = this.state;

    const values = { step, firstName, lastName, email, occupation, city, bio };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <h1>
            <FormPersonalDetails />
          </h1>
        );
      case 3:
        return (
          <h1>
            <Confirm />
          </h1>
        );
      case 4:
        return (
          <h1>
            <Success />
          </h1>
        );
    }
  }
}

export default UserForm;
