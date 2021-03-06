import { useState, useEffect, useCallback } from 'react';

export function useGeoCoordinates() {
  const [coords, setCoords] = useState({ lat: '', long: '', err: '' });

  function success(pos) {
    const { latitude, longitude } = pos.coords;
    setCoords((prevState) => ({
      ...prevState,
      lat: latitude,
      long: longitude,
    }));
  }

  function error(err) {
    setCoords((prevState) => ({ ...prevState, err: err.message }));
  }

  const getCurrentPosition = useCallback(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
    navigator &&
      navigator.geolocation &&
      navigator.geolocation.getCurrentPosition(success, error, options);
  }, []);

  useEffect(() => {
    getCurrentPosition();
  }, [getCurrentPosition]);

  return coords;
}
