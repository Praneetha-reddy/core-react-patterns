import React from "react";
import Cards from "./Cards";

function convertToFlag(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

function format(weatherData) {
  let { temperature_2m_max, temperature_2m_min, time, weathercode } =
    weatherData;
  return time.map((t, i) => ({
    id: i,
    maxTemp: temperature_2m_max[i],
    minTemp: temperature_2m_min[i],
    day: time[i],
    weatherCode: weathercode[i],
  }));
}

/**
 * App Component
 * Purpose: Main container for the Classy Weather application. Handles user input, fetches geocoding and weather data,
 * manages debounced API calls, and displays results.
 *
 * Edge Cases Handled:
 * - Debounces API calls to avoid excessive requests while typing (1s delay).
 * - Handles empty, short, or invalid location input (clears weather and display if <2 chars).
 * - Handles API/network errors and displays error messages.
 * - Persists last searched location in localStorage, with safe handling for null/"null" values.
 * - Cleans up timers on unmount to prevent memory leaks.
 */
class App extends React.Component {
  // State holds user input, loading/error flags, weather data, and display location.
  state = {
    location: "",
    isLoading: false,
    displayLocation: "",
    weather: [],
    error: "",
  };

  // Timer ID for debouncing weather API calls.
  timer = null;

  /**
   * Fetches geocoding and weather data for the current location in state.
   * Handles loading and error states, and updates weather/displayLocation.
   */
  getWeather = async () => {
    try {
      this.setState({ isLoading: true, error: "" });
      // 1) Getting location (geocoding)
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${this.state.location}`,
      );
      const geoData = await geoRes.json();

      if (!geoData.results) throw new Error("Location not found");

      const { latitude, longitude, timezone, name, country_code } =
        geoData.results.at(0);
      this.setState({
        displayLocation: `${name} ${convertToFlag(country_code)}`,
      });

      // 2) Getting actual weather
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min`,
      );
      const weatherData = await weatherRes.json();

      this.setState({ weather: format(weatherData.daily) });
    } catch (err) {
      console.error(err);
      this.setState({ error: err.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  /**
   * On mount, loads the last searched location from localStorage (if any),
   * safely handling null/"null" values.
   */
  componentDidMount() {
    const storedLocation = localStorage.getItem("location");
    this.setState({
      location:
        !storedLocation || storedLocation === "null" ? "" : storedLocation,
    });
  }

  /**
   * Watches for changes to location in state. Debounces API calls (1s delay) to avoid
   * excessive requests while typing. Handles edge cases:
   * - If location is <2 chars, clears weather and displayLocation.
   * - Persists location to localStorage.
   * - Cleans up previous timer before setting a new one.
   */
  componentDidUpdate(prevProps, prevState) {
    if (prevState.location !== this.state.location) {
      localStorage.setItem("location", this.state.location);
      if (this.state.location.length < 2) {
        this.setState({ weather: [], displayLocation: "" });
        return;
      }

      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        this.getWeather();
      }, 1000);
    }
  }

  /**
   * Cleans up the debounce timer on unmount to prevent memory leaks or stray API calls.
   */
  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  /**
   * Renders the main UI: input for location, loading/error states, and weather results.
   */
  render() {
    const { isLoading, error, weather, displayLocation, location } = this.state;

    return (
      <div className="app">
        <h1>CLASSY WEATHER</h1>
        <input
          placeholder="SEARCH FOR LOCATION"
          value={location}
          onChange={(e) => this.setState({ location: e.target.value })}
        />
        {displayLocation !== "" && (
          <div>
            {isLoading && <p>Loading</p>}
            {!isLoading && error && (
              <p style={{ color: "red" }}>Error: {error}</p>
            )}
            {!isLoading && !error && (
              <>
                <h2>Weather for {displayLocation}</h2>
                <Cards weather={weather}></Cards>
              </>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default App;
