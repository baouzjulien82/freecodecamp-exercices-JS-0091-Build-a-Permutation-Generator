// Vesrion initiale -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function permuteString(string, prefix = "", results = []) {
  if (!string.length) {
    results.push(prefix);
    return results;
  }

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    const remaining = string.slice(0, i) + string.slice(i + 1);
    const newPrefix = prefix + char;
    permuteString(remaining, newPrefix, results);
  }

  return [...new Set(results)];
}

console.log(permuteString("fcc")); // ["fcc", "cfc", "ccf"]

// Version améliorée (moins gourmande en ressources car génère moins de combinaisons Set() au début et non à la fin -------------------------------------------------------------------------------------------------

function permuteString(string, prefix = "", results = []) {
  // Cas de base : si la chaîne est vide, on ajoute le préfixe
  if (!string.length) {
    results.push(prefix);
    return results;
  }

  const used = new Set(); // éviter les doublons à ce niveau

  for (let i = 0; i < string.length; i++) {
    const char = string[i]; // caractère courant

    if (used.has(char)) continue;
    used.add(char);

    // Construire la chaîne restante sans ce caractère
    const remainingString = string.slice(0, i) + string.slice(i + 1);

    // Construire le nouveau préfixe
    const newPrefix = prefix + char;

    // Appel récursif avec les mêmes noms d’arguments
    permuteString(remainingString, newPrefix, results);
  }

  return results;
}

// Exemple
console.log(permuteString("fcc")); // ["fcc", "cfc", "ccf"]
