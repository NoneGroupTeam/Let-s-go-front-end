<template>
  <div class="cell items">
    <table cellpadding="0" cellspacing="0" border="0" width="100%">
      <tbody><tr>
          <td width="48" valign="top" align="center"><img v-bind:src="img" class="avatar" border="0" align="default"></td>
          <td width="10"></td>
          <td width="auto" valign="middle"><span class="item_title">{{content}}</span>
          <span class="fade m">
            <strong><p>{{username}}</p></strong>
          </span>
          </td>
          <td width="70" align="right" valign="middle">
            <span class="label label-default">{{submit}}</span>
          </td>
      </tr>
  </tbody></table>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  props: [
    'img',
    'content',
    'username',
    'submit',
  ],
};
</script>

<style scoped>
table {
  border-top-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
  border-left-width: 0px;
  width: 100%;
  border-spacing: 0px;
}
.cell {
    padding: 10px;
    font-size: 12px;
    line-height: 120%;
    text-align: left;
    border-bottom: 1px solid #e2e2e2;
}
.item {
    background-position: 0 bottom;
    background-repeat: repeat-x;
}
.item_title {
    font-size: 16px;
    line-height: 120%;
    text-shadow: 0px 1px 0px #fff;
    word-wrap: break-word;
    hyphens: auto;
}
.fade {
    color: #ccc;
    font-size: 14px;
}
.avatar {
    -moz-border-radius: 4px;
    border-radius: 4px;
}
.m {
  margin-left: 2px;
  margin-right: 2px;
}
</style>
