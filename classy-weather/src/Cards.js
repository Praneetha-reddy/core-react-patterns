import React from "react";
import Card from "./Card";

/**
 * Cards Component
 * Purpose: Receives an array of weather data objects via props and renders a list of Card components.
 *
 * Edge Cases Handled:
 * - Handles empty weather arrays (renders nothing).
 * - Uses unique key for each Card to optimize rendering.
 */
class Cards extends React.Component {
  render() {
    return (
      <ul className="weather">
        {this.props.weather.map((w) => (
          <Card key={w.id} data={w} />
        ))}
      </ul>
    );
  }
}

export default Cards;
