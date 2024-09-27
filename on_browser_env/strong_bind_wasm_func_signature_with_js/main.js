const fs = require('fs');
const path = require('path');

async function loadAndInspectWasm() {
  const wasmPath = path.resolve(__dirname, 'factorial.wasm');
  console.log("Absolute path for fetch wasm:", wasmPath);

  const buffer = fs.readFileSync(wasmPath);
  const module = await WebAssembly.compile(buffer);
  const instance = await WebAssembly.instantiate(module);

  console.log("Available functions:", Object.keys(instance.exports));

  // Check if the factorial function is exported
  if (typeof instance.exports.factorial !== "function") {
    throw new Error("factorial function is not exported from the WebAssembly module.");
  }
  // .wat info of func factorial :  (func (;1;) (type 2) (param i32) (result i64)
  // TODO some js-api must able to read this function input type and output type.
  // like java reflect.


}

loadAndInspectWasm().catch(console.error);
