import { Code, Globe, Wrench, Monitor } from "lucide-react";

const proficiencyLevels = [
  { label: "Beginner", color: "bg-blue-100 text-blue-800" },
  { label: "Intermediate", color: "bg-yellow-100 text-yellow-800" },
  { label: "Proficient", color: "bg-green-100 text-green-800" },
  { label: "Expert", color: "bg-purple-100 text-purple-800" },
]

const skills = [
  {
    category: "Programming Languages",
    icon: <Code className="w-6 h-6" />,
    items: [
      { name: "Java", proficiency: proficiencyLevels[3] },
      { name: "Python", proficiency: proficiencyLevels[2] },
      { name: "C#", proficiency: proficiencyLevels[1] },
      { name: "C", proficiency: proficiencyLevels[1]},
      { name: "C++", proficiency: proficiencyLevels[1] },
      { name: "MATLAB", proficiency: proficiencyLevels[1] },
      { name: "DrRacket", proficiency: proficiencyLevels[2] },
    ],
  },
  {
    category: "Web Technologies",
    icon: <Globe className="w-6 h-6" />,
    items: [
      { name: "HTML", proficiency: proficiencyLevels[3] },
      { name: "CSS", proficiency: proficiencyLevels[3] },
      { name: "SQL", proficiency: proficiencyLevels[2] },
      { name: "React", proficiency: proficiencyLevels[3] },
      { name: "JavaScript", proficiency: proficiencyLevels[1] },
      { name: "Tailwind CSS", proficiency: proficiencyLevels[2] },
    ],
  },
  {
    category: "Engineering Tools",
    icon: <Wrench className="w-6 h-6" />,
    items: [
      { name: "Git", proficiency: proficiencyLevels[3] },
      { name: "GitHub", proficiency: proficiencyLevels[3] },
      { name: "SOLIDWORKS", proficiency: proficiencyLevels[2] },
      { name: "Arduino", proficiency: proficiencyLevels[1] },
      { name: "AutoCAD", proficiency: proficiencyLevels[2] },
    ],
  },
  {
    category: "Operating Systems",
    icon: <Monitor className="w-6 h-6" />,
    items: [
      { name: "Windows", proficiency: proficiencyLevels[3] },
      { name: "Linux", proficiency: proficiencyLevels[2] }
    ],
  },
]

const ComputerKnowledge = () => {
  return (
    <div className="border-b border-neutral-100 pb-4">
      <h1 className="mb-8 text-center text-4xl">Computer Knowledge</h1>
      <div className="flex flex-wrap -mx-4">
        {skills.map((skillGroup) => (
          <div key={skillGroup.category} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white overflow-hidden shadow rounded-lg h-full">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center mb-4">
                  {skillGroup.icon}
                  <h2 className="ml-3 text-xl font-semibold text-gray-900">{skillGroup.category}</h2>
                </div>
                <ul className="space-y-3">
                  {skillGroup.items.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex items-center justify-between px-4 py-2 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors duration-150"
                    >
                      <span className="text-gray-700">{skill.name}</span>
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${skill.proficiency.color}`}
                      >
                        {skill.proficiency.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ComputerKnowledge;