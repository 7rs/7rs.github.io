<template>
  <div>
    <avatar />

    <p class="text-center headline font-weight-medium ma-2">
      Anything one man can imagine, other men can make real.
    </p>

    <view-button />

    <v-footer fixed app>
      <accounts />
    </v-footer>
  </div>
</template>

<script>
const Avatar = () => import("~/components/index/avatar.vue");
const ViewButton = () => import("~/components/index/button.vue");
const Accounts = () => import("~/components/index/accounts.vue");

export default {
  components: {
    Avatar,
    ViewButton,
    Accounts
  },
  head: {
    title: "7RS Pages"
  }
};
</script>
