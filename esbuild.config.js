
import * as esbuild from 'esbuild'

await esbuild.build({
  entryPoints: ['server/index.ts'],
  bundle: true,
  platform: 'node',
  outfile: 'dist/server/index.js',
  format: 'cjs',
  target: 'node20',
  external: ['vite'],
  plugins: [{
    name: 'alias-plugin',
    setup(build) {
      build.onResolve({ filter: /^@db/ }, args => {
        return { path: new URL('.' + args.path.replace('@db', '/db') + '.ts', import.meta.url).pathname }
      })
    }
  }]
})
