module.exports = function helmet (options = {}) {
  return handler => {
    handler.response.headers = {
      'content-type': 'application/json',
      'x-dns-prefetch-control': 'off',
      'x-frame-options': 'sameorigin',
      'x-download-options': 'noopen',
      'x-content-type-options': 'nosniff',
      'x-xss-protection': '1; mode=block',
      'strict-transport-security': 'max-age=5184000',
      ...handler.response.headers,
    }
  }
}
