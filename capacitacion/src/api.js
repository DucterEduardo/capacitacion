const url = 'https://api.coincap.io/v2'

function getAssets() {
  return fetch(`${url}/assets?limit=20`)
    .then(res => res.json())
    .then(res => res.data)
}

async function getAsset(coin) {
  return await fetch(`${url}/assets/${coin}`)
    .then(res => res.json())
    .then(res => res.data)
}

function getAssetHistory(coin) {
  const now = new Date()
  // const end = now.getTime()
  now.setDate(now.getDate() - 1)
  // const start = now.getTime()

  return fetch(
    `${url}/assets/${coin}/history?interval=d1`
  )
    .then(res => res.json())
    .then(res => res.data)
}

function getMarkets(coin) {
  return fetch(`${url}/assets/${coin}/markets`)
    .then(res => res.json())
    .then(res => res.data)
}

function getExchange(id) {
  return fetch(`${url}/exchanges/${id}`)
    .then(res => res.json())
    .then(res => res.data)
}

export default {
  getAssets,
  getAsset,
  getMarkets,
  getExchange,
  getAssetHistory
}
