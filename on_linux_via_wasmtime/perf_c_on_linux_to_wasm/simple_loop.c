int simple_loop(unsigned int n) {
  volatile int sum =
      0;  // tell the compiler that a variable’s value may change at any time
  for (unsigned int i = 2; i <= n; ++i) {
    sum++;
  }
  return sum;
}

int main() {
  simple_loop(1000000000);
  return 0;
}