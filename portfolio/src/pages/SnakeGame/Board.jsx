
const Board = ({state}) => {
    const { width = 0, height = 0, snake = []} = state;
    const {blockWidth = 0, blockHeight = 0} = state;

    return (
        <div
            style={{
                width,
                height,
                borderWidth: width / 50,
                background: "yellow"
            }}>
            {snake.map( (snakePart, index) => 
                <div 
                    key={index}
                    className="Block"
                    style={{
                        width: blockWidth,
                        height: blockHeight,
                        left: snakePart.x,
                        right: snakePart.y,
                        background: 'black'
                    }}
                />
            )}
        </div>
    )
}

export default Board