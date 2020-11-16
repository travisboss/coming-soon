import React from 'react';
//import { LightCta } from '../buttons/cta.js';


class EmailForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ""};
    // testing
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <form>
        <iframe title="signup form" src="https://docs.google.com/forms/d/e/1FAIpQLScHL4qQa-5RzDHtMtpb2C1A3KCebde-m4rMuWayUhwzGZ8hLg/viewform?embedded=true" width="700" height="600" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      </form>
    )
  }
}

export default EmailForm;
