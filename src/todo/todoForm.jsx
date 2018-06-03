import React from 'react'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => {
    const keyHandler = (e) =>{
        if(e.key === 'Enter'){
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        }else if(e.key === 'Escape'){
            props.handleClear()
        }
    }
    return (
        <div role='form' className="todoForm">
            <Grid cols="12 9 10">
                <input type="text" className="form-control"
                    id="description" placeholder="Adicione uma tarefa"
                    value={props.description} onChange={props.handleChange} onKeyUp={keyHandler} />
            </Grid>

            <Grid cols="12 3 2">
                <IconButton style="primary" icon="plus" hide={false} onClick={props.handleAdd} />
                <IconButton style="info" icon="search" hide={false} onClick={props.handleSearch} />
                <IconButton style="default" icon="close" hide={false} onClick={props.handleClear} />
            </Grid>
        </div>
    )
}