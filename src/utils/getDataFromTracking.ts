import { Player } from '../@types/Player'
import { TrackingData } from '../@types/TrackingData'

export const getDataFromTracking = (data: TrackingData): Partial<Player> => {
  if (!data) {
    return {}
  }

  const overview = data.overview.segments.find((s) => s.type === 'overview')

  const playlists = data.overview.segments.filter((i) => i.type === 'playlist')

  const seasonReward = overview.stats.seasonRewardLevel

  return {
    avatar:
      data.overview.platformInfo.avatarUrl ||
      'https://trackercdn.com/cdn/rocketleague.tracker.network/images/defaultAvatar.jpg',
    platform: data.overview.platformInfo.platformSlug,
    seasonPercentile: seasonReward.percentile,
    seasonRewardLevel: seasonReward.value,
    seasonReward: seasonReward.metadata.rankName,
    seasonRewardImg: seasonReward.metadata.iconUrl,
    playlists: playlists.map((p) => ({
      name: p.metadata.name,
      icon: p.stats.tier.metadata.iconUrl,
      devision: p.stats.division.value,
      rankName: p.stats.tier.metadata.name,
    })),
  }
}
