<template>
    <div>
      <h4>Welcome to your dashboard page!</h4>
    </div>
</template>


<script>
import { mapGetters } from "vuex";
  export default {
    name: 'DashboardVue',

    computed: {
      ...mapGetters("auth", {
        name: "name",
      }),
    }
  };
  </script>