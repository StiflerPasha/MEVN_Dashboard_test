<template>

  <div class="d-flex flex-wrap justify-space-around">
    <div class="col-12">
      <h1 class="text-center">This is an about page</h1>
      <div class="d-flex justify-space-around flex-wrap">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn class="error ma-1"
                   :disabled="loadingPosts"
                   :loading="loadingPosts"
                   v-on="on"
                   @click="getPosts"
            >
              Get posts
              <template v-slot:loader>
                <span class="custom-loader">
                  <v-icon light>cached</v-icon>
                </span>
              </template>
            </v-btn>
          </template>
          <span>Get posts from MongoDB</span>
        </v-tooltip>

        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn class="info ma-1"
                   :disabled="loadingKeys"
                   :loading="loadingKeys"
                   v-on="on"
                   @click="getKeys"
            >
              Get keys
              <template v-slot:loader>
                <span class="custom-loader">
                  <v-icon light>cached</v-icon>
                </span>
              </template>
            </v-btn>
          </template>
          <span>Get keys from Puppeteer(VK.com)</span>
        </v-tooltip>
      </div>
    </div>


    <v-card v-if="posts.length"
            class="col-xs-12 col-sm-4 ma-3 overflow-auto scroll"
            flat
            max-height="250px">
      <v-subheader>POSTS:</v-subheader>
      <v-list-item v-for="post in posts" :key="post._id">
        <v-list-item-content>
          <v-list-item-title v-text="post.text"/>
        </v-list-item-content>
      </v-list-item>
    </v-card>


    <v-list v-if="vpnKeys.date"
            class="col-xs-12 col-sm-4 ma-3 overflow-auto scroll"
            flat
            max-height="250px"
            max-width="360px">
      <v-subheader>Keys was added {{vpnKeys.date}}</v-subheader>
      <v-list-item v-for="(key, idx) in vpnKeys.keys" :key="idx">
        <v-list-item-content>
          <v-list-item-title v-text="key" class="text-center"/>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
  import PostService from '../../services/PostService';
  import KeyService  from '../../services/KeyService';

  export default {
    name: 'about',
    data() {
      return {
        loadingPosts: null,
        loadingKeys: null,
        posts: [],
        vpnKeys: {}
      };
    },
    methods: {
      async getPosts() {
        this.loadingPosts = true;
        try {
          this.posts = await PostService.getPosts();
          this.loadingPosts = false;
        } catch (err) {
          console.log(err);
        }
      },

      async getKeys() {
        this.loadingKeys = true;
        try {
          this.vpnKeys = await KeyService.getKeys();
          this.loadingKeys = false;
        } catch (err) {
          console.log(err);
        }
      }
    }
  };
</script>

<style lang='scss' scoped>
  /*SCROLL*/
  .scroll {
    &::-webkit-scrollbar {
      background-color: transparent;
      width: 4px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: orangered;
    }

    &::-webkit-scrollbar-track {
      background-color: transparent;
      margin: 55px 0 10px 0;
    }
  }

  /*ACTIVE LIST*/
  .v-list-item--active {
    background-color: transparent;
  }

  /*BUTTON LOADER*/
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }

  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
