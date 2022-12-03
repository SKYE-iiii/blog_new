const e=JSON.parse('{"key":"v-6f209ae2","path":"/posts/studyContent/mock/2.html","title":"Mockjs入门级操作 && 案例操作(实现增删改查功能) (二)","lang":"zh-CN","frontmatter":{"title":"Mockjs入门级操作 && 案例操作(实现增删改查功能) (二)","date":"2022-06-12T00:00:00.000Z","category":["studyContent"],"tag":["Mock"],"footer":true,"copyright":true,"summary":"Mockjs 入门级操作 && 案例操作(实现增删改查功能) (二) 提示：上篇文章里讲解了 mockjs 的一些入门操作,及简单案例演示. 这篇文章将结合项目实现列表的增删改查功能.如有不当之处 欢迎指正 --- --- 前言 日常开发中,curd是每个项目都有的基础功能.下面实现在独立于后端时进行curd功能的实现 --- 提示：以下是本篇文章正文内容，","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/blog_new/posts/studyContent/mock/2.html"}],["meta",{"property":"og:site_name","content":"OCEAN"}],["meta",{"property":"og:title","content":"Mockjs入门级操作 && 案例操作(实现增删改查功能) (二)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"Mock"}],["meta",{"property":"article:published_time","content":"2022-06-12T00:00:00.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1.增删改查 -- 查","slug":"_1-增删改查-查","link":"#_1-增删改查-查","children":[{"level":3,"title":"1.创建 views/list/index.vue","slug":"_1-创建-views-list-index-vue","link":"#_1-创建-views-list-index-vue","children":[]},{"level":3,"title":"2.模拟 查询功能 的接口","slug":"_2-模拟-查询功能-的接口","link":"#_2-模拟-查询功能-的接口","children":[]},{"level":3,"title":"3.封装 axios 的列表接口","slug":"_3-封装-axios-的列表接口","link":"#_3-封装-axios-的列表接口","children":[]},{"level":3,"title":"4.views/list/index.vue 中调用接口","slug":"_4-views-list-index-vue-中调用接口","link":"#_4-views-list-index-vue-中调用接口","children":[]},{"level":3,"title":"5. 处理分页功能","slug":"_5-处理分页功能","link":"#_5-处理分页功能","children":[]},{"level":3,"title":"6.完善 list.vue 页面的分页功能,使 pageSize,currentPage 动态化","slug":"_6-完善-list-vue-页面的分页功能-使-pagesize-currentpage-动态化","link":"#_6-完善-list-vue-页面的分页功能-使-pagesize-currentpage-动态化","children":[]}]},{"level":2,"title":"2.增删改查 -- 增","slug":"_2-增删改查-增","link":"#_2-增删改查-增","children":[{"level":3,"title":"1. mockjs 模拟 新增 接口 ,封装 axios 的新增接口","slug":"_1-mockjs-模拟-新增-接口-封装-axios-的新增接口","link":"#_1-mockjs-模拟-新增-接口-封装-axios-的新增接口","children":[]},{"level":3,"title":"2. 创建 views/list/modules/listDialog.vue","slug":"_2-创建-views-list-modules-listdialog-vue","link":"#_2-创建-views-list-modules-listdialog-vue","children":[]},{"level":3,"title":"2.获取子组件传参,调用新增接口","slug":"_2-获取子组件传参-调用新增接口","link":"#_2-获取子组件传参-调用新增接口","children":[]},{"level":3,"title":"3. 完善 mockjs 的 新增接口","slug":"_3-完善-mockjs-的-新增接口","link":"#_3-完善-mockjs-的-新增接口","children":[]}]},{"level":2,"title":"3.增删改查 -- 改","slug":"_3-增删改查-改","link":"#_3-增删改查-改","children":[{"level":3,"title":"1. mockjs 模拟 编辑 接口 ,封装 axios 的 编辑 接口","slug":"_1-mockjs-模拟-编辑-接口-封装-axios-的-编辑-接口","link":"#_1-mockjs-模拟-编辑-接口-封装-axios-的-编辑-接口","children":[]},{"level":3,"title":"2.点击编辑 , 将当前行数据传入 listDialog","slug":"_2-点击编辑-将当前行数据传入-listdialog","link":"#_2-点击编辑-将当前行数据传入-listdialog","children":[]},{"level":3,"title":"3. listDialog 进行数据回显","slug":"_3-listdialog-进行数据回显","link":"#_3-listdialog-进行数据回显","children":[]},{"level":3,"title":"4. 点击编辑用户时,调用编辑接口","slug":"_4-点击编辑用户时-调用编辑接口","link":"#_4-点击编辑用户时-调用编辑接口","children":[]}]},{"level":2,"title":"4.增删改查 -- 删","slug":"_4-增删改查-删","link":"#_4-增删改查-删","children":[]},{"level":2,"title":"1. mock/list/index","slug":"_1-mock-list-index","link":"#_1-mock-list-index","children":[]},{"level":2,"title":"2. api/list/index","slug":"_2-api-list-index","link":"#_2-api-list-index","children":[]},{"level":2,"title":"3.views/list/index.vue","slug":"_3-views-list-index-vue","link":"#_3-views-list-index-vue","children":[{"level":3,"title":"4","slug":"_4","link":"#_4","children":[]},{"level":3,"title":"5. 功能实现效果展示","slug":"_5-功能实现效果展示","link":"#_5-功能实现效果展示","children":[]}]}],"git":{},"readingTime":{"minutes":11.01,"words":3303},"filePathRelative":"posts/studyContent/mock/2.md","localizedDate":"2022年6月12日"}');export{e as data};