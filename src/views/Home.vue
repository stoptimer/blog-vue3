<template>
  <div class="view-container container">
    <div class="main-header-box">
      <header class="main-header">
        <div class="nav-container container">
          <a href="/" class="logo"
            ><img
              src="//s3.pstatp.com/toutiao/xitu_juejin_web/img/logo.a7995ad.svg"
              alt="掘金"
              class="logo-img"
            />
          </a>
          <nav class="main-nav">
            <ul class="phone-hide">
              <li class="nav-item link-item route-active active">
                <a href="/">首页</a>
              </li>
              <li class="nav-item link-item activities">
                <a href="/about">归档</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
    <main class="container main-container">
      <div class="timeline-container">
        <div class="timeline-entry-list">
          <articlelist
            :articles="articles"
            :pageSize="pageSize"
            :current="pageIndex"
            :total="pageTotal"
          ></articlelist>
        </div>
        <aside class="index-aside aside">
          <userblock></userblock>
        </aside>
      </div>
    </main>
  </div>
</template>

<script>
import articlelist from "../components/ArticleList.vue";
import userblock from "../components/UserBlock.vue";
import { article } from "../api/article.js";
import { onBeforeMount, onMounted } from "vue";
import { reactive, toRefs, computed, watch, watchEffect, ref } from "vue";
export default {
  name: "Home",
  components: {
    articlelist,
    userblock,
  },
  setup() {
    onBeforeMount(() => {
      getArticles();
    });
    const pageIndex = ref(1);
    const pageSize = ref(20);
    const pageTotal = ref(0);
    const articles = reactive({ list: [] });
    const getArticles = async () => {
      const data = await article();
      console.log(data);
      articles.pageIndex = data.data.pageNo;
      articles.pageSize = data.data.pageSize;
      articles.pageTotal = data.data.totalCount;
      articles.list = data.data.list;
    };
    return {
      getArticles,
      articles,
    };
  },
};
</script>
<style scoped>
.main-header-box {
  position: relative;
  height: 2rem;
}
.main-header.visible {
  transform: translateZ(0);
}
.main-header {
  background: #fff;
  border-bottom: 1px solid #f1f1f1;
  color: #909090;
  height: 5rem;
  z-index: 250;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: all 0.2s;
}
.nav-container {
  display: flex;
  align-items: center;
  height: 100%;
}
.phone-hide {
  display: flex;
}
.nav-item.link-item {
  padding: 0 1.5rem;
  height: 5rem;
}
.nav-item {
  color: #71777c;
  padding: 0 1.2rem;
  font-size: 1.33rem;
  justify-content: center;
  cursor: pointer;
}
.nav-item,
.nav-list {
  display: flex;
  align-items: center;
  height: 100%;
  margin: 0;
}
.nav-item {
  position: relative;
  cursor: pointer;
}
.nav-item.active > .icon,
.nav-item.active > a {
  color: #007fff;
}
.nav-item a {
    color: #71777c;
}
.container {
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 960px;
}
.main-header .container {
  max-width: 960px;
  margin: auto;
}
.logo {
  min-width: 98px;
  margin-right: 2rem;
}
.timeline-container {
  margin-top: 0;
  min-height: 873px;
}
.timeline-content {
  position: relative;
  margin-top: 0.33rem;
}
.timeline-entry-list {
  margin-right: 21.667rem;
  border-radius: 2px;
  width: 700px;
}

.index-aside {
  width: 20rem;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
}
.aside {
  position: absolute;
  top: 0;
  right: 0;
}
.sidebar-block {
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  border-radius: 2px;
  margin-bottom: 1.3rem;
  font-size: 1.16rem;
  line-height: 1.29;
  color: #333;
}
</style>
