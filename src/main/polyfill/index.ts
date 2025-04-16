import win7Fix from './windows7'
import { isWindows7 } from '../utils/runtime'

export default function fix() {
  if (isWindows7()) {
    win7Fix()
  }
}
