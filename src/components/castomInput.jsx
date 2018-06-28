import React, { PureComponent } from 'react';

class Input extends PureComponent {
  render() {
    return (
      <label htmlFor={this.props.id}>{this.props.label}
        <input {...this.props} />
      </label>
    );
  }
}

export default Input;
