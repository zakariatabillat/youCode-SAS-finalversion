function ajouterApprenant() {
  let nomComplet = normaliserNom(prompt("votre nom complet : "));
  if (nomComplet === null) {
    console.log("nom invalide!!");
    return;
  }

  let ville = normalisercity(prompt("votre ville : "));
  if (ville === null) {
    console.log("ville invalide");
    return;
  }

  students.push({
    id: myUniqueId(),
    nomComplet,
    ville,
    resultats: [],
  });

  console.log("L'utilisateur a été ajouté avec succès!");
}


function validerResultat(resultat) {

    if (resultat.jour < 1 || resultat.jour > 7) {
        console.log("Le jour doit être compris entre 1 et 7.");
        return false;
    }

    if (resultat.exercicesTermines > resultat.totalExercices) {
        console.log("Les exercices terminés ne peuvent pas dépasser le total.");
        return false;
    }

    if (resultat.exercicesTermines < 0 || resultat.totalExercices < 0) {
        console.log("Les nombres d'exercices ne peuvent pas être négatifs.");
        return false;
    }

    console.log("Résultat valide.");
    return true;
}


function enregistrerResultat(id, resultat) {
  const student = apprenants.find(function (student) {
    return student.id === id;
  });

  if (!student) {
    return false;
  }

  if (!validerResultat(resultat)) {
    return false;
  }

  const existingResult = student.results.find(function (result) {
    return result.jour === resultat.jour;
  });

  if (existingResult) {
    existingResult.exercicesTermines = resultat.exercicesTermines;
    existingResult.totalExercices = resultat.totalExercices;
    existingResult.challengeTermine = resultat.challengeTermine;

    return true;
  }

  student.results.push(resultat);

  return true;
}

function rechercherApprenant(recherche) {

    const rechercheNormalisee = normaliserNom(recherche);

    const resultats = studentsData.filter(function (student) {
        return normaliserNom(student.name).includes(rechercheNormalisee);
    });

    return resultats;
}
