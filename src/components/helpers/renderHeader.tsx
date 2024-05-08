import {TypeAnimation} from 'react-type-animation'
import {useInView} from "react-intersection-observer";

export default function renderHeader(message : string, wrapper : any, speed : any) {
    const {ref, inView} = useInView({
        threshold: 0,
    });

    return (
        <div ref={ref}>
            {inView ?
                    <TypeAnimation
                        sequence={[125, '~$ ', message]}
                        wrapper={wrapper}
                        speed={speed}
                        repeat={0}
                        preRenderFirstString={true}
                    />
                    :
                    <h2>~$</h2>
            }
        </div>
    );
}