const Vue = require('vue')
const express = require('express')
const fs = require('fs')
const { createBundleRenderer } = require('vue-server-renderer')
const setupDevServer = require('./build/setup-dev-server')

const isProd = process.env.NODE_ENV === 'production'
const server = express()

let renderer
let onReady
if (isProd) {
  const serverBundle = require('./dist/vue-ssr-server-bundle.json')
  const template = fs.readFileSync('./index.template.html', 'utf-8')
  const clientManifest = require('./dist/vue-ssr-client-manifest.json')
  renderer = createBundleRenderer(serverBundle, {
    template,
    clientManifest
  })
} else {
  // 开发模式 -> 监视打包构建 -> 重新生成 Renderer 渲染器
  onReady = setupDevServer(server, (serverBundle, template, clientManifest) => {
    renderer = createBundleRenderer(serverBundle, {
      template,
      clientManifest
    })
  })
}

// express.static 处理的是物理磁盘的资源文件
server.use('/dist', express.static('./dist'))

const render = async (req, res) => {
  try {
    const html = await renderer.renderToString({
      title: '时光海',
      meta: `
        <meta name="description" content="时光海">
      `,
      url: req.url
    })
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end(html)
  } catch (err) {
    res.status(500).end('Internal Server Error.')
  }
}

// 服务端路由设置为 *，意味着所有的路由都会进入这里
server.get('*', isProd
  ? render
  : async (req, res) => {
    // 等待有了 Renderer 渲染器以后，调用 render 进行渲染
    await onReady
    render(req, res)
  }
)

server.listen(3000, () => {
  console.log('server runing at port 3000.')
})
