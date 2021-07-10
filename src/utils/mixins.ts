import { css, SerializedStyles } from '@emotion/react'

export const stack = (rem = 1): SerializedStyles => css`
  > * + * {
    margin-top: ${rem}rem !important;
  }
`

export const aspectRatio = (
  ratio: number,
  position: string | false = 'relative',
): SerializedStyles => css`
  ${position && `position: ${position}`};

  > * {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  > picture > img,
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: left;
  }

  ::after {
    content: '';
    display: block;
    padding-top: ${(100 / ratio).toFixed(4)}%;
  }
`

export const gradient = css`
  background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.5));
`

export const border = css`
  border-color: rgba(255, 255, 255, 0.8);
  border-width: 2px;
  border-style: none;
`

export const slant = css`
  clip-path: polygon(0% 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
`
