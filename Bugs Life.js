function shortestDistance(a, b, c) {
    return Math.min(
    Math.sqrt(Math.pow(a,2) + (b+c) * (b+c)),
    Math.sqrt(Math.pow(b,2) + (a+c) * (a+c)),
    Math.sqrt(Math.pow(c,2) + (a+b) * (a+b))
  );
}
