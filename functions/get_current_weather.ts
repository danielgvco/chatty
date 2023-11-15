interface WeatherArgs {
    location: string;
    format: 'celsius' | 'fahrenheit' | 'C' | 'F' | string;
  }
  
  export async function get_current_weather(args: WeatherArgs) {
    // Call a weather API here
    const weatherData = {
      temperature: 20,
      unit: args.format === 'celsius' ? 'C' : 'F',
    };
    return weatherData;
}