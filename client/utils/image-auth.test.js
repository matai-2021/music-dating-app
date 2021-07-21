import checkURL from './image-auth'

describe('Validating image paths', () => {
  it('Returns a false for a bad image path', () => {
    const urlTest1 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkTQ8DFOgujidIRil33r2QnSZ2Y_ZHahrUlw&usqp=CAU'
    const urlTest2 = ''
    const result1 = checkURL(urlTest1)
    const result2 = checkURL(urlTest2)
    expect(result1).toBe(false)
    expect(result2).toBe(false)
  })

  it('Returns a true for a valid image path', () => {
    const urlTestValid1 = 'https://c.tenor.com/HJvqN2i4Zs4AAAAj/milk-and-mocha-cute.gif'
    const resultValid1 = checkURL(urlTestValid1)
    expect(resultValid1).toBe(true)

    const urlTestValid2 = 'https://www.copytrans.net/app/uploads/sites/2/2021/04/heic-vs-jpeg-compressed.jpg'
    const resultValid2 = checkURL(urlTestValid2)
    expect(resultValid2).toBe(true)

    const urlTestValid3 = 'https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png'
    const resultValid3 = checkURL(urlTestValid3)
    expect(resultValid3).toBe(true)
  })
})
