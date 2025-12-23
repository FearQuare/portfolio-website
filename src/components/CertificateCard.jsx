import { Card, Button } from "antd"

export default function CertificateCard({title, image, givenBy, issueDate, credentialId, certLink}) {
    return (
        <Card title={title} className="w-90">
            <div className="flex flex-col flex-wrap">
                <div className="flex">
                    {image}
                    <div className="ml-2 mb-2 min-h-22">
                        <p className="font-bold">{givenBy}</p>
                        <p className="text-slate-500">Issued {issueDate}</p>
                        {credentialId ? <p className="text-slate-500">Credential ID {credentialId}</p> : ''}
                    </div>
                </div>
                <div className="flex justify-center border-t text-slate-200 w-full">
                    <Button href={certLink} target='_blank' className="mt-3">Go to Certificate</Button>
                </div>
            </div>
        </Card>
    )
}