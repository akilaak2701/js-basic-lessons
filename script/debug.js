/* eslint-disable no-unused-vars */
const people = [
  { name: 'John', cool: true, country: 'canada' },
  { name: 'scott', cool: true, country: 'USA' },
  { name: 'kia', cool: false, country: 'INDIA' }
]
// enumaration
people.forEach((person, index) => {
  console.table(index, person.name, person.cool, person.country)
})

function certify (name) {
  console.count(`Certifying Doctor degree for ${name}`)
  return `Dr. ${name}`
}
