import { Button, Modal } from '@contentful/forma-36-react-components'
import styled from '@emotion/styled'
import { FC, useCallback, useState } from 'react'

import { stack } from '../../utils/mixins'

const AreYouSureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${stack()}
`

const ButtonsWrapper = styled.div`
  display: flex;

  > * + * {
    margin-left: 1rem;
  }
`

export const AreYouSure: FC<{
  trigger: () => void
  onConfirm: () => void
  onCancel?: () => void
}> = ({ onConfirm, onCancel }) => {
  const [open, setOpen] = useState(false)

  const handleConfirm = useCallback(() => {
    setOpen(false)
    onConfirm()
  }, [onConfirm])

  const handleClose = useCallback(() => {
    setOpen(false)

    if (onCancel) {
      onCancel()
    }
  }, [onCancel])

  return (
    <Modal isShown={open} onClose={handleClose}>
      <AreYouSureContainer>
        Are you sure?
        <ButtonsWrapper>
          <Button onClick={handleConfirm} buttonType="negative">
            No
          </Button>
          <Button onClick={handleClose} buttonType="positive">
            Yes
          </Button>
        </ButtonsWrapper>
      </AreYouSureContainer>
    </Modal>
  )
}
