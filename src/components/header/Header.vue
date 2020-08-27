<template>
  <div class="header">
    <Menu mode="horizontal" theme="light" active-name="1" @on-select="getRouter">
      <MenuItem v-for="item in menus" :key="item.path" :name="item.path">
       {{item.value}}
      </MenuItem>
    </Menu>
  </div>
</template>
<script src="./Header.ts" scoped></script>
<style lang='scss' scoped src='./Header.scss'></style>
