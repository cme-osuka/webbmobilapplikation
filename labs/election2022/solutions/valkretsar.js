const valData = require("./../data.json");

function listDistrics() {
  const result = valData.valkretsar.map((vk) => vk.namn);
  return result.join(", ");
}

function districtResults(districtName) {
  const foundDistrict = valData.valkretsar.find(
    (vk) => vk.namn === districtName
  );

  const result = foundDistrict.rosterPaverkaMandat.partiroster.map((pr) => {
    return `${pr.partiforkortning}: ${pr.antalRoster} (${pr.andelRoster})`;
  });

  result.unshift(districtName);

  return result.join("\n");
}

function partyResults(party) {
  const districtResults = valData.valkretsar.map((vk) => {
    const partyResults = vk.rosterPaverkaMandat.partiroster.find(
      (pr) => pr.partiforkortning === party
    );

    return `${vk.namn}: ${partyResults.antalRoster} (${partyResults.andelRoster})`;
  });

  districtResults.unshift(`Resultat för ${party} per valkrets`);

  return districtResults.join("\n");
}

console.log(partyResults("MP"));
