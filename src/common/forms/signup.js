import React, { Component } from 'react'
import axios from 'axios'
import validator from 'email-validator'
//import { LightCta } from '../buttons/cta.js';

const formUrl = 'https://script.google.com/macros/s/AKfycbz4hT14AOvw48nUASRiw87m45XvIQ58Xu_GkBvzb92EHTcyMxni/exec';
const ThankYou = () => <div className='fw4 lh-title mt0 avenir white'>Thank You!</div>;

class ContactForm extends Component {
  render() {
    const showEmailError = this.emailNode && !this.props.emailIsValid
    return (
      <form
        onChange={this.props.onChange}
        onSubmit={this.props.onSubmit}
        className='flex justify-around items-center'
      >
        <label className='mr3 avenir mt0 white'>
          Your Name and Email Address
        </label>

          <label className='mr3'>
            <input
              type='text'
              name='name'
              placeholder='name'
              ref={node => (this.nameNode = node)}
            />
        </label>

          <label className='mr3'>
            <input
              type='text'
              name='email'
              placeholder='email'
              className={`${showEmailError ? 'pv2 ba b--light-red' : ''}`}
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

class EmailForm extends Component {
  state = {
    name: '',
    email: '',
    emailIsValid: false,
    submitted: false
  }

  validateEmail = () => {
    this.setState({emailIsValid: validator.validate(this.state.email)})
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
    const { emailIsValid, submitted } = this.state

    return (
      <div className='center'>
        {submitted
          ? <ThankYou />
          : <ContactForm
              onChange={this.updateValues}
              onSubmit={this.handleSubmit}
              emailIsValid={emailIsValid}
            />
        }
      </div>
    )
  }
}

export default EmailForm;