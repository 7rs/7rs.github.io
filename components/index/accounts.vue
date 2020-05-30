<template>
  <v-row>
    <v-col v-for="item in items" :key="item.title">
      <v-layout justify-center>
        <v-btn text icon :href="item.url">
          <v-icon>mdi-{{ item.icon }}</v-icon>
        </v-btn>
      </v-layout>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          icon: "twitter",
          title: "Twitter",
          id: "@R4XELN",
          url: "https://twitter.com/R4XELN"
        },
        {
          icon: "instagram",
          title: "Instagram",
          id: "@R4zLn",
          url: "https://instagram.com/R4zLn"
        },
        {
          icon: "github",
          title: "GitHub",
          id: "@7rs",
          url: "https://github.com/7rs"
        },
        {
          icon: "telegram",
          title: "Telegram",
          id: "R4zLn",
          url: "https://t.me/R4zLn"
        },
        {
          icon: "slack",
          title: "Slack",
          id: "xz7",
          url:
            "https://join.slack.com/t/xz7/shared_invite/zt-cn8pinwh-snqv0bOL8sw6RKCPVNrV6g"
        },
        {
          icon: "discord",
          title: "Discord",
          id: "R4zLn#8915",
          url: "https://discord.gg/Eq5U4A2"
        }
      ]
    };
  }
};
</script>
