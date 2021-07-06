# 零 安装依赖

yarn install

# 一 更新 types.json

src/interfaces/definitions.ts

替换 types 节点的数据

# 二 更新 Metadata

ts-node ./scripts/updateMetadata.ts

# 三 重新生成代码

yarn build
