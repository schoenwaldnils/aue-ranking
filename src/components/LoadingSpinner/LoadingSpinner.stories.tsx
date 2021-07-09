import React, { FC } from 'react'

import { Stack } from '../Stack'
import {
  LoadingIcon,
  LoadingSpinner as LoadingSpinnerComponent,
} from './LoadingSpinner'

export default {
  title: 'Loading Spinner',
  component: LoadingSpinnerComponent,
  parameters: {
    percy: { skip: true },
  },
}

export const LoadingSpinner: FC = () => (
  <Stack>
    <LoadingIcon />
    <LoadingSpinnerComponent />
  </Stack>
)
