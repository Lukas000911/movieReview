let movies = [
    {
      image: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
      title: "Parasite",
      year: "2019",
      rating: "8.6",
      id: '1',
      description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
      comments: []
    },
    {
      image: "https://m.media-amazon.com/images/M/MV5BM2EwMmRhMmUtMzBmMS00ZDQ3LTg4OGEtNjlkODk3ZTMxMmJlXkEyXkFqcGdeQXVyMjM5ODk1NDU@._V1_UX182_CR0,0,182,268_AL_.jpg",
      title: "The Queen's Gambit ",
      year: "2020",
      rating: "8.8",
      id: '2',
      description: "Orphaned at the tender age of nine, prodigious introvert Beth Harmon discovers and masters the game of chess in 1960s USA. But child stardom comes at a price.",
      comments: [{
        name: "John",
        comment: "So boring, i fall asleep to it and hibernated through whole winter"
        
      }]
    },
    {
      image: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
      title: "Joker ",
      year: "2019",
      rating: "8.5",
      id: '3',
      description: "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.",
      comments: [
        {
          name: "Marry",
          comment: "Put on a happy face :)"
          
        },
        {
          name: "Batman",
          comment: "My parents was not impressed with this"
          
        },
      ]
    },
    {
      image: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg",
      title: "The Godfather",
      year: "1972",
      rating: "9.2",
      id: '4',
      description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      comments: []
    },
    {
      image: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR1,0,182,268_AL_.jpg",
      title: "Pulp Fiction",
      year: "1994",
      rating: "8.9",
      id: '5',
      description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      comments: []
    },
    {
      image: "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
      title: "The Shining",
      year: "1980",
      rating: "8.4",
      id: '6',
      description: "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.",
      comments: [{
        name: "Jane",
        comment: "Soundtrack is epic"
        
      }]
    },
  ]



const cardContainer = document.getElementById('cardContainer')  
const cardInfo = document.getElementById('cardInfo')
const movieImage = document.getElementById('movieImage')
const movieDescription = document.getElementById('movieDescription')
const userReview = document.getElementById('userReview')
const movieComment = document.getElementById('movieComment')
const submitButton = document.getElementById('submitButton')
const backButton = document.getElementById('backButton')
const addMovie = document.getElementById('addMovie')
const movieModal = document.getElementById('movieModal')
const addPicture = document.getElementById('addPicture')
const addTitle = document.getElementById('addTitle')
const addYear = document.getElementById('addYear')
const addRating = document.getElementById('addRating')
const addDescription = document.getElementById('addDescription')
const fillMovieArr = document.getElementById('fillMovieArr')


backButton.addEventListener('click',showMoviesAgain)
addMovie.addEventListener('click', openModal)
fillMovieArr.addEventListener('click',fillMovies)

showMovies()

function showMovies(){

    movies.map(item =>{
        let card = document.createElement('div')
        card.style.border = '1px solid black'
        card.style.width = '25%'
        card.style.textAlign = 'center'
        card.style.margin = '5px'
        card.setAttribute('id', item.id)

        let image = document.createElement('img')
        image.src = item.image
        image.style.width = '80%'

        let title = document.createElement('div')
        title.innerText = item.title
        title.style.fontSize = '25px'

        let year = document.createElement('div')
        year.innerText = item.year

        let rating = document.createElement('div')
        rating.innerText = item.rating


        card.addEventListener('click', openCard)

        card.appendChild(image)
        card.appendChild(title)
        card.appendChild(year)
        card.appendChild(rating)

        cardContainer.appendChild(card)
    })

}

let currentMovie

function openCard(event){

  cardContainer.style.display = 'none'

  cardInfo.style.display = 'block'

  movieImage.src = event.path[0].currentSrc
  movieImage.style.width = '50%'

  let id = event.path[1].id

  let newCard = movies.filter(el => el.id === id)
  currentMovie = movies.findIndex(el => el.id === id)

  movieDescription.innerText = newCard[0].description

  submitButton.addEventListener('click', inputComment)

  showComments()

}

function showComments(){
  userReview.innerHTML = ''
  movies[currentMovie].comments.map(item =>{
    let name = document.createElement('h5')
    name.innerText = item.name

    let comment = document.createElement('div')
    comment.style.padding = '5px'
    comment.innerText = item.comment

    let delCommButton = document.createElement('button')
    delCommButton.innerText = 'delete'
    delCommButton.style.height = "20px"
    delCommButton.style.width = '55px'

    delCommButton.addEventListener('click', deleteComment)

    userReview.appendChild(name)
    userReview.appendChild(comment)
    userReview.appendChild(delCommButton)
  })
}

function inputComment(){
  let inputValue = document.getElementById('movieComment').value;
  let myComment = {
    name: 'Lukas',
    comment: inputValue
  }
  movies[currentMovie].comments.push(myComment);
  showComments()
}

function showMoviesAgain(){
  cardContainer.style.display = 'flex'

  cardInfo.style.display = 'none'
}

function deleteComment(event){
  console.log(event)
  // movies[currentMovie].comments.filter
}

function openModal(){
  cardContainer.style.display = 'none'
  movieModal.style.display = 'flex'
}

let newMovie = {}

function fillMovieInfo(){
  
  newMovie.image = addPicture.value
  newMovie.title = addTitle.value
  newMovie.year = addYear.value
  newMovie.rating = addRating.value
  newMovie.description = addDescription.value
  newMovie.id = String(movies.length + 1)
  movies.push(newMovie)
  console.log(movies)
}

function fillMovies(){
  fillMovieInfo()
  cardContainer.style.display = 'flex'
  movieModal.style.display = 'none'
  cardContainer.innerHTML = ''
  showMovies()
}