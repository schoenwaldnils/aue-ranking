import styled from '@emotion/styled'
import { Button } from '@material-ui/core'
import { FC, useCallback, useState } from 'react'

import { stack } from '../../utils/mixins'
import { Modal } from '../Modal'

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
    <Modal open={open} handleClose={handleClose}>
      <AreYouSureContainer>
        Are you sure?
        <ButtonsWrapper>
          <Button variant="outlined" onClick={handleConfirm}>
            No
          </Button>
          <Button variant="contained" onClick={handleClose}>
            Yes
          </Button>
        </ButtonsWrapper>
      </AreYouSureContainer>
    </Modal>
  )
}
