module.exports = {
  configureWebpack:{
    resolve:{
      alias:{
        //"@" : "src"这是默认的
        "assets" : "@/assets",
        "common" : "@/common",
        "components" : "@/components",
        "network" : "@/network",
        "views" : "@/views",
      }
    }
  }
}