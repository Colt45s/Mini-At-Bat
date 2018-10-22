export type Division = {
  division: {
    id: number
  }
  teamRecords: TeamRecord[]
}

export type TeamRecord = {
  team: {
    id: number
    name: string
  }
  wins: number
  losses: number
  league: {
    id: number
  }
  leagueRecord: {
    pct: string
  }
  divisionChamp: boolean
  streak: {
    streakCode: string
  }
  clinchIndicator: string
  gamesBack: string
  wildCardGamesBack: string
  eliminationNumber: string
  leagueRank: string
}
