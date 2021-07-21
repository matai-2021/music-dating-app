const { chromium } = require('playwright')
const config = require('../../server/db/knexfile').development
const db = require('knex')(config)
const { serverUrl } = require('./index')

jest.setTimeout(20000)

let browser
let page
beforeAll(async () => {
  browser = await chromium.launch({ headless: false, slowMo: 500 })
  await db.migrate.latest({ directory: './server/db/migrations' })
})

beforeEach(async () => {
  const context = await browser.newContext()
  page = await context.newPage()
  await db.seed.run({ directory: './server/db/seeds' })
})

afterEach(async () => {
  await page.close()
})

afterAll(async () => {
  await browser.close()
  return db.destroy()
})

test('given an existing username, the user navigates to the matching page', async () => {
  await page.goto(serverUrl)
  await Promise.all([
    page.waitForNavigation(),
    page.fill('[name=username]', 'ahmadanwar'),
    page.click('text=Sign in')
  ])
  expect(await page.url()).toBe(`${serverUrl}/#/matching`)
})

test('users can navigate to profile page and upate their profile', async () => {
  await page.goto(serverUrl)
  await Promise.all([
    page.waitForNavigation(),
    page.fill('[name=username]', 'ahmadanwar'),
    page.click('text=Sign in')
  ])
  await page.click('#profile', { force: true })
  expect(await page.url()).toBe(`${serverUrl}/#/profile`)

  await page.fill('[name=fullname]', 'fullname')
  await page.fill('[name=description]', 'description')

  await page.selectOption('select#genderId', { label: 'Female' })
  await page.check('[name=Rock]')
  await page.check('[name=Country]')
  await page.check('[name=Country]')

  await page.click('text=Update Information')
  expect(await page.url()).toBe(`${serverUrl}/#/matching`)
})
