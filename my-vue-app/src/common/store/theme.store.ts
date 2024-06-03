import { ThemeConfig } from 'ant-design-vue/es/config-provider/context';
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { theme } from 'ant-design-vue'

export const useThemeStore = defineStore('theme', () => {
  const dark = ref<boolean>();
  const matchList = window.matchMedia('(prefers-color-scheme: dark)');
  if (matchList.matches) {
    dark.value = true;
  }
  matchList.addEventListener('change', (list) => {
    if (list.matches) {
      dark.value = true;
    } else {
      dark.value = false;
    }
  });

  const themeConfig = computed<ThemeConfig>(() => {
    if (dark.value) {
      return {
        algorithm: theme.darkAlgorithm,
        token: {
          colorBgBase: '#000',
          colorTextBase: '#fff'
        }
      };
    }
    return {};
  })


  return { dark, themeConfig };
});