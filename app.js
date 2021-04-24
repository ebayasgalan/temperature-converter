const celciusInput = document.querySelector('#celcius > input');
const fahrenheitInput = document.querySelector('#fahrenheit > input');
const kelvinInput = document.querySelector('#kelvin > input');

const roundNum = num => Math.round(num*100)/100;

const celciusToFahrenheitAndKelvin = () => {
  const cTemp = parseFloat(celciusInput.value);
  const fTemp = (cTemp * (9/5)) + 32;
  const kTemp = cTemp + 273.15;
  fahrenheitInput.value = roundNum(fTemp);
  kelvinInput.value = roundNum(kTemp);
}

const fahrenheitToCelciusAndKelvin = () => {
  const fTemp = parseFloat(fahrenheitInput.value);
  const cTemp = (fTemp - 32) * (5/9);
  const kTemp = (fTemp + 459.67) * (5/9);
  celciusInput.value = roundNum(cTemp);
  kelvinInput.value = roundNum(kTemp);
}

const kelvinToCelciusAndFahrenheit = () => {
  const kTemp = parseFloat(kelvinInput.value);
  const cTemp = kTemp - 273.15;
  const fTemp = 9/5 * (kTemp - 273) + 32;
  celciusInput.value = roundNum(cTemp);
  fahrenheitInput.value = roundNum(fTemp);
}

const main = () => {
  celciusInput.addEventListener('input', celciusToFahrenheitAndKelvin);
  fahrenheitInput.addEventListener('input', fahrenheitToCelciusAndKelvin);
  kelvinInput.addEventListener('input', kelvinToCelciusAndFahrenheit);
}

main();
