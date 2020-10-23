<template>
  <div class="sidebar-block author-block shadow">
    <div class="block-body">
      <a
        href="/user/1767670428213373"
        target="_blank"
        rel=""
        class="user-item item"
        ><div
          data-src="https://user-gold-cdn.xitu.io/2020/7/10/17337414caec0172?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1"
          class="lazy avatar avatar loaded"
          style="
            background-image: url('https://user-gold-cdn.xitu.io/2020/7/10/17337414caec0172?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1');
          "
        ></div>
        <div class="info-box">
          <a
            href="/user/1767670428213373"
            target="_blank"
            rel=""
            class="username"
            ><span class="name" style="max-width: 128px"> 摸鱼架构师 </span>
          </a>
          <div title="前端开发 @ 公众号  前端开发指南" class="position">
            前端开发 @ 公众号 前端开发指南
          </div>
        </div></a
      >
      <div d data-v-71f2d09e="" class="stat-item item">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="26"
          viewBox="0 0 25 26"
          class="zan"
        >
          <g fill="none" fill-rule="evenodd" transform="translate(0 .57)">
            <ellipse
              cx="12.5"
              cy="12.57"
              fill="#E1EFFF"
              rx="12.5"
              ry="12.57"
            ></ellipse>
            <path
              fill="#7BB9FF"
              d="M8.596 11.238V19H7.033C6.463 19 6 18.465 6 17.807v-5.282c0-.685.483-1.287 1.033-1.287h1.563zm4.275-4.156A1.284 1.284 0 0 1 14.156 6c.885.016 1.412.722 1.595 1.07.334.638.343 1.687.114 2.361-.207.61-.687 1.412-.687 1.412h3.596c.38 0 .733.178.969.488.239.317.318.728.21 1.102l-1.628 5.645a1.245 1.245 0 0 1-1.192.922h-7.068v-7.889c1.624-.336 2.623-2.866 2.806-4.029z"
            ></path>
          </g>
        </svg>
        <span class="content">获得点赞<span class="count">66</span></span>
      </div>
      <div class="stat-item item" style="margin-bottom: 1.3rem">
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          class="icon stat-view-icon"
        >
          <g fill="none" fill-rule="evenodd">
            <circle cx="12.5" cy="12.5" r="12.5" fill="#E1EFFF"></circle>
            <path
              fill="#7BB9FF"
              d="M4 12.5S6.917 7 12.75 7s8.75 5.5 8.75 5.5-2.917 5.5-8.75 5.5S4 12.5 4 12.5zm8.75 2.292c1.208 0 2.188-1.026 2.188-2.292 0-1.266-.98-2.292-2.188-2.292-1.208 0-2.188 1.026-2.188 2.292 0 1.266.98 2.292 2.188 2.292z"
            ></path>
          </g>
        </svg>
        <span class="content">文章被阅读<span class="count">7,245</span></span>
      </div>
      <!---->
    </div>
  </div>
</template>
<script>
export default {
  name: "userblock",
  props: {},
  setup(props) {},
};
</script>
<style scoped>
.sidebar-block {
  position: relative;
  margin-bottom: 1.5rem;
  border-radius: 2px;
  background-color: #fff;
}
.sidebar-block:after {
    display: table;
    content: "";
    clear: both;
}
.shadow {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}
.sidebar-block:not(.pure) .block-title {
  padding: 1rem 1.3rem;
  font-size: 1.16rem;
  color: #333;
  border-bottom: 1px solid hsla(0, 0%, 58.8%, 0.1);
}
.user-item {
  padding: 1.3rem;
}
.item {
  display: flex;
  align-items: center;
}

.user-item .avatar {
  flex: 0 0 auto;
  margin-right: 1rem;
  width: 4.167rem;
  height: 4.167rem;
  border-radius: 50%;
}
.user-item .info-box {
  flex: 1 1 auto;
  min-width: 0;
  text-align: left;
}
.user-item .info-box .username {
  font-size: 1.333rem;
  font-weight: 600;
  color: #000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre-wrap;
}
.username {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2e3135;
}
.username .name {
  display: inline-block;
  vertical-align: top;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.user-item .info-box .position {
  margin-top: 0.8rem;
  font-size: 1.25rem;
  color: #72777b;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.avatar,
.avatar.xmas:after {
  background-position: 50%;
  background-repeat: no-repeat;
}
.avatar {
  display: inline-block;
  position: relative;
  background-size: cover;
  background-color: #eee;
}
.stat-item {
  margin-bottom: 0.8rem;
  padding: 0 1.3rem;
}
.stat-item .icon,
.stat-item .zan {
  margin-right: 1rem;
}
.stat-item .content {
  font-size: 1.25rem;
  color: #000;
}
.stat-item .content .count {
  margin: 0 0.3em;
  font-weight: 500;
}
.stat-item:last-child {
  margin-bottom: 1.3rem;
}
</style>