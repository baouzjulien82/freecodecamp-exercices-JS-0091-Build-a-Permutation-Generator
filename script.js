function permuteString(string, prefix = "", results = []) {
  if (!string.length) {
    results.push(prefix);
    return results;
  }

  const used = new Set(); // éviter les doublons à ce niveau

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (used.has(char)) continue;
    used.add(char);

    const remaining = string.slice(0, i) + string.slice(i + 1);
    permuteString(remaining, prefix + char, results);
  }

  return results;
}

// Exemple
console.log(permuteString("fcc")); // ["fcc", "cfc", "ccf"]
