export default function aboutLayout ({children}: {children : React.ReactNode}){
    return (
        <div>
            <h1>This is about page layoput</h1>
            <h2>{children}</h2>
        </div>
    )
}