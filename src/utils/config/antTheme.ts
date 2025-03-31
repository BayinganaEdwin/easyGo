import { theme, ThemeConfig } from 'antd';

const antdTheme: ThemeConfig = {
  algorithm: [theme.darkAlgorithm],
  token: {
    colorPrimary: '#6d54b5',
    colorLink: '#6d54b5',
    colorInfo: '#6d54b550',
    borderRadius: 11,
  },
  components: {
    Menu: {
      darkItemSelectedBg: '#464A34',
    },
    Input: {
      controlHeightLG: 45,
      paddingInlineLG: 12,
    },
    Button: {
      controlHeightLG: 45,
    },
    Select: {
      controlHeight: 32,
      controlHeightLG: 45,
      controlHeightSM: 24,
    },
    InputNumber: {
      controlHeight: 32,
      controlHeightLG: 45,
      controlHeightSM: 24,
    },
    Calendar: {
      fullPanelBg: 'inherit',
    },
  },
};

export default antdTheme;
