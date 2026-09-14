# React-useReducer-FormValidationApp

Reactの`useReducer`を使用して、フォームの状態管理とバリデーションを実装した練習用アプリです。

## 概要

名前とメールアドレスを入力するフォームを作成し、`useReducer`でフォームの状態を一元管理しています。

送信時には入力内容をバリデーションし、エラーがある場合はフォーム上にエラーメッセージを表示します。

## 使用技術

* React
* TypeScript
* Vite
* Tailwind CSS
* useReducer

## 主な機能

* 名前の入力
* メールアドレスの入力
* フォームバリデーション
* バリデーションエラーの表示
* フォーム送信
* フォーム状態のリセット

## 状態管理

フォームの状態は`useReducer`で管理しています。

```ts
type FormType = {
  name: string;
  email: string;
  errors: {
    name?: string;
    email?: string;
  };
};
```

状態の更新は`dispatch`を使用して行います。

```text
入力
 ↓
dispatch
 ↓
reducer
 ↓
state更新
```

主なActionは以下の通りです。

* `SET_NAME`
* `SET_EMAIL`
* `SET_ERROR`
* `RESET_FORM`

## バリデーション

フォーム送信時に`validate`を実行し、入力内容をチェックします。

```text
フォーム送信
 ↓
validate()
 ↓
エラーあり
 ├─ name error
 └─ email error
 ↓
エラーメッセージを表示

エラーなし
 ↓
送信成功
 ↓
フォームをリセット
```

## ディレクトリ構成

```text
src/
├── components/
│   └── UserForm.tsx
├── hooks/
│   └── useValidateForm.ts
├── reducers/
│   └── FormReducer.ts
├── types/
│   └── FormType.ts
└── App.tsx
```

## 学習ポイント

### useReducerによるフォーム管理

複数のフォーム状態を`useReducer`でまとめて管理する方法を学習します。

### Actionによる状態更新

`SET_NAME`や`SET_EMAIL`などのActionを定義し、状態変更を明確に分離しています。

### バリデーションと状態管理

フォームの入力状態とバリデーションエラーを同じstateで管理し、送信処理と連携させています。

### useReducerとReduxの違い

`useReducer`はコンポーネントや特定の範囲で複雑な状態を管理するのに適しています。

一方、Redux Toolkitはアプリケーション全体で共有する状態をStoreで管理する場合に適しています。

```text
コンポーネント内の複雑な状態
        ↓
    useReducer

アプリ全体で共有する状態
        ↓
 Redux Toolkit
```

## まとめ

このアプリでは、`useReducer`を使用してフォームの入力値・エラー・リセット処理をまとめて管理しています。

単純なフォームでは`useState`でも実装できますが、入力項目やバリデーション、状態変更が増えた場合には`useReducer`によって状態更新のロジックを整理できます。
