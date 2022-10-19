import { defineComponent } from 'vue';
export const App = defineComponent({
  setup: (props, context) => {
    return () => (
      <div>This is App.</div>
    )
  }
})