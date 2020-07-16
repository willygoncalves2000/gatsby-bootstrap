import React from 'react';
import { Card, Button} from 'react-bootstrap';

const Post = (props) => (

  <div className="p-3">
    <Card>
    <Card.Img variant="top" src={props.image} alt={props.title} />
    <Card.Body>
      <Card.Title dangerouslySetInnerHTML={{__html: props.title}}/>
      <Card.Text dangerouslySetInnerHTML={{__html: props.excerpt}}/>
      <Button variant="warning" href={props.readMore}>Read More...</Button>
    </Card.Body>
    </Card>

  </div>
)

export default Post;