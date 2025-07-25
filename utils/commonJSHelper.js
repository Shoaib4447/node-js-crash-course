function randomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

module.exports = randomNumber;

const celciusToForenheight = (celcius) => {
  return (celcius / 9) * 5 + 32;
};
 