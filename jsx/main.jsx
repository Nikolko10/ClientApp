import React from 'react';
import sortMultidimensionalArrayFunc from 'sort-multidimensional-array-func';
import Body from './body.jsx';
import Header from './header.jsx';
import Form from './form.jsx';

const TABLE_COLUMNS = [
  {
    label: 'First name',
    sort: 'default',
  },{
    label: 'Last name',
    sort: 'default',
  },{
    label: 'Phone',
    sort: 'default',
  },{
    label: 'Gender',
    sort: 'default',
  },{
    label: 'Age',
    sort: 'default',
  }
];

export default class Main extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
      		data: [],
      		columns: TABLE_COLUMNS
    	}
	}

	componentWillMount() {
		const { data } = this.props;
		this.setState({ 
			data: localStorage.data ? JSON.parse(localStorage.data) : []
		});
	}

  	sortTableFunc(id, sortMethod) {
    	const { data, columns } = this.state;
	
    	let currentSortMethod = 'default';
	
    	switch (sortMethod) {
    	    case 'default':
    	        currentSortMethod = 'asc';
    	        break;
    	    case 'asc':
    	        currentSortMethod = 'desc';
    	        break;
    	    case 'desc':
    	        currentSortMethod = 'asc';
    	        break;
    	    default:
    	        currentSortMethod = 'asc';
    	}
	
    	const changeColumn = columns.map((e, i) =>
    	    ({ ...e, sort: i == id ? currentSortMethod : 'default' })
    	);
	
    	const sortData = sortMultidimensionalArrayFunc(data, id, currentSortMethod);
	
    	this.setState({
    	    data: sortData,
    	    columns: changeColumn
    	});
	}

	handleDelete(index, id) {
		var state = this.state.data;
		state.splice(index, 1);
		localStorage.data = JSON.stringify(state);
		this.setState({
			data: state
		});
	}

	handleAdd(data) {
		var state = this.state.data;
		state.push(data);
		localStorage.data = JSON.stringify(state);
		this.setState({
			data: state
		});
	}

	render() {
		return <div className='container'>
			<div className='row'>
				<div className='col-lg-4 col-md-5 col-md-push-0 col-sm-6 col-sm-push-3 col-xs-8 col-xs-push-2'>
					<Form add={(data) => this.handleAdd(data)} />
				</div>
				<div className='col-lg-8 col-md-7 col-sm-12 col-xs-12'>
					<table className='table table-hover table-bordered'>
						<Header columns={this.state.columns} onClick={this.sortTableFunc.bind(this)} />
						<Body data={this.state.data} delete={(index, id) => this.handleDelete(index, id)} />
					</table>
				</div>
			</div>
		</div>
	}
}