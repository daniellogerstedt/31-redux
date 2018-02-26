import React from 'react';

class CategoryForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = this.props.category? this.props.category : {
      title: '',
      budget: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(this.state);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    return (
      <form className='category-form' onSubmit={this.handleSubmit}>
        <input 
          type='text' 
          name='title'
          value={this.state.title}
          onChange={this.handleChange}
          placeholder='Insert Title Here'/>
        <input
          type='number'
          name='budget'
          value={this.state.budget}
          onChange={this.handleChange} />
        <button type='submit'>{this.props.buttonText}</button>
      </form>
    );
  }
}

export default CategoryForm;