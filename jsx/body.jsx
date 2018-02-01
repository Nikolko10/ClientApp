import React from 'react';


export default class Body extends React.Component {
  constructor(props) {
    super(props);
  }

  handleDelete(index, id) {
    this.props.delete(index, id);
  }

  render() {
    return (
    <tbody>
      {this.props.data.length === 0 ? <tr className='empty'><td colSpan='5'>Table is empty</td></tr> : this.props.data.map((element, index) =>
        <tr key={index} data-id={index}>
          {element.map((item, i) =>
            element.length - 1 != i ? <td key={i}>{item === false ? 'Man' : item === true ? 'Woman' : item }</td> : 
            <td key={i} data-id={index}>
              <button type='button' className='btn btn-danger btn-sm' data-index={item} onClick={this.handleDelete.bind(this, index ,item)}>Delete</button>
            </td>
          )}
        </tr>
      )}
    </tbody>
  )
  }
} 