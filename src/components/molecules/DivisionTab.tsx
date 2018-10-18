import * as React from 'react'
import { Division } from '../../models/division'
import StandingTable from './StandingTable'
import { Tab } from 'semantic-ui-react'
import TabContent from '../atoms/TabContent'

function createPanes(divisions: Division[]) {
  return divisions.map(d => ({
    menuItem: getMatchDivisionName(d.division.id),
    render: () => (
      <TabContent>
        <StandingTable teamRecords={d.teamRecords} />
      </TabContent>
    )
  }))
}

function getMatchDivisionName(id: number) {
  const divisions: {
    [id: number]: string
  } = {
    200: 'AL West',
    201: 'AL East',
    202: 'AL Central',
    203: 'NL West',
    204: 'NL East',
    205: 'NL Central'
  }

  return divisions[id]
}

const DivisionTab = ({ divisions }: { divisions: Division[] }) => {
  if (divisions.length) {
    return <Tab panes={createPanes(divisions)} />
  } else {
    return <div />
  }
}

export default DivisionTab
