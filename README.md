# Yarn Registry(NPM) Mock

---

A simple [Yarn](https://yarnpkg.com) registry mock [npm-registry-mock](https://github.com/npm/npm-registry-mock).

*Automatically sets the yarn registry to the mocked server when started and resets when killed.*

## !! Warning !!
**Running this will update your local yarn config and killing the mock server will reset the registry entry to the default.**

### Usage:

1. Install dependencies
`yarn`

2. Start the mock and set yarn's config to point to the mock registry
`yarn start`

3. Kill the mock server and reset the yarn registry
`cmd/ctrl+c`
