<template>

  <div class="d-flex">
    <div>
      <h1 class="text-center">This is an about page</h1>
      <v-btn class="error" @click="getPosts">click</v-btn>
    </div>

    <v-card v-if="posts.length" raised class="flex-grow-1 ma-3">
      <v-list shaped>
        <v-subheader>POSTS:</v-subheader>
        <v-list-item-group color="primary">
          <v-list-item v-for="post in posts"
                       :key="post._id"
          >
            <v-list-item-content>
              <v-list-item-title v-text="post.text"/>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>


  </div>
</template>

<script>
  import PostService from '../../PostService';

  export default {
    name: 'about',
    data() {
      return {
        site: `https://vk.com/hidemy_name_keys`,
        html: null,
        posts: []
      };
    },
    methods: {
      async getPosts() {
        try {
          this.posts = await PostService.getPosts();

        } catch (err) {
          console.log(err);
        }
      }
    }
  };
</script>

<!--
const getPage = async () => {
const response = await fetch(SITE);
console.log(response);
};


const SITE = `https://vk.com/hidemy_name_keys`;-->
