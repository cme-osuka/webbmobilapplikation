const valData = require("./../data.json");

function mandates(party) {
  const foundParty = valData.partiMandat.find(
    (p) => p.partiforkortning === party
  );

  return `${foundParty.partibeteckning}: ${foundParty.antalMandat} mandat`;
}

function allMandates() {
  const result = valData.partiMandat.map((p) => {
    return `${p.partiforkortning}: ${p.antalMandat}`;
  });

  return result.join(", ");
}

function calculateMandates(parties) {
  const result = valData.partiMandat.filter((p) =>
    parties.includes(p.partiforkortning)
  );

  let mandateCount = 0;
  result.forEach((p) => (mandateCount += p.antalMandat));

  return `${parties.join(", ")}: ${mandateCount} av 349 totalt`;
}

console.log(calculateMandates(["C", "L", "KD"]));
