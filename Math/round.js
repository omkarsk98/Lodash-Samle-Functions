const _ = require("lodash");

// round(value, prec): rounds up value to precision
_.round(4.006); // => 4
_.round(4.006, 2); // => 4.01
_.round(4060, -2); // => 4100

// ceil(): ceil value upto precision
_.ceil(4.006); // => 5
_.ceil(6.004, 2); // => 6.01
_.ceil(6040, -2); // => 6100

// floor(): floor value upto precision
_.floor(4.006); // => 4
_.floor(0.046, 2); // => 0.04
_.floor(4060, -2); // => 4000

