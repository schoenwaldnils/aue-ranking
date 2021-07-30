import { Team } from './Team'

export type Player = {
  id: string
  name: string
  rank: string
  rankLevel: number
  rankDevision: number
  playtime: number
  trackingLink?: string

  avatar?: string
  team?: Team
}
