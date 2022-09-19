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