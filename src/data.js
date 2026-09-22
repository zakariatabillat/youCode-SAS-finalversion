const apprenants = [
  {
    id: 1,
    nomComplet: "Sara Dev",
    ville: "Nador",
    resultats: [
      {
        jour: 1,
        exercicesTermines: 18,
        totalExercices: 20,
        challengeTermine: true,
      },
      {
        jour: 2,
        exercicesTermines: 14,
        totalExercices: 20,
        challengeTermine: false,
      },
    ],
  },

  {
    id: 2,
    nomComplet: "Yassine Code",
    ville: "Oujda",
    resultats: [
      {
        jour: 1,
        exercicesTermines: 12,
        totalExercices: 20,
        challengeTermine: false,
      },
    ],
  },

  {
    id: 3,
    nomComplet: "Hossam",
    ville: "Ahfir",
    resultats: [
      {
        jour: 1,
        exercicesTermines: 10,
        totalExercices: 20,
        challengeTermine: false,
      },
      {
        jour: 2,
        exercicesTermines: 14,
        totalExercices: 20,
        challengeTermine: false,
      },
    ],
  },
  {
    id: 4,
    nomComplet: "Mohamed Amine",
    ville: "Berkane",
    resultats: [
      {
        jour: 1,
        exercicesTermines: 19,
        totalExercices: 20,
        challengeTermine: true,
      },
      {
        jour: 2,
        exercicesTermines: 17,
        totalExercices: 20,
        challengeTermine: true,
      },
    ],
  },

  {
    id: 5,
    nomComplet: "Imane El Idrissi",
    ville: "Nador",
    resultats: [
      {
        jour: 1,
        exercicesTermines: 15,
        totalExercices: 20,
        challengeTermine: false,
      },
      {
        jour: 2,
        exercicesTermines: 18,
        totalExercices: 20,
        challengeTermine: true,
      },
    ],
  },

  {
    id: 6,
    nomComplet: "Ayoub Chraibi",
    ville: "Taourirt",
    resultats: [
      {
        jour: 1,
        exercicesTermines: 8,
        totalExercices: 20,
        challengeTermine: false,
      },
      {
        jour: 2,
        exercicesTermines: 11,
        totalExercices: 20,
        challengeTermine: false,
      },
    ],
  },
];

let id = (apprenants.length > 0)
  ? apprenants[apprenants.length - 1].id
  : 0;

export function myUniqueId() {
  return ++id;
}