
// read foo.wasm. find custom function. import it into js with func name, input type , output type.


const { loadWasmModule, getFunctionSignature } = require('wasm3');

async function loadAndInspectWasm() {
  const wasmPath = new URL("factorial.wasm", window.location.href).href;
  console.log("Absolute path for fetch wasm:", wasmPath);

  const response = await fetch(wasmPath);
  if (!response.ok) {
    throw new Error(`Failed to fetch WebAssembly file: ${response.statusText}`);
  }

  const buffer = await response.arrayBuffer();
  const module = await WebAssembly.compile(buffer);
  const instance = await WebAssembly.instantiate(module);

  console.log("Available functions:", Object.keys(instance.exports));

  // Check if the factorial function is exported
  if (typeof instance.exports.factorial !== "function") {
    throw new Error("factorial function is not exported from the WebAssembly module.");
  }

  // Use wasm3 to get the function signature
  const signature = getFunctionSignature(instance.exports.factorial);
  console.log("Function name: factorial");
  console.log("Input type:", signature.inputTypes);
  console.log("Output type:", signature.outputTypes);

  exportedFunctions.forEach(funcName => {
  const func = instance.exports[funcName];
  if (typeof func === "function") {
    console.log(`Function name: ${funcName}`);
  }
  });
  
}

loadAndInspectWasm().catch(console.error);