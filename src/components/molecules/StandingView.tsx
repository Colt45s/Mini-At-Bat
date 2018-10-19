import * as React from 'react'
import { Division } from '../../models/division'
import StandingTable from './StandingTable'
import { Header } from 'semantic-ui-react'
import { divisionNames } from '../../utils/mlbConstants'

const StandingView = ({ divisions }: { divisions: Division[] }) => {
  return (
    <>
      <Header as="h1">Standing</Header>
      {divisions.map(d => (
        <StandingTable
          key={d.division.id}
          teamRecords={d.teamRecords}
          divisionName={divisionNames[d.division.id]}
        />
      ))}
    </>
  )
}

export default StandingView
