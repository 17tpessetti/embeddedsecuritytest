(async () => {
    const response = await fetch('https://justindbaker.github.io/personal/personal/2020/05/31/my-first-blog-post/');
    const text = await response.text();
    console.log(text.match(/(<p class="dropCap">.{30,50} )/));
  })()

