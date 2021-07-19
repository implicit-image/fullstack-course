import React from 'react'
import DetailedCountryEntry from './DetailedCountryEntry'
import SimpleCountryEntry from './SimpleCountryEntry'




const Results = ({ results, showDetailed, api_key }) => {

  return (
    <ul>
      {
        results.length > 10
        ? <li>Too many matches, specify another filter</li>
        : results.length !== 1
        ? results.map(country =>
            <SimpleCountryEntry
              country={country}
              showDetailed={showDetailed}
              key={country.numericCode}
            />)
          : <DetailedCountryEntry country={results[0]} api_key={api_key} />
      }
    </ul>
  )
}

export default Results
