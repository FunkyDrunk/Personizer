import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ProfilePage from '../components/profilePage';
import changeUserInfo from '../actions/profileActions/changeUserInfo';
import changePassword from '../actions/profileActions/changePassword';
import changeAvatar from '../actions/profileActions/changeAvatar';
import changeRole from '../actions/profileActions/changeRole';

class ProfilePageContainer extends PureComponent {
  state = {
    userInf:{
      firstName: this.props.profile.firstName || '',
      lastName: this.props.profile.lastName || '',
      job: this.props.profile.job || '',
    },
    passwordForms:{
      oldPassword: '',
      newPassword: '',
    },
    roleForm:'',
    avatarForm: '',
    activeChangeOption:'',
  }
  loginOut = () => {
    window.localStorage.removeItem('PersonToken');
    window.location.reload(true)
  }
  handleTogle = (event) => {
    // FIXME: ailed prop type: You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field.
    //If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`
    if(event.target.name === this.state.activeChangeOption)this.setState({activeChangeOption:''})
    else this.setState({
      activeChangeOption: event.target.name,
      userInf:{
      firstName: this.props.profile.firstName || '',
      lastName: this.props.profile.lastName || '',
      job: this.props.profile.job || '',
    } })
  }

  handleChange = (event) => {
    const name = event.target.id;
    const form = event.target.name;
    const value = event.target.value
    if (name === form ){
      this.setState({[name]:event.target.value})
    } else {
      this.setState({
        [form]:{
          ...this.state[form],
          [name]: value
        }
      });
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { userInf, passwordForms, roleForm, avatarForm  } = this.state;
    switch (event.target.name) {
      case 'userInf':
      this.props.changeUserInfo(userInf)
      this.setState({activeChangeOption:''})
        break;
      case 'passwordForms':
      this.props.changePassword(passwordForms)
      this.setState({activeChangeOption:''})
        break;
      case 'avatarForm':
      this.props.changeAvatar(avatarForm)
      this.setState({activeChangeOption:''})
        break;
      case 'roleForm':
      this.props.changeRole(roleForm)
      this.setState({activeChangeOption:''})
        break;
      default: return (<div>404</div>)
    }
  }


  render() {
    const { firstName, lastName, userLogin, job } = this.props.profile;
    return (
      <ProfilePage
      avatar={this.props.profile.avatar}
      avatarForm={this.state.avatarForm}
      handleChange={this.handleChange}
      handleSubmit={this.handleSubmit}
      name={firstName && lastName ? `${firstName} ${lastName}` : firstName||lastName||userLogin}
      firstName={this.state.userInf.firstName}
      lastName={this.state.userInf.lastName}
      jobForm={this.state.userInf.job}
      job={job}
      newPassword={this.state.passwordForms.newPassword}
      oldPassword={this.state.passwordForms.oldPassword}
      roleForm={this.state.roleForm}
      handleTogle={this.handleTogle}
      activeChangeOption={this.state.activeChangeOption}
      loginOut={this.loginOut}
      />
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    // push: bindActionCreators(push, dispatch),
    changeUserInfo: bindActionCreators(changeUserInfo, dispatch),
    changePassword: bindActionCreators(changePassword, dispatch),
    changeAvatar: bindActionCreators(changeAvatar, dispatch),
    changeRole: bindActionCreators(changeRole, dispatch),
  };
}

function mapStateToProps (state) {
  return {
    ...state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePageContainer);
