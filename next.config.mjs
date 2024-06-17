/** @type {import('next').NextConfig} */

const nextConfig = {
    env: {
        END_POINT_VIDEOS: "https://take-home-assessment-423502.uc.r.appspot.com/api/videos",
        END_POINT_COMMENTS: "https://take-home-assessment-423502.uc.r.appspot.com/api/videos/comments"
    },
    async headers() {
        return [
          {
            source: "/(.*)",
            headers: [
              { key: "Access-Control-Allow-Credentials", value: "true" },
              { key: "Access-Control-Allow-Origin", value: "https://take-home-assessment-423502.uc.r.appspot.com" },
              { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
              { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
            ]
          }
        ]
      }
};

export default nextConfig;