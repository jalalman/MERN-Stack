import React from 'react';

const Box = (props) => {
    return (
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {props.cols.map((color, index) => (
                <div
                    key={index}
                    style={{
                        backgroundColor: color,
                        width: '20vh',
                        height: '20vh',
                        borderRadius: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        fontSize: '12px',
                        textAlign: 'center',
                        border: '1px solid #ccc'
                    }}
                >
                    {color}
                </div>
            ))}
        </div>
    );
};

export default Box;