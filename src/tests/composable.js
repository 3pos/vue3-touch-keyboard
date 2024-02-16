import { shallowMount } from '@vue/test-utils';
import useTouchKeyboard from '@/composables/useTouchKeyboard';

describe('useTouchKeyboard', () => {
  let wrapper;
  let touchKeyboard;

  beforeEach(() => {
    wrapper = shallowMount({
      setup() {
        touchKeyboard = useTouchKeyboard();
      },
      template: '<div></div>',
    });
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('should set the local layout', () => {
    touchKeyboard.setLocalLayout('fr');
    expect(touchKeyboard.keyboardLocale).toBe('fr');
  });

  it('should get the keyboard layout', () => {
    const layout = touchKeyboard.getKeyBoardLayout('fr', 'normal');
    expect(layout).toBeDefined();
  });

  it('should toggle the touch keyboard', () => {
    touchKeyboard.toggleTouchKeyboard();
    expect(touchKeyboard.keyboardEnabled).toBe(true);
  });

  it('should show the touch keyboard without event', () => {
    touchKeyboard.showTouchKeyboardWithoutEvent();
    expect(touchKeyboard.options.visible).toBe(true);
  });

  it('should show the touch keyboard with event', () => {
    const event = { target: { dataset: { layout: 'normal' } } };
    touchKeyboard.showTouchKeyboard(event);
    expect(touchKeyboard.options.visible).toBe(true);
  });

  it('should hide the touch keyboard', () => {
    touchKeyboard.hideTouchKeyboard();
    expect(touchKeyboard.options.visible).toBe(false);
  });

  it('should dismiss the on-screen keyboard', () => {
    const event = { target: { tagName: 'DIV' } };
    touchKeyboard.dismissOnScreenKeyboard(event);
    expect(touchKeyboard.options.visible).toBe(false);
  });
});