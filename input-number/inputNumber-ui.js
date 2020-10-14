//inputNumber-ui.js文件
// 沙箱独立封装
(function (window) {
  // 实例化对象
  let inputNumberUI = {};
  // 根据vue文档增加install方法
  /**
   * Vue Vue.use时 会传入的Vue构造函数
   * options 自己初始化插件时 可以传入的选项
   *  */
  inputNumberUI.install = function (Vue, options) {
    // 注册组件
    Vue.component('my-input-number', {
      data: function () {
        return {
          myCount: 0,
          // 最小值默认0
          myMin: 0,
          // 最大值默认10
          myMax: 10,
        }
      },
      // 父组件将数据传递给子组件
      props: ['count', 'min', 'max'],
      // 模板导入
      template: `<div class="my-input-number" style="width:180px;height:40px;display:flex;border:1px solid #ccc;x">
                   <input type="button"  value="-" style="width:50px;font-size:25px" @click="reduce" >
                   <input type="text" v-model="myCount" style="outline:none;width:80px;font-size:25px;text-align:center" @click="Change">
                   <input type="button" value="+" style="width:50px;font-size:25px" @click="add"> 
                   </div>`,
      //生命周期函数 实例创建后自动调用赋值
      created() {
        this.myCount = this.count;
        this.myMin = this.min || 0;
        this.myMax = this.max || 10;
      },
      methods: {
        // 增加
        add() {
          this.myCount++;
          if (this.myCount > this.myMax) {
            this.myCount = this.myMax
          };
          // 子组件把值传递给父组件
          this.$emit('count-change', this.myCount)
        },
        // 减少
        reduce() {
          this.myCount--;
          if (this.myCount < this.myMin) {
            this.myCount = this.myMin
          };
          // 子组件把值传递给父组件
          this.$emit('count-change', this.myCount)
        },
        // 个数改变 做数据类型转换
        Change() {
          // 解析字符串返回整数
          this.myCount = parseInt(this.myCount);
          if (this.myCount > this.myMax) this.myCount = this.myMax
          else if (this.myCount < this.myMin) this.myCount = this.myMin
          // 传值
          this.$emit('count-change', this.myCount)
        }

      }
    },
    )
  }
  // 把方法暴露出去
  window.inputNumberUI = inputNumberUI
})(window);