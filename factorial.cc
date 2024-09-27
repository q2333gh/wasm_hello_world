#include <stdint.h>
// What this?
// simulate cpu intensive ops running by wasm.

// Usage ? 
// emcc -O3 factorial.cc -o factorial.wasm -s EXPORTED_FUNCTIONS='["_factorial"]' --no-entry
// becareful the name for cc file of c function : _factorial. when using it . still call factorial in js(or other caller) .

//# on linux : wasmtime run factorial.wasm --invoke factorial 10
//# on browser: goto on_browser_folder, 
//              for example: using vscode live share to make it work~


extern "C" {
    uint64_t factorial(unsigned int n) {
        uint64_t result = 1;
        for (unsigned int i = 2; i <= n; ++i) {
            result *= i;
        }
        return result;
    }
}

