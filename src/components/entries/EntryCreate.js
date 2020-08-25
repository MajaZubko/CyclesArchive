import React from 'react';
import { Field, reduxForm } from 'redux-form';

class EntryCreate extends React.Component {
	renderError({ error, touched }) {
		if (touched && error) {
			return (
				<div className="error-field">
					<div className="error-header">{error}</div>
				</div>
			);
		}
	}

	renderInput = ({ input, label, type, step, meta }) => {
		const className = `field ${meta.error && meta.touched ? 'error' : ''}`;

		return (
			<div className={className}>
				<label>{label}</label>
				<input {...input} type={type} step={step} autoComplete="off" />
				{this.renderError(meta)}
			</div>
		);
	};

	onSubmit(formValues) {}

	render() {
		return (
			<form onSubmit={this.props.handleSubmit(this.onSubmit)}>
				<Field name="date" component={this.renderInput} label="Enter date" type="date" />
				<Field name="temperature" component={this.renderInput} label="Enter temperature" type="number" step=".01" />
				<button className="submit-button">Submit</button>
			</form>
		);
	}
}

const validate = (formValues) => {
	const errors = {};

	if (!formValues.date) {
		errors.date = 'You must enter a date';
	}

	if (!formValues.temperature) {
		errors.temperature = 'You must enter a temperature';
	}

	return errors;
};

export default reduxForm({
	form: 'entryCreate',
	validate
})(EntryCreate);
