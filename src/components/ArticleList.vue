<template>
  <div class="entry-list-container">
    <ul class="entry-list">
      <li
        class="article-item"
        v-for="item in articles.list"
        :key="item.id"
      >
        <div class="entry-box"  @click="jumped(item.id)">
          <div class="entry">
            <div class="entry-link">
              <div class="content-box">
                <div class="info-box">
                  <div class="info-row title-row">
                    <span>
                      <router-link
                        class="title"
                        :to="{ path: 'register', query: { plan: 'private' } }"
                      >
                        {{ item.title }}
                      </router-link></span
                    >
                  </div>
                  <div class="info-row meta-row">
                    <ul class="meta-list">
                      <li class="item username clickable">
                        <div class="user-popover-box">
                          <router-link
                            :to="{
                              path: 'register',
                              query: { plan: 'private' },
                            }"
                          >
                            {{ item.author }}
                          </router-link>
                        </div>
                      </li>
                      <li class="item">{{ dateFormart(item.inputDate) }}</li>
                      <li class="item tag">
                        <router-link
                          class="tag"
                          :to="{ path: 'register', query: { plan: 'private' } }"
                        >
                          {{ item.category.name }}
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  class="lazy thumb loaded"
                  v-if="item.img"
                  style="
                    background-image: url('https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/15b114a651ba4117bb7d2cfdfca56a3e~tplv-k3u1fbpfcp-watermark.image');
                    background-size: cover;
                  "
                ></div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <a-pagination
    v-if="articles.pageTotal < articles.pageSize"
    v-model:current="articles.pageIndex"
    v-model:pageSize="articles.pageSize"
    :total="articles.pageTotal"
  />
</template>
<script>
import { useRouter } from "vue-router";
export default {
  name: "articlelist",
  props: {
    articles: Object,
  },
  setup(props) {
    const router = useRouter();
    const dateFormart = (date) => {
      return date.split("T")[0];
    };
    const jumped = (id) => {
      router.push({ name: "detail", params: { id: id } });
    };
    return {
      jumped,
      dateFormart,
    };
  },
};
</script>
<style scoped>
ul {
  padding: 0;
  margin: 0;
}
li {
  list-style: none;
}

a {
  text-decoration: none;
  cursor: pointer;
  color: inherit;
}
a,
button,
input {
  margin: initial;
}
a {
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
}
.entry-box{
  cursor: pointer;
}
.entry-list-container {
  background-color: #fff;
}
.entry-list {
  width: 100%;
  background-color: #fff;
}
.article-item:not(:last-child) {
  border-bottom: 1px solid rgba(178, 186, 194, 0.15);
}
.content-box {
  display: flex;
  align-items: center;
  padding: 1.5rem 2rem;
}
.info-box {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
}
.meta-row {
  font-size: 1rem;
  color: #b2bac2;
}
.meta-list {
  display: flex;
  align-items: baseline;
  white-space: nowrap;
}
.user-popover-box {
  display: inline;
}
.meta-list .item:not(:last-child):after {
  content: "·";
  margin: 0 0.4em;
  color: #b2bac2;
}

.title-row {
  margin: 0.5rem 0 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
}
.title {
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 1.2;
  color: #2e3135;
}
.thumb {
  flex: 0 0 auto;
  width: 5rem;
  height: 5rem;
  margin-left: 2rem;
  background-color: #fff;
  border-radius: 2px;
}

.lazy {
  position: relative;
}
</style>