import './Loading'
const Loading = () => {
    return (
        <div>
            <span>Loading.....</span>
            <div className="spinner-border spinner-border-sm" role="status">
            <span className="text-white"></span>
            </div>
        </div>
    )
}
export default Loading