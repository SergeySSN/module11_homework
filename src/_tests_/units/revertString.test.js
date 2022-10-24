import { revertString } from "../../units/revertString";

xdescribe("tests for revertString function", () => {
  it("should reverse string", () => expect(revertString("abc")).toBe("cba"));
});