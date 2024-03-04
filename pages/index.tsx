// import Image from "next/image"

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
    'Babel, Gulp, Webpack',
  ],
  back: [
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
    'Jenkins',
    'Metabase',
    'Slack',
    'Notion',
  ]
}

export default function Home() {
  return (
    <main className="flex justify-center content-center">
      <div className="m-5 xs:m-10 p-4 xs:p-8 border-4 border-gray-700 rounded-2xl shadow-xl">

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
            <h2 className="text-2xl font-bold">Contact Details</h2>
            <ul className="mt-2 space-y-1">
              <li className="">
                <span className="text-md font-bold">Phone : </span>
                <a href="tel:0640654963" className="text-purple-600 hover:underline">
                  06 40 65 49 63
                </a>
              </li>
              <li className="">
                <span className="text-md font-bold">E-mail : </span>
                <a
                  href={`mailto:${links.email}`}
                  className="text-purple-600 hover:underline"
                >
                  {links.email}
                </a>
              </li>
              <li className="">
                <span className="text-md font-bold">Linkedin : </span>
                <a
                  className="text-purple-600 hover:underline"
                  href={links.linkedin}
                  target="_blank"
                >
                  duhamel-maxime
                </a>
              </li>
              <li className="">
                <span className="text-md font-bold">Location : </span>
                <a
                  href={links.maps}
                  className="text-purple-600 hover:underline"
                  target="_blank"
                >
                  Toulouse, France
                </a>
              </li>
            </ul>

            <Separator />

            <h2 className="text-2xl font-bold">Skills</h2>
            <ul className="mt-2 flex flex-wrap font-bold- text-xs">
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
                <Tag key={index} color='gray' classes='mr-1'>{label}</Tag>
              ))}
            </ul>

            <Separator />

            <h2 className="text-2xl font-bold">Interests & Hobbies</h2>
            <ul className="ml-4 mt-2 list-disc">
              <li className="">
                Sports : climbing, trail, mountain bike, hiking, snowboard, apnea,
                kayak ..
              </li>
              <li className="">New technologies</li>
              <li className="">Music</li>
              <li className="">Videos & Board games</li>
              <li className="">Ecology</li>
              <li className="">Gastronomy & cooking</li>
              <li className="">Travels</li>
            </ul>
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
                      className="text-purple-600 hover:underline"
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
                      className="text-purple-600 hover:underline"
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
                      className="text-purple-600 hover:underline"
                    >
                      <strong className="text-xl">Neventy</strong>
                    </a>
                    January 2013 - June 2013 | INT
                  </span>
                  <span className="flex justify-between mt-1 text-md font-semibold">
                    <span>Toulouse, France</span>
                    <span>Front-End Developer</span>
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
                      className="text-purple-600 hover:underline"
                    >
                      <strong className="text-xl">Actemium Toulouse Robotique & Automation</strong>
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
                      className="text-purple-600 hover:underline"
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
                      className="text-purple-600 hover:underline"
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
                      className="text-purple-600 hover:underline"
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
