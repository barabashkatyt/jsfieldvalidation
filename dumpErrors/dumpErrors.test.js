import { dumpErrors } from "./dumpErrors";

let errorList = [
  { car: "scoda", key: "status", keyValue: "false", message: "error message" },
];
let objectName = "car";
global.console = {
  log: jest.fn(),
};

describe("Tests dumpErrors functuin ", () => {
  it("tests console output", () => {
    dumpErrors(errorList, objectName);
    expect(global.console.log);
  });
});
