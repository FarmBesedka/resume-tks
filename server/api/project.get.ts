import { getDB } from '#server/utils/db'

export default defineEventHandler(async (event) => {
  try {
    const db = getDB()
    const res = db.prepare(`SELECT * FROM projects`).all()
    return res
  } catch (error) {
    console.error(error)
    return error
  }
})
