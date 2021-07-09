import { FC } from 'react'

import { RankingItem as RankingItemComponent } from './RankingItem'

export default {
  title: 'RankingItem',
  component: RankingItemComponent,
  parameters: {
    percy: { skip: true },
  },
}

export const RankingItem: FC = () => (
  <RankingItemComponent />
)
