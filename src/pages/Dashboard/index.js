import React, { Component } from 'react';
import {Redirect, withRouter} from 'react-router-dom';
import { Button, Card, Header, Dimmer, Loader} from 'semantic-ui-react'
import { connect } from 'react-redux';
import { saveUser } from '../../actions/user';

class Dashboard extends Component {
constructor(){
   super();
   this.state = {
    userList: [{
      id:1,
     name:"test1",
     age : "11",
     gender:"male",
     email : "test1@gmail.com",
     phoneNo : "9415346313"
     },
     {
     id : 2,
     name:"test2",
     age : "12",
     gender:"male",
     email : "test2@gmail.com",
     phoneNo : "9415346314"
     },
     {
     id:3,
     name:"test3",
     age : "13",
     gender:"male",
     email : "test3@gmail.com",
     phoneNo : "9415346315"
     },
     {
     id:4,
     name:"test4",
     age : "14",
     gender:"male",
     email : "test4@gmail.com",
     phoneNo : "9415346316"
     },
     {
     id:5,
     name:"test5",
     age : "15",
     gender:"male",
     email : "test5@gmail.com",
     phoneNo : "9415346317"
     },
     {
     id:6,
     name:"test6",
     age : "16",
     gender:"male",
     email : "test6@gmail.com",
     phoneNo : "9415346318"
     }
     ]
   }
}

logout(){
     this.props.saveUser({username:''});
     this.props.history.push('/')
}
 
  render() {
     let {user} = this.props;
     let {userList} = this.state;
     if(!user.username){
         return  <Redirect to="/"/>
     }
     console.log('userList is .. ',userList)
    return (
         <React.Fragment>
              <Header as='h2'>
                  {user.username}
                  <Button basic color='blue' content='Log out' floated='right' onClick={()=>this.logout()}/>
              </Header>
              <Card.Group>
              {
              (userList)?(
                userList.length > 0 ? (
                  userList.map((user,key)=>{
                      let {id,name,age,gender,email,phoneNo} = user;
                        return   <Card key={key} raised={true} className="jobcard">
                        <Card.Content>
                          <Card.Header>{name}</Card.Header>
                              <Header as='h4'>Employee Details</Header>
                            
                          {
                              (gender)?(
                                  <p className='margin5' as='h5' >Gender - <span className="bold">{gender}</span> (<i class={`${gender} icon`}></i>)</p>
                              ):(null)
                          }
                          {
                              (email)?(
                                  <p className='margin5'>Email - <span className="bold capitalize">{email}</span></p>
                              ):(null)
                          }
                            {
                              (phoneNo)?(
                                  <p className='margin5'>PhoneNo - <span className="bold capitalize">{phoneNo}</span></p>
                              ):(null)
                          }
                          {
                              (age)?(
                                  <p className='margin5'>AGE - <span className="bold">{age}</span></p>
                              ):(null)
                          }
                        </Card.Content>
                      </Card>
                    })
                  ) :( <Header as='h3' block>No results found.</Header>)
              ):(
                <Dimmer active>
                <Loader inverted>Loading</Loader>
              </Dimmer>
              )
          }
                 </Card.Group>
         </React.Fragment>
    );
  }
}




// Get state data from store to props
const mapStateToProps = (state) => {
    return {
        user: state.user.user,
        userList: state.user.userList
    };
  }
  
  // Get actions to handle store data
  const mapDispatchToProps = (dispatch) => {
    return {
        saveUser: (data) => dispatch(saveUser(data)),
    };
  }
  
  // Wire it all up and export
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));
  

