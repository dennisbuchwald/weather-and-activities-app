export const fetchedWeather = async () => {
  const response = await fetch("https://example-apis.vercel.app/api/weather");
  const data = await response.json();
  return data;
};
