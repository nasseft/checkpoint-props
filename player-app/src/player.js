import React from "react";
import { Card } from "react-bootstrap";

const Player=(props)=>{
return(
    <Card style={{width:'18rem',margin:'10px'}}>
        <Card.Img src={props.imageUrl}></Card.Img>

        <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>
                Team:{props.team}<br />
                Nationality:{props.nationality}<br />
                Jersey Number:{props.jerseyNumber}<br />
                Age:{props.age}<br />
            </Card.Text>
        </Card.Body>

    </Card>
);
};
export default Player;