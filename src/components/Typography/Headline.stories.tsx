import { FC } from 'react'

import { Stack } from '../Stack'
import { Headline1, Headline2, Headline3, Headline4 } from './Headline'

export default {
  title: 'Typography / Headline',
  parameters: {
    percy: { skip: true }, // part of article
  },
}

export const Headline: FC = () => (
  <Stack amount={2}>
    <Headline1>
      Heading 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
      dolorum non tempora aperiam temporibus eos.
    </Headline1>
    <Headline2>
      Heading 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
      dolorum non tempora aperiam temporibus eos.
    </Headline2>
    <Headline3>
      Heading 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
      dolorum non tempora aperiam temporibus eos.
    </Headline3>
    <Headline4>
      Heading 4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
      dolorum non tempora aperiam temporibus eos.
    </Headline4>
  </Stack>
)
