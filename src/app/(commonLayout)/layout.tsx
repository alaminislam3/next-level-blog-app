import { Navbar } from "@/components/navbar"

export default function CommonLayout ({children} : {children :React.ReactNode}){
    return (
        <div>
            <Navbar/>
            <h2>This is Common layout page</h2>

            {children}
        </div>
    )
}