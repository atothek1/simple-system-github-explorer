interface ArrowIconProps {
    readonly width?: string;
    readonly rotation?: `${ string }deg`;
}
export function ArrowIcon( props: ArrowIconProps ){
    const { width = "24px", rotation = "" } = props;
    const styles = rotation !== "" ? { 
        transform: `rotate(${ rotation })`,
        transition: "transform .1s ease-in", 
    }: {};
    return ( 
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width={ width } viewBox="0 0 960 560" enableBackground="new 0 0 960 560" xmlSpace="preserve" style={ styles }>
            <g>
                <path d="M480,344.181L268.869,131.889c-15.756-15.859-41.3-15.859-57.054,0c-15.754,15.857-15.754,41.57,0,57.431l237.632,238.937
		c8.395,8.451,19.562,12.254,30.553,11.698c10.993,0.556,22.159-3.247,30.555-11.698l237.631-238.937
		c15.756-15.86,15.756-41.571,0-57.431s-41.299-15.859-57.051,0L480,344.181z"/>
            </g>
        </svg> 
    );
}
