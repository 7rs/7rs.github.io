<template>
  <div>
    <avatar />
    <p
      class="text-center headline font-weight-medium ma-2"
    >Anything one man can imagine, other men can make real.</p>
    <v-layout justify-center>
      <v-btn
        color="primary"
        class="ma-10"
        href="https://github.com/7rs/7rs.github.io"
      >View source code</v-btn>
    </v-layout>
    <accounts />
  </div>
</template>

<script>
import Avatar from "~/components/avatar.vue";
import Accounts from "~/components/accounts.vue";

export default {
  components: {
    Avatar,
    Accounts
  }
};
</script>
