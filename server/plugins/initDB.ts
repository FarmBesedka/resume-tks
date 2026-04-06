import { getDB } from '#server/utils/db'
export default defineNitroPlugin((nitroApp) => getDB())
