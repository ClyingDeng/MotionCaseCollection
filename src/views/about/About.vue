<template>
  <div class="about">
    <div
      class="typeItem"
      v-for="(item, index) in types"
      :class="lightHight[index]"
      :key="item.name"
    >
      <div class="typeName">
        <span class="typeFont">{{ item.name }}</span>
        <div class="typeNum">{{ item.num }}</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" src="./About.scss" scoped></style>
<script src="./About.ts" scoped></script>

