class PushNotification {
  constructor(id) {
    this.loadScript().then(() => {
      this.init(id)
    })
  }

  loadScript() {
    return new Promise((resolve) => {
      const doc = document
      const script = doc.createElement('script')
      script.async = false
      script.src = `https://sdk.push7.jp/v2/p7sdk.js`
      doc.body.appendChild(script)
      resolve()
    })
  }
  init(id) {
    window.p7.init(id)
  }
}

export default (ctx, inject) => {
  // 本番環境以外は動かさない)
  // if (process.env.NODE_ENV !== 'production') return
  const $push7 = new PushNotification('14ae4fb81ebd4aadb6581bdd1842e3e2')
  // 今後の拡張のためinjectして、すべてのコンポーネントで使えるようにする
  inject('push7', $push7)
}
