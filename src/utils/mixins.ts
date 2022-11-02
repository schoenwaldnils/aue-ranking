import type { SerializedStyles } from '@emotion/react'
import { css } from '@emotion/react'

import { breakpoints } from '../data/breakpoints'

export const upFromBreakpoint = (
  breakpoint: keyof typeof breakpoints,
): string => {
  return `@media (min-width: ${breakpoints[breakpoint]}px)`
}

export const upToBreakpoint = (
  breakpoint: keyof typeof breakpoints,
): string => {
  return `@media (max-width: ${breakpoints[breakpoint] - 1}px)`
}

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

export const slant = (pixel: number): SerializedStyles => css`
  position: relative;
  clip-path: polygon(0% 0%, 100% 0%, calc(100% - ${pixel}px) 100%, 0% 100%);

  :after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: ${pixel}px;
    background-color: rgba(255, 255, 255, 0.8);
    clip-path: polygon(${pixel}px 0%, 100% 0%, 100% 100%, 0% 100%);
  }
`
