function permuteString(string, prefix = "", results = []) {
  // Cas de base : si la chaîne est vide, on ajoute le préfixe
  if (!string.length) {
    results.push(prefix);
    return results;
  }

  // Ensemble pour éviter de traiter deux fois le même caractère au même niveau
  const used = new Set();

  // Boucle sur chaque caractère de la chaîne
  for (let i = 0; i < string.length; i++) {
    const char = string[i]; // caractère courant

    // Si ce caractère a déjà été utilisé à ce niveau, on passe au suivant
    if (used.has(char)) continue;
    used.add(char);

    // Construire la chaîne restante sans ce caractère
    const remaining = string.slice(0, i) + string.slice(i + 1);

    // Appel récursif :
    // - remaining : la chaîne réduite
    // - prefix + char : on ajoute le caractère choisi au préfixe
    // - results : tableau des permutations
    permuteString(remaining, prefix + char, results);
  }

  // Retourne toutes les permutations trouvées
  return results;
}

// Exemple d’utilisation
console.log(permuteString("fcc")); // ["fcc", "cfc", "ccf"]
