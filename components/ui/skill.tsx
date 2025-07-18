import React from "react";

export default function Skill() {
  return (
    <div className="w-screen padding-x">
      <div>
        <div className="flex flex-row items-center justify-between gap-6 mb-4 ">
          <div className="w-1/2">Frontend</div>
          <div className="flex flex-wrap gap-4 w-1/2">
            <div className="flex flex-row items-center justify-center gap-6">
              <img src="/images/skill/js.png" alt="" width={50} height={50} />
              javascript
            </div>
            <div className="flex flex-row items-center justify-center gap-6">
              <img
                src="/images/skill/typescript.png"
                alt=""
                width={50}
                height={50}
              />
              typescript
            </div>
            <div className="flex flex-row items-center justify-center gap-6">
              <img
                src="/images/skill/react.png"
                alt=""
                width={50}
                height={50}
              />
              React
            </div>
            <div className="flex flex-row items-center justify-center gap-6">
              <img
                src="/images/skill/nextjs.png"
                alt=""
                width={50}
                height={50}
              />
              Next.Js
            </div>
            <div className="flex flex-row items-center justify-center gap-6">
              <img
                src="/images/skill/tailwind.png"
                alt=""
                width={50}
                height={50}
              />
              Tailwind
            </div>
            <div className="flex flex-row items-center justify-center gap-6">
              <img src="/images/skill/gsap.png" alt="" width={50} height={50} />
              GSAP
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between gap-6 mb-4 ">
        <div className="w-1/2">backend</div>
        <div className="flex flex-wrap gap-4 w-1/2">
          <div className="flex flex-row items-center justify-center gap-6">
            <img
              src="/images/skill/node-js.png"
              alt=""
              width={50}
              height={50}
            />
            Node.js
          </div>
          <div className="flex flex-row items-center justify-center gap-6">
            <img
              src="/images/skill/express-js.png"
              alt=""
              width={50}
              height={50}
            />
            Express
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between gap-6 mb-4 ">
        <div className="w-1/2">database</div>
        <div className="flex flex-wrap gap-4 w-1/2">
          <div className="flex flex-row items-center justify-center gap-6">
            <img
              src="/images/skill/mongodb.png"
              alt=""
              width={50}
              height={50}
            />
            MongoDB
          </div>
          <div className="flex flex-row items-center justify-center gap-6">
            <img src="/images/skill/mysql.png" alt="" width={50} height={50} />
            MySQL
          </div>
          <div className="flex flex-row items-center justify-center gap-6">
            <img
              src="/images/skill/postgresql.png"
              alt=""
              width={50}
              height={50}
            />
            PostgreSQL
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between gap-6 mb-4 ">
        <div className="w-1/2">tools</div>
        <div className="flex flex-wrap gap-4 w-1/2">
          <div className="flex flex-row items-center justify-center gap-6">
            <img src="/images/skill/git.png" alt="" width={50} height={50} />
            Git
          </div>
          <div className="flex flex-row items-center justify-center gap-6">
            <img src="/images/skill/docker.png" alt="" width={50} height={50} />
            Docker
          </div>
          <div className="flex flex-row items-center justify-center gap-6">
            <img
              src="/images/skill/firebase.png"
              alt=""
              width={50}
              height={50}
            />
            Firebase
          </div>
        </div>
      </div>
    </div>
  );
}
