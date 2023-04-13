const {
  reverseString,
  capitalizeString,
  findMax,
  calculateBMI,
} = require("../test1");

describe("reverseString", () => {
  test("throw error if input not string", () => {
    const value = 10;
    expect(() => {
      reverseString(value);
    }).toThrow("Please input a string");
  });

  test("should completes a sequence of characters in a string.", () => {
    const str = "makan";
    const result = reverseString(str);
    expect(result).toEqual("nakam");
  });
});

describe("capitalizeString", () => {
  test("should throw error if input not string", () => {
    const value = 123;
    expect(() => {
      capitalizeString(value);
    }).toThrow("Please input a string");

    expect(() => {
      capitalizeString(["hello", "world"]);
    }).toThrow("Please input a string");

    expect(() => {
      capitalizeString({ name: "jhoni" });
    }).toThrow("Please input a string");
  });

  test("show string to uppercase", () => {
    const value = "mamas makan nasi";
    const result = capitalizeString(value);
    expect(result).toBe("Mamas makan nasi");
  });
});

describe("findMax", () => {
  test("throw error if input not is array & not be empty", () => {
    expect(() => {
      findMax(10, 10);
    }).toThrow("Please input an array");

    expect(() => {
      findMax([]);
    }).toThrow("Array must not be empty");
  });

  test("show array", () => {
    const value = [10, 10];
    expect(findMax(value)).toEqual(10);
  });
});

describe("calculateBMI", () => {
  test("tjrow error if height and weight not number", () => {
    expect(() => {
      calculateBMI("10", "5");
    }).toThrow("Height and weight must be numbers");

    expect(() => {
      calculateBMI(10, "5");
    }).toThrow("Height and weight must be numbers");

    expect(() => {
      calculateBMI("10", 5);
    }).toThrow("Height and weight must be numbers");
  });

  test("if success", () => {
    const height = 10;
    const weight = 5;
    expect(calculateBMI(height, weight)).toBe("500.00");
  });
});
