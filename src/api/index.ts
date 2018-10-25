import axios from 'axios'

const BASE_URL = 'https://statsapi.mlb.com/api/v1/'

const requests = {
  get: (url: string) => axios.get(`${BASE_URL}${url}`)
}

const Standing = {
  getStanding: (leagueId: number, year: string) =>
    requests.get(`/standings?leagueId=${leagueId}&season=${year}`)
}

export default {
  Standing
}
