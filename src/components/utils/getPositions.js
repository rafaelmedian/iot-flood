export const getPositions = pos => {
  const { location } = pos;

  return {
    lat: location.latitude,
    lng: location.longitude,
  }
};
