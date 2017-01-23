import Vue from 'vue'
import Hello from 'src/components/Hello'

describe('Hello.vue', () => {
  it('should render correct content s', () => {
    const vm = new Vue({
      el: document.createElement('p'),
      render: (h) => h(Hello)
    });
    expect(vm.$el.textContent)
      .to.equal('メッセージ: こんにちは！!!!!!!!!!!!!!!!')
  })
});
