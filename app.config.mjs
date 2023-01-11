import mitt from 'mitt'

export default defineAppConfig({
  bus: mitt()
})
