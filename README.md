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

---


### Mocked Packages:

**underscore**

`1.5.1`
`1.3.3`
`1.3.1`

request

`2.27.0`
`0.9.5`
`0.9.0`

test-package-with-one-dep

`0.0.0`

npm-test-peer-deps

`0.0.0`

test-repo-url-http

`0.0.0`

test-repo-url-https

`0.0.1`

test-repo-url-ssh

`0.0.1`

mkdirp

`0.3.5`

optimist

`0.6.0`

clean

`2.1.6`

async

`0.2.10`
`0.2.9`

checker

`0.5.2`
`0.5.1`
