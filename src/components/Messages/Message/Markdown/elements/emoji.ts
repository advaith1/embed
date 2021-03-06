import styled, { css } from 'typed-emotion'
import EmojiParser from 'styled-elements/Emoji'

interface Props {
  enlarged?: boolean
}

const emoji = (enlarged: boolean) => css`
  object-fit: contain;
  -webkit-user-drag: none;

  ${enlarged
    ? css`
        height: 34px;
        width: 34px;
        margin: 3px 1px;
        vertical-align: bottom;
      `
    : css`
        width: 22px;
        height: 22px;
        vertical-align: -0.4em;
        margin: 0;
      `};
`

export const Emoji = styled<Props, 'img'>('img')`
  ${({ enlarged }) => emoji(enlarged)};
`

export const Twemoji = styled(EmojiParser)`
  ${emoji(false)};

  &.enlarged {
    ${emoji(true)};
  }
`
