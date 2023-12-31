var posts=["2023/12/30/hello-world/","2023/12/30/你好/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };