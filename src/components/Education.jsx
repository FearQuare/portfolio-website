import { Timeline } from "antd"

export default function Education() {
    return (
        <section id="education" className="flex flex-wrap ml-10 text-slate-600 mt-5 w-9/10 scroll-mt-24">
            <h1 className="text-2xl text-blue-600 mb-3 w-9/10">Education & Volunteering</h1>
            <div className="flex w-9/10 justify-between">
                <div className="w-1/2">
                    <h2>Education</h2>
                    <Timeline
                        mode="start"
                        items={[
                            {
                                content:
                                    <div className="mb-10">
                                        <p>08/2020 - 07/2024</p>
                                        <p className="italic">BSc in Software Engineering</p>
                                        <p className="text-slate-900 font-bold">İzmir University of Economics</p>
                                    </div>
                            },
                            {
                                content:
                                    <div className="mb-10">
                                        <p>06/2018 - 06/2019</p>
                                        <p className="italic">Highschool Diploma</p>
                                        <p className="text-slate-900 font-bold">Evre Private Science Highschool</p>
                                    </div>
                            },
                            {
                                content:
                                    <div>
                                        <p>06/2015 - 06/2018</p>
                                        <p className="text-slate-900 font-bold">İçel Anatolian Highschool</p>
                                    </div>
                            }
                        ]}
                    />
                </div>
                <div id="volunteering" className="w-1/2 scroll-mt-24">
                    <h2>Volunteering</h2>
                    <Timeline
                        mode="start"
                        items={[
                            {
                                content:
                                    <div className="mb-10">
                                        <p>11/2021 - 08/2023</p>
                                        <p className="italic">Network Member</p>
                                        <p className="text-slate-900 font-bold">Erasmus Student Network IUE</p>
                                    </div>
                            },
                            {
                                content:
                                    <div className="mb-10">
                                        <p>08/2023 - 08/2024</p>
                                        <p className="italic">Web Projects Administrator</p>
                                        <p className="text-slate-900 font-bold">Erasmus Student Network IUE</p>
                                    </div>
                            },
                            {
                                color: 'green',
                                content:
                                    <div className="mb-10">
                                        <p>10/2023</p>
                                        <p className="italic">Represented ESN IUE and ESN Turkey</p>
                                        <p className="text-slate-900 font-bold">SEEP Athens '23 (Erasmus Student Network)</p>
                                    </div>
                            },
                            {
                                color: 'green',
                                content:
                                    <div className="mb-10">
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
                                    <div className="mb-10">
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
