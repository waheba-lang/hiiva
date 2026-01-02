export default function AppPrinpaleLayout(){
    return(
        <div>
            <Routes>
                <Routes path="/" element={<Layout/>}/>
                <Routes index element={<Home/>}/>
                <Routes path="blogs" element={<Blogs/>}/>
                <Routes path="contact" element={<contact/>}/>
                <Routes path="*" element={<ErrorPage/>}/>
                
            </Routes>
        </div>
    )
}