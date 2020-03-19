<template>
  <div class="page-header d-flex align-content-center">
    <div class="logo" @click="goHome()">
      <font-awesome-icon class="home-icon" icon="home">
        <img src="@/static/images/logo png" />
      </font-awesome-icon>
    </div>
    <div class="boards-menu-toggle">
      <div class="dropdown">
        <button
          class="btn dropdown-toggle"
          type="button"
          id="boardsMenu"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >Boards</button>
        <div class="dropdown-menu" aria-labelledby="boardsMenu">
          <div v-show="!hasBoards" class="dropdown-item">No boards</div>
          <div v-show="hasBoards">
            <h6 class="dropdown-header" v-show="personalBoards.length">Personal Boards</h6>
            <button
              v-for="board in personalBoards"
              v-bind:key="board.id"
              @click="openBoard(board)"
              class="dropdown-item"
              type="button"
            >{{ board.name }}</button>
            <div v-for="team in teamBoards" v-bind:key="'t' + team.id">
              <h6 class="dropdown-header">{{ team.name }}</h6>
              <button
                v-for="board in team.boards"
                v-bind:key="board.id"
                @click="openBoard(board)"
                class="dropdown-item"
                type="button"
              >{{ board.name }}</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="search-box flex-fill">
      <div class="search-wrapper">
        <font-awesome-icon class="search-icon" icon="search" />
        <input type="text" placeholder="search" class="form-control form-control-sm" />
      </div>
    </div>

    <div class="profile-menu-toggle">
      <div class="dropdown">
        <button class="btn dropdown-toggle" type="button" id="profileMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {{ user.name }}
        </button>
        <div class="dropdown-menu" aria-labelledby="profileMenu">
          <button class="dropdown-item" type="button">Profile</button>
          <button class="dropdown-item" type="button">Sign Out</button>
        </div>
      </div>
    </div>



  </div>
</template>


<script type="text/ecmascript-6">
import "bootstrap/dist/js/bootstrap.min";
import { mapGetters } from "vuex";

export default {
  name: "PageHeader",
  computed: {
    ...mapGetters(["user", "hasBoards", "personalBoards", "teamBoards"])
  },
  created() {
    this.$store.dispatch("getMyData");
  },
  methods: {
    goHome() {
      this.$router.push({ name: "home" });
    },
    openBoard(board) {
      this.$router.push({ name: "board", params: { boardId: board.id } });
    }
  }
};
</script>

<style></style>
