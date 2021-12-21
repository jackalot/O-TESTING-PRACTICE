import { TestWatcher } from "jest";
import reverseString from "./reverseString";
test('If "taco" returns as "ocat"', ()=> {
    expect(reverseString("taco")).toBe("ocat");
})