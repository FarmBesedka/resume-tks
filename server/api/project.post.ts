import { getDB } from '#server/utils/db'
import { slugify } from '#server/utils/slugify'

export default defineEventHandler(async (event) => {
  try {
    const db = getDB()
    const body = await readBody(event)
    const res = db.prepare(`INSERT INTO projects (name, link, description, slug) VALUES (?, ?, ?, ?)`).run(body.name, body.link, body.description, slugify(body.name))
    return res
  } catch (error) {
    console.error(error)
    return error
  }
})
