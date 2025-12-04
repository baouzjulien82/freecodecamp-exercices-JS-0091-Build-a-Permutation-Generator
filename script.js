function permuteString(string, prefix = "", results = []) {
  if (string.length === 0) {
    results.push(prefix);
    return results;
  }
  const used = new Set(); // évite de choisir le même caractère deux fois au même niveau
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (used.has(char)) continue;
    used.add(char);
    const remaining = string.slice(0, i) + string.slice(i + 1);
    permuteString(remaining, prefix + char, results);
  }
  return results;
}
// Test
console.log(permuteString("fcc")); // ["fcc", "cfc", "ccf"]
