import { FC } from 'react'

import { RankingList as RankingListComponent } from './RankingList'

export default {
  title: 'RankingList',
  component: RankingListComponent,
  parameters: {
    percy: { skip: true },
  },
}

export const RankingList: FC = () => (
  <RankingListComponent />
)
