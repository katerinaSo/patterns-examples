function fibonacci_recu_tail(n, a, b) {
    if (n <= 2) return a;
    return fibonacci_recu_tail(n-1, a+b, a);
  }

//   fibonacci_recu_tail(1476,1,1)
//    1.3069892237633987e+308 last one before infinity on my computer