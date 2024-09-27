## My Webassembly learning repo.  
Might help you with some info about wasm.  
Feel free to try it yourself~  
Run `./main`(python code) to compile 


## Tools around Webassembly
#### compile tool: `emcc`  compile ( .c .cc ) to .wasm
Installation: assume you are using ubuntu: `sudo apt-get install emscripten`
sample usage: `emcc -O3 factorial.cc -o factorial.wasm -s EXPORTED_FUNCTIONS='["_factorial"]' --no-entry`
#### .wasm runtime on linux: `wasmtime`
Installation: `curl https://wasmtime.dev/install.sh -sSf | bash`
simple usage: `wasmtime run factorial.wasm --invoke factorial 10`

#### .wasm to .txt  human_readable assembly file , a litle bit like `objdump`: `wasm-objdump`
Installation: `sudo apt-get install wabt`  
    simple usage : `wasm-objdump -x factorial.wasm > dump.txt`  

#### more like `objdump` : `wasm2wat` 
(this tool included in wabt) , 
    simple usage :`wasm2wat factorial.wasm -o factorial.wat`  
What cool is that: you compile foo.wat  foo.wasm again !😁 
`wat2wasm factorial.wat -o factorial.wasm`

## wasm instruction set compare to riscv instruction set(take for a traditonal ISA example)
Assume you know some basic concepts about traditional ISA:

(below generate by BingAI)
key differences: 
1. Instruction Set:
Wasm: Uses a **stack-based execution model**. Instructions operate on an implicit stack, and there are no explicit registers.
RISC-V: Uses a register-based execution model. Instructions operate on explicit registers like addi (add immediate) and sp (stack pointer).
2. Registers:
Wasm: Does not have registers like traditional ISAs. Instead, it uses a stack to manage values.
RISC-V: Has a set of registers, including general-purpose registers and special-purpose registers like the stack pointer (sp).
3. Instruction Format:
Wasm: Instructions are designed to be compact and are encoded in a binary format. For example, i32.const pushes a 32-bit integer onto the stack.
RISC-V: Instructions are typically fixed-length and operate on registers. For example, addi adds an immediate value to a register.
4. Execution Model:
Wasm: Uses a virtual machine to execute instructions. It is designed to be platform-independent and can run in various environments, including browsers.
RISC-V: Instructions are executed directly by the hardware.


Here’s a brief comparison using your example:

Web Assembly:
```
(local.get 0)
(i32.const 1)
(i32.gt_u)
```
RISC-V Assembly:
```
addi t0, t0, 1
```

## dynamic memory allocation  on wasm ?  (like `malloc()`)

## Why wasm?
Performance code on browser
#### How good performance is it compare to C ? 
likely 90% or 45% to 55% runtime speed of C ? https://www.usenix.org/conference/atc19/presentation/jangda
At least same exponential ,good~  

## Any cool web3D with wasm?
