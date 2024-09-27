const fs = require('fs');
const path = require('path');

async function loadAndInspectWasm(inputNumber) {
  const wasmPath = path.resolve(__dirname, 'factorial.wasm');
  console.log("Absolute path for fetch wasm:", wasmPath);

  const buffer = fs.readFileSync(wasmPath);
  const module = await WebAssembly.compile(buffer);
  const instance = await WebAssembly.instantiate(module);

  // console.log("Available functions:", Object.keys(instance.exports));

  // Assuming `is_prime` is exported from the WASM module
  const result = instance.exports.simple_loop(inputNumber);
  // console.log(`Is ${inputNumber} a prime number? ${result}`);
  console.log(result)
}

// Get the number from command-line arguments
const inputNumber = parseInt(process.argv[2], 10);

if (isNaN(inputNumber)) {
  console.error('Please provide a valid number as an argument.');
  process.exit(1);
}

loadAndInspectWasm(inputNumber).catch(console.error);
