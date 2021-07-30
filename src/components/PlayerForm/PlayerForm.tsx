import styled from '@emotion/styled'
import { Button } from '@material-ui/core'
import { FC, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { MdModeEdit } from 'react-icons/md'

import { Player } from '../../@types/Player'
import { devisions, ranks } from '../../data/ranks'
import { db } from '../../utils/firebase'
import { Input, Select } from '../Form'
import { Modal } from '../Modal'
import { Stack } from '../Stack'

const RankWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`

const Edit = styled.div`
  position: relative;
  padding: 0.5em;
  cursor: pointer;
  line-height: 1;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    border-radius: 0.5em;
    transition: opacity 150ms;
    background-color: rgba(255, 255, 255, 0.1);
  }

  :hover::before {
    opacity: 1;
  }

  > svg {
    display: block;
  }
`

export const PlayerForm: FC<{ player?: Player }> = ({ player }) => {
  const [open, setOpen] = useState(false)

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const dataFromated: Player = {
      ...data,
      rank: parseInt(data.rank, 10),
      rankDevision: parseInt(data.rankDevision, 10),
      playtime: parseInt(data.playtime, 10) || 0,
    }

    await db
      .collection('players')
      .doc(player?.id || undefined)
      .set(dataFromated)
    reset()
    setOpen(false)
    // console.log(data)
  }

  return (
    <>
      {player ? (
        <Edit onClick={() => setOpen(true)}>
          <MdModeEdit />
        </Edit>
      ) : (
        <Button variant="contained" onClick={() => setOpen(true)}>
          Add Player
        </Button>
      )}
      <Modal title="Add Player" open={open} handleClose={() => setOpen(false)}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack amount={2}>
            <Stack>
              <Controller
                name="name"
                control={control}
                defaultValue={player?.name || ''}
                rules={{ required: true }}
                render={({ field }) => (
                  <Input label="Name" error={errors.name} {...field} />
                )}
              />

              <RankWrapper>
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
              </RankWrapper>

              <Controller
                name="playtime"
                control={control}
                defaultValue={player?.playtime || ''}
                render={({ field }) => (
                  <Input label="Playtime (h)" type="number" {...field} />
                )}
              />

              <Controller
                name="trackingLink"
                control={control}
                defaultValue={player?.trackingLink || ''}
                render={({ field }) => (
                  <Input label="Tracking Link" {...field} />
                )}
              />

              <Controller
                name="avatar"
                control={control}
                defaultValue={player?.avatar || ''}
                render={({ field }) => <Input label="Avatar Link" {...field} />}
              />
            </Stack>

            <Button variant="contained" type="submit">
              Save
            </Button>
          </Stack>
        </form>
      </Modal>
    </>
  )
}
