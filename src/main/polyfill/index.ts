import win7Fix from './windows7'
import { isWindows7 } from '../utils/runtime'
// import { app } from 'electron'

export default function fix() {
  if (isWindows7()) {
    win7Fix()
    // app.commandLine.appendSwitch('enable-experimental-web-platform-features')
  }
}
