import React from 'react';

export function MoveList({ moves }) {
    console.log(moves);

    const getDate = () => {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        return mm + '.' + dd + '.' + yyyy;
        // document.write(today);
    };
    return (
        <section className="move-list">
            {!moves.length ? '' : <h3 className="title">♺ Moves History</h3>}
            {moves.slice(0, 3).map((move) => (
                <div
                    key={move.to._id + Math.random()}
                    className="move-list-item"
                >
                    <h3>To {move.to.name} </h3>
                    <div className="amount">
                        <span className='num'>𝔅 {move.amount} </span> <span className='num'>|</span>
                        <span className="lest">＄{move.amount * 3.3.toFixed()}</span>
                    </div>
                    <h3>
                        <span>status : </span> <span className='approve'>approve</span>
                    </h3>
                    <h3 className='time'>
                        {getDate()} , {move.sentAt}{' '}
                    </h3>
                </div>
            ))}
        </section>
    );
}
