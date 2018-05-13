import { Provider as RouterProvider } from '@cerebral/router'
import {
  IBranchContext,
  IContext,
  ChainSequenceFactory,
  ChainSequenceWithPropsFactory
} from 'cerebral'
import * as proxy from 'cerebral/proxy'

import * as App from '../../store/types'

interface Providers {
  router: RouterProvider
  state: App.State
}

export type Context<Props = {}> = IContext<Props> & Providers

export type BranchContext<Paths, Props = {}> = IBranchContext<Paths, Props> &
  Providers

export const sequence = ChainSequenceFactory<Context>()
export const sequenceWithProps = ChainSequenceWithPropsFactory<Context>()
export const state = proxy.state as App.State
// @ts-ignore
export const signals = proxy.signals as App.Signals
// @ts-ignore
export const computed = proxy.computed as App.Computed
export const props = proxy.props
