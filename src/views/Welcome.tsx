import { defineComponent } from 'vue';
import { Icon } from '../components/icon';

const Welcome = defineComponent({
  setup: (props, context) => {
    const onClick = () => {
      console.log('clicked');
    }
    return () => (
      <div>
        <Icon name="mangosteen" onClick={onClick} />
        Welcome Page
      </div>
    )
  }
})

export default Welcome