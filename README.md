# Saumya Bhatt Portfolio

### Branches:

- `main` - _contains human readable code_
- `production` - _contains the build files for GitHub Pages to host_

## Deploying to production

1. Make the necessary changes and push to `main`
2. Run `npm run deploy` to push the changes to production.

## Troubleshoot

If while running the `npm run deploy` command you face an issue:

```
fatal: a branch named 'production' already exists
```

1. First try to delete the `production` branch locally. If still error exists, then do for remote.
2. If the issue still exists, delete the `node_modules/.cache/gh-pages` [[ref](https://github.com/tschaub/gh-pages#when-get-error-branch-already-exists)].
3. Make sure the branch `production` is the one being used to build the GH-Pages in the settings section. 
