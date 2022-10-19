import { defineComponent } from 'vue';
const Welcome = defineComponent({
  setup: (props, context) => {
    return () => (
      <div>Welcome Page</div>
    )
  }
})

export default Welcome