## Pie

<pie/>

接受一组数据, 应该是一个 list
[
	[],
	[],
]

是一个二维数组

同时还接受一个 options 作为参数, 是为了控制一些样式, 透传的. 


这玩意参数很多, 我们不好做进一步的封装.
我个人建议的使用方式是这样子的:

需要使用的时候, 就基于 Pie copy 一份出来, 直接改配置, 比你从外面传 props 进来会好很多的. 
因为配置项目那么多, 枚举出来太扯淡了. 

但是我们可以弄一个合并方法, combine 

for (src, )

我觉得不一定, 那么多配置项目, 你他吗的能用到的有几个, 用到的时候再加上去, 也不是很复杂.
反而复制出来显得不是很方便. 

不可以, 抽成 vue 文件的唯一的目的就是我们不需要在页面上放一个 canvas, 然后放一个 draw 方法, 然后去绘制. 
我们不应该留下任何其他的操作, 我们其实只要有一个 Chart 组件即可. 

然后的所有的 otpion 都是单独放出来, 这样的机动性更高, 灵活, 而不是



options 的字段需要提前声明, 否则你之后修改的时候并不会导致响应, 干啊. 











































