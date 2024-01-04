var posts=["2024/01/03/markdown/","2024/01/03/mark/markdown - 副本/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };