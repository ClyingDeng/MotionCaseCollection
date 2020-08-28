import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Header extends Vue {
  private menus: object[] = [
    {
      path: '/',
      value: '流动特效'
    },
    {
      path: '/about',
      value: '轮流高亮'
    }
  ];
    private mounted() {
        // this.activeName = this.$route.path;
        // console.log(this.activeName, this.$route.path);
    }
  private getRouter(name: string) {
    this.$router.push({path: name});
  }
}
