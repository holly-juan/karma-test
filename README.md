1、说明：项目主要使用了karma库及jasmine库
2、配置过程：
（1）新建一个项目karma-test
（2）执行npm init，生成package.json配置文件
（3）安装karma：npm karma --save
 (4) 执行karma init karma.conf.js，生成karma的配置文件
 (5) 在karma的配置文件的files选项中设置测试用例的路径
（6）在对应的测试用例路径下新建测试用例模块
（7）执行karma start即可查看测试结果