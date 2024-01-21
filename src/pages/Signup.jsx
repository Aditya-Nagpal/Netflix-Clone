import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import BackgroundImage from '../components/BackgroundImage'

export default function Signup() {
  return (
    <Container>
      <BackgroundImage />
      <Header />
      <div className="body flex column a-center j-center">
        <div className="text flex column">
          <h1>Unlimited movies, TV shows and more</h1>
          <h4>Watch anywhere. Cancel anytime</h4>
          <h6>Ready to watch? Enter your email to create or restart membership</h6>
        </div>
        <div className="form">
          <input type="email" placeholder='Email Address' name='email' />
          <input type="password" placeholder='Password' name='password' />
          <button>Get Started</button>
        </div>
        <button>Login In</button>
      </div> 
    </Container>
  )
}

const Container=styled.div``;
