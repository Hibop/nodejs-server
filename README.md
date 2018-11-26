# node-server
## project说明
+ 利用nodejs原生模块，自己写的node-server，解耦server、router、requestHandler、dataBase；
+ 使用fs文件读取，支持返回静态资源文件请求（html/img/font...）；也支持请求接口调试，可以使用模拟json数据返回，本服务可以作为mock数据；
+ 支持服务端跨域请求，在有些需要开取多端口服务环境时，可以使用本工程完成跨域资源共享（CORS）
+ 使用简单，无需npm安装多余依赖，在安装了nodejs的环境：
```bash
git clone git@github.com:Hibop/server.git
cd /to/server
node index
```

## 请求url
```
┌────────────────────────────────────────────────────────┐
│                           href                         │
├────────────────────────────┬───────────────────────────┤
│          origin            │     url / originalurl     │
├──────────┬─────────────────┼──────────┬────────────────┤
│ protocol │      host       │   path   │     search     │
├──────────├──────────┬──────┼──────────┼─┬──────────────┤
│          │ hostname │ port │          │?│ querystring  │
│          ├──────────┼──────┤          ├─┼──────────────┤
│          │          │      │          │ │              │
"  http:   │ host.com : 8080   /p/a/t/h  ?  query=string │
│          │          │      │          │ │              │
└──────────┴──────────┴──────┴──────────┴─┴──────────────┘
```
