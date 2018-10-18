import axios from 'axios'

const BASE_URL = 'https://statsapi.mlb.com/api/v1/'

const CURRENT_YEAR = new Date().getFullYear()

const requests = {
  get: (url: string) => axios.get(`${BASE_URL}${url}`)
}

const Team = {
  getTeams: () => requests.get(`/teams?season=${CURRENT_YEAR}`)
}

const Standing = {
  getStanding: (leagueId: number) =>
    requests.get(`/standings?leagueId=${leagueId}&season=${CURRENT_YEAR}`)
}

export default {
  Team,
  Standing
}
