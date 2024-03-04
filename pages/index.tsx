import { useCallback, useState } from "react"
import { FaLinkedin, FaSun } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { GiSmartphone } from 'react-icons/gi'
import { MdDarkMode } from 'react-icons/md'
import { SiMaildotru } from 'react-icons/si'

import Separator from 'components/Separator'
import Tag from 'components/Tag'

const links = {
  email: 'mduhamel31@gmail.com',
  linkedin: 'https://www.linkedin.com/in/duhamel-maxime/',
  maps: 'https://www.google.com/maps/place/Toulouse/@43.6005854,1.2683801,11z/data=!3m1!4b1!4m6!3m5!1s0x12aebb6fec7552ff:0x406f69c2f411030!8m2!3d43.604652!4d1.444209!16zL20vMGNiaGg?entry=ttu',
}

const skills = {
  base: [
    'JavaScript',
    'TypeScript',
  ],
  general: [
    'Agile',
    'APIs',
    'CI/CD',
    'UI/UX',
  ],
  front: [
    'React',
    'Next',
    'HTML5',
    'CSS3',
    'Sass',
    'TailwindCSS',
    'Babel',
    'Gulp',
    'Webpack',
  ],
  back: [
    'Node',
    'Node',
    'Express',
    'Koa',
  ],
  dbs: [
    'PostgreSQL (Sequelize)',
    'MongoDB (Mongoose)',
  ],
  other: [
    'Mac',
    'Linux',
    'Docker',
    'AWS',
    'G-Cloud',
    'Github',
    'Gitlab',
    'RabbitMQ',
    'Jenkins',
    'Metabase',
    'Slack',
    'Notion',
  ]
}

export default function Home() {
  const [theme, setTheme] = useState('light')

  const handleSetTheme = useCallback(
    () => {
      const newTheme = theme === 'dark' ? 'light' : 'dark'
      if (newTheme === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      setTheme(newTheme)
    },
    [theme]
  )

  return (
    <main className="flex justify-center content-center dark:bg-slate-700">
      <button
        // className={`w-fit absolute right-5 top-2 p-2 rounded-md bg-slate-200 dark:bg-[#212933]`}
        className="w-fit absolute top-2 px-4 py-1 rounded-md border-2 border-black bg-stone-200 text-black dark:bg-slate-700 dark:text-white hover:scale-110 active:scale-100 duration-200"
        onClick={handleSetTheme}
      >
        { theme === 'light'
          ? <MdDarkMode />
          : <FaSun />
        }
      </button>

      <div className="m-5 xs:m-10 p-4 xs:p-8 border-4 border-gray-700 rounded-2xl shadow-xl dark:bg-stone-600 dark:border-black dark:text-white">
        <header>
          <div className="flex justify-between items-center">
            <div className="mr-8">
              <div
                className="h-32 w-32 bg-cover bg-no-repeat rounded-full border-2 border-gray-700"
                style={{
                  backgroundImage: `url('picture.png')`,
                }}
              />
            </div>
            <div className="flex flex-col lg:items-end space-y-2">
              <h1 className="text-2xl sm:text-5xl md:text-6xl font-extrabold">Duhamel Maxime</h1>
              <h2 className="text-2xl">Full-Stack JS Developer</h2>
              <h2 className="text-lg">10 years of experience</h2>
            </div>
          </div>
        </header>

        <div className="flex flex-col md:flex-row">

          <div className="md:mt-10 md:w-2/6 md:mr-10">
            <Separator classes="md:hidden"/>

            <section>
              <h2 className="text-2xl font-bold">Contact</h2>
              <ul className="mt-2 space-y-2">
                <li className="flex items-center space-x-2">
                  <GiSmartphone className="text-xl"/>
                  <a href="tel:0640654963" className="text-purple-600 hover:underline dark:text-purple-300">
                    06 40 65 49 63
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <SiMaildotru className="text-xl"/>
                  <a
                    href={`mailto:${links.email}`}
                    className="text-purple-600 hover:underline dark:text-purple-300"
                  >
                    {links.email}
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <FaLinkedin className="text-xl"/>
                  <a
                    className="text-purple-600 hover:underline dark:text-purple-300"
                    href={links.linkedin}
                    target="_blank"
                  >
                    duhamel-maxime
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <FaLocationDot className="text-xl"/>
                  <a
                    href={links.maps}
                    className="text-purple-600 hover:underline dark:text-purple-300"
                    target="_blank"
                  >
                    Toulouse, France
                  </a>
                </li>
              </ul>
            </section>

            <Separator />

            <section>
              <h2 className="flex text-2xl font-bold">Skills</h2>
              <ul className="mt-2 flex flex-wrap">
                {skills.base.map((label, index) => (
                  <Tag key={index} color='red' classes='mr-1'>{label}</Tag>
                ))}
                {skills.general.map((label, index) => (
                  <Tag key={index} color='yellow' classes='mr-1'>{label}</Tag>
                ))}
                {skills.front.map((label, index) => (
                  <Tag key={index} color='green' classes='mr-1'>{label}</Tag>
                ))}
                {skills.back.map((label, index) => (
                  <Tag key={index} color='blue' classes='mr-1'>{label}</Tag>
                ))}
                {skills.dbs.map((label, index) => (
                  <Tag key={index} color='purple' classes='mr-1'>{label}</Tag>
                ))}
                {skills.other.map((label, index) => (
                  <Tag key={index} color='black' classes='mr-1'>{label}</Tag>
                ))}
              </ul>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-bold">Languages</h2>
              <ul className="flex flex-col space-y-1 ml-4 mt-2 list-disc">
                <li>
                  <span className="mr-2">French</span>
                  <Tag color='green'>C2</Tag>
                </li>
                <li>
                  <span className="mr-2">English</span>
                  <Tag color='blue' classes="mr-1">Read/Written B2</Tag>
                  <Tag color='yellow' >Spoken B1</Tag>
                </li>
              </ul>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-bold">Interests & Hobbies</h2>
              <ul className="ml-4 mt-2 list-disc">
                <li className="">
                  Sports : climbing, trail, mountain bike, hiking, snowboard, apnea, kayak
                </li>
                <li className="">New technologies</li>
                <li className="">Music</li>
                <li className="">Videos & Board games</li>
                <li className="">Ecology</li>
                <li className="">Gastronomy & cooking</li>
                <li className="">Travels</li>
              </ul>
            </section>
          </div>

          <div className="md:mt-10 md:w-4/6">
            <section>
              <Separator classes="md:hidden"/>
              <h2 className="text-2xl pb-1 font-bold">Summary</h2>
              <p className="text-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita delectus labore enim in minus quod vero dignissimos
                et, ratione obcaecati quis maiores? Voluptatem, natus
                cupiditate perferendis omnis ex hic incidunt! Earum dolore
                cupiditate sed et maxime distinctio iure fugiat aspernatur at
                veniam laudantium eveniet corporis dicta reiciendis quod
                consequatur, labore perferendis dolorum velit quibusdam minus
                iste dolorem! Officiis, obcaecati maxime
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl mt-4 font-bold">
                Work Experience
              </h2>
              <ul className="mt-2">
                <li className="pt-2-">
                  <span className="flex justify-between text-sm">
                    <a
                      href="https://www.linkedin.com/company/maestro-corporation/"
                      target="_blank"
                      className="text-purple-600 hover:underline dark:text-purple-300"
                    >
                      <strong className="text-xl">Maestro Corporation</strong>
                    </a>
                    November 2015 - June 2023 | OEC
                  </span>
                  <span className="flex justify-between mt-1 text-md font-semibold">
                    <span>Full-stack JS Developer</span>
                    <span>Toulouse, France</span>
                  </span>
                  <p className="mt-1 text-justify text-md">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Expedita delectus labore enim in minus quod vero dignissimos
                    et, ratione obcaecati quis maiores?
                  </p>
                </li>

                <li className="mt-4">
                  <span className="flex justify-between text-sm">
                    <a
                      href="https://www.netexplorer.fr/en/"
                      target="_blank"
                      className="text-purple-600 hover:underline dark:text-purple-300"
                    >
                      <strong className="text-xl">NetExplorer</strong>
                    </a>
                    June 2012 - August 2014 | INT
                  </span>
                  <span className="flex justify-between mt-1 text-md font-semibold">
                    <span>Junior Web Developer</span>
                    <span>Colomiers, France</span>
                  </span>
                  <p className="mt-1 text-justify text-xs-">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Expedita delectus labore enim in minus quod vero dignissimos
                    et, ratione obcaecati quis maiores?
                  </p>
                </li>

                <li className="mt-4">
                  <span className="flex justify-between text-sm">
                    <a
                      href="https://www.linkedin.com/search/results/all/?keywords=Neventy&sid=Drv"
                      target="_blank"
                      className="text-purple-600 hover:underline dark:text-purple-300"
                    >
                      <strong className="text-xl">Neventy</strong>
                    </a>
                    January 2013 - June 2013 | INT
                  </span>
                  <span className="flex justify-between mt-1 text-md font-semibold">
                    <span>Front-End Developer</span>
                    <span>Toulouse, France</span>
                  </span>
                  <p className="mt-1 text-justify text-xs-">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Expedita delectus labore enim in minus quod vero dignissimos
                    et, ratione obcaecati quis maiores?
                  </p>
                </li>

                <li className="mt-4">
                  <p className="flex justify-between text-sm">
                    <a
                      href="https://www.linkedin.com/company/actemiumtoulouserobotique&automation/"
                      target="_blank"
                      className="text-purple-600 hover:underline dark:text-purple-300"
                    >
                      <strong className="text-xl">Actemium Robotique & Automation</strong>
                    </a>
                    June 2012 - September 2012 | INT
                  </p>
                  <p className="flex justify-between mt-1 text-md font-semibold">
                    <span>System Developer</span>
                    <span>Toulouse, France</span>
                  </p>
                  <p className="mt-1 text-justify text-xs-">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Expedita delectus labore enim in minus quod vero dignissimos
                    et, ratione obcaecati quis maiores?
                  </p>
                </li>

                <li className="mt-4">
                  <span className="flex justify-between text-sm">
                    <a
                      href="https://www.linkedin.com/company/utilib/"
                      target="_blank"
                      className="text-purple-600 hover:underline dark:text-purple-300"
                    >
                      <strong className="text-xl">Utilib</strong>
                    </a>
                    January 2012 - March 2012 | INT
                  </span>
                  <span className="flex justify-between mt-1 text-md font-semibold">
                    <span>Full-Stack Developer</span>
                    <span>Labège, France</span>
                  </span>
                  <p className="mt-1 text-justify text-xs-">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Expedita delectus labore enim in minus quod vero dignissimos
                    et, ratione obcaecati quis maiores?
                  </p>
                </li>

              </ul>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl mt-6 font-bold">Education</h2>
              <ul className="mt-2">
                <li className="">
                  <p className="flex justify-between text-sm">
                    <a
                      href="https://www.supinfo.com/"
                      target="_blank"
                      className="text-purple-600 hover:underline dark:text-purple-300"
                    >
                      <strong className="text-xl">SUPINFO</strong>
                    </a>
                    2012 - 2015
                  </p>
                  <p className="flex justify-between font-semibold">
                    <span className="text-md">Master 1</span>
                    <span>Toulouse, France</span>
                  </p>
                </li>
                <li className="pt-2">
                  <p className="flex justify-between text-sm">
                    <a
                      href="https://www.iut-blagnac.fr/fr/"
                      target="_blank"
                      className="text-purple-600 hover:underline dark:text-purple-300"
                    >
                      <strong className="text-xl">University Institute of Technology</strong>
                    </a>
                    2010-2012
                  </p>
                  <p className="flex justify-between font-semibold">
                    <span className="text-md">University diploma in computer technology</span>
                    <span>Blagnac, France</span>
                  </p>
                </li>
              </ul>
            </section>
          </div>

        </div>

      </div>
    </main>
  )
}
