import queryString from 'query-string'

const getSelectedYear = (search: string) => {
  const parsed = queryString.parse(search)

  return (parsed.year as string) || new Date().getFullYear().toString()
}

export default getSelectedYear
