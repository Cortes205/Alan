import {TypeAnimation} from "react-type-animation"
import {useInView} from "react-intersection-observer"

export default function renderHeader(message, wrapper, speed, repeat) {
    const {ref, inView} = useInView({
        threshold: 0,
    })

    let sequence = [125, "~$ "]
    for (let index = 0; index < message.length; index++) {
        sequence.push("~$ " + message[index])
        sequence.push(2000)
    }

    return (
        <div ref={ref}>
            {inView ?
                    <TypeAnimation
                        sequence={sequence}
                        wrapper={wrapper}
                        speed={speed}
                        repeat={repeat}
                        preRenderFirstString={true}
                    />
                    :
                    <h2>~$</h2>
            }
        </div>
    )
}