import { Section } from "../_components"
import policiesData from "../data/policiesData"

export default function Policies() {
    return (
        <div>
            {policiesData.map((policy, index) => (
                <Section key={index} title={policy.title} content={policy.content} figures={policy.figures} />
            ))}
        </div>
    )
}
