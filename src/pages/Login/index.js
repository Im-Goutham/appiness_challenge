import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Checkbox, Form } from 'semantic-ui-react'

import { saveUser } from '../../actions/user';
import './index.css';

class Login extends Component {

  constructor(props){
    super(props);
      this.state = {
           username: '',
           password: '',
           loginCredentials: {
             username: 'hruday@gmail.com',
             password: 'hruday123'
           }
      }
  }

  handleInput(e){
        this.setState({[e.target.name]:e.target.value});
  }
 
  login(){
      let {username,password,loginCredentials} = this.state;
      if(!username || !password){
        alert('username and password is required.');
        return false;
      }
      if(username != loginCredentials.username){
        alert('username is wrong.')
         return false;
      }
      if(password != loginCredentials.password){
        alert('password is wrong.')
         return false;
      }
      this.props.saveUser({username});
      this.props.history.push('me/dashboard');
  }

  render() {
    let {user} = this.props;
    if(user.username){
        return  <Redirect to="/me/dashboard"/>
    }
    console.log('username .. ',this.state.username);
    console.log('password .. ',this.state.password);
    return (
         <React.Fragment>
           <div className="login">
           <Form>
              <Form.Field>
                <label>Username</label>
                <input placeholder='First Name' name='username'
                    onChange={(e)=>this.handleInput(e)}
                />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input placeholder='Password' name='password' type='password'
                    onChange={(e)=>this.handleInput(e)}
                />
              </Form.Field>
              <Button type='submit' onClick={()=>this.login()}>Login</Button>
            </Form>
          </div>     
         </React.Fragment>
    );
  }
}






// Get state data from store to props
const mapStateToProps = (state) => {
  return {
      user: state.user.user
  };
}

// Get actions to handle store data
const mapDispatchToProps = (dispatch) => {
  return {
      saveUser: (data) => dispatch(saveUser(data)),
  };
}

// Wire it all up and export
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));

