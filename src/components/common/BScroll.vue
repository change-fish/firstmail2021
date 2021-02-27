<template>
  <!-- ref属性，普通元素也可以绑定ref属性，ref属性如果绑定在组件中，那么通过this.$refs.refname获取的是组件对象，绑定普通元素，获取的是该元素对象 -->
  <!-- 如果使用class属性，可能会有属性重复 -->
  <div ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'BScroll',
  data(){
    return {
      bScroll:null,
    }
  },
  props:{
    probeType:{
      type:Number,
      default:0,
    },

    //判断是否需要监听上拉加载
    pullUpLoad:{
      type:Boolean,
      default:false,
    }
  },
  methods:{
    /* better-scroll插件可以下载，也可以直接引用文件
       需要操作的元素外部必须有一个包裹的元素，官方文档是说只处理包裹元素内的第一个元素，其他忽略，且包裹元素内如果有按钮
       1.默认情况下，新建的BScroll实例不会实时监听滚动的位置，可以在第二个参数里传递probeType(侦测)参数，并用点击事件进行监听scroll事件，传入一个形参，默认是位置
       参数是0和1时，不自动侦测，是2时会侦测
       2.当页面滚动到底部时，即第一页的数据已经全部展示完，在BScroll实例里pullUpLoad:true,
       使用函数监听pullingUp事件，监听上拉，但是只能加载一次该函数
     */
    //这里用在mounted里，如果用在created不行，因为框架没创建完成
    bScrollStart(){
      this.bScroll = new BScroll(this.$refs.wrapper,{
      probeType:this.probeType,
      pullUpLoad:this.pullUpLoad,
      click:true,
      observeDOM:true,
      observeImage:true,
    })
    
     //监听滚动
     this.bScroll.on('scroll',(position) => {
     // console.log(position);
      this.$emit('scroll1',position)
      //console.log(this.bScroll);
      
    })

    //监听上拉加载更多
    this.bScroll.on('pullingUp',() => {
      //console.log('上拉');
      this.$emit('pullingUp')
      //监听到这个事件后，先发送网络请求，请求更多的数据
      //在数据请求完成并展示后，使用finishPullUp方法使得之后可以继续监听上拉事件
      //为防止短时间内过多的上拉加载，可以使用延时
      setTimeout(() => {
        this.bScroll.finishPullUp()
        this.bScroll.refresh()
      },2000)
    })
    },
    
  },
  mounted(){
    this.bScrollStart()
  }
}
</script>

<style scoped>

</style>
