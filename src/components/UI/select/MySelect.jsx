import React from 'react'


function MySelect({ options, defaultValue }) {
    return ( 
        <select>
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