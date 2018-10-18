import * as React from 'react'
import { TeamRecord } from '../../models/division'
import { Table } from 'semantic-ui-react'

const StandingTable = ({ teamRecords }: { teamRecords: TeamRecord[] }) => {
  return (
    <Table celled={true}>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Teams</Table.HeaderCell>
          <Table.HeaderCell>Wins</Table.HeaderCell>
          <Table.HeaderCell>Losses</Table.HeaderCell>
          <Table.HeaderCell>Pct</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {teamRecords.map(team => {
          return (
            <Table.Row key={team.team.id}>
              <Table.Cell>{team.team.name}</Table.Cell>
              <Table.Cell>{team.wins}</Table.Cell>
              <Table.Cell>{team.losses}</Table.Cell>
              <Table.Cell>{team.leagueRecord.pct}</Table.Cell>
            </Table.Row>
          )
        })}
      </Table.Body>
    </Table>
  )
}

export default StandingTable
