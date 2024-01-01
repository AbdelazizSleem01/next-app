export  const metadata = {
    title: 'Articles Page',
}


export default function ({ children }) {
    return (
        <div>
            <h1 className="text-center">all article page</h1>
            <div style={{ margin: "50px", padding: "20px", background: "white", width: "auto", borderRadius: "15px", color: "black", textAlign: "center" }}>
                {children}
            </div>
        </div>
    )
}