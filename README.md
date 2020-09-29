###  assets:            静态文件 css img
  
### common:             公共组件
  
### components:         组件

### pages:              子组件

### router:             路由

### services:           axios数据请求

### store:              redux状态管理

### utils:              工具包

### discover            发现音乐
   #### recommend      推荐
   #### ranking        排行榜
   #### songs          歌单
   #### djradio        主播电台
   #### artist         歌手
   #### album          新碟上架

### 项目用到的依赖

   #### yarn add normalize.css                     // 清除浏览器默认样式
   #### yarn add @craco/craco                      // webpack配置别名 
   #### yarn add react-router-dom                  // 路由
   #### yarn add react-router-config               // 路由
   #### yarn add styled-components                 // css in js
   #### yarn add antd                              // ui库
   #### yarn add @ant-design/icons                 // ui图标库
   #### yarn add redux react-redux redux-thunk     // 状态管理库 redux

### 关于store
   #### index.js             最终都在这里面向外导出
   #### reducer.js           纯函数，用于初始化状态
   #### constants.js         定义常量的地方
   #### actionCreatores.js   状态统一管理，比如axios返回值等