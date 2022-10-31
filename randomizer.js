

const groups = {}

const leaders = []
const participants = []

function randomizeLeaders(groupSize = 3) {
  const amountOfGroups = (participants.length + leaders.length) / groupSize;

  for (let i = 0; i < amountOfGroups; i++) {
    const randomIndex = Math.floor(Math.random() * leaders.length);
    const leader = leaders[randomIndex];

    leaders.splice(randomIndex, 1)
    groups[i + 1] = [leader];
  }

  console.log("groups", groups)
}

function randomizeGroups(groupSize = 3) {
  for (let group in groups) {
    for (let i = 1; i < groupSize; i++) {
      const randomIndex = Math.floor(Math.random() * participants.length);
      const participant = participants[randomIndex];
  
      groups[group].push(participant);
      participants.splice(randomIndex, 1);
    }
  }
  
  console.log("groups", groups);
}

randomizeLeaders();
randomizeGroups();