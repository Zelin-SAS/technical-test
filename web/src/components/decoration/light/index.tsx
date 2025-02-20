type Props = {
    colors: string[2],
    position: 'left' | 'center' | 'right',
    rotation?: number,
}

export default function index({ colors, position, rotation }: Props) {
    const place = {
        'left': {
            top: '-top-40',
            smTop: '-top-80',
            left: 'left-[calc(50%-11rem)]',
            smLeft: 'sm:left-[calc(50%-30rem)]',
        },
        'center': {
            top: 'top-0',
            smTop: 'sm:top-0',
            left: 'left-1/2',
            smLeft: 'sm:left-1/2',
        },
        'right': {
            top: 'top-0',
            smTop: 'sm:top-0',
            left: 'right-0',
            smLeft: 'sm:right-0',
        }
    }
  return (
    <div
        aria-hidden="true"
        className={`absolute inset-x-0 ${place[position].top} -z-10 transform-gpu overflow-hidden blur-3xl sm:${place[position].smTop}`}
    >
        <div
        style={{
            clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
        }}
        className={`relative ${place[position].left} aspect-1155/678 w-[36.125rem] -translate-x-1/2 ${rotation && `rotate-[${rotation}deg]`} bg-linear-to-tr from-[${colors[0]}] to-[${colors[1]}] opacity-30 ${place[position].smLeft} sm:w-[72.1875rem]`}
        />
    </div>
  )
}