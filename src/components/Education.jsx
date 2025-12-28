import { Timeline } from "antd"

export default function Education() {
    return (
        <section id="education" className="flex flex-wrap text-slate-600 scroll-mt-24 ml-10 w-full">
            <h1 className="text-2xl text-blue-600 w-full">Education & Volunteering</h1>
            <div className="flex justify-between w-full flex-wrap">
                <div className="w-full lg:w-1/2 mt-3">
                    <h2>Education</h2>
                    <Timeline
                        mode="start"
                        items={[
                            {
                                content:
                                    <div className="">
                                        <p>08/2020 - 07/2024</p>
                                        <p className="italic">BSc in Software Engineering</p>
                                        <p className="text-slate-900 font-bold">Izmir University of Economics</p>
                                        <ul className="ml-8 list-disc w-4/5">
                                            <li>Graduated 8th/64 with 3.30 GPA</li>
                                            <li>
                                                I ranked 19,176th out of 2.5 million participants in the university entrance
                                                exam, placing in the top 1% and securing a 100% ÖSYS Scholarship.
                                            </li>
                                        </ul>
                                    </div>
                            },
                            {
                                content:
                                    <div className="">
                                        <p>06/2018 - 06/2019</p>
                                        <p className="italic">Highschool Diploma</p>
                                        <p className="text-slate-900 font-bold">Evre Private Science High School</p>
                                    </div>
                            },
                            {
                                content:
                                    <div>
                                        <p>06/2015 - 06/2018</p>
                                        <p className="text-slate-900 font-bold">Içel Anatolian High School</p>
                                    </div>
                            }
                        ]}
                    />
                </div>
                <div id="volunteering" className="w-full lg:w-1/2 scroll-mt-24 mt-3">
                    <h2>Volunteering</h2>
                    <Timeline
                        mode="start"
                        items={[
                            {
                                content:
                                    <div className="">
                                        <p>11/2021 - 08/2023</p>
                                        <p className="italic">Network Member</p>
                                        <p className="text-slate-900 font-bold">Erasmus Student Network IUE</p>
                                    </div>
                            },
                            {
                                content:
                                    <div className="">
                                        <p>08/2023 - 08/2024</p>
                                        <p className="italic">Web Projects Administrator</p>
                                        <p className="text-slate-900 font-bold">Erasmus Student Network IUE</p>
                                    </div>
                            },
                            {
                                color: 'green',
                                content:
                                    <div className="">
                                        <p>10/2023</p>
                                        <p className="italic">Represented ESN IUE and ESN Turkey</p>
                                        <p className="text-slate-900 font-bold">SEEP Athens '23 (Erasmus Student Network)</p>
                                    </div>
                            },
                            {
                                color: 'green',
                                content:
                                    <div className="">
                                        <p>11/2023</p>
                                        <p className="italic">Represented ESN IUE</p>
                                        <p className="text-slate-900 font-bold">NA Ancyra '23 (Erasmus Student Network)</p>
                                    </div>
                            },
                            {
                                content:
                                    <div>
                                        <p>08/2024 - 08/2025</p>
                                        <p className="italic">Local Representative</p>
                                        <p className="text-slate-900 font-bold">Erasmus Student Network IUE</p>
                                    </div>
                            },
                            {
                                color: 'green',
                                content:
                                    <div className="">
                                        <p>01/2024</p>
                                        <p className="italic">Participant</p>
                                        <p className="text-slate-900 font-bold">ESN 101 İzmir</p>
                                    </div>
                            }
                        ]}
                    />
                </div>
            </div>
        </section>
    )
}
