import { defineComponent } from 'vue'

export default defineComponent({
  name: 'dashboardType',
  props: {
    title: String,
    type: Number
  },
  emits: ['change'],
  setup(props, { emit }) {
    const changeTitle = () => {
      emit('change', 'changeTitle')
    }
    return () => {
      if (props.type === 1) {
        return <div onClick={changeTitle}>{props.title}</div>
      }
      return <div>自身的</div>
    }
  }
})
