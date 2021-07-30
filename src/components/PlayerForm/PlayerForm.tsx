import {
  Button,
  FieldGroup,
  Flex,
  Form,
  IconButton,
  Modal,
  TextField,
} from '@contentful/forma-36-react-components'
import styled from '@emotion/styled'
import qs from 'qs'
import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'

import { Player } from '../../@types/Player'
import { platforms } from '../../data/platforms'
import { db } from '../../utils/firebase'
import { Select } from '../Form'

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

  const onSubmit = async (data) => {
    const dataFromated: Player = {
      ...data,
      playtime: parseInt(data.playtime, 10) || 0,
    }

    const doc = db.collection('players').doc(player?.id || undefined)
    await doc.set(dataFromated, { merge: true })

    if (!player && data.platform && data.platformId) {
      await fetch(
        `${window.location.protocol}//${
          window.location.host
        }/api/updatePlayerTracking?${qs.stringify({
          platform: data.platform,
          id: data.platformId,
          memberId: doc.id,
        })}`,
      )
    }

    reset()
    setOpen(false)
    // console.log(data)
  }

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
              textInputProps={{ width: 'full', error: !!errors.name }}
              {...register('name', { required: true })}
            />

            <Select
              id="platform"
              labelText="Platform"
              options={Object.entries(platforms).map(([key, platform]) => ({
                label: platform,
                value: key,
              }))}
              selectProps={{ width: 'full', hasError: !!errors.platform }}
              {...register('platform', { required: true })}
            />

            <TextField
              id="platformId"
              labelText="ID"
              textInputProps={{ width: 'full', error: !!errors.platformId }}
              {...register('platformId', {
                required: true,
              })}
            />

            {/* <Horizontal>
                <Controller
                  name="rank"
                  control={control}
                  defaultValue={player?.rank || ''}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Select
                      id="rankLevel"
                      label="Rank"
                      showNone={false}
                      options={ranks.map((rank, key) => ({
                        label: rank,
                        value: (key + 1).toString(),
                      }))}
                      error={errors.rank}
                      {...field}
                    />
                  )}
                />

                <Controller
                  name="rankDevision"
                  control={control}
                  defaultValue={player?.rankDevision || ''}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Select
                      id="rankDevision"
                      label="Devision"
                      showNone={false}
                      options={devisions.map((level) => ({
                        label: level.toString(),
                        value: level.toString(),
                      }))}
                      error={errors.rankDevision}
                      {...field}
                    />
                  )}
                />
              </Horizontal> */}

            <TextField
              id="playtime"
              labelText="Playtime (h)"
              textInputProps={{ width: 'full', error: !!errors.playtime }}
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
