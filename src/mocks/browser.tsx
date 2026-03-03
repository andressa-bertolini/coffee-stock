import { setupWorker } from 'msw/browser'
import { stockHandlers } from './handlers/stock.handlers'

export const worker = setupWorker(...stockHandlers)