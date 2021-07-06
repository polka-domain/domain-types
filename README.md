# 0 Installation dependencies

yarn install

# 一 update types.json

src/interfaces/definitions.ts

replace the types node

# 二 update Metadata

npm install -g ts-node
ts-node ./scripts/updateMetadata.ts

# 三 codegen

yarn build
