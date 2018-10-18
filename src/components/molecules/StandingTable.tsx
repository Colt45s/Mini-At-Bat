import * as React from 'react'
import { TeamRecord } from '../../models/division'
import { Table, Label } from 'semantic-ui-react'

const parseClinchIndicator = (ci: string): string => {
  const ciType: { [clinchIndicator: string]: string } = {
    w: 'wild card',
    y: 'division champ',
    z: 'best record in league'
  }

  return ciType[ci]
}

const StandingTable = ({ teamRecords }: { teamRecords: TeamRecord[] }) => {
  return (
    <Table inverted={false}>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Teams</Table.HeaderCell>
          <Table.HeaderCell>Wins</Table.HeaderCell>
          <Table.HeaderCell>Losses</Table.HeaderCell>
          <Table.HeaderCell>Pct</Table.HeaderCell>
          <Table.HeaderCell>GB</Table.HeaderCell>
          <Table.HeaderCell>WCGB</Table.HeaderCell>
          <Table.HeaderCell>E#</Table.HeaderCell>
          <Table.HeaderCell>STRK</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {teamRecords.map(r => {
          return (
            <Table.Row key={r.team.id}>
              <Table.Cell>
                {r.team.name}
                {r.clinchIndicator ? (
                  <Label horizontal={true} style={{ marginLeft: '10px' }}>
                    {parseClinchIndicator(r.clinchIndicator)}
                  </Label>
                ) : (
                  ''
                )}
              </Table.Cell>
              <Table.Cell>{r.wins}</Table.Cell>
              <Table.Cell>{r.losses}</Table.Cell>
              <Table.Cell>{r.leagueRecord.pct}</Table.Cell>
              <Table.Cell>{r.gameBack}</Table.Cell>
              <Table.Cell>{r.wildCardGamesBack}</Table.Cell>
              <Table.Cell>{r.eliminationNumber}</Table.Cell>
              <Table.Cell>{r.streak.streakCode}</Table.Cell>
            </Table.Row>
          )
        })}
      </Table.Body>
    </Table>
  )
}

export default StandingTable
