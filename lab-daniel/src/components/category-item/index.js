import React from 'react';
import CategoryForm from '../category-form/';
import {connect} from 'react-redux';
import {renderIf} from '../../lib/utils';
import {categoryUpdate, categoryDelete} from '../../actions/category-actions';

class CategoryItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = this.props.category;
    this.state.editing = false;
    this.handleDoubleClick = this.handleDoubleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  
  handleDoubleClick () {
    this.setState({editing: !this.state.editing});
  }

  handleDelete () {
    this.props.categoryItemCategoryDelete(this.state);
  }

  render() {
    return (
      <div onDoubleClick={this.handleDoubleClick}>
        <h3>Category: {this.props.category.title}</h3>
        <p>Budget: ${this.props.category.budget}</p>
        <button onClick={this.handleDelete}>Delete</button>
        {renderIf(this.state.editing, <CategoryForm category={this.props.category} buttonText='update' onComplete={this.props.categoryItemCategoryUpdate}/>)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state,
});

const mapDispatchToProps = (dispatch, getState) => ({
  categoryItemCategoryUpdate: category => dispatch(categoryUpdate(category)),
  categoryItemCategoryDelete: category => dispatch(categoryDelete(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);