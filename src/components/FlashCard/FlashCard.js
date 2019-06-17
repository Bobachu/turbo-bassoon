import React, { Component } from "react";
import "./FlashCard.css"

export default class FlashCard extends Component {
  // States to include flipped state
  // Eventually to include states for question and answer to draw from DB
  state = {};

  // click handler for flipping the card

  render(props) {
    return (
      <div className="w3-cell-row">
        <div className="flash-card w3-card">
          <div className="front">
            <h1>Front</h1>
          </div>
          <div className="back">
            <h1>Back</h1>
          </div>
        </div>
      </div>
    );
  }
}

// export default FlashCard;
