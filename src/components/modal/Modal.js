import React, { Component } from 'react'
import Portal from './Portal';

export default class modal extends Component {
  render() {
        const {children, toggleEdit, active} = this.props;
        
    return (
        <Portal>
            {active && (
                <div style={styles.wrapper}>
                    <div style={styles.window}>
                        <button style={styles.closeBtn} onClick={toggleEdit}>Cancelar</button>
                        <div>{children}</div>
                    </div>
                    <div onClick={toggleEdit} style={styles.background}/>
                </div>
            )}
        </Portal>
    )
  }
}

const styles = {
    wrapper: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    window: {
        position: 'relative',
        background: '#fff',
        borderRadius: 5,
        padding: 15,
        boxShadow: '2px 2px 10px rgba(0,0,0,0.3)',
        zIndex: 10,
        minWidth: 320,
        height: '495px',
        width: '35%'
    },
    closeBtn: {
        position: 'absolute',
        top: 0,
        right: 0,
        border: 'none',
        height: '30px',
        width: '80px',
        borderRadius: 2,
        background: 'red',
        color: '#ffffff'
    },
    background: {
        position: 'absolute',
        width: '100%',
        height: '100vh',
        top: 0,
        left: 0,
        background: '#fff',
        opacity: 0.1
    }
}