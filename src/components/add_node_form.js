import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { addNodeAction } from '../actions';

class AddNodeForm extends Component {

    renderField(field) {

        const { meta } = field;

        return (
            <div>
                <input type="text" {...field.input} placeholder={field.placeholder} />
                <br />
                {meta.touched && meta.error}
            </div>
        );
    }

    onSubmit(form) {
        this.props.addNodeAction(form.node);
        form.node = '';
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
                <Field name="node" component={this.renderField} placeholder="New Node" />
            </form>
        );
    }
};

function validateForm(form) {
    const err = {};

    if (!form.node) {
        err.node = 'Node is required'

    } else if (isNaN(form.node)) {
        err.node = 'Node must be a number';
    }

    if (err.node) {
        form.node = '';
    }

    return err;
}

export default reduxForm({
    form: 'addNodeForm',
    validate: validateForm
})(
    connect(null, { addNodeAction })(AddNodeForm)
);