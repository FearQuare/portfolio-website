import { Divider } from "antd"
import CertificateCard from "./CertificateCard"
export default function Certificates() {
    return (
        <div id="certificates" className="flex flex-wrap flex-col text-slate-700 w-10/10 scroll-mt-24 bg-linear-to-b from-violet-400 to-slate-100">
            <h1 className="text-2xl mb-3 mt-3 w-full text-slate-100 text-center">Certificates</h1>
            <Divider titlePlacement="center">Technical Certifiates</Divider>
            <div className="flex flex-wrap w-full justify-center mt-2 gap-3">
                <CertificateCard
                    title="Foundational C# with Microsoft"
                    image={<img src="freecodecamp.svg" alt="freecodecamp" className="w-15 border-r text-slate-200 pr-2" />}
                    givenBy="freeCodeCamp"
                    issueDate="Jul 2024"
                    credentialId="fearquare-fcswm"
                    certLink="https://www.freecodecamp.org/certification/fearquare/foundational-c-sharp-with-microsoft"
                />
                <CertificateCard
                    title="The Git & Github Bootcamp"
                    image={<img src="udemy.svg" alt="udemy" className="w-8 border-r m-2 text-slate-200 pr-2" />}
                    givenBy="Udemy"
                    issueDate="Jul 2023"
                    credentialId="UC-5cbbcde5-ced4-42e9-9f0a-a5b2379a0d3a"
                    certLink="https://www.udemy.com/certificate/UC-5cbbcde5-ced4-42e9-9f0a-a5b2379a0d3a/"
                />
                <CertificateCard
                    title="Google Cloud Digital Leader Training Specialization"
                    image={<img src="coursera.svg" alt="coursera" className="w-15 border-r text-slate-200 pr-2" />}
                    givenBy="Coursera"
                    issueDate="Oct 2021"
                    credentialId="RHGKFVU2BHXB"
                    certLink="https://www.coursera.org/account/accomplishments/specialization/certificate/RHGKFVU2BHXB"
                />
            </div>
            <Divider titlePlacement="center">Volunteering Certifiates</Divider>
            <div className="flex flex-wrap w-full justify-center mt-2 gap-3">
                <CertificateCard
                    title="Local Board Training"
                    image={<img src="esn.png" alt="Erasmus Student Network" className="w-16 object-contain border-r text-slate-200 pr-2" />}
                    givenBy="Erasmus Student Network"
                    issueDate="Sep 2023"
                    certLink="https://drive.google.com/file/d/1JDpxol_bSllJ6sKs8-Z6KMEq_tOPFMLN/view?usp=sharing"
                />
                <CertificateCard
                    title="SEEP Athens '23"
                    image={<img src="esn.png" alt="Erasmus Student Network" className="w-16 object-contain border-r text-slate-200 pr-2" />}
                    givenBy="Erasmus Student Network"
                    issueDate="Oct 2023"
                    certLink="https://drive.google.com/file/d/11Wf1P-pj-D2Y3X1dHFqpzaAkWSjfdzja/view?usp=sharing"
                />
                <CertificateCard
                    title="ESN 101"
                    image={<img src="esn.png" alt="Erasmus Student Network" className="w-16 object-contain border-r text-slate-200 pr-2" />}
                    givenBy="Erasmus Student Network"
                    issueDate="Feb 2024"
                    certLink="https://drive.google.com/file/d/1SVPfMqguteL1GVZ0mmyTlc_EFHcy0ULr/view?usp=sharing"
                />
            </div>
        </div>
    )
}