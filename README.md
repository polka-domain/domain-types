# 0 Installation dependencies

yarn install

# 1 update types.json

src/interfaces/definitions.ts

replace the types node

# 2 update Metadata

npm install -g ts-node
ts-node ./scripts/updateMetadata.ts

# 3 codegen

yarn build
