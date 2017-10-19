# 怎么使用

- quick start

``` bash

cd vonic-webpack-starter 
npm install -g yarn
yarn
```

- development

```bash
npm run dev
```

- build

```bash
npm run build
```
```
执行完成后会生成一个dist文件夹
- 先找到dist文件中的index.html,删除/static/
- 找到这个文件夹将里面的所有文件复制到你的cordova项目的www文件夹下替换它原有的文件。
然后就可以执行


cordova build android
会生成一个可执行的apk文件，安装即可。
到这里就完成了我们vue项目的打包
```
