import { FC } from 'react'

import { Stack as StackComponent } from './Stack'

export default {
  title: 'Stack',
  component: StackComponent,
  parameters: {
    percy: { skip: true },
  },
}

export const Stack: FC = () => (
  <StackComponent>
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
      quas ratione quidem natus nobis voluptatibus omnis incidunt praesentium
      iste autem. Aliquid esse veniam molestias dolorum tempore, dolor quidem
      accusantium itaque.
    </div>

    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
      quas ratione quidem natus nobis voluptatibus omnis incidunt praesentium
      iste autem. Aliquid esse veniam molestias dolorum tempore, dolor quidem
      accusantium itaque.
    </div>

    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
      quas ratione quidem natus nobis voluptatibus omnis incidunt praesentium
      iste autem. Aliquid esse veniam molestias dolorum tempore, dolor quidem
      accusantium itaque.
    </div>
  </StackComponent>
)
