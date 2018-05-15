const people = [
  {
    name: 'Ansel Adams',
    id: 1,
    image: 'http://shop.anseladams.com/v/vspfiles/photos/1715073-2.jpg',
    description: 'Black and white nature to the rescue. Zone system anyone?'
  },
  {
    name: 'Sally Mann',
    id: 2,
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Sally_Mann.jpg',
    description: "Proving that moms can be ballin' photographers"
  },
  {
    name: 'Richard Avedon',
    id: 3,
    image: 'https://maryckhayes.files.wordpress.com/2012/08/sfmoma_avedon_06_selfportrait.jpg?w=828',
    description: 'White background with famous people and sometimes bees'
  }
]

export function getPeople() {
  return people;
}

export function getCharacter(id) {
  let person = people.filter(e => {
    if(e.id === +id) {
      return e
    }
  })
  return person[0]
}