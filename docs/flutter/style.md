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
多观察 IDE 里 `Dart Analysis` 或 `Problems` 标签页中的警告和提示并及时修复。

多用 `代码格式化` 和 `优化导入` [快捷键](shortcuts.md) 整理代码，或者使用[自动格式化](#自动格式化)。
:::

## 命名

::: warning
请勿使用 `拼音` 进行命名！特殊情况除外。
:::

在 `packages`、`directories`、`source files` 中使用 `lowercase_with_underscores` 方式命名。

```
my_package
└── lib
    └── my_directory
        ├── file_system.dart
        └── slider_menu.dart
```

在 `import prefixes` 中使用 `lowercase_with_underscores` 方式命名。

```dart
import 'package:url_launcher/url_launcher.dart' as url_launcher;
```

在 `classes`、`enum types`、`typedefs`、`type parameters`、`extensions` 中使用 `UpperCamelCase` 方式命名。

```dart
class SliderMenu { ... }

enum StatusType { ... }

typedef Predicate<T> = bool Function(T value);

extension MyFancyList<T> on List<T> { ... }
```

## 自动格式化

在终端跑`dart fix --apply`

保存自动修复，例如自动添加`const`等，在`setting.json`中添加配置。

```json
"editor.codeActionsOnSave": {
  "source.fixAll": true
},
```
