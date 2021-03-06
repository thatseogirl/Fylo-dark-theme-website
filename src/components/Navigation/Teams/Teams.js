import React from "react";
import { Card } from "react-bootstrap";
import profileImages from "../../../images/image";

export default function Teams() {
  return (
    <div className="team">
        <h2>Meet the Team</h2>
        <div className="team_profile">
          <Card style={{ width: "18rem" }} id="screen1">
            <Card.Img variant="top" src={profileImages.alexander} />
            <Card.Body>
              <Card.Title className="title">Co founder</Card.Title>
              <Card.Text className="title_body">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }} id="screen2">
            <Card.Img variant="top" src={profileImages.julian} />
            <Card.Body>
              <Card.Title className="title">Teach lead</Card.Title>
              <Card.Text className="title_body">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }} id="screen3">
            <Card.Img variant="top" src={profileImages.alexander} />
            <Card.Body>
              <Card.Title className="title">Product owner</Card.Title>
              <Card.Text className="title_body">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="team_profile">
          <Card style={{ width: "18rem" }} id="screen4">
            <Card.Img variant="top" src={profileImages.alexander} />
            <Card.Body>
              <Card.Title className="title">Co founder</Card.Title>
              <Card.Text className="title_body">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }} id="screen5">
            <Card.Img variant="top" src={profileImages.julian} />
            <Card.Body>
              <Card.Title className="title">Teach lead</Card.Title>
              <Card.Text className="title_body">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }} id="screen6">
            <Card.Img variant="top" src={profileImages.alexander} />
            <Card.Body>
              <Card.Title className="title">Product owner</Card.Title>
              <Card.Text className="title_body">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="team_profile" id="screen7">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={profileImages.alexander} />
            <Card.Body>
              <Card.Title className="title">Co founder</Card.Title>
              <Card.Text className="title_body">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }} id="screen8">
            <Card.Img variant="top" src={profileImages.julian} />
            <Card.Body>
              <Card.Title className="title">Teach lead</Card.Title>
              <Card.Text className="title_body">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }} id="screen9">
            <Card.Img variant="top" src={profileImages.alexander} />
            <Card.Body>
              <Card.Title className="title">Product owner</Card.Title>
              <Card.Text className="title_body">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
  );
}
