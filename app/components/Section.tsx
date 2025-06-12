export const Section = (props: {
    title: string
    remove_top_padding?: boolean
    className?: string
    children?: any
}) => {
    return <div className={`${props.remove_top_padding === true ? "" : "pt-12"} pb-8 ${props.className}`}>
        <div className="section-title text-3xl font-light text-teal-500 mb-4">{props.title}</div>
        {
            props.children
        }
    </div>
}