import { describe, it } from "mocha";
import { getName } from "../hoge";
import { assert } from "chai";

describe("Describe getName()", () => {
    it("Return taro", () => {
        assert.equal(getName(), "taro");
    });
});
