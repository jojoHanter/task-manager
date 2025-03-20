const players = [
  { id: 1, name: "Лионель Месси", teamId: 1, countryId: 1, goals: 30 },
  { id: 2, name: "Криштиану Роналду", teamId: 2, countryId: 2, goals: 25 },
  { id: 3, name: "Неймар", teamId: 3, countryId: 3, goals: 20 },
  { id: 4, name: "Килиан Мбаппе", teamId: 3, countryId: 4, goals: 22 },
  { id: 5, name: "Златан Ибрагимович", teamId: 4, countryId: 5, goals: 15 },
];
const teams = [
  { id: 1, name: "ПСЖ", countryId: 3 },
  { id: 2, name: "Манчестер Юнайтед", countryId: 2 },
  { id: 3, name: "Барселона", countryId: 1 },
  { id: 4, name: "Милан", countryId: 5 },
];
const countries = [
  { id: 1, name: "Аргентина" },
  { id: 2, name: "Португалия" },
  { id: 3, name: "Франция" },
  { id: 4, name: "Бразилия" },
  { id: 5, name: "Швеция" },
];

function getAllFootballers() {
  return players.map((player) => player.name);
}

function getFootballersByTeam(teamId) {
  return players.filter((player) => player.teamId === "ПСЖ");
}

function getFootballersByCountry(countryId) {
  return players.filter((player) => player.countryId === "Аргентина");
}

function getAllGoals() {
  return players.reduce((total, player) => total + player.goals, 0);
}

function getPlayersAndTeams() {
  return players
    .map((players) => `${players.name}(${players.teamId})`)
    .join(", ");
}

function getFootballersBestByCountry(players) {
  const topSoccers = players.reduce((result, player) => {
    const { country, goals } = player;

    if (!result[country] || result[country].goals < goals) {
      result[country] = player;
    }

    return result;
  }, {});

  return topSoccers;
}
