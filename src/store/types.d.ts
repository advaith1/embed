import { ComputedValue, Dictionary } from '@cerebral/fluent'

import { Translation } from '../app/locales'
import { Category } from '../types/category'
import Message from '../types/message'
import Modal from '../types/modal'
import { ParsedUrl } from '../types/url'
import { User } from '../types/user'
import * as computed from './computed'
import * as signals from './sequences'

interface Channel {
  name: string
  category: string
  topic?: string
  messages?: Dictionary<Message>
}

export type Toggles = 'channels'

export interface Theme {
  colors: {
    primary: string
    accent: string
    background: string
  }
  css: string
  compact: boolean
}

export interface State {
  screen: 'choose-channel' | 'active-channel'
  // Message loading state
  loading: boolean
  // Server info
  server: {
    name: string
    id: string
    memberCount: number
    icon: string
  }

  // Router url
  url: ParsedUrl

  // Array of channels
  channels: Dictionary<Channel>
  // Categorised channels
  categories: ComputedValue<Category[]>

  // Active channel ID
  activeChannel: string
  // Returns the active channel object
  channel: ComputedValue<Channel>

  // Visible UI components
  visible: { [key in Toggles]: boolean }
  // Theme
  theme: Theme

  // Modal
  modal: Modal

  // User
  user: User

  // Translation
  translation: Translation
}

export type Signals = { [key in keyof typeof signals]: typeof signals[key] }

export type Computed = { [key in keyof typeof computed]: typeof computed[key] }
