import { Timeline } from "antd";

export default function WorkExperience() {
    return (
        <div id="work" className="flex flex-wrap flex-col justify-center items-center text-slate-700 mt-5 w-full scroll-mt-24 bg-slate-100">
            <h1 className="text-2xl mb-3 mt-3 w-full text-blue-600 text-center">Work Experience</h1>
            <div className="w-4/5">
                <Timeline
                    className="p-4 md:p-6"
                    items={[
                        {
                            content: (
                                <div className="pb-4">
                                    <p className="font-semibold text-gray-500">07/2024 - Current</p>
                                    <h1 className="font-bold">Kurulum Cognitive Services</h1>
                                    <h2 className="font-semibold">Junior Software Engineer</h2>
                                    <ul className="list-disc ml-5 mt-2 w-full md:w-4/5">
                                        <li>
                                            Maintain and improve large-scale CRM systems used across Intertech's banking ecosystem
                                            ensuring stability, performance, and reliability.
                                        </li>
                                        <li>
                                            Diagnose and resolve production issues by analyzing logs (ELK Stack), debugging workflows,
                                            and validating fixes in test environments.
                                        </li>
                                        <li>
                                            Implement small-scale feature enhancements and system optimizations using .NET Framework,
                                            C#, SQL, REST APIs, Scala, and internal microservice components.
                                        </li>
                                        <li>
                                            Conduct functional testing and regression validation for CRM modules, ensuring smooth
                                            deployment cycles and minimized downtime.
                                        </li>
                                        <li>
                                            Strenghtened expertise in system maintenance, distributed architectures, and real-world
                                            software lifecycle processes within high-availability environments.
                                        </li>
                                    </ul>
                                </div>
                            ),
                        },
                        {
                            content: (
                                <div className="pb-4">
                                    <p className="font-semibold text-gray-500">03/2024 - 05/2024</p>
                                    <h1 className="font-bold">Codeo</h1>
                                    <h2 className="font-semibold">Intern Software Engineer</h2>
                                    <ul className="list-disc ml-5 mt-2 w-full md:w-4/5">
                                        <li>
                                            Desingned and executed manual test cases to validate product functionality and detect defects
                                            across multiple software module.
                                        </li>
                                        <li>
                                            Built automated test scenarios using SmartBear TestComplete, improving test coverage and reducing
                                            repetitive QA cycles.
                                        </li>
                                        <li>
                                            Wrote beginner-level login and registration page using C# scripts in .NET Framework for minor
                                            application tasks, gaining familiarity with backend logic and debugging processes.
                                        </li>
                                        <li>
                                            Handled encryption of user data using RSA cryptosystem.
                                        </li>
                                    </ul>
                                </div>
                            ),
                        },
                        {
                            content: (
                                <div className="pb-4">
                                    <p className="font-semibold text-gray-500">08/2023 - 10/2023</p>
                                    <h1 className="font-bold">ASELSAN</h1>
                                    <h2 className="font-semibold">Intern Software Engineer</h2>
                                    <ul className="list-disc ml-5 mt-2 w-full md:w-4/5">
                                        <li>
                                            Developed automated test scripts using Selenium WebDriver (Python) to validate internal defense-related
                                            software systems.
                                        </li>
                                        <li>
                                            Contributed to a React-based internal web application by implementing basic UI components and improving user
                                            workflows.
                                        </li>
                                        <li>
                                            Collaborated with senior engineers to understand secure development practices and high-reliability system
                                            requirements.
                                        </li>
                                        <li>
                                            Gained hands-on experience in test-automation, frontend development, and software verification in a
                                            large-scale engineering environment.
                                        </li>
                                    </ul>
                                </div>
                            ),
                        }
                    ]}
                />
            </div>
        </div>
    )
}