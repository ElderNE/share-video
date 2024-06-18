/** @type {import('next').NextConfig} */

const nextConfig = {
    env: {
        END_POINT_VIDEOS:   "/api/videos",
        END_POINT_COMMENTS: "/api/videos/comments"
    },
    async rewrites() {
        return [
          {
            source: '/api/videos',
            destination: 'https://take-home-assessment-423502.uc.r.appspot.com/api/videos',
          },
          {
            source: '/api/videos/comments',
            destination: 'https://take-home-assessment-423502.uc.r.appspot.com/api/videos/comments',
          },
        ]
      },
};

export default nextConfig;