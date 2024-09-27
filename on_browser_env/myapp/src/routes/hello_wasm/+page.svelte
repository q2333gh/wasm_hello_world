<script lang="ts">
  // import { onMount } from "svelte";

  let input_number: number = 10;
  let result: string = "";

  async function loadWasm(): Promise<WebAssembly.Exports> {
    try {
      const wasmPath = new URL("factorial.wasm", window.location.href).href;
      console.log("Absolute path for fetch:", wasmPath);
      const response: Response = await fetch("factorial.wasm");
      if (!response.ok) {
        throw new Error(
          `Failed to fetch WebAssembly file: ${response.statusText}`
        );
      }
      const buffer: ArrayBuffer = await response.arrayBuffer();
      const module: WebAssembly.Module = await WebAssembly.compile(buffer);
      const instance: WebAssembly.Instance =
        await WebAssembly.instantiate(module);

      console.log("Available functions:", Object.keys(instance.exports));

      // Check if the factorial function is exported
      if (typeof instance.exports.factorial !== "function") {
        throw new Error(
          "factorial function is not exported from the WebAssembly module."
        );
      }

      // Return the exported functions
      return instance.exports;
    } catch (error) {
      console.error("Error loading WebAssembly:", error);
      throw error;
    }
  }

  async function calculateFactorial(): Promise<void> {
    try {
      const wasm = (await loadWasm()) as {
        factorial: (number: number) => number;
      };
      result = wasm.factorial(input_number).toString();
      console.log("result is ",result);
    } catch (error) {
      console.error("Error calling factorial function:", error);
      result = "Error occurred. Could not calculate factorial.";
    }
  }
</script>

<svelte:head>
  <title>About</title>
  <meta name="description" content="About this app" />
</svelte:head>
<div class="text-column">
  <h1>WebAssembly Factorial</h1>

  <input type="number" bind:value={input_number} />
  <button on:click={calculateFactorial}>Calculate Factorial</button>
  <p>Result: {result}</p>
</div>
