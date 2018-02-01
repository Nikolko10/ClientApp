import React from 'react';

export default class Form extends React.Component {

	handleIsValidation(event) {
		event.preventDefault();

		function ID() {
  			return '_' + Math.random().toString(36).substr(2, 9);
		};

		const { first, last, phone, age } = this.refs;
		let data = [];

		if (first.value === '') {
			first.offsetParent.parentElement.classList.add('has-error')
		} else {
			first.offsetParent.parentElement.classList.remove('has-error')
		}

		if (last.value === '') {
			last.offsetParent.parentElement.classList.add('has-error')
		} else {
			last.offsetParent.parentElement.classList.remove('has-error')
		}

		if (phone.value === '') {
			phone.offsetParent.parentElement.classList.add('has-error')
		} else {
			phone.offsetParent.parentElement.classList.remove('has-error')
		}

		if (age.value === '' ||  isNaN(+age.value)) {
			age.offsetParent.parentElement.classList.add('has-error')
		} else {
			age.offsetParent.parentElement.classList.remove('has-error')
		}

		if (first.value === '' || last.value === '' || phone.value === '' || age.value === '' || isNaN(+age.value)) {
			return false
		} else {
			let gender = false;
			this.refs.GENDER.checked === false ? gender : gender = true
			data.push(first.value, last.value, phone.value, gender, +age.value, ID());
			this.props.add(data);
			first.value = last.value = phone.value = age.value = '';
		}
	}

	hideErrorFields(event) {
		let blocks = document.querySelectorAll('.has-error');
		for(let value of blocks) {
			if (value.classList.contains('has-error')) {
				value.classList.remove('has-error')
			}
		}
	}

	render() {
		return <div>
			<p className='title'>Add client</p>
			<form className='form-horizontal'>
			<div className="form-group">
    			<label htmlFor="exampleInputEmail1" className='col-sm-4 control-label'>First name</label>
    			<div className='col-sm-8'>
    				<input type="text" ref='first' className="form-control" id="exampleInputEmail1" placeholder="First name" />
    			</div>
  			</div>
  			<div className="form-group">
    			<label htmlFor="exampleInputEmail1" className='col-sm-4 control-label'>Last name</label>
    			<div className='col-sm-8'>
    				<input type="text" ref='last' className="form-control" id="exampleInputEmail1" placeholder="Last name" />
    			</div>
  			</div>
  			<div className="form-group">
    			<label htmlFor="exampleInputEmail1" className='col-sm-4 control-label'>Phone</label>
    			<div className='col-sm-8'>
    				<input type="text" ref='phone' className="form-control" id="exampleInputEmail1" placeholder="Phone" />
    			</div>
  			</div>
  			<div className="form-group">
  				<label htmlFor="exampleInputEmail1" className='col-sm-4 control-label'>Gender</label>
  				<div className='col-sm-8'>
  					<label className="radio-inline">
  						<input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" defaultChecked /> Man
					</label>
					<label className="radio-inline">
  						<input type="radio" name="inlineRadioOptions" ref='GENDER' id="inlineRadio2" value="option2" /> Woman
					</label>
  				</div>
			</div>
  			<div className="form-group">
    			<label htmlFor="exampleInputEmail1" className='col-sm-4 control-label'>Age</label>
    			<div className='col-sm-8'>
    				<input type="text" ref='age' className="form-control" id="exampleInputEmail1" placeholder="Age" />
    			</div>
  			</div>
  			<div className='button_add'>
  				<input className="btn btn-success" type="submit" onBlur={this.hideErrorFields} onClick={this.handleIsValidation.bind(this)} defaultValue="Add" />
  			</div>
		</form>
		</div>
	}
}