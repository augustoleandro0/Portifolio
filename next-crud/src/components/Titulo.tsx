const Titulo = function (props) {
    return (
        <div className="flex flex-col justify-center">
            <h1 className="px-5 py-2">
                {props.children}
            </h1>
            <hr className="border-2 bg-purple-400"/>
        </div>
    )
}

export default Titulo