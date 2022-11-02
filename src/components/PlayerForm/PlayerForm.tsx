import {
  Button,
  FieldGroup,
  Flex,
  Form,
  IconButton,
  Modal,
} from '@contentful/forma-36-react-components'
import styled from '@emotion/styled'
import qs from 'qs'
import { FC, useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'

import type { Player } from '../../@types/Player'
import { platforms } from '../../data/platforms'
import { addPlayer, updatePlayer } from '../../hooks/useDB'
import { Select } from '../Form'
import { TextField } from '../Form/TextField'

const ButtonContainer = styled(Flex)`
  gap: 1rem;
`

export const PlayerForm: FC<{ player?: Player }> = ({ player }) => {
  const [open, setOpen] = useState(false)

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = useCallback(
    async (data) => {
      const dataFromated: Player = {
        ...data,
        playtime: parseInt(data.playtime, 10) || 0,
      }

      if (player?.id) {
        await updatePlayer(player?.id, dataFromated)
      } else {
        await addPlayer(dataFromated)
      }

      if (!player && data.platform && data.platformId) {
        await fetch(
          `${window.location.protocol}//${
            window.location.host
          }/api/updatePlayerTracking?${qs.stringify({
            platform: data.platform,
            id: data.platformId,
            memberId: player?.id,
          })}`,
        )
      }

      reset()
      setOpen(false)
      // console.log(data)
    },
    [player, reset],
  )

  return (
    <>
      {player ? (
        <IconButton
          onClick={() => setOpen(true)}
          iconProps={{ icon: 'Edit' }}
        />
      ) : (
        <Button onClick={() => setOpen(true)}>Add Player</Button>
      )}
      <Modal
        title={`${player ? 'Edit' : 'Add'} Player`}
        size="large"
        isShown={open}
        onClose={() => setOpen(false)}
      >
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FieldGroup>
            <TextField
              id="name"
              labelText="Name"
              textInputProps={{
                defaultValue: player?.name || '',
                width: 'full',
                error: !!errors.name,
              }}
              {...register('name', { required: true })}
            />

            <Select
              id="platform"
              labelText="Platform"
              options={Object.entries(platforms).map(([key, platform]) => ({
                label: platform,
                value: key,
              }))}
              selectProps={{
                value: player?.platform || Object.keys(platforms)[0],
                width: 'full',
                hasError: !!errors.platform,
              }}
              {...register('platform', { required: true })}
            />

            <TextField
              id="platformId"
              labelText="ID"
              textInputProps={{
                defaultValue: player?.platformId || '',
                width: 'full',
                error: !!errors.platformId,
              }}
              {...register('platformId', {
                required: true,
              })}
            />

            <TextField
              id="playtime"
              labelText="Playtime (h)"
              textInputProps={{
                defaultValue: player?.playtime || '',
                width: 'full',
                error: !!errors.playtime,
              }}
              {...register('playtime', {
                required: true,
                pattern: /^[0-9]+$/,
              })}
            />
          </FieldGroup>

          <FieldGroup>
            <ButtonContainer justifyContent="flex-end">
              <Button onClick={() => setOpen(false)} buttonType="naked">
                Cancel
              </Button>
              <Button type="submit">Submit</Button>
            </ButtonContainer>
          </FieldGroup>
        </Form>
      </Modal>
    </>
  )
}
