import React from "react";
const Map = () => {
  return (
    <main-section>
      <div className="location">
        <form>
          <label>
            <span>From</span>
            <input
              type="text"
              id="from"
              name="from"
              placeholder="Add a Pickup Location"
            />
          </label>

          <label>
            <span>To</span>
            <input
              type="text"
              id="to"
              name="to"
              placeholder="Enter Your Destination"
            />
          </label>
        </form>
      </div>
      <div className="map"> </div>
    </main-section>
  );
};

export default Map;
