import * as AppMeta from '../../../shared/app-meta'

export { default as UserAvatar } from '@renderer/assets/images/avatar.png'
export { default as AppLogo } from '@renderer/assets/images/logo.png'

// export const APP_NAME = process.env['CUSTOM_APP_NAME'] || '超高压智脑'
// export const APP_NAME = import.meta.env.VITE_CUSTOM_APP_NAME || process.env.CUSTOM_APP_NAME || 'Cherry Studio'
// export const APP_NAME = '超高压智脑'
// export const APP_NAME = 'Cherry Studio'
export const APP_NAME = AppMeta.APP_NAME
export const isLocalAi = false
