import React from 'react';
import CategoryForm from '../category-form/';
import {renderIf} from '../../lib/utils';
import {categoryUpdate} from '../../actions/category-actions';

class CategoryItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = this.props.category;
    this.state.editing = false;
    this.handleDoubleClick = this.handleDoubleClick.bind(this);
  }
  
  handleDoubleClick () {
    this.setState({editing: !this.state.editing});
  }

  render() {
    return (
      <div onDoubleClick={this.handleDoubleClick}>
        <h3>{this.props.category.title}</h3>
        {renderIf(this.state.editing, <CategoryForm category={this.props.category} onComplete={this.props.onComplete}/>)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state,
});

const mapDispatchToProps = (dispatch, getState) => ({
  categoryItemCategoryUpdate: category => dispatch(categoryUpdate(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);