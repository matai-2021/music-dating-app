function setListen (superArr, subArr) {
  return superArr
    .map(genre => subArr
      .map(g1 => g1.id)
      .includes(genre.id)
      ? { ...genre, listens: true }
      : { ...genre, listens: false }
    )
}

function dot (arr1, arr2) {
  const zip = (a, b) => a.map((k, i) => [k, b[i]])
  return zip(arr1, arr2)
    .reduce((acc, [fst, snd]) => fst.listens && snd.listens ? 1 + acc : 0 + acc, 0)
}

function vectorLength (arr) {
  return Math.sqrt(arr
    .map(x => x ? 1 : 0)
    .reduce((acc, c) => c + acc))
}

function similarity (arr1, arr2, genres) {
  const arr1WithListens = setListen(genres, arr1)
  const arr2WithListens = setListen(genres, arr2)
  const dotResult = dot(arr1WithListens, arr2WithListens)
  const vectorLength1 = vectorLength(arr1WithListens.map(x => x.listens))
  const vectorLength2 = vectorLength(arr2WithListens.map(x => x.listens))
  const similarity = dotResult / (vectorLength1 * vectorLength2)
  console.log('arr1WithListens', arr1WithListens)
  console.log('arr2WithListens', arr2WithListens)
  console.log('dotResult', dotResult)
  console.log('vectorLength1', vectorLength1)
  console.log('vectorLength2', vectorLength2)
  console.log('similarity', similarity)
  return similarity.toFixed(2)
}

module.exports = similarity
