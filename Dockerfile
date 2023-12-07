FROM node:20.10.0

# pnpmのインストール
RUN npm install -g pnpm

# アプリケーションディレクトリを作成
WORKDIR /app

# アプリケーションの依存関係をインストールする
COPY package*.json ./
COPY pnpm-lock.yaml ./
RUN pnpm install

# アプリケーションのソースをバンドルする
COPY . ./

# 開発サーバーを起動
CMD ["pnpm", "dev"]
