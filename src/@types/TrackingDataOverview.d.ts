export interface Overview {
  platformInfo: PlatformInfo
  userInfo: UserInfo
  metadata: Metadata
  segments?: SegmentsEntity[] | null
  availableSegments?: AvailableSegmentsEntity[] | null
  expiryDate: string
}

export interface PlatformInfo {
  platformSlug: string
  platformUserId?: null
  platformUserHandle: string
  platformUserIdentifier: string
  avatarUrl: string
  additionalParameters?: null
}

export interface UserInfo {
  userId: number
  isPremium: boolean
  isVerified: boolean
  isInfluencer: boolean
  isPartner: boolean
  countryCode: string
  customAvatarUrl?: null
  customHeroUrl?: null
  socialAccounts?: null[] | null
  pageviews: number
  isSuspicious?: null
}

export interface Metadata {
  lastUpdated: LastUpdated
  playerId: number
  currentSeason: number
}

export interface LastUpdated {
  value: string
  displayValue: string
}

export interface SegmentsEntity {
  type: string
  attributes: Attributes
  metadata: Metadata1
  expiryDate: string
  stats: Stats
}

export interface Attributes {
  playlistId?: number | null
  season?: number | null
}

export interface Metadata1 {
  name: string
}

export interface Stats {
  wins?: Stat
  goals?: Stat
  mVPs?: Stat
  saves?: Stat
  assists?: Stat
  shots?: Stat
  goalShotRatio?: Stat
  score?: Stat
  seasonRewardLevel?: SeasonRewardLevel | null
  seasonRewardWins?: SeasonRewardWinsOrTRNRatingOrMatchesPlayed | null
  tRNRating?: SeasonRewardWinsOrTRNRatingOrMatchesPlayed | null
  tier?: Tier | null
  division?: Division | null
  matchesPlayed?: MatchesPlayed | null
  winStreak?: WinStreak | null
  rating?: Stat
}

export interface Stat {
  rank: number
  percentile: number
  displayName: string
  displayCategory: string
  category: string
  value: number
  displayValue: string
  displayType: string
}

export interface SeasonRewardLevel {
  rank?: null
  percentile: number
  displayName: string
  displayCategory: string
  category: string
  metadata: Metadata2
  value: number
  displayValue: string
  displayType: string
}

export interface Metadata2 {
  iconUrl: string
  rankName: string
}

export interface SeasonRewardWinsOrTRNRatingOrMatchesPlayed {
  rank?: null
  percentile?: null
  displayName: string
  displayCategory: string
  category: string
  value: number
  displayValue: string
  displayType: string
}

export interface Tier {
  rank?: null
  percentile?: number | null
  displayName: string
  displayCategory: string
  category: string
  metadata: Metadata3
  value: number
  displayValue: string
  displayType: string
}

export interface Metadata3 {
  iconUrl: string
  name: string
}

export interface Division {
  rank?: null
  percentile?: number | null
  displayName: string
  displayCategory: string
  category: string
  metadata: Metadata4
  value: number
  displayValue: string
  displayType: string
}

export interface Metadata4 {
  name: string
  deltaDown?: number | null
  deltaUp?: number | null
}

export interface MatchesPlayed {
  rank?: null
  percentile?: number | null
  displayName: string
  displayCategory: string
  category: string
  value: number
  displayValue: string
  displayType: string
}

export interface WinStreak {
  rank?: null
  percentile?: number | null
  displayName: string
  displayCategory: string
  category: string
  metadata: Metadata5
  value: number
  displayValue: string
  displayType: string
}

export interface Metadata5 {
  type: string
}

export interface AvailableSegmentsEntity {
  type: string
  attributes: Attributes1
  metadata: Metadata1
}

export interface Attributes1 {
  season: number
}
