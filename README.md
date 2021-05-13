# actions.navigateTo(options)
actions.navigateTo 是从当前页面，跳转到应用内的某个指定小程序页面的 API。

# 参数
options Object
|  属性   | 类型  |默认值  |必填  |说明 |
|  ----  | ----  |----  |----  |----  |
| url  | string | |是 |一律采用../xxx/index格式，不要带pages |
|success  | function ||否 |接口调用失败的回调函数 |
|fail | function | |否 |接口调用失败的回调函数|
|success  | function || 否 |接口调用结束的回调函数（调用成功、失败都会执行） |

# 示例代码
```js
actions.navigateTo({
  url: '../counter/index',
  success: function() {
    console.log("navigateTo success!");
  },
  fail: function() {
    console.log("navigateTo fail!");
  },
  complete: function() {
    console.log("navigateTo complete!");
  }
})
```