//如果暴露一个值.我们这么写,每个commonjs模块中都有一个module对象可以使用
//这个moduke对象上有一个exports属性.默认是一个空对象
//可以给这个对象添加属性.也可以复写.require该模块的时候.得到的就是这个模块的exports属性值
module.exports = '昕欣'