import { Policy } from "../_components"
import policiesData from "../data/policiesData"

const PolicyPage = () => {
    return (
        <div className="policies-container p-4 bg-white">
            <Policy sections={policiesData} />
        </div>
    )
}

export default PolicyPage
