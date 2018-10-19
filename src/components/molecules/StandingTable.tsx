import * as React from 'react'
import { TeamRecord } from '../../models/division'
import { Table, Label, Image, Header } from 'semantic-ui-react'
import { ciTypes } from '../../utils/mlbConstants'
import { teamLogos } from '../../utils/logos'

const StandingTable = ({
  teamRecords,
  divisionName
}: {
  teamRecords: TeamRecord[]
  divisionName: string
}) => {
  return (
    <Table inverted={false}>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>{divisionName}</Table.HeaderCell>
          <Table.HeaderCell />
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
              <Table.Cell width={4}>
                <Header as="h4" image={true}>
                  <Image src={teamLogos[r.team.id]} size="mini" />
                  <Header.Content>
                    {r.team.name}
                    <Header.Subheader>
                      League Rank: {r.leagueRank}
                    </Header.Subheader>
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell width={3}>
                {r.clinchIndicator ? (
                  <Label horizontal={true} style={{ marginLeft: '10px' }}>
                    {ciTypes[r.clinchIndicator]}
                  </Label>
                ) : (
                  ''
                )}
              </Table.Cell>
              <Table.Cell>{r.wins}</Table.Cell>
              <Table.Cell>{r.losses}</Table.Cell>
              <Table.Cell>{r.leagueRecord.pct}</Table.Cell>
              <Table.Cell>{r.gamesBack}</Table.Cell>
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
