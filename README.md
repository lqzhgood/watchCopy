## 监控文件夹复制文件

开始以为 `QQTempSys` 会自动删文件,后来发现不会.<br />
写都写了还是放出来吧。 <br />

### 使用方法

修改 `index.js` 里面的 input 属性，执行 `node index.js` 后会监控文件夹，如有文件则会自动复制到 dist 目录。

##### 注意

input 属性路径分隔符 windows 上需要使用 '\\'
