module.exports = {
  name: process.argv[2],
  area: function () {
    var dimensions = getInput();
    return (dimensions[0]*dimensions[1]);
  }
};

function getInput() {
  var lengths = [process.argv[3], process.argv[4]];
  return lengths;
}