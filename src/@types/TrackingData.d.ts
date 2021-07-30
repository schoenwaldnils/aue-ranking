import { Overview } from './TrackingDataOverview'

export interface TrackingData {
  overview: Overview
  mmr: Mmr
  history: HistoryEntity[]
}

export interface Mmr {
  0?: MmrEntry[] | null
  10?: MmrEntry[] | null
  11?: MmrEntry[] | null
  12?: MmrEntry[] | null
  13?: MmrEntry[] | null
  27?: MmrEntry[] | null
  28?: MmrEntry[] | null
  29?: MmrEntry[] | null
  30?: MmrEntry[] | null
  34?: MmrEntry[] | null
}

export interface MmrEntry {
  rating: number
  tier: string
  division: string
  tierId: number
  divisionId: number
  collectDate: string
}

export interface HistoryEntity {
  assists: number
  collectDate: string
  goals: number
  goalShotRatio: number
  mvPs: number
  saves: number
  score: number
  shots: number
  wins: number
}
