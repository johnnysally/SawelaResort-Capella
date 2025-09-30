import viteCompression from 'vite-plugin-compression';

export default viteCompression({
  algorithm: 'brotliCompress',
  ext: '.br',
  threshold: 10240, // Only assets >10kb
  compressionOptions: { level: 11 },
  deleteOriginFile: false,
});
