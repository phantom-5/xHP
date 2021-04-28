import './Loading'
const Loading = () => {
    return (
        <div>
            <span>Loading.....</span>
            <div className="spinner-border spinner-border-sm" role="status">
            <span className="text-white"></span>
            </div>
            <br/>
            <span className='badge-pill badge-dark' style={{'font-size':'1rem'}}>Fetching at {window.navigator.connection.downlink}&nbsp;Mbps</span>
        </div>
    )
}
export default Loading