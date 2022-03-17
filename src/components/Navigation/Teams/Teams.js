import React from 'react'
import { Card } from 'react-bootstrap'
import Footer from '../../Footer/Footer'
import Navigation from '../Navigation'
import profile1 from "../../../images/profile1.jpg";
import profile2 from "../../../images/profile2.jpg";
import profile3 from "../../../images/profile3.jpg";
import Subscribe from '../../Body/Subscribe/Subscribe';

export default function Teams() {
  return (
    <div>
      <Navigation />
      <div className='team'>
        <h2>Meet the Team</h2>
        <div className='team_profile'>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={profile1}  />
  <Card.Body>
    <Card.Title className='title'>Co founder</Card.Title>
    <Card.Text className='title_body'>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={profile2}  />
  <Card.Body>
    <Card.Title className='title'>Teach lead</Card.Title>
    <Card.Text className='title_body'>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={profile3} />
  <Card.Body>
    <Card.Title className='title'>Product owner</Card.Title>
    <Card.Text className='title_body'>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
</div>

<div className='team_profile'>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={profile1}  />
  <Card.Body>
    <Card.Title className='title'>Co founder</Card.Title>
    <Card.Text className='title_body'>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={profile2}  />
  <Card.Body>
    <Card.Title className='title'>Teach lead</Card.Title>
    <Card.Text className='title_body'>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={profile3} />
  <Card.Body>
    <Card.Title className='title'>Product owner</Card.Title>
    <Card.Text className='title_body'>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
</div>

<div className='team_profile'>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={profile1}  />
  <Card.Body>
    <Card.Title className='title'>Co founder</Card.Title>
    <Card.Text className='title_body'>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={profile2}  />
  <Card.Body>
    <Card.Title className='title'>Teach lead</Card.Title>
    <Card.Text className='title_body'>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={profile3} />
  <Card.Body>
    <Card.Title className='title'>Product owner</Card.Title>
    <Card.Text className='title_body'>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
</div>
        
      </div>
      <Subscribe />
      <Footer />
    </div>
  )
}
