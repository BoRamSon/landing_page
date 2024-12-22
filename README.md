# 저작권 명시 (Copyright Notice)

### 저작권 안내 (Copyright Notice)

Copyright © 2024 BoramSon. All rights reserved.

이 소스코드 및 콘텐츠는 저작권법에 따라 보호되며, BoramSon의 소유입니다.  
명시적인 서면 허가 없이 이 소프트웨어의 복제, 수정, 배포, 전송, 게시, 상업적 이용을 금합니다.  
위반 시 민형사상 책임이 따를 수 있습니다.

문의: raiactivity@gmail.com

<br/>

### Copyright Notice

Copyright © 2024 BoramSon. All rights reserved.

This sourcecode and assets is protected by copyright law and is the property of BoramSon.  
You may not reproduce, modify, distribute, transmit, publish, or use this software for commercial purposes without explicit prior written permission.  
Violation of these terms may result in civil and criminal penalties.

Contact: raiactivity@gmail.com

<br/>

---

<br/><br/><br/><br/>

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react';

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
});
```
