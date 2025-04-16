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

  console.info('polyfill win7 ok')
}
