import { mount } from '@vue/test-utils';
import Haibutton from '../../hai-button';

test('render demo button', () => {
  const wrapper = mount(Haibutton);
  expect(wrapper.html()).toMatchSnapshot();
});
