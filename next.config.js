/** /*@type {import('next').NextConfig} */
/*const nextConfig = {
  experimental: {
    appDir: true,
  },
};*/

module.exports = {
  trailingSlash: true, // adiciona / no fim da url
  async redirects() {
    return [
      {
        source: '/perguntas', // Outras rotas
        destination: '/faq/',
        permanent: true,
      },
    ];
  },
};
