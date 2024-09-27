btwl@btwl-virtual-machine ~/c/w/o/on_nodejs (master)> time node main.js  1000000000
999999999

________________________________________________________
Executed in    4.17 secs    fish           external
   usr time    4.12 secs    6.54 millis    4.11 secs
   sys time    0.07 secs    1.06 millis    0.07 secs

btwl@btwl-virtual-machine ~/c/w/o/on_nodejs (master)> time ./a.out

________________________________________________________
Executed in    1.85 secs    fish           external
   usr time    1.83 secs    3.66 millis    1.83 secs
   sys time    0.01 secs    3.09 millis    0.01 secs


this loop 1000000000 times on  wasm get about 44% time perf of c on linux .
