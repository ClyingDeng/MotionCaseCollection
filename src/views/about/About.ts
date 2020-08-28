import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class Data extends Vue {
  private lightHight: string[] = ['', '', '', '', '', ''];
  private timmer: number | undefined;
  private types: object[] = [
    {
      name: 'A类',
      num: '123'
    },
    {
      name: 'B类',
      num: '123'
    },
    {
      name: 'C毒',
      num: '123'
    },
    {
      name: 'D类',
      num: '123'
    },
    {
      name: 'E类',
      num: '123'
    },
    {
      name: 'F类',
      num: '123'
    }
  ];
  private mounted() {
    this.$nextTick(() => {
      this.lightImg();
    });
  }
  private lightImg() {
    let i = 0;
    this.timmer = setInterval(() => {
      this.lightHight = ['', '', '', '', '', ''];
      this.lightHight[i] = 'lighthight';
      // console.log(i, this.lightHight);
      i++;
      if (i >= 6) {
        i = 0;
      }
    }, 2000);
  }
}
