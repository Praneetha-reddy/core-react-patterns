import React from "react";

function getWeatherIcon(wmoCode) {
  const icons = new Map([
    [[0], "☀️"],
    [[1], "🌤"],
    [[2], "⛅️"],
    [[3], "☁️"],
    [[45, 48], "🌫"],
    [[51, 56, 61, 66, 80], "🌦"],
    [[53, 55, 63, 65, 57, 67, 81, 82], "🌧"],
    [[71, 73, 75, 77, 85, 86], "🌨"],
    [[95], "🌩"],
    [[96, 99], "⛈"],
  ]);
  const arr = [...icons.keys()].find((key) => key.includes(wmoCode));
  if (!arr) return "NOT FOUND";
  return icons.get(arr);
}

function formatDay(dateStr) {
  return new Intl.DateTimeFormat("en", {
    weekday: "short",
  }).format(new Date(dateStr));
}

/**
 * Card Component
 * Purpose: Displays a single day's weather information (icon, day, min/max temperature) based on data prop.
 *
 * Edge Cases Handled:
 * - Handles unknown weather codes (shows "NOT FOUND").
 * - Renders temperatures with correct formatting and fallback for missing data.
 */
class Card extends React.Component {
  render() {
    const { minTemp, maxTemp, weatherCode, day } = this.props.data;
    return (
      <div className="day">
        <span>{getWeatherIcon(weatherCode)}</span>
        <p>{formatDay(day)}</p>
        <p>
          {Math.floor(minTemp)}&deg; &mdash;{" "}
          <strong>{Math.ceil(maxTemp)}&deg;</strong>
        </p>
      </div>
    );
  }
}

export default Card;
