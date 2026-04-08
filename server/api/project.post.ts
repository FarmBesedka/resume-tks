import { getDB } from '#server/utils/db'
import { slugify } from '#server/utils/slugify'

export default defineEventHandler(async (event) => {
  try {
    const db = getDB()
    const body = await readBody(event)
    db.prepare(`INSERT INTO projects (name, link, shortDescription, description, slug) VALUES (?, ?, ?, ?, ?)`).run(
      body.name,
      body.link,
      body.shortDescription,
      body.description,
      slugify(body.name),
    )
    return 'OK'
  } catch (error) {
    console.error(error)
    return error
  }
})
