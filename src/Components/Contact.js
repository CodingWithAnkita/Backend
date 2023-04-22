import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Contact() {
  return (
    <div>
      <div className="formgroup">
        <Form>
          <h2 className='fs-4'> <b> You Can Contact Us <br />
            If You Have Any Query</b> </h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>

            <Form.Control type="name" placeholder="Enter Name" autocomplete="off" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" autocomplete="off" required />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Mobile No</Form.Label>

            <Form.Control type="" placeholder="Enter mobile" autocomplete="off" required />
          </Form.Group>

          <textarea name="textarea" id="textarea" cols="50" rows="5" placeholder='Message' autocomplete="off" required ></textarea>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>

    </div>
  )
}

export default Contact