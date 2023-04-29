

export const Person = ({persons,filter}) => (
    <>
    {
        persons
        .filter((person) =>person.name.toLowerCase().includes(filter.toLowerCase()))
        .map( person => <h3>{person.name} - {person.number}</h3>)
      }
    </>
) 