import React, { PureComponent } from 'react';

import '../styles/profilePage.css';

class ProfilePage extends PureComponent {
  render() {
    return (
      <div className="profile-page">
        <div className="profile-page-content" >
          <img src={this.props.avatar || 'http://buzza.ru/uploads/memes/1721f186dc9dc90fa4d972186bc636c7/loSYnR.jpg'} className="profile-avatar" alt="user avatar" />
          <p>{this.props.name}</p>
          <p>{this.props.job}</p>
        </div>
        <div className="profile-page-content" >
          <button name="changeInfo" onClick={this.props.handleTogle}>
            Change user info
          </button>
          {this.props.activeChangeOption === 'changeInfo' && <div className="profile-page-content-userinfo">
            <form name="userInf" onSubmit={this.props.handleSubmit} onChange={this.props.handleChange} >
              <label htmlFor="firstName" >First Name
                <input name="userInf" value={this.props.firstName} type="text" id="firstName" />
              </label>
              <label htmlFor="lastName" >Last Name
                <input name="userInf" value={this.props.lastName} type="text" id="lastName" />
              </label>
              <label htmlFor="job" >Job
                <input name="userInf" value={this.props.jobForm} type="text" id="job" />
              </label>
              <button type="submit" >Ok</button>
            </form>
          </div>
        }
        </div>
        <div className="profile-page-content" >
          <button name="changePassword" onClick={this.props.handleTogle} >Change password</button>
          {this.props.activeChangeOption === 'changePassword' && <div className="profile-page-content-userinfo">
            <form name="passwordForms" onSubmit={this.props.handleSubmit} onChange={this.props.handleChange} >
              <label htmlFor="oldPassword" >Old password
                <input name="passwordForms" value={this.props.oldPassword} type="text" id="oldPassword" />
              </label>
              <label htmlFor="newPassword" >New password
                <input name="passwordForms" value={this.props.newPassword} type="text" id="newPassword" />
              </label>
              <button type="submit" >Ok</button>
            </form>
          </div>
        }
        </div>
        <div className="profile-page-content" >
          <button name="changeAvatar" onClick={this.props.handleTogle}>Change avatar</button>
          {this.props.activeChangeOption === 'changeAvatar' && <div className="profile-page-content-userinfo">
            <form name="avatarForm" onSubmit={this.props.handleSubmit} onChange={this.props.handleChange} >
              <label htmlFor="avatarForm" >Avatar URL
                <input name="avatarForm" value={this.props.avatarForm} type="text" id="avatarForm" />
              </label>
              <button type="submit" >Ok</button>
            </form>
          </div>
        }
        </div>
        <div className="profile-page-content" >
          <button name="changeRole" onClick={this.props.handleTogle} >Change role</button>
          {this.props.activeChangeOption === 'changeRole' && <div className="profile-page-content-userinfo">
            <form name="roleForm" onSubmit={this.props.handleSubmit} onChange={this.props.handleChange} >
              <label>Chose you role
                <select name="roleForm" id="roleForm">
                  <option>user</option>
                  <option>leed</option>
                  <option>admin</option>
                </select>
              </label>
              <button type="submit" >Ok</button>
            </form>
          </div>
        }
        </div>
      </div>

    );
  }
}

export default ProfilePage;
