export default function fix() {
  console.info('polyfill win7')

  if (!globalThis.fetch) {
    globalThis.fetch = require('node-fetch')
  }

  // 全局注入 Blob
  if (!globalThis.Blob) {
    const { Blob } = require('blob-polyfill')
    globalThis.Blob = Blob
  }

  // 全局注入 ReadableStream
  if (!globalThis.ReadableStream) {
    const { ReadableStream } = require('web-streams-polyfill/polyfill')
    globalThis.ReadableStream = ReadableStream
  }

  // 全局注入 DOMException
  if (!globalThis.DOMException) {
    globalThis.DOMException = require('domexception')
  }

  if (!globalThis.crypto) {
    const { Crypto } = require('@peculiar/webcrypto')
    console.log('fix window.crypto')
    globalThis.crypto = new Crypto()
    console.log('fix window.crypto ok', globalThis['crypto'], globalThis['crypto']?.subtle)
  }

  console.info('polyfill win7 ok')
}
