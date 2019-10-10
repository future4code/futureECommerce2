import React, { Component } from 'react'

export default class FiltroOrdenador extends Component {
    render() {
        return (
            <div>
                <select>
                    <option value="pd">Preço decrescente</option>
                    <option value="pc">Preço crescente</option>
                </select>
            </div>
        )
    }
}
