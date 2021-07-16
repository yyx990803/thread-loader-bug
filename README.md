Issue: LoaderContext.mode is missing when running in `thread-loader`

## Not Working

- `npm run build`
- Check `dist/main.js`
  - `console.log('mode is: undefined')`

## Working

- Comment out `thread-loader` in config
- `npm run build`
- Check `dist/main.js`
  - `console.log('mode is: MODE')`