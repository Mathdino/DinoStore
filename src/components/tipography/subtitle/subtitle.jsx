import styless from './subtitle.module.css'

export default function Subtitle( { children }) {
    return(
        <h2 className={styless.subtitle}>{ children }</h2>
    )
}