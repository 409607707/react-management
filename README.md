1. 样式引入顺序

   * 样式初始化（reset-css）
   * UI框架样式（antd）
   * 全局样式
   * 组件的样式
2. css属性介绍

   * user-select: none;  禁止用户选中文本
   * -webkit-user-drag:none; 禁止拖动图片
3. 解决配置完路径别名后无法提示问题

   ```ts
   在tsconfig.json文件中填入
   "compilerOptions": {
     "baseUrl": "./",
       "paths": {
         "@assets/*": ["src/assets/*"]
       }
   }
   ```
4. 安装antd组件库

   ```ts
   npm install antd @ant-design/icons --save

   ```
5. 按需引入
6. 的激发了
