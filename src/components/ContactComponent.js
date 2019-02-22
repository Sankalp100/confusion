import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Label, Form, FormGroup, Col, Input } from 'reactstrap'; 
import { Link } from 'react-router-dom';

class Contact extends Component {

    state = {
        firstname: '',
        lastname: '',
        telnum: '',
        agree: false,
        contactType: 'Tel.',
        message: ''
    }

     render() {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contact Us</h3>
                        <hr />
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            D-34, Shanti Path, Patrakar Colony<br />
                            Jawahar Nagar, RajaPark<br />
                            JAIPUR, RAJASTHAN<br />
                            <i className="fa fa-phone"></i>: +91 9166138950<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:ajayraj003016@gmail.com">ajayraj003016@gmail.com</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send us Your Feedback</h3>
                    </div>
                    <div className="col-12 md-9">
                        <Form>
                            <FormGroup row>
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="firstname" name="firstname"
                                            placeholder="First Name"
                                            value={this.state.firstname} />
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
        </div>
     );
 }
     
}

export default Contact;