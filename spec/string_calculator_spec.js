let MyTest = require ("../src/string_calculator")
let Calculator = new myTest.Calculator

describe("function that takes in a string as a parameter ", function() {
    it("should be able to takes in a string as a parameter ", function() {
      expect("").toBe(0);
    });
    it("should be able to takes in a string as a parameter ", function() {
        expect("1").toBe(1);
      });
      it("should be able to takes in a string as a parameter ", function() {
        expect("1,1").toBe(2);
      });
  });

  describe("function that takes in multiple integers ", function() {
    it("should be able to add multiple interges ", function() {
      expect("1,2,3,4").toBe(10);
    });
});

describe("function that can handle new lines between integers ", function() {
    it("should be able to handle new line between integers ", function() {
      expect("1\n2,3").toBe(6);
    });
});

describe("function that can handle different delimeters ", function() {
    it("should be able to  handle different delimeters ", function() {
      expect("//;\n1;2").toBe(3);
    });
    it("should be able to  handle different delimeters ", function() {
        expect("//4\n142").toBe(3);
      });
});

describe("function that can handle negative integers ", function() {
    it("should be able to handle negative integers ", function() {
      expect("-1,-2,3,4").toBe('ERROR: negatives not allowed -1,-2');
    });
});

describe("function that ignores integers greater than or equal to 1000 ", function() {
    it("should be able to ignores integers greater than or equal to 1000 ", function() {
      expect("//;\n1000,1;2").toBe(3);
    });
});

describe("function that it can support delimiters of any length ", function() {
    it("should be able to support delimiters of length ", function() {
      expect("//***\n1***2***3").toBe(6);
    });
});

describe("function that can be able to support different delimiters of any length ", function() {
    it("should be able to support different delimiters of any length ", function() {
      expect("//[:D][%]\n1:D2%3").toBe(6);
    });
    it("should be able to support different delimiters of any length ", function() {
        expect("//[***][%%%]\n1***2%%%3").toBe(6);
      });
      it("should be able to support different delimiters of any length ", function() {
        expect("//[(-_-')][%]\n1(-_-')2%3").toBe(6);
      });
      it("should be able to support different delimiters of any length ", function() {
        expect("//[abc][777][:(]\n1abc27773:(1").toBe(7);
      });
});

describe("function that can handle invalid input", function() {
    it("should be able to handle invalid input ", function() {
      expect("//;\n1000;1;2;").toBe('ERROR: invalid input');
    });
    it("should be able to handle invalid input ", function() {
        expect("   //;\n1000,1;2").toBe('ERROR: invalid input');
      });
      it("should be able to handle invalid input ", function() {
        expect("1,2,3//;\n1000,1;2").toBe('ERROR: invalid input');
      });
});
