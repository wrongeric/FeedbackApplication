// write a function to retrieve a blob of json
// make an ajax request!  Use the 'fetch' function
//  https://rallycoding.herokuapp.com/api/music_albums

//ES 2015
// function fetchAlbums() {
//   fetch("https://rallycoding.herokuapp.com/api/music_albums")
//     .then(res => res.json())
//     .then(json => console.log(json));
// }

async function fetchAlbums() {
  const res = await fetch("https://rallycoding.herokuapp.com/api/music_albums");
  const json = await res.json();

  console.log(json);
}

fetchAlbums();

//async/await ES2017
// const fetchAlbums = async () => {
//   const res = await fetch("https://rallycoding.herokuapp.com/api/music_albums");
//   const json = await res.json();

//   console.log(json);
// };
