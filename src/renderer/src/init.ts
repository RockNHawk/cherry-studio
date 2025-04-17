import KeyvStorage from '@kangfenmao/keyv-storage'

import { startAutoSync } from './services/BackupService'
import store from './store'
import { APP_NAME, APP_IS_CUSTOM_PRODUCT } from './config/env'

function initSpinner() {
  const spinner = document.getElementById('spinner')
  if (spinner && window.location.hash !== '#/mini') {
    spinner.style.display = 'flex'
  }
}

function initKeyv() {
  window.keyv = new KeyvStorage()
  window.keyv.init()
}

function initAutoSync() {
  setTimeout(() => {
    const { webdavAutoSync } = store.getState().settings
    if (webdavAutoSync) {
      startAutoSync()
    }
  }, 2000)
}

initSpinner()
initKeyv()
initAutoSync()

if (APP_IS_CUSTOM_PRODUCT) {
  document.title = APP_NAME
}
