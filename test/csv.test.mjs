import { test } from "node:test"
import assert from "node:assert/strict"
import toJSON from "../src/commons/csv.js"

const csv = 'a,b,c\n1,2,3\n4,,6\n7,8\n"x,y",9,10\n'

test("parses rows into objects keyed by the header", () => {
  assert.deepEqual([...toJSON(csv)], [
    { a: "1", b: "2", c: "3" },
    { a: "4", b: "", c: "6" },
    { a: "7", b: "8", c: "" },
    { a: "x,y", b: "9", c: "10" }
  ])
})

test("exposes the header as columns", () => {
  assert.deepEqual(toJSON(csv).columns, ["a", "b", "c"])
})

test("accepts another separator", () => {
  assert.deepEqual([...toJSON("a;b\n1;2\n", ";")], [{ a: "1", b: "2" }])
})

test("does not evaluate code, so it works under a CSP without unsafe-eval", () => {
  const original = globalThis.Function
  globalThis.Function = function () { throw new EvalError("blocked by CSP") }
  try {
    assert.deepEqual([...toJSON("a,b\n1,2\n")], [{ a: "1", b: "2" }])
  } finally {
    globalThis.Function = original
  }
})
