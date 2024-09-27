#include <stdint.h>
// Whats this?
// simulate cpu intensive ops running by wasm.

// Usage ? 
// emcc -O3 factorial.cc -o factorial.wasm -s EXPORTED_FUNCTIONS='["_factorial"]' --no-entry
// Something i dont figure out yet.Maybe doc can tell : becareful the name for cc file of c function : _factorial. when using it . still call factorial in js(or other caller) .

//# on linux : wasmtime run factorial.wasm --invoke factorial 10
//              FIXME no return print yet.
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

extern "C" {
    bool is_prime(unsigned int n) {
        if (n <= 1) return false;
        for (unsigned int i = 2; i * i <= n; ++i) {
            if (n % i == 0) return false;
        }
        return true;
    }
}



// emcc -O3 factorial.cc -o factorial.wasm -s EXPORTED_FUNCTIONS='["_factorial", "_is_prime","_simple_loop"]' --no-entry
extern "C" {
    int simple_loop(unsigned int n) {
      int sum = 0;
      for (unsigned int i = 2; i  <= n; ++i) {
        sum++;
      }
      return sum;
    }
}


