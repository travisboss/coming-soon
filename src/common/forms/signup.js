import React from 'react';
import axios from 'axios'
//import { LightCta } from '../buttons/cta.js';

const formUrl = 'https://script.google.com/macros/s/AKfycbz4hT14AOvw48nUASRiw87m45XvIQ58Xu_GkBvzb92EHTcyMxni/exec'

class EmailForm extends React.Component {
  state = {
    name: '',
    email: '',
    emailIsValid: false,
    submitted: false
  }

  updateValues = (e) => {
    e.preventDefault()
    this.setState({[e.target.name]: e.target.value})
    this.validateEmail()
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { name, email } = this.state

    axios({
      method: 'get',
      url: `${formUrl}?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`
    })


    this.setState({submitted: true})
  }
  render() {
    return (
      <form
      onChange={this.props.onChange}
      onSubmit={this.props.onSubmit}
      className='flex justify-around items-center'
    >
      <label className='mr3 avenir mt0 dark-gray'>
        Your Email Address
      </label>

        <label className='mr3'>
          <input
            type='text'
            name='email'
            placeholder='email'
            ref={node => (this.emailNode = node)}
          />
      </label>

      <button className='f6 pa2 avenir dim'>
        Submit
      </button>
    </form>
    )
  }
}

export default EmailForm;
