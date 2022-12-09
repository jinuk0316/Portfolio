import Head from "next/head";
import Image from "next/image";
import { SiBlogger, SiGithub, SiInstagram } from "react-icons/si";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import Modal from "./components/Modal";
import main_photo from "../public/myphoto.jpeg";
import code from "../public/code.png";
import design from "../public/des.jpeg";
import etcweb from "../public/etcweb.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>JinUk_Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">JinUk_Portfolio</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <Modal />
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              이진욱
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Junior FrontEnd Developer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              프론트엔드의 모든것과 끝을 보고싶은 주니어 프론트엔드 개발자.
              <br /> 제일 핵심인 반응형부터 ES6문법과 TS, 더 나아가
              Next.js까지..
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a
                href="https://projectlog.tistory.com/"
                className="hover:text-orange-400"
              >
                <SiBlogger />
              </a>
              <a
                href="https://github.com/jinuk0316"
                className="hover:text-slate-300"
              >
                <SiGithub />
              </a>
              <a
                href="https://www.instagram.com/jinuk_/"
                className="hover:text-pink-500"
              >
                <SiInstagram />
              </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={main_photo} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">
              내가 사용하는 언어 및 도구
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              프론트엔드 개발자로 마음먹은 이후로 저는 웹개발을 기초부터 다시
              제대로 시작하였습니다. 모바일, 태블릿, 노트북, PC에서 일관성있게
              보이도록 <span className="text-teal-500"> 반응형CSS </span>를
              공부하였고 <br />
              프론트엔드의 핵심인 JavaScript를 기초부터 다시 공부하며
              <span className="text-teal-500"> ES6문법 </span>도 익히고
              있습니다. 현재는 React를 공부중이고 대학교3학년 과정중 React
              프레임워크인 Next.js도 배우고 있습니다.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              저는 어느 분야에서든지 쓰일 수 있는{" "}
              <span className="text-teal-500">다양한 서비스</span>를 제공하도록
              노력하고 있습니다.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">기본적인 언어</h3>
              <p className="py-2">
                웹을 구성하기 위해서 아래와 같은 언어들의
                <br />
                기본지식&요소를 필요로 합니다.
                <br />
                매우 기본적이지만 매우 중요합니다.
              </p>
              <h4 className="py-4 text-teal-600">웹 구성에 필요한 기본언어</h4>
              <p className="text-gray-800 py-1">HTML5</p>
              <p className="text-gray-800 py-1">CSS3</p>
              <p className="text-gray-800 py-1">JavaScript</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">프레임워크</h3>
              <p className="py-2">
                개발자가 반복적으로 해야 하는 공통부분을 최소화 하고
                <br />
                자신이 맡은 세부 업무개발에 집중할 수 있고 개발표준
                <br />
                준수 및 개발품질 향상에 도움을 준다.
              </p>
              <h4 className="py-4 text-teal-600">
                웹 구성에 필요한 프레임워크
              </h4>
              <p className="text-gray-800 py-1">React.js</p>
              <p className="text-gray-800 py-1">Vue.js</p>
              <p className="text-gray-800 py-1">Next.js</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={etcweb} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                그 외에 필요한 도구들
              </h3>
              <p className="py-2">
                프론트엔드를 구성하는 언어 및 툴 외에 개발에 도움이
                <br /> 되는 도구들로 패키지 매니저, 버전관리, 빌드툴,
                그래프QL등이 있습니다.
              </p>
              <h4 className="py-4 text-teal-600">개발에 도움이 되는 툴</h4>
              <p className="text-gray-800 py-1">npm, yarn</p>
              <p className="text-gray-800 py-1">Git, Github</p>
              <p className="text-gray-800 py-1">Prettie, ESLint</p>
              <p className="text-gray-800 py-1">Apollo, Relay Mode</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">
              내가 만들었던 사이트
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              저는 여러가지 시도해보며 웹사이트를 만들어왔습니다.{" "}
              <span className="text-teal-500">HTML&CSS만 이용</span>하여
              사이트를 구성하기도 하고
              <br /> <span className="text-teal-500">반응형CSS</span>에 신경을
              써서 모바일, 태블릿, PC에 일관성있게 보이게 구성도 하고{" "}
              <span className="text-teal-500">React.js</span>와
              프레임워크인&nbsp;
              <span className="text-teal-500">Next.js & TailwindCSS</span>를
              이용하여 SSR도 적극적으로 사용해보았습니다.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              저는 어느 분야에서든지 쓰일 수 있는{" "}
              <span className="text-teal-500">다양한 서비스</span>를 제공하도록
              노력하고 있습니다.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
