import shapesvg from "../../../assets/shape.svg";

type Props = {
    position: 'left' | 'center' | 'right',
    rotation?: number,
}

export default function Shape({ position, rotation }: Props) {
    const place = {
        'left': {
            left: '-left-250',
            right: '',
        },
        'center': {
            left: 'left-1/2',
            right: ''
        },
        'right': {
            left: '',
            right: 'right-0'
        }
    }

    return (
        <div className={`hidden lg:block absolute ${place[position].left} ${place[position].right} z-[-1] rotate-[${rotation}deg]`}>
            <img src={shapesvg} alt="Shape" />
        </div>
    )
}