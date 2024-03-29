import React from 'react'


function MySelect({ options, defaultValue, value, onChange }) {
    return ( 
        <select
            value={value}
            onChange={event => onChange(event.target.value)}
        >
            <option value="" key="" disabled>{defaultValue}</option>

            { options.map(opt => 
                <option value={opt.value} key={opt.value}>
                    { opt.name }
                </option>
            ) }
            
        </select>
    );
}

export default MySelect