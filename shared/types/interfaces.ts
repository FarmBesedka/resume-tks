export interface Skill {
  title: string
  body: string
}

export interface InputData {
  name: string
  link: string
  description: string
}

export interface Project extends InputData {
  slug: string
}
