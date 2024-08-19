import * as React from 'react'
import * as Popover from '@radix-ui/react-popover'

import './styles.css'

const PopoverDemo = () => (
  <Popover.Root>
    <Popover.Trigger className="popover-trigger">More info</Popover.Trigger>
    <Popover.Portal>
      <Popover.Content className="popover-content">
        Some more info…
        <Popover.Arrow className="popover-arrow" />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
)

export default PopoverDemo
