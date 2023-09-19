---
title: Flutter 代码风格
author: 猪蚊耗
date: 2023-09-15
category:
  - Flutter
---

# Flutter 代码风格

<!-- more -->

::: tip
多观察IDE中的 `Dart Analysis` 或 `Problems` 标签页，多用 `代码格式化` 和 `优化导入` [快捷键](shortcuts.md)
:::

## 命名

在 `包`，`目录`，`源文件` 中使用 `lowercase_with_underscores` 方式命名。

```
my_package
└── lib
    └── my_directory
        ├── file_system.dart
        └── slider_menu.dart
```

## 格式化
添加 ==末尾逗号== 格式化，在`analysis_options.yaml`文件中添加配置。
```yaml
linter:
  rules:
    require_trailing_commas: true
```

保存自动修复，例如自动添加`const`等，在`setting.json`中添加配置。
```json
"editor.codeActionsOnSave": {
  "source.fixAll": true
},
```

