import { FC } from 'react'

import { Hr as HrComponent } from './Hr'

export default {
  title: 'Typography / Hr',
  component: HrComponent,
  parameters: {
    percy: { skip: true }, // part of article
  },
}

export const Hr: FC = () => <HrComponent />
