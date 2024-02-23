import { DrawerNavigationOptions } from '@react-navigation/drawer';
import { useEffect, useMemo } from 'react';
import { NativeScrollEvent, NativeSyntheticEvent, useWindowDimensions } from 'react-native';
import { Easing, interpolate, runOnUI, useSharedValue, withTiming } from 'react-native-reanimated';

import CustomHeader from '@/components/customHeader';
import { HEADER_DIVISOR_HEIGHT, HEADER_HEIGHT } from '@/components/customHeader/styles';

type ScrollEvent = NativeSyntheticEvent<NativeScrollEvent>;

interface CustomDrawerHeaderOptions {
  position?: 'top' | 'bottom';
}

export default function useCustomDrawerHeader(options?: CustomDrawerHeaderOptions) {
  const { width, height } = useWindowDimensions();
  const limit = height - HEADER_HEIGHT - HEADER_DIVISOR_HEIGHT;
  const translateY = useSharedValue(options?.position === 'bottom' ? limit : 0);
  const contentOpacity = useSharedValue(0);
  const divisorTopOpacity = useSharedValue(options?.position === 'bottom' ? 1 : 0);
  const divisorBottomOpacity = useSharedValue(1);

  useEffect(() => {
    runOnUI(() => {
      'worklet';
      contentOpacity.value = withTiming(1, { duration: 2000, easing: Easing.out(Easing.ease) });
    })();
  }, []);

  const translateHeader = runOnUI((y: number) => {
    'worklet';
    if (options?.position === 'bottom') {
      const newY = limit - y;
      if (newY > 0) {
        translateY.value = newY;
      } else {
        translateY.value = 0 - HEADER_DIVISOR_HEIGHT;
      }
    }
  });

  const handlerDivisorOpacity = runOnUI((y: number) => {
    'worklet';
    if (options?.position === 'bottom') {
      y = limit - y;
      const initialBreakpoint = 100 + HEADER_HEIGHT + HEADER_DIVISOR_HEIGHT;
      const finalBreakpoint = height - initialBreakpoint;

      divisorTopOpacity.value = interpolate(y, [initialBreakpoint, finalBreakpoint], [0, 1]);
      divisorBottomOpacity.value = interpolate(y, [initialBreakpoint, finalBreakpoint], [1, 0]);
    }
  });

  const onScroll = ({ nativeEvent }: ScrollEvent) => {
    'worklet';
    translateHeader(nativeEvent.contentOffset.y);
    handlerDivisorOpacity(nativeEvent.contentOffset.y);
  };

  const HeaderOptions: DrawerNavigationOptions = useMemo(
    () => ({
      header: (props) =>
        CustomHeader({
          windowWidth: width,
          anim: { contentOpacity, translateY, divisorBottomOpacity, divisorTopOpacity },
          ...props,
        }),
    }),
    [width, height],
  );
  return { HeaderOptions, onScroll };
}
