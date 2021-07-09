import { FC } from 'react'

import { Link as LinkComponent } from './Link'

export default {
  title: 'Typography / Link',
  component: LinkComponent,
  parameters: {
    percy: { skip: true }, // part of article
  },
}

export const Link: FC = () => (
  <>
    <div>
      Lorem ipsum dolor sit <LinkComponent href="#">Lorem Ipsum</LinkComponent>,
      consectetur adipisicing elit. Dignissimos minus accusantium odit
      repudiandae earum sapiente tenetur qui? Modi itaque velit odit adipisci
      impedit quos excepturi laborum. Accusamus nobis quisquam velit?
    </div>
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sint cumque,
      perferendis dolorum autem ab recusandae suscipit molestiae dignissimos
      evenietimpedit distinctio nobis ut{' '}
      <LinkComponent href="https://schoen.world/">
        temporibus nemo
      </LinkComponent>
      . Ad debitis voluptate impedit.
    </div>
  </>
)
