import policiesData from "../data/policiesData"
import { Section } from "../_components"

function PoliciesPage() {
    return (
        <div className="policies-container">
            {policiesData.map((policy, index) => (
                <Section key={index} title={policy.title} content={policy.content} figures={policy.figure} />
            ))}
        </div>
    )
}

export default PoliciesPage
