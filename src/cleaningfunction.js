function normaliserNom(nomComplet){
    if (typeof nomComplet !== "string") return null;
    nomComplet = nomComplet.trim();
    if (nomComplet.length <= 0 || nomComplet.length > 50) return null;
    nomComplet= nomComplet.replace(/[^a-zA-Z\s]/g , "").replace(/\s+/g, " ").toLowerCase().split(" ");
   return nomComplet
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}


function normalisercity(ville){
    if (typeof ville !== "string") return null;
    ville = ville.trim();
    if (ville.length <= 0 || ville.length > 50) return null;
    ville= ville.replace(/[^a-zA-Z\s]/g , "").replace(/\s+/g, " ").toLowerCase().split(" ");
   return ville
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}


function validateId(id) {
    if (typeof id !== "string") return null;
    id = id.trim();
    if (!/^[0-9]+$/.test(id)) return null;
    return Number(id);
}

