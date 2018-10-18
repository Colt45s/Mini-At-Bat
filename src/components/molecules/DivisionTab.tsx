import * as React from 'react'
import { Division } from '../../models/division'
import StandingTable from './StandingTable'
import { Tab, Loader, Header } from 'semantic-ui-react'
import TabContent from '../atoms/TabContent'
import Overlay from '../atoms/Overlay'

function createPanes(divisions: Division[]) {
  return divisions.map(d => ({
    menuItem: getMatchDivisionName(d.division.id),
    render: () => (
      <TabContent key={d.division.id}>
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

const DivisionTab = ({
  divisions,
  isLoading
}: {
  divisions: Division[]
  isLoading: boolean
}) => {
  if (isLoading) {
    return <Overlay children={<Loader>Loading</Loader>} />
  }
  return (
    <>
      <Header as="h1">Standing</Header>
      <Tab
        menu={{ attached: false, tabular: false }}
        panes={createPanes(divisions)}
      />
    </>
  )
}

export default DivisionTab
