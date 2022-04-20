import { Message } from 'element-ui'
export default (ctx, inject) => {
  // console.log('axios', ctx)
  ctx.$axios.onRequest(req => {
    // console.log('请求', req)
  })
  ctx.$axios.onResponse(res => {
    // console.log('来了', Message)
    // Message.success('成功了')
    if (typeof window !== 'undefined') {
      //  Message({
      //    message: '成功了',
      //    type: 'success',
      //  })
     }
  })
}