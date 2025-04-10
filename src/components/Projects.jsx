import { FaGithub, FaUser, FaEye } from "react-icons/fa";

function Projects() {
  return (
    <section id="projects" className="bg-purple500 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-white text-center">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6 perspective-1000 md:px-4">
          <div className="bg-purple500 p-6 rounded text-purple100 border-purple300 shadow-purple300 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:-rotate-1 hover:translate-y-1 hover:shadow-lg hover:shadow-purple300">
            <div className="flex justify-between">
              <h3 className="text-xl font-semibold mb-2">Book Shop</h3>
              <h2 className="flex items-center">
                <FaUser />3 People
              </h2>
            </div>
            <p>
              <i>Management book as a library for a book store.</i>
              <br />
              <b>Role:</b> <span>Project Manager, Developer, Designer UI/UX, Tester, Data</span>
              <br />
              <b>Workflow & tools:</b> <span>GitHub, Git, Diagrams</span>
            </p>

            <ol className="flex items-center mt-2">
              <li className="relative mb-6 sm:mb-0 flex-1">
                <div className="flex items-center">
                  <div className="z-10 flex items-center justify-center w-6 h-6 bg-purple-700 rounded-full shrink-0">
                    <svg
                      className="w-2.5 h-2.5 text-purple500 dark:text-purple-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </div>
                  <div className="flex-grow h-0.5 bg-gray-200 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3">
                  <h3 className="text-sm font-semibold">Start</h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    OCTOBER 2023
                  </time>
                </div>
              </li>

              <li className="relative mb-6 sm:mb-0 flex-1">
                <div className="flex items-center">
                  <div className="z-10 flex items-center justify-center w-6 h-6 bg-purple-700 rounded-full shrink-0">
                    <svg
                      className="w-2.5 h-2.5 text-purple500 dark:text-purple-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </div>
                </div>
                <div className="mt-3">
                  <h3 className="text-sm font-semibold">End</h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    NOVEMBER 2023
                  </time>
                </div>
              </li>
            </ol>

            <div className="flex items-center mt-2">
              <FaGithub className="text-purple300 mr-2" />
              <a
                href="https://github.com/TrThinh/FPT_BOOKSHOP"
                className="font-normal hover:text-purple-500"
              >
                Book Shop
              </a>
            </div>
          </div>

          <div className="bg-purple500 p-6 rounded text-purple100 border-purple300 shadow-purple300 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:rotate-1 hover:translate-y-1 hover:shadow-lg hover:shadow-purple300">
            <div className="flex justify-between">
              <h3 className="text-xl font-semibold mb-2">Magazine CMS</h3>
              <h2 className="flex items-center">
                <FaUser />7 People
              </h2>
            </div>
            <p>
              <i>Management contributions, articles, and comments for a magazine.</i>
              <br />
              <b>Role:</b> <span>Developer, Designer UI/UX, Tester, Data</span>
              <br />
              <b>Workflow & tools:</b>{" "}
              <span>GitHub, Git, Scrum, Jira, Figma</span>
            </p>

            <ol className="flex items-center mt-2">
              <li className="relative mb-6 sm:mb-0 flex-1">
                <div className="flex items-center">
                  <div className="z-10 flex items-center justify-center w-6 h-6 bg-purple-700 rounded-full shrink-0">
                    <svg
                      className="w-2.5 h-2.5 text-purple500 dark:text-purple-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </div>
                  <div className="flex-grow h-0.5 bg-gray-200 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3">
                  <h3 className="text-sm font-semibold">Start</h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    MARCH 3, 2024
                  </time>
                </div>
              </li>

              <li className="relative mb-6 sm:mb-0 flex-1">
                <div className="flex items-center">
                  <div className="z-10 flex items-center justify-center w-6 h-6 bg-purple-700 rounded-full shrink-0">
                    <svg
                      className="w-2.5 h-2.5 text-purple500 dark:text-purple-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </div>
                </div>
                <div className="mt-3">
                  <h3 className="text-sm font-semibold">End</h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    APRIL 19, 2024
                  </time>
                </div>
              </li>
            </ol>

            <div className="flex items-center mt-2">
              <FaGithub className="text-purple300 mr-2" />
              <a
                href="https://github.com/Wowwhat1/MagazineCMS"
                className="font-normal hover:text-purple-500"
              >
                Magazine CMS
              </a>
            </div>
          </div>

          <div className="bg-purple500 p-6 rounded text-purple100 border-purple300 shadow-purple300 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:-rotate-1 hover:translate-y-1 hover:shadow-lg hover:shadow-purple300">
            <div className="flex justify-between">
              <h3 className="text-xl font-semibold mb-2">Quizz AI</h3>
              <h2 className="flex items-center">
                <FaUser />5 People
              </h2>
            </div>
            <p>
              <i>Using AI to generate questions and answers for quizzes.</i>
              <br />
              <b>Role:</b> <span>Developer, Designer UI/UX, Tester</span>
              <br />
              <b>Workflow & tools:</b>{" "}
              <span>GitHub, Git, Scrum, Jira, Figma</span>
            </p>

            <ol className="flex items-center mt-2">
              <li className="relative mb-6 sm:mb-0 flex-1">
                <div className="flex items-center">
                  <div className="z-10 flex items-center justify-center w-6 h-6 bg-purple-700 rounded-full shrink-0">
                    <svg
                      className="w-2.5 h-2.5 text-purple500 dark:text-purple-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </div>
                  <div className="flex-grow h-0.5 bg-gray-200 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3">
                  <h3 className="text-sm font-semibold">Start</h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Mar 6, 2025
                  </time>
                </div>
              </li>

              <li className="relative mb-6 sm:mb-0 flex-1">
                <div className="flex items-center">
                  <div className="z-10 flex items-center justify-center w-6 h-6 bg-purple-700 rounded-full shrink-0">
                    <svg
                      className="w-2.5 h-2.5 text-purple500 dark:text-purple-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </div>
                </div>
                <div className="mt-3">
                  <h3 className="text-sm font-semibold">End</h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Mar 12, 2025
                  </time>
                </div>
              </li>
            </ol>

            <div className="flex justify-between">
              <div className="flex items-center mt-2">
                <FaGithub className="text-purple200 mr-2" />
                <a
                  href="https://github.com/bxthien/Quiz-Onl-OJT"
                  className="font-normal hover:text-purple-500"
                >
                  Quizz AI
                </a>
              </div>
              <div className="flex items-center mt-2">
                <FaEye className="text-purple300 mr-2" />
                <a
                  href="https://quizonl-dev.netlify.app/"
                  className="font-normal hover:text-purple-500"
                >
                  View
                </a>
              </div>
            </div>
          </div>

          <div className="bg-purple500 p-6 rounded text-purple100 border-purple300 shadow-purple300 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:rotate-1 hover:translate-y-1 hover:shadow-lg hover:shadow-purple300">
            <div className="flex justify-between">
              <h3 className="text-xl font-semibold mb-2">Green Prep</h3>
              <h2 className="flex items-center">
                <FaUser />
                20 People
              </h2>
            </div>
            <p>
              <i>
                A website testing platform for students to practice and prepare
                for the VSTEP exam of an University school.
              </i>
              <br />
              <b>Role:</b> <span>Developer</span>
              <br />
              <b>Workflow & tools:</b>{" "}
              <span>GitHub, Git, Scrum, Jira, Figma, Slack</span>
            </p>

            <ol className="flex items-center mt-2">
              <li className="relative mb-6 sm:mb-0 flex-1">
                <div className="flex items-center">
                  <div className="z-10 flex items-center justify-center w-6 h-6 bg-purple-700 rounded-full shrink-0">
                    <svg
                      className="w-2.5 h-2.5 text-purple500 dark:text-purple-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </div>
                  <div className="flex-grow h-0.5 bg-gray-200 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3">
                  <h3 className="text-sm font-semibold">Start</h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    MARCH 18, 2025
                  </time>
                </div>
              </li>

              <li className="relative mb-6 sm:mb-0 flex-1">
                <div className="flex items-center">
                  <div className="z-10 flex items-center justify-center w-6 h-6 bg-purple-700 rounded-full shrink-0">
                    <svg
                      className="w-2.5 h-2.5 text-purple500 dark:text-purple-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </div>
                </div>
                <div className="mt-3">
                  <h3 className="text-sm font-semibold">End</h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    APRIL 9, 2025
                  </time>
                </div>
              </li>
            </ol>

            <div className="flex items-center mt-2">
              <FaGithub className="text-purple300 mr-2" />
              <a
                href="https://github.com/st-quy/GreenPREP"
                className="font-normal hover:text-purple-500"
              >
                Green Prep
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
