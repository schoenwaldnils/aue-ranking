import type { TrackingData } from './TrackingData'

export type FirebasePlayer = {
  id: string
  name: string
  platform: string
  platformId: string
  playtime: number
  trackingData?: string
}

export type Player = {
  id: string
  name: string
  playtime: number
  platform: string
  platformId: string

  trackingLink?: string
  trackingData?: TrackingData
  seasonPercentile?: number
  seasonReward?: string
  seasonRewardLevel?: number
  seasonRewardImg?: string
  playlists?: {
    name: string
    icon: string
    devision: number
    rankName: string
  }[]

  avatar?: string
}
