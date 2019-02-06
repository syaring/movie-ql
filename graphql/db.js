let people = [
  {
    id: 0,
    name: "sarah",
    age: 27,
  },
  {
    id: 1,
    name: "namjoon",
    age: 25,
  },
  {
    id: 2,
    name: "seokjin",
    age: 27,
  },
  {
    id: 3,
    name: "yoongi",
    age: 26,
  },
  {
    id: 4,
    name: "hoseok",
    age: 25,
  },
  {
    id: 5,
    name: "jimin",
    age: 24,
  },
  {
    id: 6,
    name: "taehyung",
    age: 24,
  },
  {
    id: 7,
    name: "jungkook",
    age: 22,
  },
]

export const getPeople = () => people

export const getById = id => {
  const filteredPeople = people.filter(person => person.id === id)
  return filteredPeople[0]
}

export const deletePerson = id => {
  const cleanedPeople = people.filter(person => person.id !== id)

  if (people.length > cleanedPeople.length) {
    people = cleanedPeople
    return true
  } else {
    return false 
  }
}

export const addPerson = (name, age) => {
  const newPerson = {
    id: `${people.length + 1}`,
    name,
    age
  }
  people.push(newPerson)
  
  return newPerson
}

