<template>
  <div>
    <h1>Hello, world!</h1>
    <v-banner v-for="item in items" :key="item.title" single-line>
      <v-avatar class="mx-3">
        <img :src="item.img" :alt="item.title" />
      </v-avatar>
      {{item.name}}
      <template v-slot:actions>
        <v-btn class="align-center" text :href="item.url">SHOW</v-btn>
      </template>
    </v-banner>
  </div>
</template>

<script>
export default {
  head: {
    title: "Top"
  },
  methods: {
    alert() {
      alert("Hello, World!");
    }
  },
  data: () => ({
    items: [
      {
        img: require("~/assets/images/twitter.png"),
        name: "@R4XELN",
        url: "https://twitter.com/R4XELN",
        title: "Twitter"
      },
      {
        img: require("~/assets/images/instagram.png"),
        name: "@R4zLn",
        url: "https://instagram.com/R4zLn",
        title: "Instagram"
      },
      {
        img: require("~/assets/images/github.png"),
        name: "@7rs",
        url: "https://github.com/7rs",
        title: "GitHub"
      }
    ]
  })
};
</script>
