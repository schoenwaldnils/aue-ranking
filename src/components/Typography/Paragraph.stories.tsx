import { FC } from 'react'

import { P as Paragraph } from './Paragraph'

export default {
  title: 'Typography / P',
  component: Paragraph,
  parameters: {
    percy: { skip: true }, // part of article
  },
}

export const P: FC = () => (
  <Paragraph>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dolorum non
    tempora aperiam temporibus eos. Nobis aut nesciunt ab temporibus obcaecati,
    veritatis repellendus. Consequatur, praesentium impedit. Recusandae debitis
    aliquid corrupti.
  </Paragraph>
)
